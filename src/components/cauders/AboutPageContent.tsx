
'use client';

import { cn } from '@/lib/utils';
import ScrollFadeIn from '@/components/cauders/ScrollFadeIn';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, ArrowDown } from 'lucide-react';
import Image from 'next/image';
import StandardizedHeading from '@/components/cauders/StandardizedHeading';
import SectionHeader from '@/components/cauders/SectionHeader';
import SplitSectionHeader from '@/components/cauders/SplitSectionHeader';
import placeholderImages from '@/lib/placeholder-images.json';
import VisionMission from '@/components/cauders/VisionMission';
import Principles from '@/components/cauders/Principles';
import TeamPreview from './TeamPreview';
import FAQPreview from './FAQPreview';
import GetAQuote from './GetAQuote';

export default function AboutPageContent() {
 const handleScrollToContent = () => {
 const contentElement = document.getElementById('about-content');
 if (contentElement) {
 contentElement.scrollIntoView({ behavior: 'smooth' });
 }
 }

 return (
 <div className="text-foreground bg-transparent">
 <section className="bg-transparent">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
 <SplitSectionHeader
 headingLines={[
 { text: "Where Vision Meets" },
 { text: "Digital Excellence", isGradient: true }
 ]}
 description="At Cauders, we architect and engineer premium, modern, and dynamic digital solutions that empower businesses to thrive."
 ctaText="Read More"
 ctaLink="#about-content"
 className="!mb-8 lg:!mb-12"
 />
 <ScrollFadeIn>
 <div className="rounded-2xl overflow-hidden shadow-lg">
 <Image 
 src="https://res.cloudinary.com/cauders/image/upload/v1786823397/people-1_jivqap.png"
 alt="Empowering Your Digital Vision"
 width={1200}
 height={480}
 data-ai-hint={placeholderImages.about.hero.aiHint}
 className="w-full aspect-[21/9] md:aspect-[2.5/1] object-cover grayscale"
 />
 </div>
 </ScrollFadeIn>
 </div>
 </section>

 <div id="about-content">
 <VisionMission />
 <Principles />
 <TeamPreview />
 <FAQPreview />
 <GetAQuote />
 </div>
 </div>
 );
}
