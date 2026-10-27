'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Search,
  MessageSquare,
  Database,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  Lock,
  Eye,
  CheckCircle2,
  Shield,
  FileCheck,
  UserCheck,
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

interface GenerativeAiPageProps {
  badge?: string;
  badgeHref?: string;
  className?: string;
}

const generativeAiFaqs: FAQ[] = [
  {
    question: 'What kinds of problems are generative AI applications suited for?',
    answer:
      'They are particularly useful for language-based tasks, knowledge retrieval, document understanding, summarization, and conversational interactions. Predictable tasks governed by fixed rules may be better served by conventional software or rules-based automation.',
  },
  {
    question: 'Can an LLM application use our internal business data?',
    answer:
      'Yes. We can design applications that retrieve information from approved internal sources, subject to data availability, technical access, permissions, and the agreed architecture.',
  },
  {
    question: 'Can responses include references to their sources?',
    answer:
      'Yes, where the selected retrieval approach and application design support source references. The implementation should be evaluated to confirm that references are relevant and that the response accurately represents the source material.',
  },
  {
    question: 'How do you address inaccurate or fabricated responses?',
    answer:
      'We evaluate outputs against representative use cases, ground responses in relevant information where appropriate, and define review or approval steps according to the risks of the task. These measures reduce identified risks but do not guarantee every response will be correct.',
  },
  {
    question: 'How is our business data handled?',
    answer:
      'Data flows, access permissions, retention requirements, and applicable model-provider terms are considered as part of the solution design and agreed arrangements. The specific protections depend on the architecture, deployment, and services used.',
  },
  {
    question: 'Can the application connect to our existing systems?',
    answer:
      'We can assess and implement integrations with relevant applications and data sources where suitable interfaces, permissions, and technical access are available.',
  },
  {
    question: 'Do we need a complete specification before starting?',
    answer:
      'No. An initial description of the task, intended users, available information, and business goal is enough to begin discussing the use case and its requirements.',
  },
];

const aiDeliverablesData = [
  {
    title: 'Defined Scope',
    items: [
      'Documented business use cases and target user roles',
      'Evaluation criteria and performance benchmarks agreed up front',
      'Boundaries for what the AI application should and should not answer',
    ],
  },
  {
    title: 'Working AI Application',
    items: [
      'Connected knowledge retrieval (RAG) and domain prompt architecture',
      'Integration with approved internal data sources and operational APIs',
      'Production-grade application interface and user feedback mechanisms',
    ],
  },
  {
    title: 'Evaluation & Validation',
    items: [
      'Systematic testing against real-world domain queries and edge cases',
      'Validation of response accuracy, grounding, and citation consistency',
      'Guardrail configuration to prevent hallucination and unauthorized disclosure',
    ],
  },
  {
    title: 'Technical Handover',
    items: [
      'Complete documentation of model configurations, prompt pipelines, and architecture',
      'Deployment walkthrough, administrative controls, and runbooks for your team',
      '100% intellectual property and code ownership transferred to your company',
    ],
  },
  {
    title: 'Ongoing Evolution',
    items: [
      'Framework for monitoring user interactions, retrieval quality, and failure modes',
      'Clear roadmap for updating connected knowledge bases and tuning prompts',
      'Continuous enhancement as models evolve and business priorities expand',
    ],
  },
];

const aiApproachSteps = [
  {
    number: '01',
    title: 'Define & Align',
    description:
      'Understand what the application needs to do, who it supports, and what a successful outcome looks like.',
    meansForYou: 'An agreed use case and a clear basis for evaluating the application.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770098/Discover_Align_vp2l9d.jpg',
  },
  {
    number: '02',
    title: 'Prepare & Connect',
    description:
      'Determine what information, systems, and business context the application needs to produce useful responses.',
    meansForYou: 'A defined approach to the information and systems the application will use.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770100/Plan_Design_rf0t2h.jpg',
  },
  {
    number: '03',
    title: 'Develop & Evaluate',
    description:
      'Build the application and test it against real-world questions, workflows, and expected outcomes.',
    meansForYou:
      'An application evaluated against the agreed requirements, with identified limitations addressed as part of development.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770102/Build_Integrate_egvjcw.jpg',
  },
  {
    number: '04',
    title: 'Integrate & Validate',
    description:
      'Connect the application to the required systems and ensure it operates reliably within the intended workflow.',
    meansForYou: 'Working functionality integrated and reviewed within the agreed scope.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770100/Validate_Handover_e9gotj.jpg',
  },
];

export default function GenerativeAiPage({
  badge = 'AI & AUTOMATION',
  badgeHref = '#overview',
  className,
}: GenerativeAiPageProps) {
  const [activeApproachIndex, setActiveApproachIndex] = useState<number>(0);
  return (
    <div className={cn('relative w-full bg-transparent', className)}>
      {/* ================= 1. HERO SECTION ================= */}
      <div className="relative w-full min-h-[660px] sm:min-h-[720px] lg:min-h-[800px] xl:min-h-[850px] bg-[#051314] rounded-b-[2rem] sm:rounded-b-[2.5rem] lg:rounded-b-[3.5rem] overflow-hidden flex items-center pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-32">
        {/* Full Hero Background Image (unmasked, cropped gracefully with object-cover) */}
        <div className="absolute inset-0 z-0 w-full h-full pointer-events-none select-none">
          <img
            src="https://res.cloudinary.com/cauders/image/upload/v1792904872/GENERATIVE_AI_jam1tu.jpg"
            alt="Generative AI & LLM Applications"
            className="w-full h-full object-cover object-center lg:object-right"
          loading="lazy" decoding="async" />
          {/* Subtle gradient overlay on the left so white text stays ultra-crisp and legible */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#051314]/95 via-[#051314]/75 to-transparent lg:w-[65%]" />
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
                  variant="white"
                  className="mb-3 sm:mb-5"
                />
              </ScrollFadeIn>

              {/* SectionHeading */}
              <SectionHeading
                as="h1"
                lines={[
                  '<span class="text-cyan-radial font-medium inline-block">Generative AI</span> &',
                  'LLM Applications',
                ]}
                subheading="We design and develop software around your business requirements, workflows, and existing systems, creating tools that support the way your teams operate and evolve with your needs."
                align="left"
                headingClassName="!text-white"
                subheadingMaxWidth="max-w-xl"
                subheadingClassName="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 leading-relaxed font-normal mb-5 sm:mb-8"
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
                src="https://res.cloudinary.com/cauders/image/upload/v1792905087/Group_4723_fmu4af.png"
                alt="Where Generative AI Fits Your Business"
                className="w-full h-auto block select-none pointer-events-none"
              loading="lazy" decoding="async" />

              <div className="absolute inset-0 z-10 flex items-center px-6 sm:px-10 md:px-14 lg:px-16">
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-6 sm:gap-8 lg:gap-12">
                  <div className="lg:col-span-6 flex items-center pl-4 sm:pl-8 lg:pl-12 xl:pl-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white italic leading-[1.15]">
                      Where Generative AI Fits Your Business
                    </h2>
                  </div>

                  <div className="hidden lg:block lg:col-span-1 flex justify-center">
                    <div className="h-28 xl:h-36 w-[2px] bg-white/45 mx-auto rounded-full shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                  </div>

                  <div className="lg:col-span-5 flex items-center">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/85 font-light leading-relaxed tracking-normal font-sans antialiased">
                      Generative AI is useful when work involves understanding language, interpreting documents, retrieving information, or responding to questions in context.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>

      {/* ================= 3. 3 CHALLENGE / USE CASE CARDS ================= */}
      <section className="relative z-20 w-full pt-4 sm:pt-8 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-[95rem] mx-auto">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 items-stretch">
            {[
              {
                title: 'Finding Information Takes Too Long',
                description:
                  'Help employees find relevant information across approved documents, knowledge bases, and internal resources without manually searching through multiple sources.',
                image: 'https://res.cloudinary.com/cauders/image/upload/v1793005603/Finding_Information_beml1o.jpg',
              },
              {
                title: 'Documents Require Manual Review',
                description:
                  'Apply AI to tasks such as extracting information, summarizing content, classifying documents, or preparing information for review.',
                image: 'https://res.cloudinary.com/cauders/image/upload/v1793005596/Manual_documents_review_mw4xsx.jpg',
              },
              {
                title: 'Working With Information Is Difficult',
                description:
                  'Build natural-language interfaces that let employees or customers ask questions, explore information, and complete supported tasks through a conversational experience.',
                image: 'https://res.cloudinary.com/cauders/image/upload/v1793005600/Working_With_Information_Difficult_m2wfae.jpg',
              },
            ].map((card, idx) => (
              <ScrollFadeIn key={card.title} delay={idx * 120} className="h-full">
                <div className="group rounded-[2rem] sm:rounded-[2.25rem] bg-white dark:bg-card border-0 flex flex-col justify-between transition-all duration-300 shadow-[0_8px_30px_rgba(0,49,46,0.06)] hover:shadow-[0_20px_45px_rgba(0,49,46,0.12)] hover:-translate-y-1 relative overflow-hidden h-full min-h-[480px] sm:min-h-[520px] lg:min-h-[550px]">
                  {/* Card Header Content */}
                  <div className="px-6 sm:px-8 lg:px-9 pt-8 sm:pt-10 lg:pt-12 pb-0">
                    <h3 className="text-lg sm:text-xl lg:text-[1.35rem] font-semibold font-headline text-zinc-900 dark:text-white tracking-tight leading-snug">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>

                  {/* Card Illustration Image: Flush against the bottom without padding */}
                  <div className="relative w-full aspect-[4/3] mt-6 overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 450px"
                      className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. APPLICATION TYPES: SOFTWARE BUILT AROUND YOUR REQUIREMENTS ================= */}
      <section id="applications" className="py-16 md:py-20 relative z-10 text-foreground bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative">
            {/* Left Column (Sticky Heading) */}
            <div className="lg:col-span-5 relative lg:sticky lg:top-32 h-fit self-start">
              <div>
                <ScrollFadeIn>
                  <ArrowBadge
                    href="#applications"
                    text="Application Types"
                    variant="black"
                    className="mb-4"
                  />

                  <SectionHeading
                    lines={[
                      'Types of AI Applications',
                      '<span class="text-cyan-gradient font-medium inline-block">We Build</span>',
                    ]}
                    subheading="We build focused generative AI applications designed to integrate with your existing information, workflows, and business systems."
                    align="left"
                    subheadingMaxWidth="max-w-xl"
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

            {/* Right Column (Scrolling List with ScrollSpyItem and 3D Glass Icons on the right) */}
            <div className="lg:col-span-7 flex flex-col">
              {/* Item 1: Enterprise Search & Knowledge Assistants */}
              <ScrollSpyItem>
                <div className="pb-8 lg:pb-12 border-b border-border flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      Enterprise Search &amp; Knowledge Assistants
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Help users find and understand information across connected business knowledge sources, with responses grounded in relevant content where the application supports it.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792808336/Business_Applications-Photoroom_t53gbo.png"
                      alt="Enterprise Search & Knowledge Assistants"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>

              {/* Item 2: Document Processing & Analysis Applications */}
              <ScrollSpyItem>
                <div className="py-8 lg:py-12 border-b border-border flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      Document Processing &amp; Analysis Applications
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Extract, summarize, classify, and interpret information from documents to support review and information-processing workflows.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792808331/Customer_Partner_Portals-Photoroom_myhnd7.png"
                      alt="Document Processing & Analysis Applications"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>

              {/* Item 3: AI Copilots & Task Assistants */}
              <ScrollSpyItem>
                <div className="py-8 lg:py-12 border-b border-border flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      AI Copilots &amp; Task Assistants
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Give employees contextual assistance within defined tasks, such as drafting content, summarizing information, answering questions, or preparing work for review.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792808333/Workflow_Operations_Systems-Photoroom_hqp0xn.png"
                      alt="AI Copilots & Task Assistants"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>

              {/* Item 4: Conversational AI Applications */}
              <ScrollSpyItem>
                <div className="pt-8 lg:pt-12 flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      Conversational AI Applications
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Build conversational experiences that help users access information, navigate services, or interact with products through natural language.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792808334/Specialized_Software_Solutions-Photoroom_jrol0x.png"
                      alt="Conversational AI Applications"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. MAKE YOUR BUSINESS INFORMATION MORE USEFUL (4 VALUE CARDS) ================= */}
      <section className="py-16 md:py-24 relative z-10 text-foreground bg-transparent">
        <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto mb-14 sm:mb-20">
            <SectionHeading
              lines={[
                'Make Your <span class="text-cyan-gradient font-medium inline-block">Business Information</span> More Useful',
              ]}
              subheading="An AI application becomes more relevant when it can work with the information your business already uses. We can connect approved knowledge sources and relevant systems so the application can retrieve context appropriate to the task."
              align="center"
              headingClassName="font-medium !leading-[1.15]"
              subheadingMaxWidth="max-w-5xl"
              subheadingClassName="text-sm sm:text-base md:text-lg text-foreground/75 leading-relaxed font-normal mt-4"
              className="mb-0"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch">
            {[
              {
                title: 'Faster Access to Information',
                description:
                  'Help teams find relevant information without searching across multiple systems and documents.',
                icon: <Search className="w-5 h-5 text-white stroke-[2]" />,
              },
              {
                title: 'More Relevant Responses',
                description:
                  'Provide AI applications with the context needed to answer questions more accurately.',
                icon: <MessageSquare className="w-5 h-5 text-white stroke-[2]" />,
              },
              {
                title: 'Connected Business Knowledge',
                description:
                  'Bring together information from documents, systems, and internal knowledge sources.',
                icon: <Database className="w-5 h-5 text-white stroke-[2]" />,
              },
              {
                title: 'Greater Confidence & Visibility',
                description:
                  'Maintain access controls and provide references where information needs to be verified.',
                icon: <ShieldCheck className="w-5 h-5 text-white stroke-[2]" />,
              },
            ].map((card, idx) => (
              <ScrollFadeIn key={card.title} delay={idx * 80} className="h-full">
                <div className="group rounded-[2rem] p-7 sm:p-8 bg-white dark:bg-card border-0 shadow-[0_8px_30px_rgba(0,49,46,0.06)] hover:shadow-[0_16px_40px_rgba(0,49,46,0.12)] transition-all duration-300 h-full flex flex-col justify-start hover:-translate-y-1">
                  {/* Circular Dark Teal Icon Container */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#09555A] flex items-center justify-center mb-6 shadow-sm flex-shrink-0">
                    {card.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-headline text-foreground tracking-tight mb-2.5 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/70 dark:text-zinc-400 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 6. DEVELOPMENT APPROACH: FROM USE CASE TO INTEGRATED APPLICATION ================= */}
      <section
        id="development-approach"
        className="relative z-20 w-full py-16 sm:py-20 md:py-28 bg-zinc-gradient text-white overflow-hidden"
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
            <ScrollFadeIn>
              <ArrowBadge
                href="#development-approach"
                text="Development Approach"
                variant="white"
                className="mb-4"
              />
            </ScrollFadeIn>
            <ScrollFadeIn delay={100} className="w-full">
              <SectionHeading
                lines={['From Use Case To Integrated Application']}
                align="center"
                headingClassName="text-white"
                className="mb-0"
              />
            </ScrollFadeIn>
          </div>

          {/* 4 Cards Accordion */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {aiApproachSteps.map((step, idx) => {
              const isExpanded = activeApproachIndex === idx;

              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveApproachIndex(idx)}
                  onClick={() => setActiveApproachIndex(idx)}
                  className={cn(
                    'w-full rounded-2xl sm:rounded-3xl bg-white text-zinc-900 cursor-pointer overflow-hidden shadow-[0_12px_45px_rgba(0,35,30,0.14)] transition-all duration-500 ease-out',
                    isExpanded ? 'shadow-[0_20px_50px_rgba(0,35,30,0.22)]' : 'hover:shadow-2xl'
                  )}
                >
                  {isExpanded ? (
                    /* Expanded Card View */
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

                      {/* Bottom Container: What this means for you */}
                      <div className="w-full bg-[#F8F8F8] px-8 py-5 sm:px-10 sm:py-6 lg:px-12 lg:py-6 z-10">
                        <div className="max-w-xl sm:max-w-2xl lg:max-w-[46rem]">
                          <span className="block text-xs sm:text-sm font-semibold text-[#09555A] mb-1 tracking-tight">
                            What this means for you:
                          </span>
                          <p className="text-xs sm:text-sm text-zinc-700 font-normal leading-relaxed">
                            {step.meansForYou}
                          </p>
                        </div>
                      </div>

                      {/* 3D Illustration on the right */}
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
                    /* Collapsed Strip View */
                    <div className="relative h-24 sm:h-28 lg:h-32 flex items-center justify-between pr-8 sm:pr-10 lg:pr-12 overflow-hidden">
                      {/* Left: Bleed 3D illustration spanning full vertical height, faded directly on its right edge */}
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

      {/* ================= CONTROLS & OVERSIGHT: BUILDING AI APPLICATIONS PEOPLE CAN TRUST ================= */}
      <section id="controls-oversight" className="relative z-10 w-full py-16 sm:py-20 md:py-24 bg-transparent text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto mb-14 sm:mb-16 md:mb-20">
            <ScrollFadeIn>
              <ArrowBadge
                href="#controls-oversight"
                text="Controls & Oversight"
                variant="black"
                className="mb-4"
              />
            </ScrollFadeIn>
            <ScrollFadeIn delay={100} className="w-full">
              <SectionHeading
                lines={[
                  'Building AI Applications <span class="text-cyan-gradient font-medium inline-block whitespace-nowrap">People Can Trust</span>',
                ]}
                align="center"
                headingClassName="whitespace-normal lg:whitespace-nowrap"
                className="mb-0"
              />
            </ScrollFadeIn>
          </div>

          {/* 3 Pillars Grid with thin vertical dividers matching ReliableWorkflowsSection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
            {/* Pillar 1: Controlled Access */}
            <ScrollFadeIn delay={100} className="w-full">
              <div className="flex flex-col items-center text-center px-2 sm:px-6">
                <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                  <Lock className="w-8 h-8 text-black stroke-[1.75]" />
                </div>
                <h4 className="text-xl sm:text-2xl font-headline font-bold text-black tracking-tight mb-3 leading-snug">
                  Controlled Access
                </h4>
                <p className="text-sm sm:text-base text-black/70 leading-relaxed font-normal max-w-md">
                  Know exactly what source information supports every response and trace where it came from.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Pillar 2: Defensible Responses */}
            <ScrollFadeIn delay={200} className="w-full">
              <div className="flex flex-col items-center text-center px-2 sm:px-6 md:border-l md:border-[#003431]/10">
                <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                  <ShieldCheck className="w-8 h-8 text-black stroke-[1.75]" />
                </div>
                <h4 className="text-xl sm:text-2xl font-headline font-bold text-black tracking-tight mb-3 leading-snug">
                  Defensible Responses
                </h4>
                <p className="text-sm sm:text-base text-black/70 leading-relaxed font-normal max-w-md">
                  Maintain strict governance over who can access enterprise knowledge and verify how it is processed.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Pillar 3: Human Review */}
            <ScrollFadeIn delay={300} className="w-full">
              <div className="flex flex-col items-center text-center px-2 sm:px-6 md:border-l md:border-[#003431]/10">
                <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                  <UserCheck className="w-8 h-8 text-black stroke-[1.75]" />
                </div>
                <h4 className="text-xl sm:text-2xl font-headline font-bold text-black tracking-tight mb-3 leading-snug">
                  Human Review
                </h4>
                <p className="text-sm sm:text-base text-black/70 leading-relaxed font-normal max-w-md">
                  Keep people involved where decisions, approvals, or business impact require human judgment.
                </p>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* ================= CASE STUDIES: APPLIED AI FOR REAL BUSINESS REQUIREMENTS ================= */}
            {/* ================= CASE STUDIES: REAL PRODUCTION OUTCOMES ================= */}
      <CaseStudiesSection
        badgeText="Case Studies"
        headingLines={["Applied AI For Real","<span class=\"text-cyan-gradient font-medium inline-block\">Business Requirements</span>"]}
        subheading="Explore production-ready LLM solutions, retrieval-augmented intelligence, and fine-tuned models engineered for measurable business impact."
      />

      {/* ================= 7. WHAT TO EXPECT FROM DELIVERY ================= */}
      <GeometricZincContainer zoomScale={1.3}>
        <div className="relative z-10 max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
          {/* Section Header: ArrowBadge + SectionHeading with Subheading */}
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <ScrollFadeIn>
              <ArrowBadge
                href="#deliverables"
                text="Deliverables"
                variant="white"
                className="mb-3 md:mb-4"
              />
            </ScrollFadeIn>
            <ScrollFadeIn delay={100} className="w-full">
              <SectionHeading
                lines={['What To Expect From Delivery']}
                subheading="Every custom software engagement is structured around complete transparency on what is being built, how it is tested, and what your team receives at launch."
                align="center"
                headingClassName="text-white"
                subheadingClassName="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed font-normal mt-4"
                subheadingMaxWidth="max-w-3xl"
                className="mb-0"
              />
            </ScrollFadeIn>
          </div>

          {/* 6 Cards Grid: 5 AI Deliverables Cards + 1 CTA Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            {aiDeliverablesData.map((item, idx) => (
              <ScrollFadeIn key={item.title} delay={idx * 80} className="h-full">
                <div
                  className="group relative rounded-3xl p-6 sm:p-8 flex flex-col justify-start h-full bg-black/[0.12] hover:bg-black/[0.18] border-[0.5px] border-primary/40 hover:border-primary/90 backdrop-blur-[24px] transition-all duration-300 shadow-none hover:-translate-y-1 overflow-hidden"
                  style={{
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                  }}
                >
                  {/* Card Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-semibold font-headline text-white tracking-tight mb-5 leading-snug">
                      {item.title}
                    </h3>
                    <ul className="space-y-3">
                      {item.items.map((bullet, bulletIdx) => (
                        <li
                          key={bulletIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-white leading-relaxed font-normal"
                        >
                          <span className="text-primary font-bold select-none mt-0.5">&gt;</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}

            {/* 6th Card: Ready to Discuss CTA Card */}
            <ScrollFadeIn delay={400} className="h-full">
              <div className="group relative rounded-3xl p-6 sm:p-7 lg:p-8 flex flex-col justify-between h-full bg-white text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform-gpu transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                {/* Background image positioned behind text */}
                <div className="pointer-events-none absolute -bottom-4 -right-4 w-60 h-48 sm:w-72 sm:h-56 lg:w-80 lg:h-60 z-0 opacity-95 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="https://res.cloudinary.com/cauders/image/upload/v1792813715/Customer-Facing_Applications_unghui.jpg"
                    alt="Customer-Facing Applications"
                    fill
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 320px"
                    className="object-contain object-bottom-right"
                  />
                </div>

                {/* Text Content */}
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-semibold font-headline text-black tracking-tight mb-2 leading-tight">
                    Not Sure <span className="text-cyan-gradient font-semibold inline-block">What</span>
                    <br />
                    <span className="text-cyan-gradient font-semibold inline-block">You Need?</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-2 font-normal leading-relaxed max-w-[14rem]">
                    Discuss your use case, data sources, and roadmap with our team.
                  </p>
                </div>

                {/* Bottom CTA Button */}
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

      {/* ================= 8. FREQUENTLY ASKED QUESTIONS ================= */}
      <div id="faq">
        <FAQPreview faqs={generativeAiFaqs} badgeText="FAQ" badgeHref="#faq" />
      </div>

      {/* ================= 9. CLOSING CTA: LET'S DISCUSS YOUR AI APPLICATION ================= */}
      <GetAQuote
        title="Let's Discuss Your AI Application"
        description="Tell us what information your team needs to work with, which task you're looking to improve, or where users need a better way to access business knowledge."
        ctaText="Discuss a Project"
        ctaHref="/contact"
        contentMaxWidth="max-w-4xl"
        headingMaxWidth="max-w-3xl"
        subheadingMaxWidth="max-w-xl"
      />
    </div>
  );
}
