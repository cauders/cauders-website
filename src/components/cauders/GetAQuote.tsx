
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
          <GradientContainer className="rounded-3xl py-24 md:py-32 px-12 text-center text-background relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-headline font-semibold">
                    Have a project in mind? <br/> Let's Get to Work
                </h2>
                <p className="mt-4 text-sm md:text-base text-background/80 max-w-2xl mx-auto">
                    We're here to help you turn your vision into reality. Whether you have a detailed plan or just a spark of an idea, our team is ready to listen and collaborate with you.
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
