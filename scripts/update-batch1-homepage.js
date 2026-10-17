const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

// 1. Hero.tsx
const heroPath = path.join(root, 'src/components/cauders/Hero.tsx');
let heroContent = fs.readFileSync(heroPath, 'utf8');

const heroOld = ` <p className={\`mt-8 md:mt-10 \${typography.bodyLarge} text-white w-[95%] max-w-[34rem] font-light\`}>
 We help businesses automate processes, build intelligent
 solutions and scale with confidence through the power of AI
 and custom software.
 </p>`;

const heroNew = ` <p className={\`mt-8 md:mt-10 \${typography.bodyLarge} text-white w-[95%] max-w-[34rem] font-light\`}>
 Cauders builds AI-enabled applications and automates business
 workflows, backed by the custom software engineering and systems
 integration needed to put those solutions into real operations.
 </p>`;

if (heroContent.includes('We help businesses automate processes')) {
  heroContent = heroContent.replace(
    / <p className={`mt-8 md:mt-10 \$\{typography\.bodyLarge\} text-white w-\[95%\] max-w-\[34rem\] font-light`}>[\s\S]*?<\/p>/,
    heroNew
  );
  fs.writeFileSync(heroPath, heroContent, 'utf8');
  console.log('Updated Hero.tsx');
} else {
  console.log('Hero.tsx already updated or pattern not found');
}

// 2. IntroSection.tsx
const introPath = path.join(root, 'src/components/cauders/IntroSection.tsx');
let introContent = fs.readFileSync(introPath, 'utf8');

const introUpdated = `'use client';

import StandardizedHeading from "./StandardizedHeading";
import Image from "next/image";
import placeholderImages from "@/lib/placeholder-images.json";
import { typography } from "@/lib/typography";

export default function IntroSection() {
 const { intro: introImage } = placeholderImages;

 return (
 <div className="relative z-10 pt-8 px-4 sm:px-6 lg:px-8 pb-8 md:pb-16">
 <div className="rounded-t-[50px] rounded-b-2xl shadow-xl bg-card relative">
 <div className="text-center pt-16 md:pt-28 pb-8 px-4 max-w-4xl mx-auto relative z-20">
 <StandardizedHeading 
 lines={[
 { text: "Practical AI & Automation" },
 { text: "Operating Within Real Systems" },
 { text: "And Production Workflows" }
 ]} 
 className="text-xl md:text-5xl lg:text-7xl text-foreground font-semibold"
 animationType="alternate"
 />
 <p className={\`mt-6 md:mt-8 \${typography.bodyBase} text-muted-foreground font-normal max-w-2xl mx-auto leading-relaxed\`}>
 Deploying intelligent capability requires more than selecting an AI model. We build the surrounding application logic, data pipelines, integrations, security controls, and dependable software engineering needed to run automation in active operations.
 </p>
 </div>

 <div className="relative aspect-[16/9] w-full rounded-b-2xl overflow-hidden -mt-4 md:-mt-8">
 {/* Gradient fade to blend the white card into the image smoothly */}
 <div className="absolute inset-x-0 top-0 h-24 md:h-40 bg-gradient-to-b from-card to-transparent z-10 pointer-events-none"></div>
 <Image 
 src={introImage.imageUrl}
 alt="Cauders production systems and workflows"
 fill
 className="object-cover"
 data-ai-hint={introImage.aiHint}
 />
 </div>
 </div>
 </div>
 );
}
`;

fs.writeFileSync(introPath, introUpdated, 'utf8');
console.log('Updated IntroSection.tsx');

// 3. WhyChooseUs.tsx
const whyPath = path.join(root, 'src/components/cauders/WhyChooseUs.tsx');
const whyUpdated = `'use client';

import { Award, BrainCircuit, ShieldCheck, Target } from "lucide-react";
import ScrollFadeIn from "./ScrollFadeIn";
import ContainerCard from "./ContainerCard";
import StandardizedHeading from "./StandardizedHeading";
import AnimatedNumber from "./AnimatedNumber";
import CircleIcon from "./CircleIcon";
import { typography } from "@/lib/typography";

const features = [
 {
 icon: Target,
 text: "Understanding the operational bottleneck and constraints before choosing technology or architecture."
 },
 {
 icon: BrainCircuit,
 text: "Applying AI models and workflow orchestration only where they deliver measurable operational value."
 },
 {
 icon: Award,
 text: "Connecting new capabilities reliably into your existing databases, legacy services, and workflows."
 },
 {
 icon: ShieldCheck,
 text: "Building with thorough automated testing, maintainable design, clear documentation, and clean handover."
 }
];

const stats = [
 {
 value: "61",
 label: "Consultation prep time reduction in clinical workflow automation",
 suffix: "%"
 },
 {
 value: "34",
 label: "Multi-cloud hosting cost reduction via architecture optimization",
 suffix: "%"
 },
 {
 value: "42",
 label: "Faster onboarding ramp-up in enterprise operations workflow",
 suffix: "%"
 },
 {
 prefix: "< ",
 value: "50",
 label: "Core API routing response latency delivered in production",
 suffix: "ms"
 }
];

export default function WhyChooseUs() {
 return (
 <section className="py-12 md:py-20 lg:py-20">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-8 md:mb-12 lg:mb-20">
 <StandardizedHeading lines={[ "Why Work With Cauders" ]} />
 <ScrollFadeIn>
 <p className={\`mt-2 md:mt-4 \${typography.bodyBase} font-normal text-foreground max-w-2xl mx-auto\`}>
 Engineering focused on operational problems, clear architectural boundaries, and verifiable delivery outcomes.
 </p>
 </ScrollFadeIn>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 lg:mb-12">
 {features.map((feature, index) => (
 <ScrollFadeIn key={index} style={{ animationDelay: \`\${index * 100}ms\` }} className="h-full">
 <div className="flex flex-col items-start gap-4 md:gap-6 h-full p-4 md:p-6 hover:-translate-y-1 transition-transform duration-300">
 <CircleIcon icon={feature.icon} className="text-zinc shadow-sm" iconClassName="w-6 h-6 md:w-8 md:h-8" />
 <p className="text-body-base text-foreground font-medium">{feature.text}</p>
 </div>
 </ScrollFadeIn>
 ))}
 </div>

 <div className="mb-4 text-center">
 <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
 Selected Project Outcomes
 </p>
 <p className="text-xs text-muted-foreground mt-1">
 Measured across specific client implementations; not company-wide averages or guarantees.
 </p>
 </div>

 <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
 {stats.map((stat, index) => (
 <ScrollFadeIn key={index} style={{ animationDelay: \`\${(index + 4) * 100}ms\` }} className="h-full">
 <ContainerCard hoverEffect className="text-center py-8 md:py-12 px-4 md:px-6 h-full flex flex-col justify-center items-center">
 <p className="text-4xl md:text-5xl lg:text-6xl text-foreground font-headline font-semibold mb-2 md:mb-3">
 {stat.prefix || ""}
 <AnimatedNumber value={parseInt(stat.value)} />
 {stat.suffix}
 </p>
 <p className="text-xs md:text-sm text-muted-foreground font-medium leading-relaxed">{stat.label}</p>
 </ContainerCard>
 </ScrollFadeIn>
 ))}
 </div>
 </div>
 </section>
 );
}
`;

fs.writeFileSync(whyPath, whyUpdated, 'utf8');
console.log('Updated WhyChooseUs.tsx');

// 4. ServicesPreview.tsx
const servicesPreviewPath = path.join(root, 'src/components/cauders/ServicesPreview.tsx');
const servicesPreviewUpdated = `'use client';

import ScrollFadeIn from "./ScrollFadeIn";
import StandardizedHeading from "./StandardizedHeading";
import ArrowBadge from "./ArrowBadge";
import GradientContainer from "./GradientContainer";
import InfoCard from "./InfoCard";
import { Button } from "../ui/button";
import { Code, Blocks, Smartphone, CloudCog } from 'lucide-react';

const coreServices = [
 {
 slug: 'custom-ai-development',
 title: 'Custom AI Development',
 description: 'We engineer production-ready AI applications and intelligent workflow systems. From integrating large language models and retrieval pipelines into operational software to building specialized document processing, conversational assistants, and automated multi-step triage.',
 icon: Code,
 category: 'ai/ai-product-engineering'
 },
 {
 slug: 'custom-software-development',
 title: 'Custom Software Development',
 description: 'We build resilient web applications, custom SaaS platforms, and secure APIs engineered for long-term maintainability. We connect fragmented legacy databases, design clean service architectures, and automate operational workflows across your business.',
 icon: Blocks,
 category: 'services/software-solutions'
 },
 {
 slug: 'mobile-app-development',
 title: 'Mobile App Development',
 description: 'We develop cross-platform and native mobile applications using Flutter, React Native, iOS, and Android. Built with robust backend synchronization, offline-first data handling, secure authentication, and responsive interfaces for customer-facing or internal field operations.',
 icon: Smartphone,
 category: 'services/software-solutions'
 },
 {
 slug: 'cloud-transformation',
 title: 'Cloud & Infrastructure',
 description: 'We design, deploy, and maintain cloud infrastructure on AWS, Azure, and Google Cloud Platform. From containerized microservices and automated CI/CD pipelines to infrastructure-as-code and cloud cost optimization that controls compute spend without sacrificing reliability.',
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
 <StandardizedHeading lines={["Core Engineering Capabilities"]} className="text-background" />
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
 ctaHref={\`/\${service.category}/\${service.slug}\`}
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
`;

fs.writeFileSync(servicesPreviewPath, servicesPreviewUpdated, 'utf8');
console.log('Updated ServicesPreview.tsx');

// 5. HomePageContact.tsx
const contactPath = path.join(root, 'src/components/cauders/HomePageContact.tsx');
let contactContent = fs.readFileSync(contactPath, 'utf8');

const contactUpdated = `'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
 Form,
 FormControl,
 FormField,
 FormItem,
 FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitHomePageContactForm } from "@/app/actions";
import ScrollFadeIn from "./ScrollFadeIn";
import { Loader2 } from "lucide-react";
import ArrowBadge from "./ArrowBadge";
import StandardizedHeading from "./StandardizedHeading";
import { typography } from "@/lib/typography";

const formSchema = z.object({
 name: z.string().min(1, { message: "Name cannot be empty." }),
 job: z.string().min(1, { message: "Role or title cannot be empty." }),
 city: z.string().min(1, { message: "Location or organization cannot be empty." }),
 question: z.string().min(1, { message: "Please describe your project or inquiry." }),
 email: z.string().email({ message: "Please enter a valid email address." }),
});

export default function HomePageContact() {
 const { toast } = useToast();
 const form = useForm<z.infer<typeof formSchema>>({
 resolver: zodResolver(formSchema),
 defaultValues: {
 name: "",
 job: "",
 city: "",
 question: "",
 email: "",
 },
 });

 const { isSubmitting } = form.formState;

 async function onSubmit(values: z.infer<typeof formSchema>) {
 try {
 const result = await submitHomePageContactForm({
 name: values.name,
 job: values.job,
 city: values.city,
 question: values.question,
 email: values.email,
 });
 if (result.success) {
 toast({
 title: "Inquiry Received",
 description: result.message || "Thank you. Our engineering team will review your requirements and follow up.",
 });
 form.reset();
 } else {
 toast({
 variant: "destructive",
 title: "Submission Error",
 description: result.message || "There was a problem submitting your inquiry. Please try again.",
 });
 }
 } catch (error) {
 toast({
 variant: "destructive",
 title: "Submission Error",
 description: "An unexpected error occurred. Please try again or reach out directly.",
 });
 }
 }

 return (
 <section id="contact" className="py-12 md:py-20 lg:py-20">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
 <div className="h-full flex flex-col">
 <div className="w-full flex flex-col items-start">
 <ScrollFadeIn>
 <ArrowBadge href="/contact" text="Contact Us" variant="black" className="mb-2 md:mb-4" />
 </ScrollFadeIn>
 <StandardizedHeading lines={["Start a Technical Discussion"]} />
 <ScrollFadeIn delay={100}>
 <p className={\`mt-2 md:mt-4 \${typography.bodyBase} font-normal text-foreground max-w-[85%] leading-relaxed\`}>
 Tell us about your application, workflow automation needs, or technical requirements. We will review your context and connect you directly with an engineering lead.
 </p>
 </ScrollFadeIn>
 </div>
 </div>
 <ScrollFadeIn delay="delay-200" className="h-full flex flex-col justify-center text-foreground">
 <Form {...form}>
 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6 w-full text-lg md:text-[24px] font-medium leading-relaxed">
 <div>
 <div className="flex items-center gap-2 md:gap-3 flex-wrap">
 <span>Hi, my name is</span>
 <FormField
 control={form.control}
 name="name"
 render={({ field }) => (
 <FormItem className="inline-block">
 <FormControl>
 <Input placeholder="Your Name" {...field} className="bg-card border-input rounded-full h-8 md:h-10 px-4 md:px-6 text-sm md:text-base" />
 </FormControl>
 <FormMessage />
 </FormItem>
 )}
 />
 </div>
 </div>
 <div>
 <div className="flex items-center gap-2 md:gap-3 flex-wrap">
 <span>I work as</span>
 <FormField
 control={form.control}
 name="job"
 render={({ field }) => (
 <FormItem className="inline-block">
 <FormControl>
 <Input placeholder="Your Role / Title" {...field} className="bg-card border-input rounded-full h-8 md:h-10 px-4 md:px-6 text-sm md:text-base" />
 </FormControl>
 <FormMessage />
 </FormItem>
 )}
 />
 <span>at</span>
 <FormField
 control={form.control}
 name="city"
 render={({ field }) => (
 <FormItem className="inline-block">
 <FormControl>
 <Input placeholder="Company / City" {...field} className="bg-card border-input rounded-full h-8 md:h-10 px-4 md:px-6 text-sm md:text-base" />
 </FormControl>
 <FormMessage />
 </FormItem>
 )}
 />
 <span>and we need support with:</span>
 </div>
 <FormField
 control={form.control}
 name="question"
 render={({ field }) => (
 <FormItem className="mt-3">
 <FormControl>
 <Textarea placeholder="Describe your initiative, architecture requirements, or project scope..." className="bg-card border-input rounded-2xl md:rounded-3xl min-h-[80px] md:min-h-[100px] p-4 md:p-6 text-sm md:text-base" {...field} />
 </FormControl>
 <FormMessage />
 </FormItem>
 )}
 />
 </div>
 <div>
 <div className="flex items-center gap-2 md:gap-3 flex-wrap">
 <span>You can reach me at</span>
 <FormField
 control={form.control}
 name="email"
 render={({ field }) => (
 <FormItem className="inline-block">
 <FormControl>
 <Input type="email" placeholder="work.email@company.com" {...field} className="bg-card border-input rounded-full h-8 md:h-10 px-4 md:px-6 text-sm md:text-base" />
 </FormControl>
 <FormMessage />
 </FormItem>
 )}
 />
 <span>to review technical requirements.</span>
 </div>
 </div>
 <div className="text-left pt-2 md:pt-4">
 <Button type="submit" variant="zinc" size="lg">
 {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
 Send Inquiry
 </Button>
 </div>
 </form>
 </Form>
 </ScrollFadeIn>
 </div>
 </div>
 </section>
 );
}
`;

fs.writeFileSync(contactPath, contactUpdated, 'utf8');
console.log('Updated HomePageContact.tsx');

// 6. PortfolioSection.tsx
const portfolioSecPath = path.join(root, 'src/components/cauders/PortfolioSection.tsx');
const portfolioSecUpdated = `"use client";

import GradientContainer from "./GradientContainer";
import ArrowBadge from "./ArrowBadge";
import StandardizedHeading from "./StandardizedHeading";
import PortfolioPreview from "./PortfolioPreview";
import ScrollFadeIn from "./ScrollFadeIn";
import { Button } from "../ui/button";
import Link from "next/link";
import { typography } from "@/lib/typography";

export default function PortfolioSection() {
 return (
 <section id="portfolio-preview">
 <GradientContainer className="py-20 lg:py-20">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex flex-col items-center justify-center gap-4">
 <ScrollFadeIn>
 <ArrowBadge href="#portfolio-preview" text="Selected Work" />
 </ScrollFadeIn>
 <StandardizedHeading lines={["Systems & Solutions In Production"]} className="text-background" />
 </div>
 </div>
 
 <div className="mt-2 md:mt-4 w-full overflow-hidden">
 <PortfolioPreview />
 </div>

 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mt-12 md:mt-16 max-w-2xl mx-auto">
 <p className={\`text-background \${typography.bodyBase} font-normal max-w-2xl mx-auto leading-relaxed\`}>
 Explore production applications, workflow automations, and custom software systems delivered across diverse operational environments.
 </p>
 <Button asChild variant="outline" className="mt-8 px-12">
 <Link href="/contact">
 Start a Project
 </Link>
 </Button>
 </div>
 </div>
 </GradientContainer>
 </section>
 );
}
`;

fs.writeFileSync(portfolioSecPath, portfolioSecUpdated, 'utf8');
console.log('Updated PortfolioSection.tsx');

// 7. MobilePortfolio.tsx
const mobilePortPath = path.join(root, 'src/components/cauders/MobilePortfolio.tsx');
const mobilePortUpdated = `'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import ScrollFadeIn from './ScrollFadeIn';
import StandardizedHeading from './StandardizedHeading';
import placeholderImages from '@/lib/placeholder-images.json';
import ContainerCard from './ContainerCard';
import { typography } from "@/lib/typography";

export default function MobilePortfolio() {
 return (
 <section className="text-foreground pt-0 lg:pt-16 pb-12 md:pb-20 lg:pb-32 overflow-hidden">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center max-w-4xl mx-auto">
 <StandardizedHeading lines={["Mobile Architecture For Field & Consumer Workflows"]} />
 <ScrollFadeIn delay={100}>
 <p className={\`mt-2 md:mt-4 \${typography.bodyBase} font-normal text-foreground max-w-2xl mx-auto\`}>
 Engineered with offline synchronization, real-time data connectivity, and native responsiveness.
 </p>
 </ScrollFadeIn>
 </div>

 <div className="relative mt-8 md:mt-16">
 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
 <div className="flex flex-col gap-4">
 <div className="bg-gradient-container rounded-2xl p-6 md:p-8 flex flex-col justify-between text-white min-h-[150px] md:min-h-[200px]">
 <div>
 <p className="text-body-base max-w-[85%]">Cross-platform mobile engineering using Flutter and React Native, sharing business logic while retaining native device performance.</p>
 </div>
 <div className="flex items-end mt-4">
 <h3 className="text-2xl md:text-3xl font-medium">Cross-Platform</h3>
 <Link href="/services/software-solutions/mobile-app-development" className="bg-white text-black rounded-full p-2 hover:bg-black hover:text-primary transition-colors ml-auto">
 <ArrowUpRight className="w-6 h-6" />
 </Link>
 </div>
 </div>
 <ContainerCard className="relative min-h-[250px] md:min-h-[350px] overflow-hidden">
 <Image
 src={placeholderImages.mobilePortfolio.screen1.imageUrl}
 alt="Mobile app interface"
 fill
 className="object-cover"
 data-ai-hint={placeholderImages.mobilePortfolio.screen1.aiHint}
 />
 </ContainerCard>
 </div>

 <ContainerCard className="relative min-h-[300px] md:min-h-[550px] overflow-hidden flex flex-col justify-end px-4 pb-4 md:px-6 md:pb-6">
 <Image
 src={placeholderImages.mobilePortfolio.screen2.imageUrl}
 alt="Operations dashboard mobile screen"
 fill
 className="object-cover"
 data-ai-hint={placeholderImages.mobilePortfolio.screen2.aiHint}
 />
 <div className="relative z-10 mb-4 md:mb-6">
 <div className="glass-effect backdrop-blur-2xl rounded-2xl p-4 md:p-6 flex flex-col text-black">
 <div>
 <p className="text-body-base mb-2 md:mb-4 max-w-[90%]">Operational mobile interfaces connecting field teams, sensor data, and backend inventory databases in real time.</p>
 </div>
 <div className="mt-2 md:mt-8">
 <div className="flex items-end">
 <h3 className="text-2xl md:text-3xl font-medium">Field & Operations</h3>
 <Link href="/contact" className="relative rounded-full w-10 h-10 ml-auto group overflow-hidden flex items-center justify-center">
 <div className="absolute inset-0 bg-gradient-container transition-opacity duration-300 group-hover:opacity-0 rounded-full" />
 <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-full" />
 <ArrowUpRight className="w-6 h-6 relative z-10 text-white group-hover:text-primary transition-colors duration-300" />
 </Link>
 </div>
 </div>
 </div>
 </div>
 </ContainerCard>

 <div className="flex flex-col gap-4">
 <ContainerCard className="relative min-h-[250px] md:min-h-[350px] overflow-hidden">
 <Image
 src={placeholderImages.mobilePortfolio.screen3.imageUrl}
 alt="Offline mobile synchronization screen"
 fill
 className="object-cover"
 data-ai-hint={placeholderImages.mobilePortfolio.screen3.aiHint}
 />
 </ContainerCard>
 <div className="bg-gradient-container rounded-2xl p-6 md:p-8 flex flex-col justify-between text-white min-h-[150px] md:min-h-[200px]">
 <div>
 <p className="text-body-base max-w-[85%]">High-concurrency mobile backends with secure token authentication, push notification orchestration, and offline caching.</p>
 </div>
 <div className="flex items-end mt-4">
 <h3 className="text-2xl md:text-3xl font-medium">Backend Sync</h3>
 <Link href="/services/software-solutions/mobile-app-development" className="bg-white text-black rounded-full p-2 hover:bg-black hover:text-primary transition-colors ml-auto">
 <ArrowUpRight className="w-6 h-6" />
 </Link>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}
`;

fs.writeFileSync(mobilePortPath, mobilePortUpdated, 'utf8');
console.log('Updated MobilePortfolio.tsx');

// 8. Testimonials.tsx -> Repurposed to "Engineering Outcomes in Practice"
const testimonialsPath = path.join(root, 'src/components/cauders/Testimonials.tsx');
const testimonialsUpdated = `'use client';

import {
 Carousel,
 CarouselContent,
 CarouselItem,
 CarouselNext,
 CarouselPrevious,
 type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import ScrollFadeIn from "./ScrollFadeIn";
import Autoplay from "embla-carousel-autoplay";
import React, { useState, useEffect } from "react";
import StandardizedHeading from "./StandardizedHeading";
import { typography } from "@/lib/typography";
import ArrowBadge from "./ArrowBadge";
import { cn } from "@/lib/utils";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface EvidenceItem {
 domain: string;
 title: string;
 problemAndSolution: string;
 measuredOutcome: string;
 capabilityBadge: string;
 link: string;
}

const evidenceData: EvidenceItem[] = [
 {
 domain: "Clinical Workflow Automation",
 title: "Consultation Preparation Triage",
 problemAndSolution: "Automated multi-stage appointment intake and clinical data aggregation across disparate electronic health records to eliminate repetitive manual intake steps.",
 measuredOutcome: "61% reduction in preparation time per consultation",
 capabilityBadge: "AI & Workflow Orchestration",
 link: "/services/ai-product-engineering/custom-ai-development"
 },
 {
 domain: "Multi-Cloud Infrastructure",
 title: "Enterprise Cloud Optimization",
 problemAndSolution: "Restructured microservices orchestration, rightsized compute instances, and implemented automated auto-scaling across combined AWS and GCP environments.",
 measuredOutcome: "34% reduction in multi-cloud hosting expenditures",
 capabilityBadge: "Cloud Transformation",
 link: "/services/cloud-digital-transformation/cloud-transformation"
 },
 {
 domain: "High-Concurrency Consumer App",
 title: "Scalable Mobile Architecture",
 problemAndSolution: "Engineered real-time mobile platform with resilient offline caching, database partitioning, and background synchronization under intensive usage spikes.",
 measuredOutcome: "99.9% crash-free sessions across 1M+ active downloads",
 capabilityBadge: "Mobile Engineering",
 link: "/services/software-solutions/mobile-app-development"
 },
 {
 domain: "Data Routing & Microservices",
 title: "High-Throughput API Engine",
 problemAndSolution: "Engineered distributed API gateway with connection pooling, Redis caching, and asynchronous task workers to handle dense transaction volumes reliably.",
 measuredOutcome: "Sub-50ms core routing response latency",
 capabilityBadge: "Custom Software Architecture",
 link: "/services/software-solutions/custom-software-development"
 },
 {
 domain: "HR Operations Workflow",
 title: "Automated Employee Onboarding",
 problemAndSolution: "Built end-to-end process orchestration connecting identity verification, workspace provisioning, and document validation into a single automated pipeline.",
 measuredOutcome: "42% faster ramp-up time for new hires",
 capabilityBadge: "Workflow Automation",
 link: "/services/ai-product-engineering/automation-custom-applications"
 }
];

export default function Testimonials() {
 const [api, setApi] = useState<CarouselApi>();
 const [current, setCurrent] = useState(0);

 const plugin = React.useRef(
 Autoplay({ delay: 5000, stopOnInteraction: true })
 );

 useEffect(() => {
 if (!api) return;
 setCurrent(api.selectedScrollSnap());
 const handleSelect = () => setCurrent(api.selectedScrollSnap());
 api.on("select", handleSelect);
 return () => {
 api.off("select", handleSelect);
 };
 }, [api]);

 return (
 <section className="py-16 md:py-20 overflow-hidden">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
 <div className="flex flex-col items-start justify-center gap-2">
 <ScrollFadeIn>
 <ArrowBadge href="/services" text="Selected Evidence" variant="black" />
 </ScrollFadeIn>
 <StandardizedHeading 
 lines={[
 { text: "Engineering Outcomes in Practice" }
 ]}
 />
 <ScrollFadeIn delay={100}>
 <p className={\`mt-2 md:mt-4 \${typography.bodyBase} font-normal text-foreground max-w-2xl\`}>
 Documented technical delivery, operational impact, and architecture across specialized client applications.
 </p>
 </ScrollFadeIn>
 </div>
 </div>

 <ScrollFadeIn delay="delay-200" className="w-full">
 <Carousel
 setApi={setApi}
 plugins={[plugin.current]}
 opts={{
 align: "center",
 loop: true,
 watchDrag: false,
 }}
 className="w-full"
 >
 <CarouselContent className="-ml-4 py-8 mb-4 md:mb-8">
 {evidenceData.map((item, index) => (
 <CarouselItem key={index} className="sm:basis-1/2 lg:basis-[40%] xl:basis-1/3 pl-4 md:pl-8">
 <div className={cn("p-1 h-full transition-transform duration-500 ease-out", index === current ? "scale-100 md:scale-105" : "scale-90 opacity-100")}>
 <Link href={item.link} className="block h-full group cursor-pointer">
 <Card className="bg-white w-full h-full min-h-[300px] md:min-h-[340px] rounded-[16px] md:rounded-[20px] shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] border border-border/40 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_-5px_rgba(13,148,136,0.2)] transition-all duration-500 flex flex-col justify-between overflow-hidden relative">
 <CardContent className="p-6 md:p-8 flex flex-col flex-grow relative z-10 h-full">
 <div>
 <span className="text-primary text-[11px] md:text-xs font-bold uppercase tracking-wider">
 {item.domain}
 </span>
 <h3 className="text-lg md:text-xl font-bold font-headline text-foreground mt-1">
 {item.title}
 </h3>
 </div>

 <div className="flex flex-col justify-center flex-grow py-4">
 <p className="text-sm md:text-base font-normal text-muted-foreground leading-relaxed">
 {item.problemAndSolution}
 </p>
 </div>

 <div className="pt-4 mt-auto border-t border-border/50 w-full flex items-center justify-between">
 <div className="flex items-center gap-2">
 <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
 <span className="text-xs md:text-sm font-semibold text-foreground">
 {item.measuredOutcome}
 </span>
 </div>
 <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1" />
 </div>
 </CardContent>
 </Card>
 </Link>
 </div>
 </CarouselItem>
 ))}
 </CarouselContent>
 <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:mt-8 flex justify-center">
 <CarouselPrevious className="static -translate-x-1 bg-card border-border text-foreground hover:bg-muted" />
 <CarouselNext className="static translate-x-1 bg-card border-border text-foreground hover:bg-muted" />
 </div>
 </Carousel>
 </ScrollFadeIn>
 </section>
 );
}
`;

fs.writeFileSync(testimonialsPath, testimonialsUpdated, 'utf8');
console.log('Updated Testimonials.tsx');

// 9. GetAQuote.tsx
const quotePath = path.join(root, 'src/components/cauders/GetAQuote.tsx');
const quoteUpdated = `'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ScrollFadeIn from './ScrollFadeIn';
import GradientContainer from './GradientContainer';
import SplitButton from './SplitButton';
import { typography } from "@/lib/typography";

export default function GetAQuote({
 title = "Discuss Your Engineering Initiative",
 description = "Whether you are evaluating an AI initiative, modernizing workflow automation, or scoping a custom software application, connect directly with our engineering team to review feasibility and delivery requirements."
}: {
 title?: string;
 description?: string;
}) {
 const router = useRouter();
 const [email, setEmail] = useState('');

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
 e.preventDefault();
 router.push(\`/contact?email=\${encodeURIComponent(email)}\`);
 };

 return (
 <section className="pt-0 pb-8 md:pb-10 lg:pb-12">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <ScrollFadeIn>
 <GradientContainer 
 className="rounded-3xl py-16 md:py-20 px-6 md:px-12 text-center relative overflow-hidden"
 imageSrc="/images/background/overlay-bg-1.svg"
 >
 <div className="relative z-10">
 <h2 
 className="font-headline text-2xl sm:text-4xl md:text-6xl text-foreground leading-tight font-medium text-white max-w-4xl mx-auto"
 dangerouslySetInnerHTML={{ __html: title }}
 />
 <p className={\`mt-4 md:mt-8 \${typography.bodyBase} font-normal text-white max-w-2xl mx-auto leading-relaxed\`}>
 {description}
 </p>
 <form onSubmit={handleSubmit} className="mt-8 md:mt-16 max-w-sm md:max-w-md mx-auto">
 <SplitButton 
 emailValue={email}
 onEmailChange={(e) => setEmail(e.target.value)}
 />
 </form>
 </div>
 </GradientContainer>
 </ScrollFadeIn>
 </div>
 </section>
 );
}
`;

fs.writeFileSync(quotePath, quoteUpdated, 'utf8');
console.log('Updated GetAQuote.tsx');
