'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ScrollFadeIn from '@/components/cauders/ScrollFadeIn';
import { ArrowRight, Briefcase, Puzzle, TrendingUp, Send, FileText, UserCheck, Handshake, MapPin, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import StandardizedHeading from '@/components/cauders/StandardizedHeading';
import Image from 'next/image';
import ImageContainerHero from '@/components/cauders/ImageContainerHero';
import GradientContainer from '@/components/cauders/GradientContainer';
import ArrowBadge from '@/components/cauders/ArrowBadge';
import BlurCircle from '@/components/cauders/BlurCircle';
import SplitButton from '@/components/cauders/SplitButton';
import AnimatedList from '@/components/cauders/AnimatedList';
import AnimatedNumber from '@/components/cauders/AnimatedNumber';
import { jobOpenings } from '@/lib/data';
import { cn } from '@/lib/utils';
import InfoCard from '@/components/cauders/InfoCard';
import ImageCard from '@/components/cauders/ImageCard';
import placeholderImages from '@/lib/placeholder-images.json';

const benefits = [
 {
 icon: TrendingUp,
 title: "Meaningful Work",
 subheading: "Make a Real Impact",
 description: "Contribute to projects that have a real impact on our clients' success and shape the future of digital interaction.",
 imageUrl: placeholderImages.expertise.imageUrl
 },
 {
 icon: Briefcase,
 title: "Continuous Learning",
 subheading: "Grow With Us",
 description: "We support your growth with access to the latest technologies, courses, and conferences.",
 imageUrl: placeholderImages.innovation.imageUrl
 },
 {
 icon: Puzzle,
 title: "Flexible Culture",
 subheading: "Work-Life Balance",
 description: "Enjoy a healthy work-life balance with flexible hours and remote work opportunities.",
 imageUrl: placeholderImages.vision.imageUrl
 }
];

const hiringSteps = [
 {
 icon: Send,
 number: '01',
 title: 'Apply',
 description: 'Browse our openings and submit your application. We review every single one.',
 },
 {
 icon: FileText,
 number: '02',
 title: 'Evaluate',
 description: 'Our team carefully matches your skills and experience with the right opportunity.',
 },
 {
 icon: UserCheck,
 number: '03',
 title: 'Connect',
 description: 'A conversational interview to understand your aspirations and showcase your potential.',
 },
 {
 icon: Handshake,
 number: '04',
 title: 'Welcome',
 description: 'A thoughtful onboarding experience to set you up for a strong start.',
 },
];

const handleScrollToContent = () => {
 const nextSection = document.getElementById('open-positions');
 if (nextSection) {
 nextSection.scrollIntoView({ behavior: 'smooth' });
 }
 };

export default function CareersPage() {
 const router = useRouter();
 const [email, setEmail] = useState('');

 const handleCTASubmit = (e: React.FormEvent<HTMLFormElement>) => {
 e.preventDefault();
 router.push(`/careers/apply?email=${encodeURIComponent(email)}`);
 };

 return (
 <div className="text-foreground">
 {/* ===== SECTION 1: HERO ===== */}
 <ImageContainerHero 
 imageUrl="https://res.cloudinary.com/cauders/image/upload/v1786803238/workspace_byyhyg.png"
 imageAlt="Cauders workspace"
 badgeText="Careers"
 headingLines={[
 { text: "Where Ambition ", inline: true },
 { text: "Meets Opportunity", isGradient: true, inline: true }
 ]}
 description="We're shaping the future of digital experiences, and we're looking for the ones who'll shape it with us."
 ctaText="Explore Openings"
 ctaHref="#careers-content"
 />

 <div id="careers-content">
 {/* ===== SECTION 2: CULTURE INTRO ===== */}
 <section className="py-16 lg:py-20 relative">
 <BlurCircle className="w-96 h-96 top-0 -right-48" />
 <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
 {/* Left Column: Text */}
 <div>
 <ScrollFadeIn>
 <ArrowBadge href="#" text="Life at Cauders" variant="black" className="mb-4" />
 <div className="space-y-4 mt-4">
 <p className="text-base lg:text-lg text- ">
 Designers, engineers, strategists, and dreamers. If you're driven by purpose and energized by innovation, you've found your people. At Cauders, every voice shapes the product, every idea gets a seat at the table.
 </p>
 <p className="text-base lg:text-lg text- ">
 Whether you're a seasoned professional seeking your next chapter or a fresh graduate ready to make your mark, we provide the platform, mentorship, and culture to help you do the most meaningful work of your career.
 </p>
 </div>
 </ScrollFadeIn>
 </div>
 {/* Right Column: Stats Grid */}
 <div className="lg:pl-8 xl:pl-16">
 <ScrollFadeIn delay={200}>
 <div className="relative w-full aspect-video md:aspect-[4/3] lg:aspect-[3/2] rounded-3xl overflow-hidden shadow-2xl">
 <Image
 src="https://res.cloudinary.com/cauders/image/upload/v1786803238/workspace_byyhyg.png"
 alt="Life at Cauders"
 fill
 className="object-cover transition-transform duration-700 hover:scale-105"
 />
 </div>
 </ScrollFadeIn>
 </div>
 </div>
 </div>
 </section>

 {/* ===== SECTION 3: WHY CAUDERS (Benefits) ===== */}
 <section className="py-16 lg:py-20">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-8 md:mb-12 lg:mb-20">
 <ArrowBadge href="#" text="Our Culture" variant="black" className="mb-4" />
 <StandardizedHeading lines={["Built for People Who Build"]} />
 <ScrollFadeIn>
 <p className="mt-2 text-[10px] md:mt-4 md:text-base text- max-w-2xl mx-auto">
 A culture designed around growth, ownership, and real impact.
 </p>
 </ScrollFadeIn>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
 {benefits.map((benefit, index) => (
 <ScrollFadeIn key={benefit.title} delay={index * 100} className="h-full">
 <ImageCard
 heading={benefit.title}
 subheading={benefit.subheading}
 description={benefit.description}
 imageUrl={benefit.imageUrl}
 altText={benefit.title}
 href="#"
 className="aspect-square md:aspect-[4/5]"
 icon={<benefit.icon className="w-5 h-5 text-white" />}
 />
 </ScrollFadeIn>
 ))}
 </div>
 </div>
 </section>

 {/* ===== SECTION 4: HIRING PROCESS ===== */}
 <section>
 <GradientContainer className="py-16 md:py-20 lg:py-20">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
 {/* Left Column: Text */}
 <div className="lg:pr-8">
 <ScrollFadeIn>
 <div className="flex flex-col items-start gap-4">
 <ArrowBadge href="#" text="How It Works" />
 <StandardizedHeading 
 lines={["Your Path to Cauders"]} 
 className="text-white text-3xl sm:text-4xl md:text-5xl"
 />
 <p className="text-body-base text-white max-w-lg">
 A streamlined, transparent process designed with respect for your time. From application to your first day, we keep it simple.
 </p>
 </div>
 </ScrollFadeIn>
 </div>
 {/* Right Column: Step Cards */}
 <div>
 <ScrollFadeIn delay={200}>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
 {hiringSteps.map((step, index) => (
 <div key={index} className="h-full">
 <InfoCard
 icon={step.icon}
 title={step.title}
 description={step.description}
 stepNumber={step.number}
 />
 </div>
 ))}
 </div>
 </ScrollFadeIn>
 </div>
 </div>
 </div>
 </GradientContainer>
 </section>

 {/* ===== SECTION 5: OPEN POSITIONS ===== */}
 <section id="open-positions" className="py-16 lg:py-20 relative">
 <BlurCircle className="absolute top-0 -left-32 w-96 h-96" />
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
 
 {/* Left Side: Sticky Heading */}
 <div className="lg:col-span-5 lg:sticky lg:top-32 text-left mb-8 lg:mb-0">
 <ArrowBadge href="#" text="Current Openings" variant="black" className="mb-4" />
 <StandardizedHeading lines={["Explore What's Open"]} />
 <ScrollFadeIn>
 <p className="mt-4 md:mt-6 text-body-base text- max-w-lg">
 Discover your next challenge and grow with us. We're always looking for great talent.
 </p>
 </ScrollFadeIn>
 </div>

 {/* Right Side: Job List */}
 <div className="lg:col-span-7">
 <div className="flex flex-col gap-4">
 <AnimatedList 
 items={jobOpenings}
 disableLocalScroll={true}
 onItemSelect={(job) => router.push(`/careers/apply?role=${encodeURIComponent(job.title)}`)}
 renderItem={(job, index, isSelected) => (
  <div 
 className={`group bg-card border-0 rounded-2xl p-6 md:p-8 transition-all duration-300 shadow-smooth-lift flex flex-col md:flex-row md:items-center justify-between gap-6 ${isSelected ? 'ring-2 ring-zinc ring-offset-2 -translate-y-1' : 'hover:-translate-y-1'}`} 
 >
 <div className="flex flex-col gap-3">
 <div className="flex flex-wrap items-center gap-3">
 <h3 className="text-heading-section font-headline font-medium text-foreground">{job.title}</h3>
 <Badge variant="outline" className="bg-zinc/10 text-zinc border-zinc/20 font-medium tracking-wide rounded-full px-3">{job.type}</Badge>
 </div>
 <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-foreground/80">
 <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-foreground/60" /> {job.location}</span>
 <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-foreground/60" /> {job.department}</span>
 <span className="flex items-center gap-1.5"><GraduationCap className="w-4 h-4 text-foreground/60" /> {job.level}</span>
 </div>
 </div>
 
 <div className="shrink-0">
 <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300 ${isSelected ? 'bg-foreground text-primary' : 'bg-zinc text-white group-hover:bg-foreground group-hover:text-primary'}`}>
 <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isSelected ? '-rotate-45' : 'group-hover:-rotate-45'}`} />
 </div>
 </div>
 </div>
 )}
 />
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ===== SECTION 6: CTA ===== */}
 <section className="pt-0 pb-16 md:pb-20 lg:pb-32">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <ScrollFadeIn>
 <GradientContainer 
 className="rounded-3xl py-16 md:py-20 px-6 md:px-12 text-center relative overflow-hidden"
 imageSrc="/images/background/overlay-bg-1.svg"
 >
 <div className="relative z-10">
 <h2 className="font-headline text-2xl sm:text-4xl md:text-6xl text-foreground leading-tight font-medium text-white">
 Ready To Push Boundaries?
 </h2>
 <p className="mt-4 md:mt-8 text-xs md:text-base text-white max-w-2xl mx-auto">
 Are you ready to explore new frontiers of innovation? Let's build something extraordinary together.
 </p>
 <form onSubmit={handleCTASubmit} className="mt-8 md:mt-16 max-w-sm md:max-w-md mx-auto">
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
 </div>
 </div>
 );
}
