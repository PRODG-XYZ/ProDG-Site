'use server';

import { submitContactForm } from '@/lib/supabase';

export async function submitContactFormAction(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    const budget = formData.get('budget') as string;

    // Validate required fields
    if (!name || !email || !message) {
      return { success: false, error: 'Name, email, and message are required fields' };
    }

    // Submit the form data to Supabase
    const result = await submitContactForm({
      name,
      email,
      company,
      phone,
      message,
      budget,
    });

    if (!result.success) {
      return { success: false, error: 'Failed to submit your message. Please try again later.' };
    }

    return { success: true, message: 'Your message has been sent successfully!' };
  } catch (error) {
    console.error('Error in contact form action:', error);
    return { success: false, error: 'An unexpected error occurred. Please try again later.' };
  }
} 