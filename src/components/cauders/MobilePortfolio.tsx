
'use client';

import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import ScrollFadeIn from './ScrollFadeIn';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import placeholderImages from '@/lib/placeholder-images.json';
import { cn } from '@/lib/utils';
import StandardizedHeading from './StandardizedHeading';

export default function MobilePortfolio() {
  return (
    <section className="bg-background text-foreground py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <div className="text-center max-w-4xl mx-auto">
            <StandardizedHeading lines={["Let Cauders Simplify Your Workflow"]} className="text-3xl sm:text-4xl md:text-5xl font-medium" />
            <p className="mt-4 text-sm text-foreground/70">
              We design and develop intuitive mobile applications that consolidate your tools and streamline your processes.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="relative mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="min-h-[450px] bg-card rounded-2xl grid grid-rows-2 overflow-hidden">
              <div className="bg-gradient-container rounded-t-2xl p-6">
                {/* Content for gradient section will go here */}
              </div>
              <div className="relative flex items-center justify-center p-6">
                <Image
                  src={placeholderImages.mobilePortfolio.screen1.imageUrl}
                  alt="Mobile App Profile Screen"
                  width={200}
                  height={400}
                  className="object-contain"
                  data-ai-hint={placeholderImages.mobilePortfolio.screen1.aiHint}
                />
              </div>
            </div>
            <div className="min-h-[300px] bg-card rounded-2xl"></div>
            <div className="min-h-[300px] bg-card rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
