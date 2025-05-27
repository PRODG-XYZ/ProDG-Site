'use client';

import Image from 'next/image';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';

interface ClientLogo {
  name: string;
  id: number;
  src: StaticImageData;
}

interface ClientLogosProps {
  logos: ClientLogo[];
  layout?: 'grid' | 'scroll';
}

export function ClientLogosDisplay({ logos, layout = 'grid' }: ClientLogosProps) {
  if (layout === 'scroll') {
    return (
      <div className="relative overflow-hidden py-6 px-4">
        {/* Left gradient mask */}
        <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-neutral-950 to-transparent"></div>
        
        {/* Right gradient mask */}
        <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-neutral-950 to-transparent"></div>
        
        {/* Scrolling content */}
        <div className="marquee-container">
          <div className="marquee">
            {/* First copy of logos */}
            {logos.map((logo) => (
              <div key={`scroll-1-${logo.id}`} className="mx-8 flex items-center justify-center flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  className="h-14 w-auto max-w-[180px] object-contain"
                  width={160}
                  height={56}
                  unoptimized
                />
              </div>
            ))}
            
            {/* Second copy of logos for seamless looping */}
            {logos.map((logo) => (
              <div key={`scroll-2-${logo.id}`} className="mx-8 flex items-center justify-center flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  className="h-14 w-auto max-w-[180px] object-contain"
                  width={160}
                  height={56}
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
        
        <style jsx global>{`
          .marquee-container {
            width: 100%;
            overflow: hidden;
            position: relative;
          }
          
          .marquee {
            display: flex;
            width: max-content;
            animation: scroll 35s linear infinite;
          }
          
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .marquee-container:hover .marquee {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    );
  }

  return (
    <ProgressiveBlur 
      direction="bottom" 
      blurLayers={6} 
      blurIntensity={0.4}
      className="py-6 px-4"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
        {logos.map((logo) => (
          <div key={logo.id} className="flex items-center justify-center">
            <Image
              src={logo.src}
              alt={logo.name}
              className="h-12 w-auto max-h-[60px] object-contain"
              width={100}
              height={40}
              unoptimized
            />
          </div>
        ))}
      </div>
    </ProgressiveBlur>
  );
} 