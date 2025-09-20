
"use client"
import { Suspense } from 'react';
import { Skeleton } from '../ui/skeleton';
import HeroBackground from './HeroBackground';
import { Input } from '../ui/input';
import Image from 'next/image';
import BlurText from './BlurText';
import FadeContent from './FadeContent';

export default function Hero() {

  return (
    <section className="relative w-full h-[90vh] lg:h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<Skeleton className="w-full h-full" />}>
          <HeroBackground />
        </Suspense>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center h-full gap-8">
          {/* Left Column */}
          <div className="w-full text-left">
             {/* Mobile Only Image */}
            <div className="md:hidden flex items-center justify-center w-full mb-8">
                <FadeContent blur={true} duration={1000} delay={1200} easing="ease-out" initialOpacity={0}>
                <div className="relative w-[300px] h-[300px]">
                    <Image 
                        src="/images/logo/hero-logo.png"
                        alt="Cauders Logo"
                        fill
                        priority
                        className="object-contain"
                    />
                </div>
                </FadeContent>
            </div>
            <div>
              <h1 className="font-bold tracking-tight text-white mt-2 leading-relaxed font-headline animated-gradient-text">
                <BlurText
                    text="Where Technology"
                    animateBy="words"
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                />
                 <BlurText
                    text="Meets Vision"
                    animateBy="words"
                    delay={100}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                />
                <BlurText
                    text="and Ideas Become Impact"
                    animateBy="words"
                    delay={50}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mt-4 font-medium"
                />
              </h1>
              <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
                <form className="flex items-center gap-2 max-w-sm bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Input
                    type="email"
                    placeholder="email@address.com"
                    className="border-0 text-foreground placeholder:text-foreground/70 focus-visible:ring-0 focus-visible:ring-offset-0 flex-grow bg-transparent rounded-l-full h-full py-4 pl-6"
                  />
                  <button type="submit" className="bg-primary hover:bg-foreground hover:text-primary text-white rounded-full px-12 h-14 text-sm font-medium transition-colors duration-300 whitespace-nowrap">
                    Get a Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          {/* Right Column (Desktop Only) */}
          <div className="hidden md:flex items-center justify-center w-full h-full">
            <FadeContent blur={true} duration={1000} delay={1200} easing="ease-out" initialOpacity={0}>
              <div className="relative w-[600px] h-[600px]">
                  <Image 
                      src="/images/logo/hero-logo.png"
                      alt="Cauders Logo"
                      fill
                      priority
                      className="object-contain"
                  />
              </div>
            </FadeContent>
          </div>
        </div>
      </div>
    </section>
  );
}

