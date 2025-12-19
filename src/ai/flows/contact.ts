
'use server';

/**
 * @fileOverview A flow to handle contact form submissions.
 *
 * - submitContact - A function that handles the contact form submission process.
 * - ContactFormInput - The input type for the submitContact function.
 * - ContactFormOutput - The return type for the submitContact function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const ContactFormInputSchema = z.object({
  name: z.string().describe('The name of the person submitting the form.'),
  email: z.string().email().describe('The email address of the person.'),
  message: z.string().describe('The message content.'),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

const ContactFormOutputSchema = z.object({
  status: z.string().describe('The status of the submission (e.g., "received").'),
});
export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;

// Exported wrapper function
export async function submitContact(input: ContactFormInput): Promise<ContactFormOutput> {
  return contactFlow(input);
}

// Genkit flow definition
const contactFlow = ai.defineFlow(
  {
    name: 'contactFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: ContactFormOutputSchema,
  },
  async (input) => {
    // In a real application, you would add logic here to:
    // 1. Save the submission to a database (e.g., Firestore).
    // 2. Send an email notification.
    // For now, we'll just log it to the server console.
    console.log('New contact form submission received:', input);

    // You could also use an LLM to categorize the message, for example.
    
    return {
      status: 'received',
    };
  }
);
