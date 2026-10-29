'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  RefreshCw,
  Layers,
  Sparkles,
  ChevronDown,
  Cpu,
  ShieldCheck,
  Globe,
  Rocket,
  CheckCircle2,
  Workflow,
  Server,
  Database,
  Cloud,
  FileCode,
  Network,
  Activity,
  Lock,
} from 'lucide-react';
import ArrowBadge from './ArrowBadge';
import SectionHeading from './SectionHeading';
import CaseStudiesSection from './CaseStudiesSection';
import DarkTealButton from './DarkTealButton';
import ScrollFadeIn from './ScrollFadeIn';
import ScrollSpyItem from './ScrollSpyItem';
import GeometricZincContainer from './GeometricZincContainer';
import FAQPreview, { FAQ } from './FAQPreview';
import GetAQuote from './GetAQuote';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from '@/lib/utils';

interface PlatformModernizationProps {
  badge?: string;
  badgeHref?: string;
  className?: string;
}

const modernizationDeliverablesData = [
  {
    title: 'Assessment & Planning',
    items: [
      'Findings on the relevant existing systems and constraints',
      'Defined modernization scope and priorities',
      'Agreed technical approach and validation criteria',
    ],
  },
  {
    title: 'Modernization & Integration',
    items: [
      'Application or architectural changes within the agreed scope',
      'Required system integrations or migration work',
      'Technical issues addressed as part of implementation',
    ],
  },
  {
    title: 'Validation & Transition',
    items: [
      'Testing of affected workflows and integrations',
      'Validation of relevant data and system behaviour',
      'Identified issues addressed against agreed criteria',
    ],
  },
  {
    title: 'Documentation & Handover',
    items: [
      'Documentation of the delivered changes',
      'Relevant technical and deployment information',
      'Agreed transition and handover materials',
    ],
  },
  {
    title: 'Ongoing Evolution',
    items: [
      'Post-transition maintenance and monitoring',
      'Issue resolution and system stability support',
      'Further modernization as roadmap requirements evolve',
    ],
  },
];

const modernizationApproachSteps = [
  {
    number: '01',
    title: 'Assess the Existing Environment',
    description:
      'We review the relevant applications, architecture, integrations, dependencies, and operational requirements to understand the current constraints. We identify architectural friction and technical debt to ensure future adjustments safeguard live business workflows.',
    establishes: 'A shared understanding of the existing system, its dependencies, and the areas requiring attention.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770098/Discover_Align_vp2l9d.jpg',
  },
  {
    number: '02',
    title: 'Define the Modernization Plan',
    description:
      'We identify priorities, evaluate technical options, and establish the scope, migration requirements, and validation criteria. Migration sequences, risk mitigations, and operational checkpoints are defined before implementation begins.',
    establishes: 'A defined direction for the changes, their dependencies, and how the work will be evaluated.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770100/Plan_Design_rf0t2h.jpg',
  },
  {
    number: '03',
    title: 'Modernize & Integrate',
    description:
      'We implement the agreed architectural improvements, application changes, integrations, or migration work in line with the defined scope. Legacy codebases are refactored, dependencies updated, and API connections established without disrupting daily operations.',
    establishes: 'Updated system components and connections aligned with the modernization requirements.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770102/Build_Integrate_egvjcw.jpg',
  },
  {
    number: '04',
    title: 'Validate & Transition',
    description:
      'We validate critical workflows, data handling, integrations, and relevant system behaviour, address identified issues, and prepare the agreed transition and handover materials to ensure smooth continuity across your organization.',
    establishes: 'A reviewed modernization outcome with a clear understanding of the changes delivered and how the updated environment operates.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770100/Validate_Handover_e9gotj.jpg',
  },
];

const modernizationFaqs: FAQ[] = [
  {
    question: 'Do we need to replace our existing platform to modernize it?',
    answer:
      'Not necessarily. The approach depends on the existing architecture, technical constraints, business requirements, and the condition of the system. Modernization can involve improving existing components, restructuring parts of the application, updating integrations, or migrating selected components.',
  },
  {
    question: 'Can you modernize a system without disrupting our operations?',
    answer:
      'We plan modernization around operational dependencies, critical workflows, and the agreed transition approach. The level of disruption that can be avoided depends on the architecture, migration scope, available environments, and business constraints.',
  },
  {
    question: 'Can you work with our existing technology stack?',
    answer:
      'We assess the current technologies, dependencies, documentation, and technical constraints before defining the approach. The feasibility and scope depend on the environment and the requirements of the modernization.',
  },
  {
    question: 'How do you approach data security during modernization?',
    answer:
      'We consider access controls, sensitive data, integration points, migration requirements, and validation appropriate to the system and the changes being made.',
  },
  {
    question: 'How do you decide what should be modernized first?',
    answer:
      'We assess the business impact, technical constraints, dependencies, operational risks, and priorities to help define a practical sequence of work.',
  },
  {
    question: 'Can you continue supporting the system after modernization?',
    answer:
      'Ongoing maintenance, issue resolution, and further improvements can be included through an agreed continuing engagement.',
  },
  {
    question: 'How long does platform modernization take?',
    answer:
      'Timelines depend on the existing architecture, application dependencies, migration requirements, integrations, and operational constraints. The scope and assessment findings inform the delivery plan.',
  },
];

export default function PlatformModernization({
  badge = 'DIGITAL PRODUCT ENGINEERING',
  badgeHref = '#overview',
  className,
}: PlatformModernizationProps) {
  const [activeApproachIndex, setActiveApproachIndex] = useState<number>(0);

  return (
    <div className={cn('relative w-full bg-transparent', className)}>
      {/* ================= 1. HERO SECTION ================= */}
      <div className="relative w-full min-h-[630px] sm:min-h-[690px] lg:min-h-[770px] xl:min-h-[830px] bg-transparent flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        {/* Background image container: right-aligned with seamless blending spanning full height */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[68%] xl:w-[64%] flex items-center justify-end overflow-hidden pointer-events-none select-none z-0">
          <img
            src="https://res.cloudinary.com/cauders/image/upload/v1792825566/Platform_Modernization_v7x92q.jpg"
            alt="Platform Modernization"
            className="w-full h-full object-cover object-right max-w-none opacity-90 lg:opacity-100 scale-100 lg:scale-105 origin-right"
            style={{
              maskImage:
                'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 10%, rgba(0,0,0,1) 28%), linear-gradient(to bottom, black 85%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 10%, rgba(0,0,0,1) 28%), linear-gradient(to bottom, black 85%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'destination-in',
            }}
          loading="lazy" decoding="async" />
        </div>

        {/* Content on the left side of the hero */}
        <div className="relative z-10 w-full">
          <div className="max-w-[95rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl lg:max-w-2xl text-left">
              {/* Eyebrow / ArrowBadge */}
              <ScrollFadeIn>
                <ArrowBadge
                  href={badgeHref}
                  text={badge}
                  variant="black"
                  className="mb-3 sm:mb-5"
                />
              </ScrollFadeIn>

              {/* SectionHeading */}
              <SectionHeading
                as="h1"
                lines={[
                  'Platform <span class="text-cyan-gradient font-medium inline-block">Modernization</span>',
                ]}
                subheading="Modernize existing applications and connected systems to address technical constraints, improve integration, and support changing business requirements, without losing sight of the operations that depend on them."
                align="left"
                subheadingMaxWidth="max-w-xl"
                subheadingClassName="text-xs sm:text-sm md:text-base lg:text-lg text-foreground/80 dark:text-zinc-300 leading-relaxed font-normal mb-5 sm:mb-8"
                className="mb-0"
              />

              {/* CTA Button */}
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

      {/* ================= 2. OVERLAPPING BANNER DIRECTLY BELOW HERO ================= */}
      <div className="relative z-20 w-full -mt-10 sm:-mt-16 lg:-mt-24 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[95rem] mx-auto">
          <ScrollFadeIn direction="up" delay={300}>
            <div className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,45,40,0.22)]">
              <img
                src="https://res.cloudinary.com/cauders/image/upload/v1792756273/Frame_4661_c7d5nj.png"
                alt="When Existing Systems Need to Evolve"
                className="w-full h-auto block select-none pointer-events-none"
              loading="lazy" decoding="async" />

              <div className="absolute inset-0 z-10 flex items-center px-6 sm:px-10 md:px-14 lg:px-16">
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-6 sm:gap-8 lg:gap-12">
                  <div className="lg:col-span-6 flex items-center pl-4 sm:pl-8 lg:pl-12 xl:pl-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white italic leading-[1.15]">
                      When Existing Systems Need to Evolve
                    </h2>
                  </div>

                  <div className="hidden lg:block lg:col-span-1 flex justify-center">
                    <div className="h-28 xl:h-36 w-[2px] bg-white/45 mx-auto rounded-full shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                  </div>

                  <div className="lg:col-span-5 flex items-center">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/85 font-light leading-relaxed tracking-normal font-sans antialiased">
                      Your existing systems may still support essential business operations, but changes in requirements, integrations, or architecture can make them harder to maintain and extend.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>

      {/* ================= 3. WHEN MODERNIZATION BECOMES A PRIORITY ================= */}
      <section className="relative z-20 w-full pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-[95rem] mx-auto">
          <SectionHeading
            lines={[
              'When <span class="text-cyan-gradient font-medium inline-block">Modernization</span> Becomes A Priority',
            ]}
            subheading="Platform modernization helps you address architectural constraints, improve how systems work together, and establish a technical foundation aligned with where your business needs to go."
            align="center"
            subheadingMaxWidth="max-w-4xl"
            subheadingClassName="text-sm sm:text-base md:text-lg text-foreground/75 leading-relaxed font-normal text-center mt-4 mb-14 sm:mb-20 max-w-4xl mx-auto"
            className="mb-0"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-[95rem] mx-auto pt-6 items-start">
            {/* Card 1 */}
            <ScrollFadeIn delay={100} className="flex flex-col items-center text-center px-4 sm:px-6">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                <FileCode className="w-8 h-8 text-black stroke-[1.75]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-black mb-3 leading-snug">
                Your Systems Are Becoming<br className="hidden sm:inline" /> Harder To Maintain
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed max-w-lg">
                Legacy code, outdated dependencies, or architectural limitations make changes more difficult to implement and support.
              </p>
            </ScrollFadeIn>

            {/* Card 2 */}
            <ScrollFadeIn delay={200} className="flex flex-col items-center text-center px-4 sm:px-6 md:border-l md:border-[#003431]/10">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                <Network className="w-8 h-8 text-black stroke-[1.75]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-black mb-3 leading-snug">
                Your Applications<br className="hidden sm:inline" /> Operate In Isolation
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed max-w-lg">
                Disconnected platforms and fragmented data create additional manual work, inconsistent information, or limitations in how your teams operate.
              </p>
            </ScrollFadeIn>

            {/* Card 3 */}
            <ScrollFadeIn delay={300} className="flex flex-col items-center text-center px-4 sm:px-6 md:border-l md:border-[#003431]/10">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                <Activity className="w-8 h-8 text-black stroke-[1.75]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-black mb-3 leading-snug">
                Your Business Requirements<br className="hidden sm:inline" /> Have Changed
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed max-w-lg">
                Your existing systems need to accommodate new functionality, integrations, security requirements, or evolving operational needs.
              </p>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* ================= 4. WHAT WE CAN MODERNIZE ================= */}
      <section id="application-types" className="py-16 md:py-20 relative z-10 text-foreground bg-transparent">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative">
            {/* Left Column (Sticky Heading) */}
            <div className="lg:col-span-6 relative lg:sticky lg:top-32 h-fit self-start">
              <div>
                <ScrollFadeIn>
                  <ArrowBadge
                    href="#application-types"
                    text="Capabilities"
                    variant="black"
                    className="mb-4"
                  />

                  <SectionHeading
                    lines={[
                      'What We Can <span class="text-cyan-gradient font-medium inline-block">Modernize</span>',
                    ]}
                    subheading="We work with existing applications and connected systems to address the limitations affecting their use, maintenance, and continued development."
                    align="left"
                    subheadingMaxWidth="max-w-2xl"
                    subheadingClassName="text-xs sm:text-sm md:text-base lg:text-lg text-foreground/80 leading-relaxed font-normal mb-5 sm:mb-8"
                    className="mb-0"
                  />

                  <div className="pt-2">
                    <DarkTealButton href="/contact" size="md">
                      Discuss a Project
                    </DarkTealButton>
                  </div>
                </ScrollFadeIn>
              </div>
            </div>

            {/* Right Column (Scrolling List with 3D Glass Graphics) */}
            <div className="lg:col-span-6 flex flex-col">
              {/* Item 1: Legacy Applications */}
              <ScrollSpyItem>
                <div className="pb-8 lg:pb-12 border-b border-border flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      Legacy Applications
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Improve existing applications by addressing technical debt, outdated dependencies, and architectural constraints that complicate ongoing development.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792825454/Legacy_Applications-Photoroom_ujmobs.png"
                      alt="Legacy Applications"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>

              {/* Item 2: Application Architecture */}
              <ScrollSpyItem>
                <div className="py-8 lg:py-12 border-b border-border flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      Application Architecture
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Refine system structure and technical foundations to support maintainability, integration, and future changes.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792825444/Application_Architecture-Photoroom_ajlqfx.png"
                      alt="Application Architecture"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>

              {/* Item 3: Connected Business Systems */}
              <ScrollSpyItem>
                <div className="py-8 lg:py-12 border-b border-border flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      Connected Business Systems
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Connect applications and platforms through APIs and integration workflows, reducing fragmentation and improving information flow.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792825440/Connected_Business_Systems-Photoroom_cvmrai.png"
                      alt="Connected Business Systems"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>

              {/* Item 4: Data & Application Migration */}
              <ScrollSpyItem>
                <div className="py-8 lg:py-12 border-b border-border flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      Data & Application Migration
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Plan and implement migrations involving applications, data, or infrastructure according to the existing environment and business requirements.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792825415/Data_Application_Migration-Photoroom_mvvr3n.png"
                      alt="Data & Application Migration"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>

              {/* Item 5: Cloud & Infrastructure Components */}
              <ScrollSpyItem>
                <div className="pt-8 lg:pt-12 flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      Cloud & Infrastructure Components
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Modernize relevant infrastructure and deployment arrangements where they support the required architecture, operational needs, and technical direction.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792825413/Cloud_Infrastructure_Components-Photoroom_un4mcl.png"
                      alt="Cloud & Infrastructure Components"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. ARCHITECTURE, INTEGRATIONS & MIGRATION ================= */}
      <section className="py-16 md:py-24 relative z-10 bg-transparent">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto mb-12 sm:mb-16">
            <ScrollFadeIn>
              <ArrowBadge href="#features" text="Capabilities" variant="black" className="mb-3 md:mb-4" />
            </ScrollFadeIn>
            <SectionHeading
              lines={[
                'Architecture, <span class="text-cyan-gradient font-medium inline-block">Integrations</span> &amp; Migration',
              ]}
              subheading="Modernization starts with understanding how your existing environment works and what must remain reliable throughout the change."
              align="center"
              subheadingMaxWidth="max-w-5xl"
              subheadingClassName="text-sm sm:text-base md:text-lg text-foreground/75 leading-relaxed font-normal text-center mt-3 mb-0 max-w-5xl mx-auto"
              className="mb-0"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: <Workflow className="w-5 h-5 text-white" />,
                title: 'System Dependencies',
                desc: 'Understand how applications, databases, integrations, and third-party services depend on one another before making architectural changes.',
              },
              {
                icon: <Network className="w-5 h-5 text-white" />,
                title: 'Integration & Data Flows',
                desc: 'Identify how information moves across systems, where connections need improvement, and how data consistency will be maintained.',
              },
              {
                icon: <RefreshCw className="w-5 h-5 text-white" />,
                title: 'Migration Planning',
                desc: 'Define the scope, dependencies, validation requirements, and transition approach for moving applications, data, or infrastructure.',
              },
              {
                icon: <Rocket className="w-5 h-5 text-white" />,
                title: 'Technical Roadmap',
                desc: 'Prioritize changes according to business requirements, technical constraints, operational risk, and the need to keep future development manageable.',
              },
            ].map((feature, idx) => (
              <ScrollFadeIn key={feature.title} delay={idx * 60} className="h-full">
                <div className="rounded-3xl p-7 sm:p-8 bg-white dark:bg-card border-0 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-300 h-full flex flex-col justify-start hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-[#09555A] flex items-center justify-center mb-6 shadow-sm flex-shrink-0">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold font-headline text-foreground mb-3 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed font-normal">
                    {feature.desc}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 6. OUR APPROACH: HOW WE APPROACH PLATFORM MODERNIZATION ================= */}
      <section id="our-approach" className="relative z-20 w-full py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-zinc-gradient text-white overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(140,234,229,0.2),transparent_70%)]"
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto mb-12 sm:mb-16">
            <ScrollFadeIn>
              <ArrowBadge
                href="#our-approach"
                text="Our Approach"
                variant="white"
                className="mb-3 md:mb-4"
              />
            </ScrollFadeIn>
            <SectionHeading
              lines={['How We Approach Platform Modernization']}
              align="center"
              headingClassName="!text-white font-medium"
              className="mb-0"
            />
          </div>

          {/* 4 Interactive Accordion Cards */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {modernizationApproachSteps.map((step, idx) => {
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
                    <div className="relative min-h-[350px] sm:min-h-[380px] lg:min-h-[400px] flex flex-col justify-between overflow-hidden">
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

                      <div 
                        className="absolute top-0 right-0 bottom-0 w-[54%] sm:w-[56%] lg:w-[52%] flex items-center justify-end overflow-hidden pointer-events-none select-none z-20"
                        style={{
                          WebkitMaskImage:
                            'linear-gradient(to right, transparent 0%, transparent 12%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.4) 42%, rgba(0,0,0,0.85) 58%, #000 68%)',
                          maskImage:
                            'linear-gradient(to right, transparent 0%, transparent 12%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.4) 42%, rgba(0,0,0,0.85) 58%, #000 68%)',
                        }}
                      >
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-contain object-right select-none pointer-events-none scale-105 sm:scale-100"
                          style={{
                            WebkitMaskImage:
                              'linear-gradient(to right, transparent 0%, transparent 12%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.4) 42%, rgba(0,0,0,0.85) 58%, #000 68%)',
                            maskImage:
                              'linear-gradient(to right, transparent 0%, transparent 12%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.4) 42%, rgba(0,0,0,0.85) 58%, #000 68%)',
                          }}
                        loading="lazy" decoding="async" />
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-24 sm:h-28 lg:h-32 flex items-center justify-between pr-8 sm:pr-10 lg:pr-12 overflow-hidden">
                      <div className="flex items-center gap-6 sm:gap-8 lg:gap-12 h-full min-w-0">
                        <div 
                          className="h-full w-36 sm:w-44 lg:w-52 flex-shrink-0 flex items-center justify-start overflow-hidden"
                          style={{
                            WebkitMaskImage:
                              'linear-gradient(to right, #000 60%, rgba(0,0,0,0.6) 80%, transparent 100%)',
                            maskImage:
                              'linear-gradient(to right, #000 60%, rgba(0,0,0,0.6) 80%, transparent 100%)',
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

      {/* ================= 7. SELECTED WORK (CASE STUDIES) ================= */}
            {/* ================= CASE STUDIES: REAL PRODUCTION OUTCOMES ================= */}
      <CaseStudiesSection
        badgeText="Selected Work"
        headingLines={["Modernization That Addresses","<span class=\"text-cyan-gradient font-medium inline-block\">Real Technical Requirements</span>"]}
        subheading="Explore how legacy refactoring, decoupled architectures, and carefully planned cutovers address technical debt while minimizing operational disruption."
      />

      {/* ================= 8. FOUR PILLARS: RELIABILITY, SECURITY & BUSINESS CONTINUITY ================= */}
      <section className="relative z-20 w-full pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-[95rem] mx-auto">
          <SectionHeading
            lines={[
              'Reliability, <span class="text-cyan-gradient font-medium inline-block">Security</span> &amp; Business Continuity',
            ]}
            subheading="Modernization needs to account for the systems and information your business already relies on. Changes should be planned and validated against the operational requirements of the environment."
            align="center"
            subheadingMaxWidth="max-w-5xl"
            subheadingClassName="text-sm sm:text-base md:text-lg text-foreground/75 leading-relaxed font-normal text-center mt-4 mb-14 sm:mb-20 max-w-5xl mx-auto"
            className="mb-0"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 w-full pt-6 items-start">
            {/* Pillar 1 */}
            <ScrollFadeIn delay={100} className="flex flex-col items-center text-center px-2 sm:px-4">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                <ShieldCheck className="w-8 h-8 text-black stroke-[1.75]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-black mb-3 leading-snug">
                Data Protection &amp; Access
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed w-full">
                Consider access permissions, sensitive information, data handling, and relevant security controls throughout the modernization work.
              </p>
            </ScrollFadeIn>

            {/* Pillar 2 */}
            <ScrollFadeIn delay={200} className="flex flex-col items-center text-center px-2 sm:px-4 md:border-l md:border-[#003431]/10">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                <Activity className="w-8 h-8 text-black stroke-[1.75]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-black mb-3 leading-snug">
                System Reliability
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed w-full">
                Validate critical workflows, integrations, and dependencies affected by the changes, with testing aligned to the risks and requirements of the system.
              </p>
            </ScrollFadeIn>

            {/* Pillar 3 */}
            <ScrollFadeIn delay={300} className="flex flex-col items-center text-center px-2 sm:px-4 md:border-l md:border-[#003431]/10">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                <RefreshCw className="w-8 h-8 text-black stroke-[1.75]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-black mb-3 leading-snug">
                Migration &amp; Continuity
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed w-full">
                Plan transitions, data validation, recovery considerations, and operational dependencies according to the environment and the agreed migration approach.
              </p>
            </ScrollFadeIn>

            {/* Pillar 4 */}
            <ScrollFadeIn delay={400} className="flex flex-col items-center text-center px-2 sm:px-4 md:border-l md:border-[#003431]/10">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                <Workflow className="w-8 h-8 text-black stroke-[1.75]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-black mb-3 leading-snug">
                Maintainability
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed w-full">
                Address architectural constraints and technical debt that complicate ongoing maintenance, integrations, or further development.
              </p>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* ================= 9. DELIVERABLES: WHAT TO EXPECT FROM DELIVERY ================= */}
      <GeometricZincContainer zoomScale={1.3}>
        <div className="relative z-10 max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
          <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto mb-12 sm:mb-16">
            <ScrollFadeIn>
              <ArrowBadge
                href="#deliverables"
                text="Deliverables"
                variant="white"
                className="mb-3 md:mb-4"
              />
            </ScrollFadeIn>
            <SectionHeading
              lines={['What To Expect From Delivery']}
              subheading="The engagement establishes the modernization scope, the changes being made, how they will be validated, and what your team receives."
              align="center"
              headingClassName="!text-white font-medium"
              subheadingClassName="!text-white/80 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-4xl mx-auto mt-3 mb-0"
              subheadingMaxWidth="max-w-4xl"
              className="mb-0"
            />
          </div>

          {/* 6 Cards Grid with isolated backdrop blur */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            {modernizationDeliverablesData.map((item, idx) => (
              <ScrollFadeIn key={item.title} delay={idx * 80} className="h-full">
                <div className="group relative rounded-3xl p-6 sm:p-8 flex flex-col justify-start h-full border-[0.5px] border-primary/40 hover:border-primary/90 transition-all duration-300 shadow-none hover:-translate-y-1 overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 z-0 bg-black/[0.12] group-hover:bg-black/[0.18] transition-colors duration-300 pointer-events-none rounded-3xl"
                    style={{
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                    }}
                  />

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

            {/* 6th Card: Plain solid white background */}
            <ScrollFadeIn delay={400} className="h-full">
              <div className="group relative rounded-3xl p-6 sm:p-7 lg:p-8 flex flex-col justify-between h-full bg-white text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform-gpu transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="pointer-events-none absolute -bottom-4 -right-4 w-60 h-48 sm:w-72 sm:h-56 lg:w-80 lg:h-60 z-0 opacity-95 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="https://res.cloudinary.com/cauders/image/upload/v1792813715/Customer-Facing_Applications_unghui.jpg"
                    alt="Platform Modernization"
                    fill
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 320px"
                    className="object-contain object-bottom-right"
                  />
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-semibold font-headline text-black tracking-tight mb-2 leading-tight">
                    Not Sure <span className="text-cyan-gradient font-semibold inline-block">What</span><br />
                    <span className="text-cyan-gradient font-semibold inline-block">You Need?</span>
                  </h3>
                </div>

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

      {/* ================= 10. FREQUENTLY ASKED QUESTIONS ================= */}
      <div id="faq">
        <FAQPreview faqs={modernizationFaqs} badgeText="FAQ" badgeHref="#faq" />
      </div>

      {/* ================= 11. LET'S DISCUSS YOUR EXISTING SYSTEMS ================= */}
      <GetAQuote
        title="Let's Discuss Your Existing Systems"
        description="Tell us which systems you need to improve, how they support your operations, and what you need them to do next."
        ctaText="Discuss a Project"
        ctaHref="/contact"
        contentMaxWidth="max-w-5xl"
        headingMaxWidth="max-w-4xl"
        subheadingMaxWidth="max-w-2xl"
      />
    </div>
  );
}
