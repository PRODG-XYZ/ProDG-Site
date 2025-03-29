"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  toggleOpen?: () => void;
  className?: string;
}

export function AccordionItem({
  title,
  children,
  isOpen = false,
  toggleOpen,
  className,
}: AccordionItemProps) {
  const [open, setOpen] = useState(isOpen);
  
  const handleToggle = () => {
    if (toggleOpen) {
      toggleOpen();
    } else {
      setOpen(!open);
    }
  };

  const currentOpen = toggleOpen ? isOpen : open;

  return (
    <div className={cn("border-b border-neutral-200", className)}>
      <button
        onClick={handleToggle}
        className="flex w-full items-center justify-between py-4 text-left text-lg font-medium text-neutral-900 focus:outline-none"
      >
        <span>{title}</span>
        <motion.span
          animate={{ rotate: currentOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-6 flex-shrink-0"
        >
          <ChevronDownIcon className="h-5 w-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {currentOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: Array<{
    title: string;
    content: React.ReactNode;
  }>;
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({
  items,
  allowMultiple = false,
  className,
}: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>(
    allowMultiple ? [] : [0]
  );

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev[0] === index ? [] : [index]));
    }
  };

  return (
    <div className={cn("divide-y divide-neutral-200 rounded-lg", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndexes.includes(index)}
          toggleOpen={() => toggleItem(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
} 