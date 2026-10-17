
'use client';

import { Handshake, ShieldCheck, Zap, Lightbulb, Star, Award } from "lucide-react";
import ArrowBadge from "./ArrowBadge";
import StandardizedHeading from "./StandardizedHeading";
import ScrollFadeIn from "./ScrollFadeIn";
import Image from "next/image";
import placeholderImages from "@/lib/placeholder-images.json";
import { Card } from "../ui/card";
import BlurCircle from "./BlurCircle";
import InfoCard from "./InfoCard";

const principles = [
 {
 icon: Handshake,
 title: "Client-Centric",
 description: "Your success drives us. We build lasting partnerships through collaboration and understanding.",
 },
 {
 icon: Award,
 title: "Quality",
 description: "Excellence is our standard. We deliver robust, scalable, and polished solutions.",
 },
 {
 icon: Lightbulb,
 title: "Innovation",
 description: "We are forward-thinkers, using cutting-edge technology to build future-ready digital products.",
 },
 {
 icon: ShieldCheck,
 title: "Integrity",
 description: "We operate with transparency and honesty, with security foundational to all we do.",
 },
];

export default function Principles() {
 const { principles: principlesImage } = placeholderImages;

 return (
 <section className="py-16 md:py-20 lg:py-20 relative overflow-hidden">
 <BlurCircle className="w-96 h-96 top-1/2 -translate-y-1/2 -left-48" />
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
 {/* Left Column */}
 <div className="flex flex-col justify-between">
 <div className="flex flex-col items-start gap-4">
 <div>
 <ScrollFadeIn>
 <ArrowBadge href="#" text="Core Values" variant="black" className="mb-2" />
 </ScrollFadeIn>
 <StandardizedHeading lines={["The Values That Define Us"]} />
 </div>
 <ScrollFadeIn delay={100}>
 <p className="text-sm lg:text-base text-foreground max-w-md">
 We don't just build software. We build partnerships. These four foundational principles guide every decision we make and every product we ship, ensuring we always deliver excellence.
 </p>
 </ScrollFadeIn>
 </div>
 
 <div className="grid grid-cols-2 gap-4 md:gap-6 mt-8 lg:mt-0">
 {principles.map((principle, index) => (
 <ScrollFadeIn key={principle.title} delay={index * 100} className="h-full">
 <InfoCard
 title={principle.title}
 description={principle.description}
 icon={principle.icon}
 />
 </ScrollFadeIn>
 ))}
 </div>
 </div>

 {/* Right Column */}
 <ScrollFadeIn direction="right">
 <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden group shadow-lg">
 <Image
 src="https://res.cloudinary.com/cauders/image/upload/v1792265000/96db92ab-3d92-43d5-a351-7e70b3dc6ec1_myvvhr.jpg"
 alt="Cauders Core Principles"
 fill
 className="object-cover transition-transform duration-500 group-hover:scale-105"
 data-ai-hint={principlesImage.aiHint}
 />
 </div>
 </ScrollFadeIn>
 </div>
 </div>
 </section>
 );
}
