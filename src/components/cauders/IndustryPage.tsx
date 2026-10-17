import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Industry } from '@/lib/data';
import { DetailedIndustryData } from '@/lib/industry-details';
import StandardizedHeading from './StandardizedHeading';
import BlurCircle from './BlurCircle';
import ScrollFadeIn from './ScrollFadeIn';
import SectionHeader from './SectionHeader';
import SplitSectionHeader from './SplitSectionHeader';
import FAQPreview from './FAQPreview';
import ProcessHoverSection from './ProcessHoverSection';
import ScrollSpyChallenges from './ScrollSpyChallenges';
import GetAQuote from './GetAQuote';
import ImageContainerHero from './ImageContainerHero';
import ArrowBadge from './ArrowBadge';
import ImageCard from './ImageCard';
import GradientContainer from './GradientContainer';
import InfoCard from './InfoCard';
import ContainerCard from './ContainerCard';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { CheckCircle2, ArrowRight, Quote } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import placeholderImages from '@/lib/placeholder-images.json';

interface IndustryPageProps {
 industry: Industry;
 detailedData: DetailedIndustryData;
}

const splitForGradient = (text: string) => {
 if (!text) return [];
 const words = text.split(' ');
 if (words.length <= 2) return [{ text, isGradient: true }];
 return [{ text, gradientLastWords: 2 }];
};

const standardProcessSteps = [
 {
 title: 'Discovery & Strategy',
 description: 'We analyze your requirements, target audience, and business goals to define a comprehensive technical roadmap for your project.',
 },
 {
 title: 'Architecture & UX Design',
 description: 'We wireframe interfaces and architect robust systems, ensuring intuitive user experiences and scalable foundations.',
 },
 {
 title: 'Frontend Development',
 description: 'Our engineers build responsive, accessible, and fast-loading user interfaces using modern frameworks like React and Next.js.',
 },
 {
 title: 'Backend & APIs',
 description: 'We develop secure and highly scalable server-side architectures, databases, and third-party API integrations.',
 },
 {
 title: 'Testing & QA',
 description: 'Rigorous automated and manual testing is conducted across devices to guarantee performance, security, and stability.',
 },
 {
 title: 'Deployment & Support',
 description: 'We execute a smooth launch and provide continuous monitoring, maintenance, and updates to keep your platform optimized.',
 }
];

export default function IndustryPage({ industry, detailedData }: IndustryPageProps) {
 const chunkedPartnershipItems = [];
 for (let i = 0; i < detailedData.partnership.items.length; i += 4) {
 chunkedPartnershipItems.push(detailedData.partnership.items.slice(i, i + 4));
 }

 return (
 <div className="selection:bg-primary/30">
 {/* 1. Centered "Command Center" Hero */}
 <ImageContainerHero 
 imageUrl={detailedData.hero.imageUrl || placeholderImages.hero.main.imageUrl}
 imageAlt={detailedData.hero.title}
 badgeText="Industry Focus"
 badgeHref="#overview"
 headingLines={[detailedData.hero.title]}
 description={detailedData.hero.subtitle || ""}
 ctaText="Explore Capabilities"
 ctaHref="#capabilities"
 />

 {/* 2. Floating "Vision" Overview */}
 <section id="overview" className="py-16 md:py-20 bg-transparent relative z-20">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
 <div className="lg:col-span-6">
 <ScrollFadeIn>
 <div className="flex flex-col items-start mb-6">
 <ArrowBadge href="#overview" text="Overview" variant="black" className="mb-4" />
 </div>
 <div className="space-y-6">
 <p className="mt-4 text-body-base text-black">
 {detailedData.overview.description}
 </p>
 {detailedData.overview.bullets && detailedData.overview.bullets.length > 0 && (
 <ul className="space-y-4 mt-6 max-w-[85%]">
 {detailedData.overview.bullets.map((bullet, idx) => (
 <li key={idx} className="flex items-start gap-3">
 <div className="flex-shrink-0 mt-1">
 <CheckCircle2 className="w-5 h-5 text-zinc" />
 </div>
 <span className=" text-base text-black">{bullet}</span>
 </li>
 ))}
 </ul>
 )}
 </div>
 </ScrollFadeIn>
 </div>
 <div className="lg:col-span-6 relative">
 <ScrollFadeIn direction="left" delay={200}>
 <div className="relative aspect-square md:aspect-[4/3] w-full rounded-3xl overflow-hidden border border-primary/10">
 <Image 
 src={detailedData.overview.imageUrl || placeholderImages.team.meeting.imageUrl}
 alt={detailedData.overview.title}
 fill
 className="object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent pointer-events-none" />
 </div>
 </ScrollFadeIn>
 </div>
 </div>
 </div>
 <BlurCircle className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] top-[100%] -translate-y-[25%] left-[-20rem]" />
 </section>

 {/* 3. Core Capabilities (Mapped from servicesBuiltForIndustry to match ServiceDetailPage's ImageCards) */}
 <section id="capabilities" className="py-16 md:py-20 bg-transparent">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex flex-col items-center justify-center mb-16 text-center">
 <ScrollFadeIn delay={100}>
 <StandardizedHeading lines={splitForGradient(detailedData.servicesBuiltForIndustry.title)} />
 {detailedData.servicesBuiltForIndustry.description && (
 <p className="mt-4 text-body-base text-foreground font-normal max-w-2xl mx-auto">
 {detailedData.servicesBuiltForIndustry.description}
 </p>
 )}
 </ScrollFadeIn>
 </div>
 
 <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
 {detailedData.servicesBuiltForIndustry.items.map((svc, idx) => (
 <ScrollFadeIn key={idx} delay={idx * 50} className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-1.125rem)]">
 <ImageCard 
 imageUrl={svc.imageUrl || placeholderImages.services['ai-integrations'].imageUrl}
 altText={svc.title}
 heading={svc.title}
 subheading="Let's Discuss"
 description={svc.description}
 href="/contact"
 className="aspect-[4/5] sm:aspect-square"
 />
 </ScrollFadeIn>
 ))}
 </div>
 </div>
 </section>

 {/* 4. Industry Revolution Quotation */}
 <section className="relative w-full overflow-hidden">
 <GradientContainer className="py-24 md:py-32 lg:py-40 w-full rounded-none" imageSrc={null}>
 <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
 <div className="relative max-w-6xl mx-auto px-8 md:px-16 lg:px-16">
 <ScrollFadeIn className="relative w-full">
 <span className="absolute -left-2 md:-left-12 -top-8 md:-top-16 text-white text-8xl md:text-[160px] font-serif leading-none">“</span>
 <p className="text-body-large lg:text-2xl font-normal text-white text-center relative z-10 px-2 md:px-4">
 {detailedData.industryRevolution}
 </p>
 <span className="absolute -right-2 md:-right-12 -bottom-16 md:-bottom-32 text-white text-8xl md:text-[160px] font-serif leading-none">”</span>
 </ScrollFadeIn>
 </div>
 </div>
 </GradientContainer>
 </section>

 {/* 5. Challenges Section (Split Layout) */}
 <section id="challenges" className="py-16 md:py-20 relative">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
 {/* Left Column: Title & Intro */}
 <div className="lg:col-span-5 sticky top-32 h-fit">
 <div className="flex flex-col items-start">
 <ArrowBadge href="#challenges" text="Challenges" variant="black" className="mb-6 opacity-80" />
 <StandardizedHeading lines={splitForGradient(detailedData.challenges.title)} className="mb-6" />
 <p className="text-foreground text-body-base font-normal text-left mb-8">
 {detailedData.challenges.intro}
 </p>
 <Button asChild variant="zinc" size="lg">
 <Link href="/contact">
 Discuss Your Challenges
 </Link>
 </Button>
 </div>
 </div>

 {/* Right Column: List of Challenges */}
 <div className="lg:col-span-7">
 <ScrollSpyChallenges challenges={detailedData.challenges.items} />
 </div>
 </div>
 </div>
 </section>

 {/* 5.5 Expertise Section (Centered Layout) */}
 <section id="expertise" className="py-16 md:py-20 relative">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <SectionHeader 
 badgeText="Expertise"
 headingLines={(() => {
 const title = detailedData.expertise.title;
 const cleanTitle = title.replace(' IT Solutions', '').replace(' Solutions', '');
 const words = cleanTitle.split(' ');
 const highlightCount = cleanTitle.startsWith('Our Expertise in ') ? Math.max(1, words.length - 3) : 2;
 return [{ text: cleanTitle, gradientLastWords: highlightCount }];
 })()}
 align="center"
 />
 
 <div className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-6xl mx-auto w-full">
 {detailedData.expertise.items.map((exp, idx) => {
 const ExpIcon = (exp.icon && (LucideIcons as any)[exp.icon]) || CheckCircle2;
 return (
 <ScrollFadeIn key={idx} delay={idx * 0.1} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.35rem)] max-w-sm flex">
 <InfoCard
 title={exp.title}
 description={exp.description}
 icon={ExpIcon}
 lineClamp="none"
 className="w-full h-full p-6 md:p-8"
 ctaText="Learn More"
 ctaHref="/contact"
 />
 </ScrollFadeIn>
 )
 })}
 </div>
 </div>
 </section>


 {/* 7. Partnership Benefits (Matches Our Process Layout) */}
 <section className="relative">
 <GradientContainer className="py-16 md:py-20 lg:py-20">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
 {/* Left Column: Text */}
 <div className="lg:pr-8">
 <div className="flex flex-col items-start gap-4">
 <ScrollFadeIn>
 <ArrowBadge href="#" text="Partnership" variant="white" />
 </ScrollFadeIn>
 <StandardizedHeading 
 lines={[{ text: detailedData.partnership.title }]} 
 className="text-white text-3xl sm:text-4xl md:text-5xl"
 />
 <ScrollFadeIn delay={100}>
 <p className="text-body-base font-normal text-white max-w-lg mb-4">
 {detailedData.partnership.intro}
 </p>
 </ScrollFadeIn>
 <ScrollFadeIn delay={150}>
 <Button asChild variant="outline" size="lg" className="mt-2 rounded-full px-8">
 <Link href="/contact">
 Start Your Transformation
 </Link>
 </Button>
 </ScrollFadeIn>
 </div>
 </div>
 {/* Right Column: Cards (with Carousel if > 4 items) */}
 <div className="min-w-0">
 <ScrollFadeIn delay={200}>
 {chunkedPartnershipItems.length > 1 ? (
 <Carousel opts={{ align: "start" }} className="w-full">
 <CarouselContent className="-ml-4 md:-ml-6 py-4">
 {chunkedPartnershipItems.map((chunk, chunkIndex) => (
 <CarouselItem key={chunkIndex} className="pl-4 md:pl-6">
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
 {chunk.map((step, index) => {
 return (
 <InfoCard 
 key={index}
 title={step.title}
 description={step.description}
 hoverReveal={true}
 contentAlign="split"
 className="h-[200px] md:h-[240px]"
 />
 );
 })}
 </div>
 </CarouselItem>
 ))}
 </CarouselContent>
 <div className="flex items-center justify-center gap-4 mt-6 md:mt-8">
 <CarouselPrevious className="relative left-auto right-auto translate-x-0 translate-y-0 h-12 w-12 border-0 bg-white hover:bg-white/90 text-zinc shadow-md" />
 <CarouselNext className="relative left-auto right-auto translate-x-0 translate-y-0 h-12 w-12 border-0 bg-white hover:bg-white/90 text-zinc shadow-md" />
 </div>
 </Carousel>
 ) : (
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
 {chunkedPartnershipItems[0]?.map((step, index) => {
 return (
 <InfoCard 
 key={index}
 title={step.title}
 description={step.description}
 hoverReveal={true}
 contentAlign="split"
 className="h-[200px] md:h-[240px]"
 />
 );
 })}
 </div>
 )}
 </ScrollFadeIn>
 </div>
 </div>
 </div>
 </GradientContainer>
 </section>

 {/* 5. How We Do It / Methodology */}
 <section className="relative">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="py-16 md:py-20">
 <SectionHeader 
 badgeText="Methodology"
 headingLines={[
 { 
 text: "How We Build Solutions", 
 gradientLastWords: 1 
 }
 ]}
 align="center"
 />
 
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 w-full mt-12 md:mt-16">
 {[
 {
 icon: LucideIcons.PenTool,
 title: 'We Lead with Design',
 intro: 'Our team of designers, skilled in product design, UI/UX, and accessibility, create experiences that are:',
 points: [
 { icon: LucideIcons.Clock, title: 'Timely', desc: 'We design at the pace users need, with rapid learning and iteration built in.' },
 { icon: LucideIcons.CheckCircle2, title: 'Useful', desc: 'Success is measured by how easily users achieve their goals.' },
 { icon: LucideIcons.Heart, title: 'Delightful', desc: 'We create thoughtful experiences that feel worthwhile.' }
 ]
 },
 {
 icon: LucideIcons.Code,
 title: 'We Leverage Open Source',
 intro: 'With thousands of contributions to dozens of open-source projects, we have deep expertise that translates into:',
 points: [
 { icon: LucideIcons.Shield, title: 'Sovereignty', desc: 'Avoid vendor lock-in and securely deploy on-premises or in private clouds.' },
 { icon: LucideIcons.Settings2, title: 'Flexibility', desc: 'Customize source code and choose licensing that fits your requirements.' },
 { icon: LucideIcons.Wallet, title: 'Economy', desc: 'Reduce hosting, maintenance, and development costs through free, adaptable, AI-ready open-source technologies at greater scale.' }
 ]
 },
 {
 icon: LucideIcons.Bot,
 title: 'We Accelerate with AI',
 intro: 'We have been working with generative AI for over a decade, applying it to:',
 points: [
 { icon: LucideIcons.Brain, title: 'Build Smarter Software', desc: 'We integrate agentic workflows using LangGraph, open-weight, and frontier models tailored to user needs, prioritizing sovereignty and adaptability.' },
 { icon: LucideIcons.Zap, title: 'Build It Faster Than Ever', desc: 'Our teams use Codex, Claude, and multi-agent workflows while managing security, performance, cost, and governance without compromising speed or quality.' }
 ]
 }
 ].map((step, index) => {
 const Icon = step.icon;
 return (
 <ScrollFadeIn key={index} delay={index * 0.1}>
 <ContainerCard hoverEffect className="rounded-3xl p-8 md:p-10 h-full">
 <div className="w-16 h-16 rounded-2xl bg-zinc border border-primary/20 flex items-center justify-center mb-8">
 <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
 </div>
 <h3 className="text-2xl font-headline font-medium text-foreground mb-4">
 {step.title}
 </h3>
 <p className="text-foreground/80 mb-8 ">
 {step.intro}
 </p>
 <ul className="space-y-6">
 {step.points.map((point, i) => (
 <li key={i} className="flex flex-col">
 <div className="flex items-center gap-3 mb-2">
 <div className="flex-shrink-0 bg-zinc rounded-full p-2 border border-primary/20 flex items-center justify-center">
 <point.icon className="w-4 h-4 text-white" strokeWidth={2} />
 </div>
 <h4 className="text-lg font-medium text-foreground">{point.title}</h4>
 </div>
 <p className="text-sm text-foreground/80 pl-11">{point.desc}</p>
 </li>
 ))}
 </ul>
 </ContainerCard>
 </ScrollFadeIn>
 );
 })}
 </div>
 <div className="mt-16 text-center">
 <Button asChild variant="zinc" size="lg">
 <Link href="/contact">
 Discuss Your Project
 </Link>
 </Button>
 </div>
 </div>
 </div>
 <BlurCircle className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] top-[100%] -translate-y-[85%] right-[-20rem]" />
 </section>

 {/* 6. Why Choose Us Section (Matches Services) */}
 <section className="relative">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="py-16 md:py-20">
 <SplitSectionHeader 
 badgeText="Why Cauders"
 badgeHref="#why-us"
 headingLines={splitForGradient(detailedData.whyChooseUs.title)}
 description={detailedData.whyChooseUs.intro}
 ctaText="Let's Discuss Your Project"
 ctaLink="/contact"
 />

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
 {detailedData.whyChooseUs.items.map((card, index) => {
 const Icon = (card.icon && (LucideIcons as any)[card.icon]) || LucideIcons.CheckCircle;
 return (
 <ScrollFadeIn key={index} delay={index * 0.1} className="h-full">
 <InfoCard
 title={card.title}
 description={card.description}
 icon={Icon}
 lineClamp="none"
 className="h-full p-6 md:p-8"
 ctaText="Learn More"
 ctaHref="/contact"
 />
 </ScrollFadeIn>
 );
 })}
 </div>
 </div>
 </div>
 </section>

 {/* FAQ Section */}
 {detailedData.faqs && detailedData.faqs.length > 0 && (
 <FAQPreview 
 faqs={detailedData.faqs}
 badgeText="FAQ"
 className="py-12 md:py-20"
 />
 )}

 {/* CTA Section */}
 <GetAQuote 
 title="Let's Get to Work"
 />
 </div>
 );
}
