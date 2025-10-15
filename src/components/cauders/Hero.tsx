
"use client"
import { Suspense } from 'react';
import { Skeleton } from '../ui/skeleton';
import HeroBackground from './HeroBackground';
import { Input } from '../ui/input';
import Image from 'next/image';
import BlurText from './BlurText';
import FadeContent from './FadeContent';
import { Button } from '../ui/button';
import Link from 'next/link';
import ArrowButton from './ArrowButton';

export default function Hero() {

  return (
    <section className="relative w-full h-screen overflow-hidden">
       <div className="absolute inset-0 z-0">
         <HeroBackground />
       </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between w-full h-full">
          {/* Left Column */}
          <div className="w-full md:w-1/2 text-left">
            <div>
                 <FadeContent delay={200}>
                    <Link href="/services">
                        <div className="inline-block bg-foreground/20 text-white text-xs font-semibold py-1 px-3 rounded-full mb-4">
                            &gt; Discover our services
                        </div>
                    </Link>
                 </FadeContent>
              <h1 className="font-medium tracking-tight text-white mt-2 leading-tight font-headline">
                <BlurText
                    text="Where Technology"
                    animateBy="words"
                    className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl"
                />
                 <BlurText
                    text="Meets Vision"
                    animateBy="words"
                    delay={100}
                    className="text-4xl sm:text_5xl md:text-5xl lg:text-6xl"
                />
              </h1>
              <BlurText
                    text="And Ideas Become Impact"
                    animateBy="words"
                    delay={50}
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mt-2"
                />
              <FadeContent delay={1000}>
                <p className="mt-8 text-xs text-white max-w-md font-light">
                    At Cauders, we architect and engineer premium, modern, and dynamic digital solutions that empower businesses to thrive.
                </p>
              </FadeContent>
              <FadeContent delay={1200}>
                <ArrowButton href="/contact" text="Get Started" className="mt-8" />
              </FadeContent>
            </div>
          </div>
          
          {/* Right Column (Desktop Only) */}
          <div className="hidden md:flex w-1/2 items-center justify-center">
            <FadeContent duration={1000} delay={800} className="w-full h-full">
              <div className="flex items-center justify-center h-full">
                 <div className="relative w-[320px] h-[380px]">
                    {/* Back Card */}
                    <div className="absolute top-0 left-0 w-full h-full group card-tilt p-2 rounded-3xl" style={{ backgroundColor: "hsl(0 0% 100% / 0.2)" }}>
                        <div className="relative w-full h-full">
                            <Image 
                                src="https://picsum.photos/seed/web-design/800/600"
                                alt="Web Design Screenshot"
                                fill
                                priority
                                className="object-cover rounded-2xl"
                                data-ai-hint="web design"
                            />
                        </div>
                    </div>
                </div>
              </div>
            </FadeContent>
          </div>
        </div>
      </div>
    </section>
  );
}
