"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ArrowBadge from './ArrowBadge';
import StandardizedHeading from './StandardizedHeading';
import ScrollFadeIn from './ScrollFadeIn';
import { Button } from '@/components/ui/button';
import { typography } from '@/lib/typography';

export interface ImageContainerHeroProps {
 imageUrl: string;
 imageAlt?: string;
 badgeText?: string;
 badgeHref?: string;
 headingLines: (string | { text: string; isGradient?: boolean; inline?: boolean; gradientType?: 'primary' | 'light' })[];
 description: string;
 ctaText?: string;
 ctaHref?: string;
 onCtaClick?: () => void;
 variant?: 'light' | 'dark';
}

export default function ImageContainerHero({
 imageUrl,
 imageAlt = "Hero Background",
 badgeText,
 badgeHref = "#overview",
 headingLines,
 description,
 ctaText,
 ctaHref,
 onCtaClick,
 variant = 'light'
}: ImageContainerHeroProps) {
 
 const isDark = variant === 'dark';
 const glassClass = isDark ? 'glass-effect text-white' : 'glass-effect-light';
 const textColorClass = isDark ? 'text-white' : 'text-foreground';
 const headingClass = isDark ? 'text-white' : '';
 return (
 <section className="relative h-screen w-full overflow-hidden">
 <div className="absolute inset-0 z-0">
 <Image
 src={imageUrl}
 alt={imageAlt}
 fill
 className="object-cover"
 priority
 />
 {/* Light gradient overlay to ensure the menu is visible at the top without darkening the whole image */}
 <div className="absolute inset-x-0 top-0 h-32 lg:h-48 bg-gradient-to-b from-white/50 to-transparent pointer-events-none dark:from-black/70"></div>
 </div>

 <div className="relative z-10 flex flex-col h-full items-center justify-center text-center px-4">
 <div className={`${glassClass} rounded-3xl px-8 py-12 md:px-12 md:py-16 lg:py-20 border-white/20 max-w-5xl mx-auto w-full flex flex-col items-center`}>
 {badgeText && (
 <ScrollFadeIn direction="up" delay={100}>
 <ArrowBadge href={badgeHref} text={badgeText} variant={isDark ? "white" : "black"} className="mb-4" />
 </ScrollFadeIn>
 )}
 
 <ScrollFadeIn direction="up" delay={200} className="w-full">
 <StandardizedHeading lines={headingLines} className={headingClass} />
 </ScrollFadeIn>

 <ScrollFadeIn direction="up" delay={300}>
 <p className={`mt-2 md:mt-4 ${typography.bodyBase} leading-relaxed ${textColorClass} max-w-2xl mx-auto font-normal `}>
 {description}
 </p>
 </ScrollFadeIn>

 {ctaText && (
 <ScrollFadeIn direction="up" delay={400} className="mt-8 md:mt-10">
 {onCtaClick ? (
 <Button onClick={onCtaClick} variant="zinc" size="lg" className="group">
 <span>{ctaText}</span>
 </Button>
 ) : (
 <Button asChild variant="zinc" size="lg" className="group">
 <Link 
 href={ctaHref || '#'} 
 className="block"
 onClick={(e) => {
 if (ctaHref?.startsWith('#')) {
 e.preventDefault();
 document.querySelector(ctaHref)?.scrollIntoView({ behavior: 'smooth' });
 }
 }}
 >
 {ctaText}
 </Link>
 </Button>
 )}
 </ScrollFadeIn>
 )}
 </div>
 </div>
 </section>
 );
}
