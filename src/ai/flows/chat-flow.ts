
'use server';
/**
 * @fileOverview A chatbot flow that answers questions about the company.
 */

import {ai} from '@/ai/genkit';
import {getProjects, getServices} from '@/lib/data';
import {z} from 'genkit';

const ChatInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.array(z.object({
        text: z.string()
    }))
  })),
  message: z.string(),
});

export type ChatInput = z.infer<typeof ChatInputSchema>;

export async function chat(input: ChatInput): Promise<string> {
  const projects = getProjects().map(p => ({title: p.title, description: p.description, tags: p.tags}));
  const services = getServices().map(s => ({title: s.title, description: s.description, included: s.included}));

  const result = await ai.generate({
    prompt: `
      You are a helpful and friendly chatbot for a company called Cauders.
      Your goal is to answer questions about the company, its services, and its projects.
      You should be professional and concise in your responses.
      If a question is not related to Cauders, its projects, or its services, politely decline to answer.

      Here is the existing conversation history:
      ${JSON.stringify(input.history, null, 2)}

      Here is information about the company's services:
      ${JSON.stringify(services, null, 2)}

      Here is information about the company's projects:
      ${JSON.stringify(projects, null, 2)}
      
      Based on all this information, please answer the following user message.
    `,
    history: input.history,
    input: { text: input.message },
  });

  return result.text;
}
