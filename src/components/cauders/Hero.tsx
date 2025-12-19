
'use client';
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
import placeholderImages from '@/lib/placeholder-images.json';
import GlassBadge from './GlassBadge';
import IntroSection from './IntroSection';

export default function Hero() {
  return (
    <section className="relative w-full h-auto overflow-hidden">
      <div className="absolute inset-0 z-0 h-[100vh]">
        <HeroBackground />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between w-full pt-28 md:pt-0">
          {/* Left Column */}
          <div className="w-full md:w-1/2 text-left">
            <div>
              <FadeContent delay={200} className="mb-2 md:mb-4">
                <GlassBadge href="/services" text="Discover our services" />
              </FadeContent>
              <h1 className="font-medium tracking-tight text-white mt-2 leading-tight font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                <BlurText
                  text="Where Technology"
                  animateBy="words"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                />
                <BlurText
                  text="Meets Vision"
                  animateBy="words"
                  delay={100}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                />
              </h1>
              <BlurText
                text="And Ideas Become Impact"
                animateBy="words"
                delay={50}
                className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-white mt-1 md:mt-2"
              />
              <FadeContent delay={1000}>
                <p className="mt-4 text-[10px] md:text-xs text-white max-w-sm md:max-w-md font-light">
                  At Cauders, we architect and engineer premium, modern, and
                  dynamic digital solutions that empower businesses to thrive.
                </p>
              </FadeContent>
              <FadeContent delay={1200}>
                <ArrowButton
                  href="/contact"
                  text="Get Started"
                  className="mt-4 md:mt-8"
                />
              </FadeContent>
            </div>
          </div>

          {/* Right Column (Desktop Only) */}
          <div className="hidden md:flex w-1/2 items-center justify-center">
            <FadeContent duration={1000} delay={800} className="w-full h-full">
              <div className="flex items-center justify-center h-full">
                <div className="relative w-[400px] h-[460px]">
                  {/* Back Card */}
                  <div className="absolute top-0 left-0 w-full h-full rounded-3xl glass-effect overflow-hidden p-2">
                    <div className="relative w-full h-full overflow-hidden rounded-2xl">
                      <Image
                        src={placeholderImages.hero.main.imageUrl}
                        alt="Web Design Screenshot"
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-ai-hint={placeholderImages.hero.main.aiHint}
                      />
                    </div>
                  </div>


                  {/* Front Card */}
                  <div className="absolute bottom-[-40px] right-[-60px] w-[240px] h-[230px] rounded-2xl shadow-2xl overflow-hidden">
                    <div className="relative w-full h-2/3">
                       <Image 
                            src={placeholderImages.hero.front.imageUrl}
                            alt="Mobile App Screenshot"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            data-ai-hint={placeholderImages.hero.front.aiHint}
                       />
                    </div>
                     <div 
                        className="absolute bottom-0 left-0 w-full h-1/3 p-4 flex items-center justify-center text-center overflow-hidden rounded-b-2xl" 
                        style={{backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', backgroundColor: 'transparent' }}
                    >
                        <p className="text-white text-xs font-light">
                            Crafting intuitive mobile experiences for iOS and Android.
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeContent>
          </div>
        </div>
        
        {/* Mobile Hero Images */}
        <div className="md:hidden flex-shrink-0 w-full pb-8 flex justify-center items-center mt-8">
             <FadeContent duration={1000} delay={800} className="w-full h-full">
              <div className="flex items-center justify-center h-full">
                <div className="relative w-[280px] h-[320px]">
                  {/* Back Card */}
                  <div className="absolute top-0 left-0 w-full h-full rounded-3xl glass-effect overflow-hidden p-2">
                    <div className="relative w-full h-full overflow-hidden rounded-2xl">
                      <Image
                        src={placeholderImages.hero.main.imageUrl}
                        alt="Web Design Screenshot"
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-ai-hint={placeholderImages.hero.main.aiHint}
                      />
                    </div>
                  </div>

                  {/* Front Card */}
                  <div className="absolute bottom-[-20px] right-[-30px] w-[160px] h-[150px] rounded-2xl shadow-2xl overflow-hidden">
                    <div className="relative w-full h-2/3">
                       <Image 
                            src={placeholderImages.hero.front.imageUrl}
                            alt="Mobile App Screenshot"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            data-ai-hint={placeholderImages.hero.front.aiHint}
                       />
                    </div>
                     <div 
                        className="absolute bottom-0 left-0 w-full h-1/3 p-2 flex items-center justify-center text-center overflow-hidden rounded-b-2xl" 
                        style={{backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'transparent' }}
                    >
                        <p className="text-white text-[10px] font-light">
                            Crafting intuitive mobile experiences.
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeContent>
        </div>
      </div>
      <IntroSection />
    </section>
  );
}
