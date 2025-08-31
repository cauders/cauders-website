
'use server';
/**
 * @fileOverview A flow for generating images from text prompts.
 *
 * - generateImage - A function that handles the image generation process.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ImageGenerationInputSchema = z.string().describe('A text prompt describing the image to generate.');
export type ImageGenerationInput = z.infer<typeof ImageGenerationInputSchema>;

export async function generateImage(prompt: ImageGenerationInput): Promise<string> {
  return generateImageFlow(prompt);
}

const generateImageFlow = ai.defineFlow(
  {
    name: 'generateImageFlow',
    inputSchema: ImageGenerationInputSchema,
    outputSchema: z.string(),
  },
  async (prompt) => {
    const { media } = await ai.generate({
        model: 'googleai/imagen-4.0-fast-generate-001',
        prompt: `Generate a high-quality, professional, and visually appealing image suitable for a corporate portfolio website. The image should be tech-related, clean, and modern. Prompt: ${prompt}`,
    });

    if (!media.url) {
      throw new Error('Image generation failed to produce a URL.');
    }
    
    return media.url;
  }
);
