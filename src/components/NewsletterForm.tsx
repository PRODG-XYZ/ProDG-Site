'use client';

import { useState } from 'react';
import { subscribeToNewsletter } from '@/app/actions/newsletter';

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  );
}

export function NewsletterForm() {
  const [formState, setFormState] = useState<{
    pending: boolean;
    success: boolean;
    message: string | null;
    error: string | null;
  }>({
    pending: false,
    success: false,
    message: null,
    error: null,
  });

  async function handleSubmit(formData: FormData) {
    setFormState({ pending: true, success: false, message: null, error: null });
    
    try {
      const result = await subscribeToNewsletter(formData);
      
      if (result.success) {
        setFormState({ 
          pending: false, 
          success: true, 
          message: result.message || "Thank you for subscribing to our newsletter!", 
          error: null 
        });
        // Reset form
        const form = document.getElementById('newsletterForm') as HTMLFormElement;
        form?.reset();
      } else {
        setFormState({ 
          pending: false, 
          success: false, 
          message: null,
          error: result.error || 'Failed to subscribe. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormState({ 
        pending: false, 
        success: false, 
        message: null,
        error: 'An unexpected error occurred. Please try again.' 
      });
    }
  }

  return (
    <form id="newsletterForm" className="max-w-sm" action={handleSubmit}>
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Sign up for our newsletter
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Subscribe to get the latest design news, articles, resources and
        inspiration.
      </p>
      
      {formState.success && (
        <div className="mt-6 rounded-lg bg-green-50 p-4 text-sm text-green-800">
          <p>{formState.message}</p>
        </div>
      )}
      
      {formState.error && (
        <div className="mt-6 rounded-lg bg-red-50 p-4 text-sm text-red-800">
          <p>{formState.error}</p>
        </div>
      )}

      <div className="relative mt-6">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          required
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            disabled={formState.pending}
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800 disabled:opacity-70"
          >
            {formState.pending ? (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : (
              <ArrowIcon className="w-4" />
            )}
          </button>
        </div>
      </div>
    </form>
  );
} 