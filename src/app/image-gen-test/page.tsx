
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { generateImageAction } from '@/app/actions';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export default function ImageGenTestPage() {
  const [prompt, setPrompt] = useState('A futuristic software development dashboard');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    setImageUrl(null);
    setError(null);

    try {
      const result = await generateImageAction(prompt);
      setImageUrl(result);
    } catch (err) {
      setError('Failed to generate image. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Image Generation Test</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="prompt" className="block text-sm font-medium text-foreground/80 mb-2">
                  Image Prompt
                </label>
                <Input
                  id="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Enter a description for the image..."
                  disabled={isLoading}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Generate Image
              </Button>
            </form>

            {error && <p className="mt-4 text-center text-destructive">{error}</p>}

            <div className="mt-8 aspect-video w-full">
              {isLoading && <Skeleton className="w-full h-full rounded-lg" />}
              {imageUrl && !isLoading && (
                <div className="relative w-full h-full">
                  <Image
                    src={imageUrl}
                    alt="Generated image"
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
              )}
               {!imageUrl && !isLoading && (
                <div className="flex items-center justify-center h-full bg-muted rounded-lg">
                    <p className="text-muted-foreground">Image will appear here</p>
                </div>
                )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
