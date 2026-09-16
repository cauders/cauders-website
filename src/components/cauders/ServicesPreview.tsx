
'use client';

import ScrollFadeIn from "./ScrollFadeIn";
import StandardizedHeading from "./StandardizedHeading";
import ArrowBadge from "./ArrowBadge";
import GradientContainer from "./GradientContainer";
import InfoCard from "./InfoCard";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Code, Blocks, Smartphone, CloudCog } from 'lucide-react';

const coreServices = [
 {
 slug: 'custom-ai-development',
 title: 'Custom AI Development',
 description: 'We design and develop bespoke AI applications tailored to your specific operational workflows. By integrating intelligent features and advanced machine learning models into your systems, we help you automate complex tasks, uncover hidden data patterns, and ensure seamless functionality within your digital ecosystem.',
 icon: Code,
 category: 'ai/ai-product-engineering'
 },
 {
 slug: 'custom-software-development',
 title: 'Custom Software Development',
 description: 'We build bespoke software solutions engineered for performance, scale, and longevity. We manage the entire lifecycle to improve productivity, connect your legacy systems, and solve your unique operational challenges, ensuring your digital infrastructure grows with your business.',
 icon: Blocks,
 category: 'services/software-solutions'
 },
 {
 slug: 'mobile-app-development',
 title: 'Mobile App Development',
 description: 'We build intuitive, high-performance mobile applications that deliver reliable functionality and real value. From native iOS and Android to scalable cross-platform solutions like Flutter and React Native, we ensure an engaging and flawless user experience.',
 icon: Smartphone,
 category: 'services/software-solutions'
 },
 {
 slug: 'cloud-transformation',
 title: 'Cloud & Infrastructure',
 description: 'We help organizations modernize technology and improve operational agility. From migrating to cloud environments and implementing serverless architectures to optimizing infrastructure for security and cost efficiency across AWS, Azure, and Google Cloud Platform.',
 icon: CloudCog,
 category: 'services/cloud-digital-transformation'
 }
];

export default function ServicesPreview() {
 return (
 <section id="services-preview">
 <GradientContainer className="py-16 md:py-20 lg:py-20">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-8 md:mb-12 lg:mb-16">
 <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
 <ScrollFadeIn>
 <ArrowBadge href="/services" text="Our Services" />
 </ScrollFadeIn>
 <StandardizedHeading lines={["What We Do Best"]} className="text-background" />
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {coreServices.map((service, index) => (
 <ScrollFadeIn key={service.slug} delay={index * 100} className="h-full">
 <InfoCard
 icon={service.icon}
 title={service.title}
 description={service.description}
 ctaText="Learn More"
 ctaHref={`/${service.category}/${service.slug}`}
 lineClamp="none"
 />
 </ScrollFadeIn>
 ))}
 </div>

 <div className="text-center mt-12 md:mt-16">
 <Button 
 variant="outline" 
 onClick={() => {
 window.dispatchEvent(new CustomEvent('open-mega-menu', { detail: 'services' }));
 }}
 >
 View All Services
 </Button>
 </div>
 </div>
 </GradientContainer>
 </section>
 );
}
