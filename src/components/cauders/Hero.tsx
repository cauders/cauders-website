
"use client"
import { Suspense } from 'react';
import { Skeleton } from '../ui/skeleton';
import HeroBackground from './HeroBackground';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Image from 'next/image';

export default function Hero() {
  const headingLine1_part1 = "Where Technology";
  const headingLine1_part2 = "Meets Vision";
  const headingLine2 = "and Ideas Become Impact";
  const words1_part1 = headingLine1_part1.split(" ");
  const words1_part2 = headingLine1_part2.split(" ");
  const words2 = headingLine2.split(" ");

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<Skeleton className="w-full h-full" />}>
          <HeroBackground />
        </Suspense>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center h-full gap-8">
          {/* Left Column */}
          <div className="w-full text-left">
            <div>
              <h1 className="font-bold tracking-tight text-white mt-2 leading-snug font-headline">
                <div className="text-6xl md:text-7xl">
                  {words1_part1.map((word, wordIndex) => (
                    <span key={wordIndex} className="animated-gradient-text">
                      {word}{' '}
                    </span>
                  ))}
                </div>
                <div className="text-6xl md:text-7xl">
                  {words1_part2.map((word, wordIndex) => (
                    <span key={wordIndex} className="animated-gradient-text">
                      {word}{' '}
                    </span>
                  ))}
                </div>
                <div className="text-4xl md:text-5xl text-white/80 mt-4 font-normal">
                  {words2.map((word, wordIndex) => (
                    <span key={wordIndex} className="animated-gradient-text">
                      {word}{' '}
                    </span>
                  ))}
                </div>
              </h1>
              <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                <form className="flex items-center gap-2 max-w-md bg-white rounded-full">
                  <Input
                    type="email"
                    placeholder="email@address.com"
                    className="border-0 text-foreground placeholder:text-foreground/70 focus-visible:ring-0 focus-visible:ring-offset-0 flex-grow bg-transparent rounded-l-full h-full py-2.5 pl-6"
                  />
                  <button type="submit" className="bg-primary hover:bg-foreground hover:text-primary text-white rounded-full px-8 h-11 text-sm font-medium transition-colors duration-300">
                    Get a Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="hidden md:flex items-center justify-center w-full h-full">
             <div className="relative w-[600px] h-[600px] animate-drastic-zoom-in" style={{animationDelay: '0.5s'}}>
                 <Image 
                    src="/images/logo/hero-logo.png"
                    alt="Cauders Logo"
                    fill
                    className="object-contain"
                 />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
