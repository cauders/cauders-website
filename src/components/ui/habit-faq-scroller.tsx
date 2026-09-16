'use client';

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface FaqItem {
 question: string;
 answer: string;
}

interface FaqScrollerProps {
 faqs: FaqItem[];
 speed?: "fast" | "normal" | "slow";
 className?: string;
}

export default function FaqScroller({
 faqs,
 speed = "normal",
 className
}: FaqScrollerProps) {
 const [isHovered, setIsHovered] = useState(false);
 
 const getSpeed = () => {
 switch (speed) {
 case "fast": return 80;
 case "normal": return 160;
 case "slow": return 240;
 default: return 160;
 }
 };

 const shiftArray = (arr: FaqItem[], shiftBy: number) => {
 return [...arr.slice(shiftBy), ...arr.slice(0, shiftBy)];
 };

 const row1 = shiftArray(faqs, 0);
 const row2 = shiftArray(faqs, 3);
 const row3 = shiftArray(faqs, 6);

 // Triple the arrays to ensure smooth continuous scrolling
 const scrollRow1 = [...row1, ...row1, ...row1];
 const scrollRow2 = [...row2, ...row2, ...row2];
 const scrollRow3 = [...row3, ...row3, ...row3];

 return (
 <div 
 className={cn("relative w-full overflow-hidden py-8 flex flex-col gap-6", className)}
 style={{
 maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
 WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)"
 }}
 onMouseEnter={() => setIsHovered(true)}
 onMouseLeave={() => setIsHovered(false)}
 >
 <style dangerouslySetInnerHTML={{__html: `
 @keyframes faq-marquee-left {
 0% { transform: translate3d(0%, 0, 0); }
 100% { transform: translate3d(-33.333333%, 0, 0); } 
 }
 @keyframes faq-marquee-right {
 0% { transform: translate3d(-33.333333%, 0, 0); }
 100% { transform: translate3d(0%, 0, 0); } 
 }
 .animate-faq-marquee-left {
 animation: faq-marquee-left linear infinite;
 will-change: transform;
 }
 .animate-faq-marquee-right {
 animation: faq-marquee-right linear infinite;
 will-change: transform;
 }
 `}} />

 {/* Row 1: Left */}
 <div 
 className="flex w-max animate-faq-marquee-left"
 style={{
 animationDuration: `${getSpeed()}s`,
 animationPlayState: isHovered ? 'paused' : 'running'
 }}
 >
 {scrollRow1.map((faq, idx) => (
 <FaqCard key={`r1-${idx}`} faq={faq} />
 ))}
 </div>

 {/* Row 2: Right */}
 <div 
 className="flex w-max animate-faq-marquee-right"
 style={{
 animationDuration: `${getSpeed() * 1.1}s`,
 animationPlayState: isHovered ? 'paused' : 'running'
 }}
 >
 {scrollRow2.map((faq, idx) => (
 <FaqCard key={`r2-${idx}`} faq={faq} />
 ))}
 </div>

 {/* Row 3: Left */}
 <div 
 className="flex w-max animate-faq-marquee-left"
 style={{
 animationDuration: `${getSpeed() * 0.9}s`,
 animationPlayState: isHovered ? 'paused' : 'running'
 }}
 >
 {scrollRow3.map((faq, idx) => (
 <FaqCard key={`r3-${idx}`} faq={faq} />
 ))}
 </div>
 </div>
 );
}

function FaqCard({ faq }: { faq: FaqItem }) {
 return (
 <div className="w-[260px] md:w-[320px] lg:w-[360px] shrink-0 mx-3">
 <div className="h-full bg-white dark:bg-zinc-900 border border-white/20 dark:border-white/10 rounded-2xl p-5 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
 <h3 className="text-body-base text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-primary transition-colors">
 {faq.question}
 </h3>
 <p className="text-xs md:text-[13px] text-zinc-600 dark:text-zinc-400 ">
 {faq.answer}
 </p>
 </div>
 </div>
 );
}
