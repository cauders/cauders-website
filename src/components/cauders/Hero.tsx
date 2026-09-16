
'use client';
import { Suspense } from 'react';
import { Skeleton } from '../ui/skeleton';
import HeroBackground from './HeroBackground';
import { Input } from '../ui/input';
import Image from 'next/image';
import ScrollFadeIn from './ScrollFadeIn';
import FadeContent from './FadeContent';
import { Button } from '../ui/button';
import Link from 'next/link';
import ArrowButton from './ArrowButton';
import GlassBadge from './GlassBadge';
import IntroSection from './IntroSection';
import { typography } from '@/lib/typography';

export default function Hero() {
 return (
 <section className="relative w-full h-auto overflow-hidden">
 <div className="absolute inset-0 z-0 h-[100vh]">
 <HeroBackground />
 </div>

 <div className="relative z-10 flex flex-col md:flex-row h-screen max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex items-center justify-between w-full pt-28 md:pt-0">
 <div className="w-full md:w-3/5 lg:w-[55%] text-left">
 <div>
 <FadeContent delay={100} className="mb-8 md:mb-12">
 <GlassBadge text="AI, AUTOMATION & SOFTWARE SOLUTIONS" />
 </FadeContent>
 <h1 className="tracking-tight text-white mt-4 font-headline lg:leading-[1.1]">
 <ScrollFadeIn delay={200} className="block text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] md:leading-[1.1] lg:leading-[1.1]">
 Where Technology
 </ScrollFadeIn>
 <ScrollFadeIn delay={300} className="block text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] md:leading-[1.1] lg:leading-[1.1]">
 Meets Vision,
 </ScrollFadeIn>
 <ScrollFadeIn delay={400} className={`block mt-2 md:mt-4 ${typography.headingMain}`}>
 <span className="text-primary block leading-tight md:leading-tight lg:leading-tight">
 And Ideas Become Impact.
 </span>
 </ScrollFadeIn>
 </h1>
 <FadeContent delay={500}>
 <p className={`mt-8 md:mt-10 ${typography.bodyLarge} text-white w-[95%] max-w-[34rem] font-light`}>
 We help businesses automate processes, build intelligent
 solutions and scale with confidence through the power of AI
 and custom software.
 </p>
 </FadeContent>
 <FadeContent delay={600} className="mt-10 md:mt-14 flex items-center gap-6">
 <Link
 href="/services"
 className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-[#003B38] text-white text-sm font-medium hover:opacity-90 transition-opacity"
 >
 Discover Our Services
 </Link>
 <Link
 href="/contact"
 className="relative group text-white text-sm font-medium pb-2 hover:text-primary transition-colors"
 >
 Let's Talk Business
 <span className="absolute left-0 bottom-0 w-1/2 h-[2px] bg-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
 </Link>
 </FadeContent>
 </div>
 </div>
 </div>
 </div>
 <IntroSection />
 </section>
 );
}
