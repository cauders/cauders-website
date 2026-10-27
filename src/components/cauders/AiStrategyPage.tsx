'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  FileCheck,
  Workflow,
  Users,
  ShieldCheck,
  ChevronDown,
  TrendingUp,
  Cpu,
  AlertTriangle,
  ArrowRight
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


interface AiStrategyPageProps {
  badge?: string;
  badgeHref?: string;
  className?: string;
}

const aiStrategyFaqs: FAQ[] = [
  {
    question: 'Do we need to know which AI technology we want to use?',
    answer:
      'No. You can begin with the business problem, the process you want to improve, or the opportunity you\'re evaluating. The assessment helps establish which approaches are relevant.',
  },
  {
    question: 'Do you implement the AI solutions you recommend?',
    answer:
      'Implementation can be discussed as a separate or subsequent engagement. The scope of AI Strategy & Readiness focuses on assessment, feasibility, prioritization, and the agreed recommendations.',
  },
  {
    question: 'How do you evaluate whether a use case is worth pursuing?',
    answer:
      'We consider the intended business outcome, task suitability, available data, technical dependencies, operational requirements, and relevant risks. The assessment helps establish whether to proceed, investigate further, or use another approach.',
  },
  {
    question: 'What if our data or systems aren\'t ready?',
    answer:
      'Readiness findings can identify gaps in data, integrations, access, or existing workflows and help establish which preparation steps should come first.',
  },
  {
    question: 'Will every recommended use case involve AI?',
    answer:
      'No. Some requirements are better addressed through conventional software, defined business rules, or standard automation. The recommendation should fit the task rather than force AI into it.',
  },
  {
    question: 'What do we receive at the end of the engagement?',
    answer:
      'Deliverables depend on the agreed scope and can include use-case assessments, feasibility findings, readiness gaps, prioritization, and a roadmap outlining practical next steps.',
  },
];

const strategyDeliverablesData = [
  {
    title: 'Use-Case Assessment',
    items: [
      'A structured summary of business problems and AI opportunities evaluated',
      'Value vs. complexity matrix for each candidate initiative',
      'Clear definition of target users and operational workflows',
    ],
  },
  {
    title: 'Feasibility & Readiness Findings',
    items: [
      'Technical requirements, available data sources, and system dependencies',
      'Evaluation of architecture constraints and API accessibility',
      'Detailed readiness score across infrastructure, data, and security',
    ],
  },
  {
    title: 'Risks & Considerations',
    items: [
      'Analysis of operational, privacy, regulatory, and oversight risks',
      'Human-in-the-loop review criteria and error-tolerance boundaries',
      'Governance principles tailored to your company compliance posture',
    ],
  },
  {
    title: 'Priorities & Recommendations',
    items: [
      'Ranked list of highest-leverage AI initiatives based on business value',
      'Prerequisite milestones required prior to production development',
      'Vendor/technology recommendations (commercial vs open-source models)',
    ],
  },
  {
    title: 'AI Roadmap',
    items: [
      'Step-by-step timeline for data preparation, prototyping, and rollout',
      'Resource, budget, and talent requirements for execution',
      'Phased milestones with clear go/no-go evaluation criteria',
    ],
  },
];

const strategyApproachSteps = [
  {
    number: '01',
    title: 'Understand the Business Context',
    description:
      'Discuss the business objectives, current processes, existing systems, and the questions AI is expected to address.',
    meansForYou: 'A shared understanding of the business context and the decisions the assessment needs to inform.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770098/Discover_Align_vp2l9d.jpg',
  },
  {
    number: '02',
    title: 'Identify & Evaluate Use Cases',
    description:
      'Identify relevant candidate use cases and assess them against their intended value, feasibility, and operating requirements.',
    meansForYou: 'A structured set of use cases to consider, rather than an unprioritized list of AI ideas.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770100/Plan_Design_rf0t2h.jpg',
  },
  {
    number: '03',
    title: 'Assess Readiness & Risks',
    description:
      'Review relevant data, systems, workflows, dependencies, and risk considerations that could influence implementation.',
    meansForYou: 'A clearer view of readiness, limitations, and work that may be required before implementation.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770102/Build_Integrate_egvjcw.jpg',
  },
  {
    number: '04',
    title: 'Define Priorities & Next Steps',
    description:
      'Summarize the findings, identify priorities, and establish an appropriate roadmap for further validation, preparation, or implementation.',
    meansForYou: 'A practical basis for deciding what to pursue first and what needs to happen next.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770100/Validate_Handover_e9gotj.jpg',
  },
];

export default function AiStrategyPage({
  badge = 'AI & AUTOMATION',
  badgeHref = '#overview',
  className,
}: AiStrategyPageProps) {
  const [activeApproachIndex, setActiveApproachIndex] = useState<number>(0);

  return (
    <div className={cn('relative w-full bg-transparent', className)}>
      {/* ================= 1. HERO SECTION ================= */}
      <div className="relative w-full min-h-[660px] sm:min-h-[720px] lg:min-h-[800px] xl:min-h-[850px] bg-[#051314] rounded-b-[2rem] sm:rounded-b-[2.5rem] lg:rounded-b-[3.5rem] overflow-hidden flex items-center pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-32">
        <div className="absolute inset-0 z-0 w-full h-full pointer-events-none select-none">
          <img
            src="https://res.cloudinary.com/cauders/image/upload/v1792912196/ADVISORY_synfxq.jpg"
            alt="AI Strategy & Readiness"
            className="w-full h-full object-cover object-center lg:object-right"
          loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#051314]/95 via-[#051314]/75 to-transparent lg:w-[65%]" />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-[95rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl lg:max-w-2xl text-left">
              <ScrollFadeIn>
                <ArrowBadge
                  href={badgeHref}
                  text={badge}
                  variant="white"
                  className="mb-3 sm:mb-5"
                />
              </ScrollFadeIn>

              <SectionHeading
                as="h1"
                lines={[
                  '<span class="text-cyan-radial font-medium inline-block">AI Strategy</span> &',
                  'Readiness',
                ]}
                subheading="Evaluate where AI can create business value, which use cases are feasible, and what your data, systems, and operating environment need before implementation. Establish practical priorities and a clear direction for what to do next."
                align="left"
                headingClassName="!text-white"
                subheadingMaxWidth="max-w-xl"
                subheadingClassName="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 leading-relaxed font-normal mb-5 sm:mb-8"
                className="mb-0"
              />

              <ScrollFadeIn delay={250}>
                <div className="pt-1">
                  <DarkTealButton href="/contact" size="md">
                    Discuss AI Strategy
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
                alt="Deciding Where AI Can Create Value"
                className="w-full h-auto block select-none pointer-events-none"
              loading="lazy" decoding="async" />

              <div className="absolute inset-0 z-10 flex items-center px-6 sm:px-10 md:px-14 lg:px-16">
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-6 sm:gap-8 lg:gap-12">
                  <div className="lg:col-span-6 flex items-center pl-4 sm:pl-8 lg:pl-12 xl:pl-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white italic leading-[1.15]">
                      Deciding Where AI Can Create Value
                    </h2>
                  </div>

                  <div className="hidden lg:block lg:col-span-1 flex justify-center">
                    <div className="h-28 xl:h-36 w-[2px] bg-white/45 mx-auto rounded-full shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                  </div>

                  <div className="lg:col-span-5 flex items-center">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/85 font-light leading-relaxed tracking-normal font-sans antialiased">
                      AI can be useful in some business processes and unnecessary in others. The first step is understanding the work, intended outcome, and whether AI is an appropriate way to achieve it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>

      {/* ================= 3. 3 DECISION POINTS CARDS ================= */}
      <section className="relative z-20 w-full pt-4 sm:pt-8 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-[95rem] mx-auto">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 items-stretch">
            {[
              {
                title: 'You Have Ideas but No Clear Priority',
                description:
                  'Assess potential use cases against business relevance, technical feasibility, and the engineering effort required to implement them.',
                image: 'https://res.cloudinary.com/cauders/image/upload/v1792906816/Gemini_Generated_Image_ma12k1ma12k1ma12_ftm70g.jpg',
              },
              {
                title: 'Unsure Whether Data Is Ready',
                description:
                  'Understand what information is available, how it is accessed, and what data quality gaps may affect a proposed AI application.',
                image: 'https://res.cloudinary.com/cauders/image/upload/v1792906816/Gemini_Generated_Image_ma12k1ma12k1ma12_ftm70g.jpg',
              },
              {
                title: 'You Need a Practical Starting Point',
                description:
                  'Evaluate likely requirements, operational considerations, and initial milestone prototypes before committing to an implementation.',
                image: 'https://res.cloudinary.com/cauders/image/upload/v1792906816/Gemini_Generated_Image_ma12k1ma12k1ma12_ftm70g.jpg',
              },
            ].map((card, idx) => (
              <ScrollFadeIn key={card.title} delay={idx * 120} className="h-full">
                <div className="group rounded-[2rem] sm:rounded-[2.25rem] bg-white dark:bg-card border-0 flex flex-col justify-between transition-all duration-300 shadow-[0_8px_30px_rgba(0,49,46,0.06)] hover:shadow-[0_20px_45px_rgba(0,49,46,0.12)] hover:-translate-y-1 relative overflow-hidden h-full min-h-[480px] sm:min-h-[520px] lg:min-h-[550px]">
                  <div className="px-6 sm:px-8 lg:px-9 pt-8 sm:pt-10 lg:pt-12 pb-0">
                    <h3 className="text-lg sm:text-xl lg:text-[1.35rem] font-semibold font-headline text-zinc-900 dark:text-white tracking-tight leading-snug">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>

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

      {/* ================= 4. USE CASES WORTH EVALUATING ================= */}
      <section id="capabilities" className="py-16 md:py-20 relative z-10 text-foreground bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative">
            <div className="lg:col-span-5 relative lg:sticky lg:top-32 h-fit self-start">
              <div>
                <ScrollFadeIn>
                  <ArrowBadge
                    href="#capabilities"
                    text="Use Cases"
                    variant="black"
                    className="mb-4"
                  />

                  <SectionHeading
                    lines={[
                      'AI Use Cases',
                      '<span class="text-cyan-gradient font-medium inline-block">Worth Evaluating</span>',
                    ]}
                    subheading="We systematically evaluate candidate opportunities against real-world business objectives, technical readiness, and risk profiles."
                    align="left"
                    subheadingMaxWidth="max-w-xl"
                    subheadingClassName="text-xs sm:text-sm md:text-base lg:text-lg text-foreground/80 leading-relaxed font-normal mb-5 sm:mb-8"
                    className="mb-0"
                  />

                  <div className="pt-2">
                    <DarkTealButton href="/contact" size="md">
                      Discuss AI Strategy
                    </DarkTealButton>
                  </div>
                </ScrollFadeIn>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col">
              {/* Item 1 */}
              <ScrollSpyItem>
                <div className="pb-8 lg:pb-12 border-b border-border flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      Knowledge &amp; Document Work
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Explore whether information retrieval, document understanding, or language-based applications can improve access to business information.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792808336/Business_Applications-Photoroom_t53gbo.png"
                      alt="Knowledge & Document Work"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>

              {/* Item 2 */}
              <ScrollSpyItem>
                <div className="py-8 lg:py-12 border-b border-border flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      Operational Workflows
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Assess whether AI can support a defined workflow, help interpret incoming information, or work alongside existing automation.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792808331/Customer_Partner_Portals-Photoroom_myhnd7.png"
                      alt="Operational Workflows"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>

              {/* Item 3 */}
              <ScrollSpyItem>
                <div className="py-8 lg:py-12 border-b border-border flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      Prediction &amp; Classification
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Evaluate data-driven use cases where predicting an outcome or classifying information may support a business task.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792808333/Workflow_Operations_Systems-Photoroom_hqp0xn.png"
                      alt="Prediction & Classification"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>

              {/* Item 4 */}
              <ScrollSpyItem>
                <div className="pt-8 lg:pt-12 flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      Customer &amp; Employee Experiences
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Consider AI-supported interfaces and assistance where natural-language interaction or contextual data improves service quality.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792808334/Specialized_Software_Solutions-Photoroom_jrol0x.png"
                      alt="Customer & Employee Experiences"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. READINESS (4 VALUE CARDS) ================= */}
      <section className="py-16 md:py-24 relative z-10 text-foreground bg-transparent">
        <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto mb-14 sm:mb-20">
            <SectionHeading
              lines={[
                'Assessing Data, Systems & <span class="text-cyan-gradient font-medium inline-block">Organizational Readiness</span>',
              ]}
              subheading="Understand the foundational technical and operational components required before embarking on an AI engineering rollout."
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
                title: 'Data Availability & Quality',
                description:
                  'Review which data sources are accessible, how reliable records are, and whether data preparation is required.',
                icon: <FileCheck className="w-5 h-5 text-white stroke-[2]" />,
              },
              {
                title: 'Systems & Integration',
                description:
                  'Consider existing applications, APIs, architecture, and technical dependencies needed to support target use cases.',
                icon: <Workflow className="w-5 h-5 text-white stroke-[2]" />,
              },
              {
                title: 'Workflow & Operating Model',
                description:
                  'Understand where proposed AI capabilities fit into current processes and where human review is required.',
                icon: <Users className="w-5 h-5 text-white stroke-[2]" />,
              },
              {
                title: 'Security & Governance',
                description:
                  'Identify access controls, confidentiality, data handling, oversight, and operational risk considerations.',
                icon: <ShieldCheck className="w-5 h-5 text-white stroke-[2]" />,
              },
            ].map((card, idx) => (
              <ScrollFadeIn key={card.title} delay={idx * 80} className="h-full">
                <div className="group rounded-[2rem] p-7 sm:p-8 bg-white dark:bg-card border-0 shadow-[0_8px_30px_rgba(0,49,46,0.06)] hover:shadow-[0_16px_40px_rgba(0,49,46,0.12)] transition-all duration-300 h-full flex flex-col justify-start hover:-translate-y-1">
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

      {/* ================= 6. ADVISORY APPROACH (ACCORDION) ================= */}
      <section
        id="development-approach"
        className="relative z-20 w-full py-16 sm:py-20 md:py-28 bg-zinc-gradient text-white overflow-hidden"
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
            <ScrollFadeIn>
              <ArrowBadge
                href="#development-approach"
                text="Advisory Approach"
                variant="white"
                className="mb-4"
              />
            </ScrollFadeIn>
            <ScrollFadeIn delay={100} className="w-full">
              <SectionHeading
                lines={['From Assessment To An AI Roadmap']}
                align="center"
                headingClassName="text-white"
                className="mb-0"
              />
            </ScrollFadeIn>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            {strategyApproachSteps.map((step, idx) => {
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
                            What this means for you:
                          </span>
                          <p className="text-xs sm:text-sm text-zinc-700 font-normal leading-relaxed">
                            {step.meansForYou}
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

      {/* ================= FEASIBILITY, RISKS & PRIORITIES (CONTROLS) ================= */}
      <section id="feasibility-risks" className="relative z-10 w-full py-16 sm:py-20 md:py-24 bg-transparent text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto mb-14 sm:mb-16 md:mb-20">
            <ScrollFadeIn>
              <ArrowBadge
                href="#feasibility-risks"
                text="Feasibility & Priorities"
                variant="black"
                className="mb-4"
              />
            </ScrollFadeIn>
            <ScrollFadeIn delay={100} className="w-full">
              <SectionHeading
                lines={[
                  'Distinguish High-Value Opportunities <span class="text-cyan-gradient font-medium inline-block whitespace-nowrap">From Unready Ideas</span>',
                ]}
                align="center"
                headingClassName="whitespace-normal lg:whitespace-nowrap"
                className="mb-0"
              />
            </ScrollFadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
            {/* Pillar 1 */}
            <ScrollFadeIn delay={100} className="w-full">
              <div className="flex flex-col items-center text-center px-2 sm:px-6">
                <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                  <TrendingUp className="w-8 h-8 text-black stroke-[1.75]" />
                </div>
                <h4 className="text-xl sm:text-2xl font-headline font-bold text-black tracking-tight mb-3 leading-snug">
                  Business Value Validation
                </h4>
                <p className="text-sm sm:text-base text-black/70 leading-relaxed font-normal max-w-md">
                  Clarify intended outcomes and identify exactly how each proposed use case contributes to revenue or savings.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Pillar 2 */}
            <ScrollFadeIn delay={200} className="w-full">
              <div className="flex flex-col items-center text-center px-2 sm:px-6 md:border-l md:border-[#003431]/10">
                <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                  <Cpu className="w-8 h-8 text-black stroke-[1.75]" />
                </div>
                <h4 className="text-xl sm:text-2xl font-headline font-bold text-black tracking-tight mb-3 leading-snug">
                  Technical Feasibility
                </h4>
                <p className="text-sm sm:text-base text-black/70 leading-relaxed font-normal max-w-md">
                  Evaluate required functionality, model availability, API performance, and realistic engineering effort up front.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Pillar 3 */}
            <ScrollFadeIn delay={300} className="w-full">
              <div className="flex flex-col items-center text-center px-2 sm:px-6 md:border-l md:border-[#003431]/10">
                <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                  <AlertTriangle className="w-8 h-8 text-black stroke-[1.75]" />
                </div>
                <h4 className="text-xl sm:text-2xl font-headline font-bold text-black tracking-tight mb-3 leading-snug">
                  Risk &amp; Governance
                </h4>
                <p className="text-sm sm:text-base text-black/70 leading-relaxed font-normal max-w-md">
                  Consider privacy, compliance, operational impact, and required human review checkpoints before deployment.
                </p>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* ================= RELEVANT EXPERIENCE (CASE STUDIES) ================= */}
            {/* ================= CASE STUDIES: REAL PRODUCTION OUTCOMES ================= */}
      <CaseStudiesSection
        badgeText="Case Studies"
        headingLines={["Practical Guidance For","<span class=\"text-cyan-gradient font-medium inline-block\">Real Business Needs</span>"]}
        subheading="Explore enterprise AI roadmaps, technical feasibility audits, and strategic deployment architectures engineered for risk-managed scale."
      />

      {/* ================= 7. DELIVERABLES ================= */}
      <GeometricZincContainer zoomScale={1.3}>
        <div className="relative z-10 max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
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
                lines={['What You Receive']}
                subheading="Every advisory engagement delivers structured assessments, prioritized roadmaps, and actionable engineering next steps."
                align="center"
                headingClassName="text-white"
                subheadingClassName="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed font-normal mt-4"
                subheadingMaxWidth="max-w-3xl"
                className="mb-0"
              />
            </ScrollFadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            {strategyDeliverablesData.map((item, idx) => (
              <ScrollFadeIn key={item.title} delay={idx * 80} className="h-full">
                <div
                  className="group relative rounded-3xl p-6 sm:p-8 flex flex-col justify-start h-full bg-black/[0.12] hover:bg-black/[0.18] border-[0.5px] border-primary/40 hover:border-primary/90 backdrop-blur-[24px] transition-all duration-300 shadow-none hover:-translate-y-1 overflow-hidden"
                  style={{
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                  }}
                >
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

            <ScrollFadeIn delay={400} className="h-full">
              <div className="group relative rounded-3xl p-6 sm:p-7 lg:p-8 flex flex-col justify-between h-full bg-white text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform-gpu transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="pointer-events-none absolute -bottom-4 -right-4 w-60 h-48 sm:w-72 sm:h-56 lg:w-80 lg:h-60 z-0 opacity-95 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="https://res.cloudinary.com/cauders/image/upload/v1792813715/Customer-Facing_Applications_unghui.jpg"
                    alt="AI Advisory & Consulting"
                    fill
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 320px"
                    className="object-contain object-bottom-right"
                  />
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-semibold font-headline text-black tracking-tight mb-2 leading-tight">
                    Not Sure <span className="text-cyan-gradient font-semibold inline-block">Where</span>
                    <br />
                    <span className="text-cyan-gradient font-semibold inline-block">To Begin?</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-2 font-normal leading-relaxed max-w-[14rem]">
                    Discuss your business opportunities, systems, and feasibility with our executive advisors.
                  </p>
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

      {/* ================= 8. FAQS ================= */}
      <div id="faq">
        <FAQPreview faqs={aiStrategyFaqs} badgeText="FAQ" badgeHref="#faq" />
      </div>

      {/* ================= 9. CLOSING CTA ================= */}
      <GetAQuote
        title="Let's Discuss Your AI Plans"
        description="Tell us what you're considering, which business problem you're trying to address, or where you need clarity before making an AI investment."
        ctaText="Discuss AI Strategy"
        ctaHref="/contact"
        contentMaxWidth="max-w-4xl"
        headingMaxWidth="max-w-3xl"
        subheadingMaxWidth="max-w-xl"
      />
    </div>
  );
}
