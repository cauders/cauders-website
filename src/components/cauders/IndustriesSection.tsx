"use client";

import React from 'react';
import ScrollFadeIn from './ScrollFadeIn';
import ScrollSpyItem from './ScrollSpyItem';
import SectionHeader from './SectionHeader';
import { typography } from '@/lib/typography';
interface Industry {
 slug: string;
 title: string;
 heroDescription: string;
}

interface IndustriesSectionProps {
 title: string;
 description?: string;
 ctaText?: string;
 ctaLink?: string;
 industries: Industry[];
}


export default function IndustriesSection({
 title,
 description,
 ctaText,
 ctaLink,
 industries
}: IndustriesSectionProps) {
 if (!industries || industries.length === 0) return null;

 return (
 <section id="industries" className="py-16 md:py-20 relative z-10 text-foreground bg-transparent">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative">
 
 {/* Left Column (Sticky Heading) */}
 <div className="lg:col-span-5 relative">
 <div className="lg:sticky lg:top-32">
 <ScrollFadeIn>
 <SectionHeader
 badgeText="Industries"
 badgeHref="#industries"
 headingLines={[{ text: title, gradientLastWords: 2 }]}
 description={description}
 ctaText={ctaText}
 ctaLink={ctaLink}
 onCtaClick={(e) => {
 if (ctaLink === '/industries') {
 e.preventDefault();
 window.dispatchEvent(new CustomEvent('open-mega-menu', { detail: 'industries' }));
 }
 }}
 align="left"
 />
 </ScrollFadeIn>
 </div>
 </div>
 
 {/* Right Column (Scrolling List) */}
 <div className="lg:col-span-7 flex flex-col">
 {industries.map((ind, idx) => {
 if (!ind) return null;
 const isFirst = idx === 0;
 const isLast = idx === industries.length - 1;
 return (
 <ScrollSpyItem key={ind.slug}>
 <div className={`pb-10 lg:pb-16 ${isFirst ? '' : 'pt-10 lg:pt-16'} ${isLast ? '' : 'border-b border-border'}`}>
 <h4 className={`${typography.headingSection} font-medium font-headline text-foreground mb-4`}>{ind.title}</h4>
 <p className="text-foreground font-normal text-body-large ">
 {ind.heroDescription}
 </p>
 </div>
 </ScrollSpyItem>
 );
 })}
 </div>

 </div>
 </div>
 </section>
 );
}
