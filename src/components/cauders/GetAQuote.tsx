'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import GradientContainer from './GradientContainer';
import ScrollFadeIn from './ScrollFadeIn';

export default function GetAQuote() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <GradientContainer className="rounded-3xl p-8 md:p-16 text-center text-background relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="code" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M 25 15 L 5 50 L 25 85 M 75 15 L 95 50 L 75 85" stroke="currentColor" strokeWidth="3" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#code)" />
                </svg>
            </div>
            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold font-headline">
                    Get A Quote Lorem Ipsum
                    <br />
                    Dolor Sit Amet Dolor Sit
                </h2>
                <p className="mt-4 text-sm md:text-base text-background/80 max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <form className="mt-8 max-w-md mx-auto">
                    <div className="relative flex items-center">
                        <Input
                            type="email"
                            placeholder="Enter Your Email"
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/70 rounded-full h-12 px-6 focus-visible:ring-white/50 w-full"
                        />
                        <Button type="submit" size="icon" className="absolute right-1.5 bg-white text-foreground hover:bg-gray-200 rounded-full w-9 h-9">
                            <ArrowRight />
                        </Button>
                    </div>
                </form>
            </div>
          </GradientContainer>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
