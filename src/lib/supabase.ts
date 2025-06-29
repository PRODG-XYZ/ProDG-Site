// Supabase client utility

import { createClient } from '@supabase/supabase-js'

// Environment variable validation
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Please check your .env.local file.')
}

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  supabaseUrl || '',
  supabaseAnonKey || ''
)

// Contact form interface for type safety
interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  budget?: string;
}

/**
 * Submits contact form data to Supabase
 * @param formData - Contact form data including name, email, company, phone, message, budget
 * @returns Object with success status and message/error
 */
export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return {
        success: false,
        error: 'Name, email, and message are required fields'
      }
    }

    // Insert data into Supabase
    const { error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          phone: formData.phone || null,
          message: formData.message,
          budget: formData.budget || null,
          created_at: new Date().toISOString()
        }
      ])

    if (error) {
      console.error('Error submitting to Supabase:', error)
      return {
        success: false,
        error: 'Failed to submit your message. Please try again later.'
      }
    }

    return {
      success: true,
      message: 'Your message has been sent successfully!'
    }
  } catch (error) {
    console.error('Unexpected error during form submission:', error)
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again later.'
    }
  }
} 