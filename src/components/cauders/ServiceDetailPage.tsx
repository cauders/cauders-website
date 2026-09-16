import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DetailedServiceData } from '@/lib/service-details';
import StandardizedHeading from './StandardizedHeading';
import ScrollFadeIn from './ScrollFadeIn';
import ScrollSpyItem from './ScrollSpyItem';
import HomePageContact from './HomePageContact';
import WhyChooseUs from './WhyChooseUs';
import LogoLoop from './LogoLoop';
import { ArrowRight, CheckCircle2, TrendingUp, PenTool, Code, Bot, Rocket, Wrench, Layers } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { industries as mainIndustries, ServiceCategory } from '@/lib/data';
import ArrowBadge from './ArrowBadge';
import ServiceCard from './ServiceCard';
import ContainerCard from './ContainerCard';
import BlurCircle from './BlurCircle';
import { Button } from '@/components/ui/button';
import ImageCard from './ImageCard';
import GradientContainer from './GradientContainer';
import { typography } from '@/lib/typography';
import ProcessHoverSection from './ProcessHoverSection';
import SectionHeader from './SectionHeader';
import SplitSectionHeader from './SplitSectionHeader';
import ImageContainerHero from './ImageContainerHero';
import FAQPreview from './FAQPreview';

interface ServiceDetailPageProps {
 data: DetailedServiceData;
}

import InfoCard from './InfoCard';
import placeholderImages from '@/lib/placeholder-images.json';
import { cn } from '@/lib/utils';
import GetAQuote from './GetAQuote';
import IndustriesSection from './IndustriesSection';
import TechLogo from './TechLogo';

const splitForGradient = (text: string) => {
 if (!text) return [];
 const words = text.split(' ');
 if (words.length <= 2) return [{ text, isGradient: true }];
 return [
 { text, gradientLastWords: 2 }
 ];
};

export default function ServiceDetailPage({ data }: ServiceDetailPageProps) {
 return (
 <div className="selection:bg-primary/30">
 {/* 1. Centered "Command Center" Hero */}
 <ImageContainerHero 
 imageUrl={data.hero.imageUrl || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1920"}
 imageAlt={data.hero.title}
 badgeText={data.hero.badge}
 badgeHref="#overview"
 headingLines={data.hero.subtitle ? [data.hero.title, data.hero.subtitle] : [data.hero.title]}
 description={data.hero.description}
 ctaText="Explore Capabilities"
 ctaHref="#capabilities"
 />

 {/* 2. Floating "Vision" Overview */}
 <section id="overview" className="py-16 md:py-20 bg-transparent relative z-20">
 <BlurCircle className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] top-[100%] -translate-y-[25%] left-[-20rem]" />
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
 <div className="lg:col-span-6 relative z-10">
 <ScrollFadeIn>
 <div className="flex flex-col items-start mb-6">
 <ArrowBadge href="#overview" text="Overview" variant="black" className="mb-4" />
 </div>
 <div className="space-y-6 mt-6">
 {data.overview.paragraphs.map((paragraph, idx) => (
 <p key={idx} className={`text-foreground font-normal ${typography.bodyBase}`}>
 {paragraph}
 </p>
 ))}
 </div>
 {data.overview.points && data.overview.points.length > 0 && (
 <ul className="mt-8 space-y-6">
 {data.overview.points.map((point, idx) => (
 <li key={idx} className="flex items-start gap-3">
 <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-zinc" fill="currentColor" stroke="white" />
 <div className="flex flex-col gap-1.5">
 <span className="font-bold text-foreground">{point.title}</span>
 <p className="text-sm text-foreground/80 leading-relaxed max-w-lg">{point.description}</p>
 </div>
 </li>
 ))}
 </ul>
 )}
 </ScrollFadeIn>
 </div>
 <div className="lg:col-span-6 relative">
 <ScrollFadeIn direction="left" delay={200}>
 <div className="relative aspect-square md:aspect-[4/3] w-full rounded-3xl overflow-hidden border border-primary/10">
 <Image 
 src={data.hero.imageUrl || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"}
 alt={data.overview.heading}
 fill
 className="object-cover"
 />
 {/* Inner glassmorphism glow overlay */}
 <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent pointer-events-none" />
 </div>
 </ScrollFadeIn>
 </div>
 </div>
 </div>
 </section>

 {/* 3. Core Capabilities / Offerings */}
 <section id="capabilities" className="py-16 md:py-20 bg-transparent">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <SectionHeader 
 headingLines={[{ text: data.capabilitiesTitle, gradientLastWords: 2 }]}
 description={data.capabilitiesDescription}
 align="center"
 className="mb-16"
 />
 
 <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
 {data.capabilities.map((capability, idx) => (
 <ScrollFadeIn key={idx} delay={idx * 50} className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-1.125rem)]">
 <ImageCard 
 imageUrl={capability.imageUrl || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600"}
 altText={capability.title}
 heading={capability.title}
 subheading="Talk to an Expert"
 description={capability.description}
 href="/contact"
 className="aspect-[4/5] sm:aspect-square"
 />
 </ScrollFadeIn>
 ))}
 </div>
 </div>
 </section>

 {/* 6. Deep-Dive Industries Grid */}
 <IndustriesSection 
 title={data.industriesTitle}
 description={data.industriesDescription}
 ctaText={data.industriesCtaText}
 ctaLink={data.industriesCtaLink}
 industries={data.industries.map(ind => {
 const i = mainIndustries.find(i => i.slug === ind.slug);
 return i ? { slug: i.slug, title: i.title, heroDescription: i.heroDescription } : null;
 }).filter(Boolean) as any}
 />

 {/* 7. Tech Stack Grid (Moved under Industries) */}
 {/* 7. Tech Stack Banner */}
 {data.techStack && data.techStack.length > 0 && (
 <section className="py-16 md:py-20 relative z-10 bg-transparent">
 <BlurCircle className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] top-0 -translate-y-[25%] right-[-20rem]" />
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="rounded-[3rem] bg-gradient-container text-white py-16 px-4 md:px-12 overflow-hidden">
 <SectionHeader
 headingLines={[{ text: data.techStackTitle, gradientType: 'light' }]}
 description="We leverage a modern and robust technology stack to build scalable, high-performance, and secure digital solutions."
 align="center"
 theme="dark"
 className="mb-16 relative z-10"
 />
 <div className="relative z-10 -mx-4 md:-mx-12">
 <LogoLoop 
 speed={80}
 direction="left"
 pauseOnHover={false}
 gap={40}
 logoHeight={60}
 fadeOut={true}
 fadeOutColor="transparent"
 logos={data.techStack.map((tech) => ({
 node: <TechLogo name={tech.name} />
 }))}
 />
 </div>
 </div>
 </div>
 </section>
 )}

 {/* 5. Process / Capabilities Flow */}
 <ProcessHoverSection title={data.processTitle} steps={data.processSteps} /> 
 
 <section className="relative">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 {/* 6. Why Choose Us Section */}
 {data.whyUsTitle && data.whyUsCards && data.whyUsCards.length > 0 && (
 <div className="py-16 md:py-20">
 {/* Heading Layout */}
 <SplitSectionHeader 
 badgeText="Why Choose Cauders"
 badgeHref="#why-us"
 headingLines={splitForGradient(data.whyUsTitle)}
 description={data.whyUsDescription}
 ctaText={data.whyUsCtaText}
 ctaLink={data.whyUsCtaLink}
 />

 {/* Elegant Grid List */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
 {data.whyUsCards.map((card, index) => {
 const Icon = card.icon ? (LucideIcons as any)[card.icon] : null;
 
 return (
 <ScrollFadeIn key={index} delay={index * 0.1} className="h-full">
 <ContainerCard hoverEffect className="h-full min-h-[300px] flex flex-col justify-center group p-6 md:p-8 text-left">
 {/* Icon Column */}
 <div className="flex-shrink-0 bg-zinc rounded-full p-3 md:p-4 border border-primary/20 group-hover:bg-zinc/90 transition-colors w-fit mb-10">
 {card.imageUrl ? (
 <div className="relative w-8 h-8 md:w-10 md:h-10">
 <Image src={card.imageUrl} fill alt={card.title} className="object-contain" />
 </div>
 ) : Icon ? (
 <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
 ) : (
 <LucideIcons.CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
 )}
 </div>
 
 {/* Content Column */}
 <h3 className="text-heading-card font-medium font-headline text-foreground mb-3">
 {card.title}
 </h3>
 <p className={`${typography.bodyBase} text-foreground`}>
 {card.description}
 </p>
 </ContainerCard>
 </ScrollFadeIn>
 );
 })}
 </div>
 </div>
 )}
 </div>
 </section>

 {/* FAQ Section */}
 {data.faqs && data.faqs.length > 0 && (
 <FAQPreview 
 faqs={data.faqs}
 badgeText="FAQ"
 className="py-16 md:py-20"
 />
 )}

 {/* CTA Section */}
 <GetAQuote 
 title={data.ctaHeading || "Let's Get To Work"}
 />
 </div>
 );
}
