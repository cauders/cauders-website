'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, ArrowRight, GitMerge, Workflow, Cpu, Layers, Sparkles, ChevronDown } from 'lucide-react';
import ArrowBadge from './ArrowBadge';
import SectionHeading from './SectionHeading';
import DarkTealButton from './DarkTealButton';
import ScrollFadeIn from './ScrollFadeIn';
import ScrollSpyItem from './ScrollSpyItem';
import ZincGradientContainer from './ZincGradientContainer';
import GeometricZincContainer from './GeometricZincContainer';
import FAQPreview, { FAQ } from './FAQPreview';
import GetAQuote from './GetAQuote';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';
import CaseStudiesSection from './CaseStudiesSection';

const customSoftwareFaqs: FAQ[] = [
  {
    question: "When should we consider custom software instead of an off-the-shelf product?",
    answer: "Custom software is worth evaluating when existing products don't support an important workflow, integration, or business requirement. We'll consider your needs and constraints rather than assume that a custom build is always the right choice.",
  },
  {
    question: "Can you integrate the software with our existing systems?",
    answer: "We can assess and develop integrations with existing platforms where suitable APIs or other integration methods are available. Feasibility depends on the systems involved, access, documentation, and technical constraints.",
  },
  {
    question: "What if we haven't fully defined our requirements?",
    answer: "You can begin with the business goal, current workflow, and the challenges you need to address. We can help clarify requirements and scope before development, with the discovery effort tailored to the project.",
  },
  {
    question: "Do you handle user experience, testing, and security?",
    answer: "These considerations are incorporated where relevant to the solution. This may include user journeys and interface design, functional testing, access controls, and data-handling requirements based on the application's purpose and risk profile.",
  },
  {
    question: "Can you maintain the software after delivery?",
    answer: "Ongoing maintenance, issue resolution, and incremental improvements can be discussed as part of a continuing or separately agreed engagement.",
  },
  {
    question: "How long does custom software development take?",
    answer: "Timelines depend on the scope, complexity, integrations, dependencies, and review requirements. Once we understand the project, we can discuss a practical delivery plan.",
  },
];

interface CustomSoftwareHeroProps {
  badge?: string;
  badgeHref?: string;
  className?: string;
}

const deliverablesData = [
  {
    title: 'Clear Functional Scope',
    items: [
      'Documented requirements',
      'Architecture priorities',
      'Feature specifications',
    ],
  },
  {
    title: 'Production-Ready Systems',
    items: [
      'Functionality built to the agreed scope',
      'Technical challenges resolved during the build',
      'Data and system connections for your workflows',
    ],
  },
  {
    title: 'Rigorous QA & Validation',
    items: [
      'End-to-end testing of your workflows',
      'Validation against acceptance criteria',
      'Identified issues addressed before handover',
    ],
  },
  {
    title: 'Technical Handover',
    items: [
      'Clean source code',
      'Deployment pipelines',
      'System documentation',
    ],
  },
  {
    title: 'Ongoing Evolution',
    items: [
      'Post-launch maintenance',
      'Issue resolution',
      'Iterative feature scaling',
    ],
  },
];

const approachSteps = [
  {
    number: '01',
    title: 'Discover & Align',
    description: 'We learn about your business goals, users, workflows, existing systems, and the constraints that need to be considered. This helps establish the broader context around the work and the outcomes it needs to support. Early discovery ensures technical decisions align directly with your operational objectives.',
    establishes: 'A shared understanding of the problem and what the software needs to accomplish.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770098/Discover_Align_vp2l9d.jpg',
  },
  {
    number: '02',
    title: 'Define the Scope & Solution',
    description: 'We clarify requirements, prioritize functionality, map relevant workflows, and determine the technical approach. Where needed, we also define the user journeys and interface structure. Dependencies, assumptions, and key delivery considerations are identified before implementation begins.',
    establishes: 'A clearer view of what will be built, how it should work, and what falls within the agreed scope.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770100/Plan_Design_rf0t2h.jpg',
  },
  {
    number: '03',
    title: 'Build & Integrate',
    description: 'We develop the agreed functionality, connect the necessary systems, and address technical dependencies as the application takes shape. Relevant integrations, data flows, and operational requirements are incorporated throughout development. Continuous validation ensures every component functions reliably within your live ecosystem.',
    establishes: 'Working software developed against the agreed requirements.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770102/Build_Integrate_egvjcw.jpg',
  },
  {
    number: '04',
    title: 'Validate & Handover',
    description: 'We validate key functionality and integrations, address identified issues, and prepare the agreed handover materials. Documentation and operational considerations are reviewed to support a smooth transition. Your team receives full ownership with complete guidance for ongoing management and evolution.',
    establishes: 'A reviewed solution and clarity on what has been delivered and how to proceed.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770100/Validate_Handover_e9gotj.jpg',
  },
];

export default function CustomSoftwareHero({
  badge = 'DIGITAL PRODUCT ENGINEERING',
  badgeHref = '#overview',
  className,
}: CustomSoftwareHeroProps) {
  const [activeApproachIndex, setActiveApproachIndex] = useState<number>(0);
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={cn('relative w-full bg-gradient-to-b from-white via-white to-transparent', className)}>
      {/* Hero section: Pure white background with reduced height (10% less) */}
      <div className="relative w-full min-h-[630px] sm:min-h-[690px] lg:min-h-[770px] xl:min-h-[830px] bg-transparent flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        {/* Background image container: zoomed out (scaled down) so more of the 3D illustration is in view */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[68%] xl:w-[64%] flex items-center justify-end overflow-hidden pointer-events-none select-none z-0">
          <img
            src="https://res.cloudinary.com/cauders/image/upload/v1792756284/Gemini_Generated_Image_r7235xr7235xr723_1_nzh1lg.png"
            alt="Custom Software Development"
            className="w-full h-full object-cover object-left lg:object-contain lg:object-right max-w-none opacity-90 lg:opacity-100 scale-90 lg:scale-[0.88] origin-right"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 10%, rgba(0,0,0,1) 28%), linear-gradient(to bottom, black 72%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 10%, rgba(0,0,0,1) 28%), linear-gradient(to bottom, black 72%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'destination-in',
            }}
          loading="lazy" decoding="async" />
        </div>

        {/* Content on the left side of the hero */}
        <div className="relative z-10 w-full">
          <div className="max-w-[95rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl lg:max-w-2xl text-left">
              {/* ArrowBadge: > DIGITAL PRODUCT ENGINEERING < */}
              <ScrollFadeIn>
                <ArrowBadge
                  href={badgeHref}
                  text={badge}
                  variant="black"
                  className="mb-3 sm:mb-5"
                />
              </ScrollFadeIn>

              {/* Standardized SectionHeading */}
              <SectionHeading
                as="h1"
                lines={[
                  'Custom <span class="text-cyan-gradient font-medium inline-block">Software</span>',
                  '<span class="text-cyan-gradient font-medium inline-block">Development</span>'
                ]}
                subheading="We design and develop software around your business requirements, workflows, and existing systems, creating tools that support the way your teams operate and evolve with your needs."
                align="left"
                subheadingMaxWidth="max-w-xl"
                subheadingClassName="text-xs sm:text-sm md:text-base lg:text-lg text-foreground/80 dark:text-zinc-300 leading-relaxed font-normal mb-5 sm:mb-8"
                className="mb-0"
              />

              {/* CTA Button: Discuss a Project */}
              <ScrollFadeIn delay={250}>
                <div className="pt-1">
                  <DarkTealButton href="/contact" size="md">
                    Discuss a Project
                  </DarkTealButton>
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </div>

      {/* ================= OVERLAPPING CONTAINER DIRECTLY BELOW HERO ================= */}
      {/* Pulls upwards with negative margin so it overlaps with the hero section */}
      <div className="relative z-20 w-full -mt-10 sm:-mt-16 lg:-mt-24 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[95rem] mx-auto">
          <ScrollFadeIn direction="up" delay={300}>
            <div className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,45,40,0.22)]">
              {/* Image that covers the entire container */}
              <img
                src="https://res.cloudinary.com/cauders/image/upload/v1792756273/Frame_4661_c7d5nj.png"
                alt="When Off-the-Shelf Software Doesn't Fit"
                className="w-full h-auto block select-none pointer-events-none"
              loading="lazy" decoding="async" />

              {/* Text overlay on top of the image */}
              <div className="absolute inset-0 z-10 flex items-center px-6 sm:px-10 md:px-14 lg:px-16">
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-6 sm:gap-8 lg:gap-12">
                  {/* Left side: Heading shifted right so it breathes clear of the 3D glass graphic */}
                  <div className="lg:col-span-5 flex items-center pl-4 sm:pl-8 lg:pl-12 xl:pl-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white italic leading-[1.15]">
                      When Off-The-Shelf Software Doesn&apos;t Fit
                    </h2>
                  </div>

                  {/* Vertical Divider (visible on desktop) */}
                  <div className="hidden lg:block lg:col-span-1 flex justify-center">
                    <div className="h-28 xl:h-36 w-[2px] bg-white/45 mx-auto rounded-full shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                  </div>

                  {/* Right side: Description */}
                  <div className="lg:col-span-6 flex items-center">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/85 font-light leading-relaxed tracking-normal font-sans antialiased">
                      Custom software gives you greater control over how the solution works, what it supports, and how it fits into your wider operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>

      {/* ================= WHEN CUSTOM SOFTWARE MAKES SENSE SECTION ================= */}
      <section className="relative z-20 w-full pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-[95rem] mx-auto">
          {/* Centered Heading and Subheading */}
          <SectionHeading
            lines={[
              'When <span class="text-cyan-gradient font-medium inline-block">Custom Software</span> Makes Sense'
            ]}
            subheading="Off-the-shelf software can be the right choice when it supports the way your business operates. But when important workflows don't fit standard features, information is spread across disconnected tools, or your processes require specific functionality, a tailored application may be worth considering."
            align="center"
            subheadingMaxWidth="max-w-4xl"
            subheadingClassName="text-sm sm:text-base md:text-lg text-foreground/75 leading-relaxed font-normal text-center mt-4 mb-14 sm:mb-20 max-w-4xl mx-auto"
            className="mb-0"
          />

          {/* 3 Pillars / Cards matching reference styling with expanded width and vertical dividers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-7xl mx-auto pt-6 items-start">
            {/* Card 1 */}
            <ScrollFadeIn delay={100} className="flex flex-col items-center text-center px-4 sm:px-6">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                <Workflow className="w-8 h-8 text-black stroke-[1.75]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-black mb-3 leading-snug">
                Your Workflows Have<br className="hidden sm:inline" /> Specific Requirements
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed max-w-md">
                Your business relies on rules, approvals, or processes that standard software doesn&apos;t support in the way you need.
              </p>
            </ScrollFadeIn>

            {/* Card 2 */}
            <ScrollFadeIn delay={200} className="flex flex-col items-center text-center px-4 sm:px-6 md:border-l md:border-[#003431]/10">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                <GitMerge className="w-8 h-8 text-black stroke-[1.75]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-black mb-3 leading-snug">
                Your Systems Don&apos;t Work<br className="hidden sm:inline" /> Seamlessly Together
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed max-w-md">
                Your teams switch between applications, re-enter information, or rely on manual steps to move work from one system to another.
              </p>
            </ScrollFadeIn>

            {/* Card 3 */}
            <ScrollFadeIn delay={300} className="flex flex-col items-center text-center px-4 sm:px-6 md:border-l md:border-[#003431]/10">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                <Layers className="w-8 h-8 text-black stroke-[1.75]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-black mb-3 leading-snug">
                Your Business Needs More<br className="hidden sm:inline" /> Than Standard Tools
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed max-w-md">
                You need a business application or specialized platform designed around a particular operational or product requirement.
              </p>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* ================= APPLICATION TYPES: SOFTWARE BUILT AROUND YOUR REQUIREMENTS ================= */}
      <section id="application-types" className="py-16 md:py-20 relative z-10 text-foreground bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative">
            
            {/* Left Column (Sticky Heading) */}
            <div className="lg:col-span-5 relative lg:sticky lg:top-32 h-fit self-start">
              <div>
                <ScrollFadeIn>
                  {/* ArrowBadge: > Application Types < */}
                  <ArrowBadge
                    href="#application-types"
                    text="Application Types"
                    variant="black"
                    className="mb-4"
                  />

                  {/* Default SectionHeading */}
                  <SectionHeading
                    lines={[
                      'Software Built Around',
                      '<span class="text-cyan-gradient font-medium inline-block">Your Requirements</span>'
                    ]}
                    subheading="We understand and translate your requirements into tailored applications designed around your processes, users, information, and operational needs."
                    align="left"
                    subheadingMaxWidth="max-w-xl"
                    subheadingClassName="text-xs sm:text-sm md:text-base lg:text-lg text-foreground/80 leading-relaxed font-normal mb-5 sm:mb-8"
                    className="mb-0"
                  />

                  {/* Discuss a Project Button */}
                  <div className="pt-2">
                    <DarkTealButton href="/contact" size="md">
                      Discuss a Project
                    </DarkTealButton>
                  </div>
                </ScrollFadeIn>
              </div>
            </div>

            {/* Right Column (Scrolling List with ScrollSpyItem and 3D Glass Icons on the right) */}
            <div className="lg:col-span-7 flex flex-col">
              {/* Item 1: Business Applications */}
              <ScrollSpyItem>
                <div className="pb-8 lg:pb-12 border-b border-border flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      Business Applications
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Applications that support internal operations, business processes, and specialized requirements.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792808336/Business_Applications-Photoroom_t53gbo.png"
                      alt="Business Applications"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>

              {/* Item 2: Customer & Partner Portals */}
              <ScrollSpyItem>
                <div className="py-8 lg:py-12 border-b border-border flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      Customer &amp; Partner Portals
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Digital interfaces that let customers, partners, or other users access relevant information and complete specific tasks.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792808331/Customer_Partner_Portals-Photoroom_myhnd7.png"
                      alt="Customer & Partner Portals"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>

              {/* Item 3: Workflow & Operations Systems */}
              <ScrollSpyItem>
                <div className="py-8 lg:py-12 border-b border-border flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      Workflow &amp; Operations Systems
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Applications that organize tasks, apply business rules, manage approvals, and support day-to-day operations.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792808333/Workflow_Operations_Systems-Photoroom_hqp0xn.png"
                      alt="Workflow & Operations Systems"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>

              {/* Item 4: Specialized Software Solutions */}
              <ScrollSpyItem>
                <div className="pt-8 lg:pt-12 flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      Specialized Software Solutions
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Tools and platforms built for requirements that existing products or standard configurations don&apos;t adequately address.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792808334/Specialized_Software_Solutions-Photoroom_jrol0x.png"
                      alt="Specialized Software Solutions"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>
            </div>

          </div>
        </div>
      </section>

      {/* ================= OUR APPROACH: TURNING REQUIREMENTS INTO CUSTOM SOFTWARE ================= */}
      <section id="our-approach" className="relative z-20 w-full py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-zinc-gradient text-white overflow-hidden">
        {/* Ambient radial glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(140,234,229,0.2),transparent_70%)]"
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
            <ScrollFadeIn>
              <ArrowBadge
                href="#our-approach"
                text="Our Approach"
                variant="white"
                className="mb-4"
              />
            </ScrollFadeIn>
            <ScrollFadeIn delay={100}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium font-headline tracking-tight leading-tight text-white">
                Turning Requirements Into Custom Software
              </h2>
            </ScrollFadeIn>
          </div>

          {/* 4 Cards: Accordion on hover/click, Card 0 expanded by default, only 1 open at a time */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {approachSteps.map((step, idx) => {
              const isExpanded = activeApproachIndex === idx;

              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveApproachIndex(idx)}
                  onClick={() => setActiveApproachIndex(idx)}
                  className={cn(
                    "w-full rounded-2xl sm:rounded-3xl bg-white text-zinc-900 cursor-pointer overflow-hidden shadow-[0_12px_45px_rgba(0,35,30,0.14)] transition-all duration-500 ease-out",
                    isExpanded 
                      ? "shadow-[0_20px_50px_rgba(0,35,30,0.22)]" 
                      : "hover:shadow-2xl"
                  )}
                >
                  {isExpanded ? (
                    /* Expanded Card View: clean, direct rendering without cross-fade */
                    <div className="relative min-h-[350px] sm:min-h-[380px] lg:min-h-[400px] flex flex-col justify-between overflow-hidden">
                      {/* Top content on the left */}
                      <div className="pt-8 px-8 sm:pt-10 sm:px-10 lg:pt-11 lg:px-12 pb-6 max-w-xl sm:max-w-2xl lg:max-w-[46rem] z-20">
                        <span className="font-headline font-medium text-4xl sm:text-5xl lg:text-6xl text-zinc-300 mb-5 sm:mb-6 lg:mb-7 block select-none tracking-tight">
                          {step.number}
                        </span>
                        <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-semibold font-headline text-black tracking-tight mb-3 leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-sm sm:text-base text-zinc-700 font-normal leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Bottom Container: #F8F8F8 sits across the bottom behind the image */}
                      <div className="w-full bg-[#F8F8F8] px-8 py-5 sm:px-10 sm:py-6 lg:px-12 lg:py-6 z-10">
                        <div className="max-w-xl sm:max-w-2xl lg:max-w-[46rem]">
                          <span className="block text-xs sm:text-sm font-semibold text-[#09555A] mb-1 tracking-tight">
                            What this establishes:
                          </span>
                          <p className="text-xs sm:text-sm text-zinc-700 font-normal leading-relaxed">
                            {step.establishes}
                          </p>
                        </div>
                      </div>

                      {/* 3D Illustration on top (z-20): Left side has an intense, wide transparency fade forcing a seamless blend */}
                      <div 
                        className="absolute top-0 right-0 bottom-0 w-[54%] sm:w-[56%] lg:w-[52%] flex items-center justify-end overflow-hidden pointer-events-none select-none z-20"
                        style={{
                          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 12%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.4) 42%, rgba(0,0,0,0.85) 58%, #000 68%)',
                          maskImage: 'linear-gradient(to right, transparent 0%, transparent 12%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.4) 42%, rgba(0,0,0,0.85) 58%, #000 68%)',
                        }}
                      >
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-contain object-right select-none pointer-events-none scale-105 sm:scale-100"
                          style={{
                            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 12%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.4) 42%, rgba(0,0,0,0.85) 58%, #000 68%)',
                            maskImage: 'linear-gradient(to right, transparent 0%, transparent 12%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.4) 42%, rgba(0,0,0,0.85) 58%, #000 68%)',
                          }}
                        loading="lazy" decoding="async" />
                      </div>
                    </div>
                  ) : (
                    /* Collapsed Strip View */
                    <div className="relative h-24 sm:h-28 lg:h-32 flex items-center justify-between pr-8 sm:pr-10 lg:pr-12 overflow-hidden">
                      {/* Left: Bleed 3D illustration spanning full vertical height, faded directly on its right edge */}
                      <div className="flex items-center gap-6 sm:gap-8 lg:gap-12 h-full min-w-0">
                        <div 
                          className="h-full w-36 sm:w-44 lg:w-52 flex-shrink-0 flex items-center justify-start overflow-hidden"
                          style={{
                            WebkitMaskImage: 'linear-gradient(to right, #000 60%, rgba(0,0,0,0.6) 80%, transparent 100%)',
                            maskImage: 'linear-gradient(to right, #000 60%, rgba(0,0,0,0.6) 80%, transparent 100%)',
                          }}
                        >
                          <img
                            src={step.image}
                            alt=""
                            className="w-full h-full object-cover object-left select-none pointer-events-none scale-110"
                          loading="lazy" decoding="async" />
                        </div>
                        <span className="font-headline font-medium text-4xl sm:text-5xl lg:text-6xl text-zinc-300 select-none tracking-tight">
                          {step.number}
                        </span>
                        <h4 className="text-xl sm:text-2xl lg:text-[1.75rem] font-semibold font-headline text-black tracking-tight truncate">
                          {step.title}
                        </h4>
                      </div>

                      {/* Right: Subtle expand chevron */}
                      <div className="flex-shrink-0 text-zinc-300">
                        <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.75] transition-transform duration-300" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CASE STUDIES: REAL PRODUCTION OUTCOMES ================= */}
      <CaseStudiesSection
        headingLines={[
          'How We Turn Requirements',
          '<span class="text-cyan-gradient font-medium inline-block">Into Working Solutions</span>',
        ]}
        subheading="Examples of software engineering, core integrations, and modern architectures applied to demanding operational requirements."
      />
      

      {/* ================= DELIVERABLES: WHAT TO EXPECT FROM DELIVERY ================= */}
      <GeometricZincContainer zoomScale={1.3}>
        <div className="relative z-10 max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
          {/* Section Header: ArrowBadge + Heading + Subheading */}
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <ScrollFadeIn>
              <ArrowBadge
                href="#deliverables"
                text="Deliverables"
                variant="white"
                className="mb-3 md:mb-4"
              />
            </ScrollFadeIn>
            <ScrollFadeIn delay={100}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium font-headline tracking-tight leading-tight text-white mb-4">
                What To Expect From Delivery
              </h2>
            </ScrollFadeIn>
            <ScrollFadeIn delay={150}>
              <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed font-normal max-w-3xl mx-auto">
                Every custom software engagement is structured around complete transparency on what is being built, how it is tested, and what your team receives at launch.
              </p>
            </ScrollFadeIn>
          </div>

          {/* 6 Cards Grid: Exactly matching Engagement Models section styling with rock-solid backdrop blur */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            {deliverablesData.map((item, idx) => (
              <ScrollFadeIn key={item.title} delay={idx * 80} className="h-full">
                <div className="group relative rounded-3xl p-6 sm:p-8 flex flex-col justify-start h-full border-[0.5px] border-primary/40 hover:border-primary/90 transition-all duration-300 shadow-none hover:-translate-y-1 overflow-hidden">
                  {/* Dedicated glassmorphic backdrop-blur layer - isolated from content and animation */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 z-0 bg-black/[0.12] group-hover:bg-black/[0.18] transition-colors duration-300 pointer-events-none rounded-3xl"
                    style={{
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                    }}
                  />

                  {/* Card Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-semibold font-headline text-white tracking-tight mb-5 leading-snug">
                      {item.title}
                    </h3>
                    <ul className="space-y-3">
                      {item.items.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white leading-relaxed font-normal">
                          <span className="text-primary font-bold select-none mt-0.5">&gt;</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}

            {/* 6th Card: Plain solid white background, enlarged image placed behind the text */}
            <ScrollFadeIn delay={400} className="h-full">
              <div className="group relative rounded-3xl p-6 sm:p-7 lg:p-8 flex flex-col justify-between h-full bg-white text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform-gpu transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                {/* Enlarged image positioned behind the text and button */}
                <div className="pointer-events-none absolute -bottom-4 -right-4 w-60 h-48 sm:w-72 sm:h-56 lg:w-80 lg:h-60 z-0 opacity-95 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="https://res.cloudinary.com/cauders/image/upload/v1792813715/Customer-Facing_Applications_unghui.jpg"
                    alt="Customer-Facing Applications"
                    fill
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 320px"
                    className="object-contain object-bottom-right"
                  />
                </div>

                {/* Text Content - positioned above the image */}
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-semibold font-headline text-black tracking-tight mb-2 leading-tight">
                    Not Sure <span className="text-cyan-gradient font-semibold inline-block">What</span><br />
                    <span className="text-cyan-gradient font-semibold inline-block">You Need?</span>
                  </h3>
                </div>

                {/* Bottom CTA Button - positioned above the image */}
                <div className="relative z-10 mt-6 sm:mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#09555A] hover:text-[#003B38] transition-colors whitespace-nowrap pb-1"
                  >
                    <span>Start A Conversation.</span>
                    <ArrowRight className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </GeometricZincContainer>

      {/* ================= FAQ SECTION ================= */}
      <div id="faq">
        <FAQPreview faqs={customSoftwareFaqs} badgeText="FAQ" badgeHref="#faq" />
      </div>

      {/* ================= BOTTOM CTA / GET A QUOTE BANNER ================= */}
      <GetAQuote
        title="Let's Discuss What You're Looking To Build"
        description="Tell us about the business goal, the challenge you're addressing and the systems involved."
        ctaText="Start A Discussion"
        ctaHref="/contact"
      />
    </div>
  );
}
