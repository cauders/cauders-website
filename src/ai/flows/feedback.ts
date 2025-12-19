
'use server';

/**
 * @fileOverview A flow to handle feedback form submissions.
 *
 * - submitFeedback - A function that handles the feedback form submission process.
 * - FeedbackFormInput - The input type for the submitFeedback function.
 * - FeedbackFormOutput - The return type for the submitFeedback function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const FeedbackFormInputSchema = z.object({
  name: z.string().describe("The user's name."),
  email: z.string().email().describe("The user's email."),
  type: z.enum(["bug", "suggestion", "praise", "other"]).describe("The type of feedback."),
  message: z.string().describe("The feedback message."),
  file: z.any().optional().describe("An optional file attachment (e.g., screenshot)."),
});
export type FeedbackFormInput = z.infer<typeof FeedbackFormInputSchema>;

const FeedbackFormOutputSchema = z.object({
  status: z.string().describe('The status of the submission (e.g., "received").'),
});
export type FeedbackFormOutput = z.infer<typeof FeedbackFormOutputSchema>;

export async function submitFeedback(input: FeedbackFormInput): Promise<FeedbackFormOutput> {
  return feedbackFlow(input);
}

const feedbackFlow = ai.defineFlow(
  {
    name: 'feedbackFlow',
    inputSchema: FeedbackFormInputSchema,
    outputSchema: FeedbackFormOutputSchema,
  },
  async (input) => {
    // In a real application, you would:
    // 1. Save the feedback to a database.
    // 2. If a file is attached, upload it to a storage service (like Firebase Storage).
    // 3. Send a notification to the relevant team.
    
    console.log('New feedback submission received:', input);
    
    // If there's a file, you might handle it like this:
    if (input.file) {
      console.log('Handling file attachment:', input.file.name, input.file.type);
      // Here you would add code to upload the file.
    }

    return {
      status: 'received',
    };
  }
);
