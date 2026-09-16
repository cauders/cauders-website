'use client';

import { useEffect, useState, useRef } from 'react';
import ScrollFadeIn from './ScrollFadeIn';
import * as LucideIcons from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Challenge {
 title: string;
 description: string;
 icon?: string;
}

export default function ScrollSpyChallenges({ challenges }: { challenges: Challenge[] }) {
 const [activeIndex, setActiveIndex] = useState(0);
 const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

 useEffect(() => {
 const observer = new IntersectionObserver((entries) => {
 entries.forEach(entry => {
 if (entry.isIntersecting) {
 const index = Number(entry.target.getAttribute('data-index'));
 if (!isNaN(index)) {
 setActiveIndex(index);
 }
 }
 });
 }, {
 // Trigger when the element crosses the middle 40% of the screen
 rootMargin: '-30% 0px -40% 0px',
 threshold: 0
 });

 itemRefs.current.forEach(ref => {
 if (ref) observer.observe(ref);
 });

 return () => observer.disconnect();
 }, []);

 return (
 <div className="space-y-6 w-full lg:w-[80%] ml-auto">
 {challenges.map((challenge, idx) => {
 const ChalIcon = (challenge.icon && (LucideIcons as any)[challenge.icon]) || CheckCircle2;
 const isActive = activeIndex === idx;
 
 return (
 <ScrollFadeIn key={idx} delay={idx * 0.1}>
 <div 
 ref={(el) => {
 itemRefs.current[idx] = el;
 }}
 data-index={idx}
 className={cn(
 "flex gap-4 md:gap-6 p-4 md:p-6 rounded-2xl transition-all duration-500 border",
 isActive 
 ? "bg-white border-border/50 scale-[1.02]" 
 : "bg-transparent border-transparent opacity-60 scale-100"
 )}
 >
 <div className={cn(
 "flex-shrink-0 rounded-full p-2 md:p-3 border shadow-sm mt-1 h-fit transition-all duration-500",
 isActive 
 ? "scale-110 bg-zinc border-zinc" 
 : "bg-white border-zinc/10"
 )}>
 <ChalIcon className={cn(
 "w-5 h-5 md:w-6 md:h-6 transition-colors duration-500",
 isActive ? "text-white" : "text-zinc"
 )} />
 </div>
 <div>
 <h4 className={cn(
 "text-body-large font-medium mb-2 transition-colors duration-500",
 isActive ? "text-foreground" : "text-foreground/80"
 )}>
 {challenge.title}
 </h4>
 <p className={cn(
 "text-body-base transition-colors duration-500",
 isActive ? "text-foreground" : "text-foreground/60"
 )}>
 {challenge.description}
 </p>
 </div>
 </div>
 </ScrollFadeIn>
 );
 })}
 </div>
 );
}
