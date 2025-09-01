
'use server';
/**
 * @fileOverview A chatbot flow that answers questions about the company.
 */

import {ai} from '@/ai/genkit';
import {getProjects, getServices} from '@/lib/data';
import {generate} from 'genkit';
import {z} from 'zod';

// Define the schema for a single message in the chat history
const MessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.array(z.object({
      text: z.string()
  }))
});

// Define the input schema for the main chat function
export const ChatInputSchema = z.object({
  history: z.array(MessageSchema),
  message: z.string(),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

export async function chat(input: ChatInput): Promise<string> {
  const projects = getProjects().map(p => ({title: p.title, description: p.description, tags: p.tags}));
  const services = getServices().map(s => ({title: s.title, description: s.description, included: s.included}));
  
  // Construct the full chat history
  const history = [
    ...input.history,
    { role: 'user', content: [{ text: input.message }] },
  ];

  const result = await generate({
    model: 'googleai/gemini-1.5-flash',
    prompt: `
      You are a helpful and friendly chatbot for a company called Cauders.
      Your goal is to answer questions about the company, its services, and its projects based ONLY on the information provided below.
      You should be professional and concise in your responses.
      If a question is not related to Cauders, its projects, or its services, politely decline to answer. Do not answer any other questions.

      Here is information about the company's services:
      ${JSON.stringify(services, null, 2)}

      Here is information about the company's projects:
      ${JSON.stringify(projects, null, 2)}
    `,
    history: history,
  });

  return result.text;
}
