
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
    <section className="relative w-full overflow-hidden rounded-br-[1rem] rounded-bl-[1rem] py-32 md:py-48">
       <div className="absolute inset-0 z-0">
         <HeroBackground />
       </div>

      <div className="mx-auto h-full px-4 sm:px-6 lg:px-12">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="w-full md:w-auto text-left">
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
          <div className="hidden md:flex items-center justify-center">
            <FadeContent duration={1000} delay={800}>
              <div className="relative w-[450px] h-[450px]">
                  {/* Back Card */}
                  <div className="absolute top-0 left-0 w-[300px] h-[300px] group card-tilt">
                      <div className="relative w-full h-full">
                          <div className="absolute inset-0 rounded-3xl bg-white/10 border border-white/20 shadow-2xl glass-effect"></div>
                          <Image 
                              src="https://picsum.photos/seed/web-design/800/600"
                              alt="Web Design Screenshot"
                              width={800}
                              height={600}
                              priority
                              className="absolute w-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-lg"
                              data-ai-hint="web design"
                          />
                      </div>
                  </div>

                  {/* Front Card */}
                  <div className="absolute bottom-0 right-0 w-[360px] h-[390px] group card-tilt">
                      <div className="relative w-full h-full">
                          <div className="absolute inset-0 rounded-3xl bg-white/10 border border-white/20 shadow-2xl glass-effect"></div>
                          <Image 
                              src="https://picsum.photos/seed/phone-app/600/800"
                              alt="App Screenshot"
                              width={600}
                              height={800}
                              priority
                              className="absolute w-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl shadow-2xl"
                              data-ai-hint="mobile application"
                          />
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
