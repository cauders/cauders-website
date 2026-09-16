
'use client';

import StandardizedHeading from "./StandardizedHeading";
import Image from "next/image";
import placeholderImages from "@/lib/placeholder-images.json";
import BlurCircle from "./BlurCircle";

export default function IntroSection() {
 const { intro: introImage } = placeholderImages;

 return (
 <div className="relative z-10 pt-8 px-4 sm:px-6 lg:px-8 pb-8 md:pb-16">
 <div className="rounded-t-[50px] rounded-b-2xl shadow-xl bg-card relative">
 <div className="text-center pt-16 md:pt-32 pb-0 relative z-20">
 <StandardizedHeading 
 lines={[
 { text: "Transforming Visionary" },
 { text: "Ideas Into Powerful & Creative" },
 { text: "Digital Experiences"}
 ]} 
 className="text-xl md:text-5xl lg:text-7xl text-foreground font-semibold"
 animationType="alternate"
 />
 </div>

 <div className="relative aspect-[16/9] w-full rounded-b-2xl overflow-hidden -mt-8 md:-mt-16">
 {/* Gradient fade to blend the white card into the image smoothly */}
 <div className="absolute inset-x-0 top-0 h-24 md:h-40 bg-gradient-to-b from-card to-transparent z-10 pointer-events-none"></div>
 <Image 
 src={introImage.imageUrl}
 alt="Intro section placeholder"
 fill
 className="object-cover"
 data-ai-hint={introImage.aiHint}
 />
 </div>
 </div>
 </div>
 );
}
