'use client';

import { Award, BrainCircuit, ShieldCheck, Star } from "lucide-react";
import ScrollFadeIn from "./ScrollFadeIn";
import ContainerCard from "./ContainerCard";
import StandardizedHeading from "./StandardizedHeading";
import AnimatedNumber from "./AnimatedNumber";
import CircleIcon from "./CircleIcon";
import { typography } from "@/lib/typography";

const features = [
 {
 icon: Star,
 text: "Custom-engineered solutions designed precisely for your core business objectives."
 },
 {
 icon: BrainCircuit,
 text: "Future-ready architecture powered by cutting-edge, scalable digital technologies."
 },
 {
 icon: Award,
 text: "Uncompromising engineering standards ensuring peak performance and reliability."
 },
 {
 icon: ShieldCheck,
 text: "Transparent, long-term partnerships driven by collaborative growth and trust."
 }
];

const stats = [
 {
 value: "10",
 label: "Years of Experience",
 suffix: "+"
 },
 {
 value: "50",
 label: "Projects Completed",
 suffix: "+"
 },
 {
 value: "98",
 label: "Client Satisfaction",
 suffix: "%"
 },
 {
 value: "15",
 label: "Team Experts",
 suffix: "+"
 }
];

export default function WhyChooseUs() {
 return (
 <section className="py-12 md:py-20 lg:py-20">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-8 md:mb-12 lg:mb-20">
 <StandardizedHeading lines={[ "Why People Choose Cauders" ]} />
 <ScrollFadeIn>
 <p className={`mt-2 md:mt-4 ${typography.bodyBase} font-normal text-foreground max-w-2xl mx-auto`}>
 We're more than an agency; we are your partners in innovation and excellence.
 </p>
 </ScrollFadeIn>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-2 lg:mb-4">
 {features.map((feature, index) => (
 <ScrollFadeIn key={index} style={{ animationDelay: `${index * 100}ms` }} className="h-full">
 <div className="flex flex-col items-start gap-4 md:gap-6 h-full p-4 md:p-6 hover:-translate-y-1 transition-transform duration-300">
 <CircleIcon icon={feature.icon} className="text-zinc shadow-sm" iconClassName="w-6 h-6 md:w-8 md:h-8" />
 <p className="text-body-base text- font-medium ">{feature.text}</p>
 </div>
 </ScrollFadeIn>
 ))}
 </div>

 <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
 {stats.map((stat, index) => (
 <ScrollFadeIn key={index} style={{ animationDelay: `${(index + 4) * 100}ms` }} className="h-full">
 <ContainerCard hoverEffect className="text-center py-10 md:py-[3.75rem] px-4 md:px-6 h-full flex flex-col justify-center items-center">
 <p className="text-4xl md:text-5xl lg:text-6xl text-foreground font-headline font-semibold mb-2 md:mb-3">
 <AnimatedNumber value={parseInt(stat.value)} />
 {stat.suffix}
 </p>
 <p className="text-body-base lg:text-base text-muted-foreground font-medium">{stat.label}</p>
 </ContainerCard>
 </ScrollFadeIn>
 ))}
 </div>
 </div>
 </section>
 );
}
