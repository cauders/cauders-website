"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import InfoCard from './InfoCard';
import ScrollFadeIn from './ScrollFadeIn';
import { ServiceProcessStep } from '@/lib/service-details';
import placeholderImages from '@/lib/placeholder-images.json';
import { cn } from '@/lib/utils';

interface ProcessHoverSectionProps {
 title: string;
 steps: ServiceProcessStep[];
}

export default function ProcessHoverSection({ title, steps }: ProcessHoverSectionProps) {
 const [hoveredIndex, setHoveredIndex] = useState<number>(0);

 // Array of contextual Unsplash images for process steps
 const fallbackImages = [
 "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop", // Step 1: Planning/Design
 "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop", // Step 2: Development/Creation
 "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", // Step 3: Integration/Testing
 "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", // Step 4: Deployment/Launch
 "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop", // Step 5: Maintenance
 "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop" // Step 6: Scaling
 ];

 // Determine which image to show based on the active step
 const currentImage = steps[hoveredIndex]?.imageUrl || fallbackImages[hoveredIndex % fallbackImages.length];

 // Pre-calculate all possible images for smooth pre-rendering and CSS crossfading
 const allPossibleImages = Array.from(new Set(steps.map((step, i) => step.imageUrl || fallbackImages[i % fallbackImages.length])));

 return (
 <section className="py-16 md:py-20 relative" id="process">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <SectionHeader
 badgeText="Our Process"
 badgeHref="#process"
 headingLines={[
 { text: title.split(' ').length > 2 ? title.split(' ').slice(0, -2).join(' ') + ' ' : title, inline: true },
 { text: title.split(' ').length > 2 ? title.split(' ').slice(-2).join(' ') : "", isGradient: true, inline: true }
 ].filter(l => l.text !== "")}
 align="center"
 />

 <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-4 md:gap-6 relative items-stretch w-full mx-auto">
 
 {/* Left Column (Even indices) */}
 <div className="flex flex-col gap-4 md:gap-6 h-full">
 {steps.map((step, index) => {
 if (index % 2 !== 0) return null;
 
 const isDark = hoveredIndex === index;

 return (
 <div 
 key={index} 
 className="flex-1 flex flex-col"
 onMouseEnter={() => setHoveredIndex(index)}
 >
 <ScrollFadeIn delay={index * 0.1} className="flex-1 flex flex-col h-full">
 <InfoCard
 title={step.title}
 description={step.description}
 stepNumber={index + 1}
 contentAlign="bottom"
 lineClamp="none"
 className={`!min-h-[220px] transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#1A4540] before:to-primary before:z-0 before:transition-opacity before:duration-500 ${isDark ? 'before:opacity-100 [&_h4]:!text-white [&_p]:!text-white [&_.text-4xl]:!text-white border-transparent' : 'before:opacity-0'} ${hoveredIndex === index ? 'ring-2 ring-primary ring-offset-2 scale-[0.98]' : 'opacity-90'}`}
 />
 </ScrollFadeIn>
 </div>
 );
 })}
 </div>

 {/* Middle Column (Graphic) */}
 <div className="hidden lg:flex flex-col items-center justify-center h-full">
 <div className="w-full h-full relative rounded-[2.5rem] overflow-hidden bg-zinc-900/5">
 {allPossibleImages.map((img, i) => (
 <Image 
 key={img}
 src={img} 
 fill 
 alt={`Process visualization`} 
 className={cn(
 "object-cover transition-all duration-700 ease-in-out absolute inset-0",
 currentImage === img ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
 )}
 />
 ))}
 </div>
 </div>

 {/* Right Column (Odd indices) */}
 <div className="flex flex-col gap-4 md:gap-6 h-full">
 {steps.map((step, index) => {
 if (index % 2 === 0) return null;
 
 const isDark = hoveredIndex === index;
 
 return (
 <div 
 key={index} 
 className="flex-1 flex flex-col"
 onMouseEnter={() => setHoveredIndex(index)}
 >
 <ScrollFadeIn delay={index * 0.1} className="flex-1 flex flex-col h-full">
 <InfoCard
 title={step.title}
 description={step.description}
 stepNumber={index + 1}
 contentAlign="bottom"
 lineClamp="none"
 className={`!min-h-[220px] transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#1A4540] before:to-primary before:z-0 before:transition-opacity before:duration-500 ${isDark ? 'before:opacity-100 [&_h4]:!text-white [&_p]:!text-white [&_.text-4xl]:!text-white border-transparent' : 'before:opacity-0'} ${hoveredIndex === index ? 'ring-2 ring-primary ring-offset-2 scale-[0.98]' : 'opacity-90'}`}
 />
 </ScrollFadeIn>
 </div>
 );
 })}
 </div>
 </div>
 </div>
 </section>
 );
}
