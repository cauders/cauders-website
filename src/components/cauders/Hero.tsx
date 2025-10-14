"use client"
import { Suspense } from 'react';
import { Skeleton } from '../ui/skeleton';
import HeroBackground from './HeroBackground';
import { Input } from '../ui/input';
import Image from 'next/image';
import BlurText from './BlurText';
import FadeContent from './FadeContent';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {

  return (
    <section className="relative w-full overflow-hidden bg-gradient-container rounded-br-[1rem] rounded-bl-[1rem] py-32 md:py-48">
       <div className="absolute inset-0 z-0 opacity-20">
         <HeroBackground />
       </div>

      <div className="mx-auto h-full px-4 sm:px-6 lg:px-6">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center h-full gap-8 pt-20">
          {/* Left Column */}
          <div className="w-full text-left">
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
                    className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl"
                />
              </h1>
              <BlurText
                    text="And Ideas Become Impact"
                    animateBy="words"
                    delay={50}
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mt-4"
                />
              <FadeContent delay={1000}>
                <p className="mt-6 text-xs sm:text-sm text-white max-w-md">
                    At Cauders, we architect and engineer premium, modern, and dynamic digital solutions that empower businesses to thrive in a competitive landscape.
                </p>
              </FadeContent>
              <FadeContent delay={1200}>
                <Button asChild size="lg" className="mt-8">
                    <Link href="/contact">
                        Get Started <ArrowRight />
                    </Link>
                </Button>
              </FadeContent>
            </div>
          </div>
          
          {/* Right Column (Desktop Only) */}
          <div className="hidden md:flex items-center justify-center w-full h-full">
            <FadeContent duration={1000} delay={800}>
              <div className="relative w-[300px] h-[300px] group">
                  <div className="relative w-full h-full card-tilt">
                    <div className="absolute inset-0 rounded-3xl bg-white/10 border border-white/20 shadow-2xl glass-effect"></div>
                    <Image 
                        src="https://picsum.photos/seed/phone-app/600/800"
                        alt="App Screenshot"
                        width={600}
                        height={800}
                        priority
                        className="absolute w-[70%] h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl shadow-2xl"
                        data-ai-hint="mobile application"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-20 rounded-2xl bg-white/20 border border-white/30 p-3 glass-effect shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:-translate-x-2 group-hover:-translate-y-2">
                     <p className="text-[10px] text-white">At Cauders, we architect and engineer premium, modern, and dynamic digital solutions.</p>
                  </div>
              </div>
            </FadeContent>
          </div>
        </div>
      </div>
    </section>
  );
}
