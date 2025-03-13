'use server';

import { supabase } from '@/lib/supabase';

/**
 * Handles newsletter subscription requests
 * @param formData Form data containing the email address
 * @returns Object indicating success or failure with a message
 */
export async function subscribeToNewsletter(formData: FormData) {
  try {
    const email = formData.get('email') as string;

    // Validate email
    if (!email) {
      return { 
        success: false, 
        error: 'Email address is required.' 
      };
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { 
        success: false, 
        error: 'Please enter a valid email address.' 
      };
    }

    // Check if email already exists
    const { data: existingSubscriber } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .eq('email', email)
      .single();

    if (existingSubscriber) {
      return { 
        success: true, 
        message: 'You are already subscribed to our newsletter!' 
      };
    }

    // Insert new subscriber
    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert([
        { 
          email,
          subscribed_at: new Date().toISOString()
        }
      ]);

    if (error) {
      console.error('Error subscribing to newsletter:', error);
      return { 
        success: false, 
        error: 'Failed to subscribe. Please try again later.' 
      };
    }

    return { 
      success: true, 
      message: 'Thank you for subscribing to our newsletter!' 
    };
  } catch (error) {
    console.error('Unexpected error during newsletter subscription:', error);
    return { 
      success: false, 
      error: 'An unexpected error occurred. Please try again later.' 
    };
  }
} 