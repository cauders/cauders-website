'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  Database,
  Search,
  GitMerge,
  Cpu,
  ChevronDown,
  ShieldCheck,
  Lock,
  CheckCircle2,
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


interface DataEngineeringPageProps {
  badge?: string;
  badgeHref?: string;
  className?: string;
}

const dataEngineeringFaqs: FAQ[] = [
  {
    question: 'Can you connect data from different systems?',
    answer:
      'Yes. We can assess and integrate available data sources through suitable APIs, database connections, files, or other supported methods, depending on access and technical constraints.',
  },
  {
    question: 'What if our data is inconsistent or incomplete?',
    answer:
      'We can assess data quality, identify relevant issues, and define appropriate cleaning, transformation, and validation requirements. The effort depends on the sources and intended use.',
  },
  {
    question: 'Can you build dashboards and reports?',
    answer:
      'Yes. Reporting and analytics outputs can be developed as part of the engagement when the data sources, required metrics, and reporting needs are defined.',
  },
  {
    question: 'How does data engineering support AI?',
    answer:
      'Data engineering can help make relevant data available, structured, and validated for an AI or machine-learning use case. Whether the available data is suitable depends on the specific task and requirements.',
  },
  {
    question: 'How is data access handled?',
    answer:
      'Access and data-handling requirements are defined according to the sources involved, user roles, intended use, and applicable system permissions.',
  },
  {
    question: 'Can you maintain data pipelines after delivery?',
    answer:
      'Ongoing maintenance, issue resolution, and changes to pipelines can be included in a continuing or separately agreed engagement.',
  },
];

const dataDeliverablesData = [
  {
    title: 'Defined Data Scope',
    items: [
      'Agreed data sources, output models, and target schemas',
      'Defined processing schedules, batch/streaming rules, and latency needs',
      'Validation criteria and threshold specifications',
    ],
  },
  {
    title: 'Working Pipelines & Transformations',
    items: [
      'Robust data ingestion connectors and automated ETL/ELT pipelines',
      'Cleaned, standardized, and joined analytics-ready datasets',
      'Production-tested storage and warehousing configuration',
    ],
  },
  {
    title: 'Data Quality & Validation',
    items: [
      'Automated schema enforcement and error detection rules',
      'Logging of data anomalies, missing inputs, and outliers',
      'Verification against agreed enterprise reporting standards',
    ],
  },
  {
    title: 'Reporting & Data Delivery',
    items: [
      'Operational dashboards and business intelligence reporting models',
      'Structured views and APIs for downstream analytical consumption',
      'Validated metrics aligned across all business stakeholders',
    ],
  },
  {
    title: 'Documentation & Handover',
    items: [
      'Detailed pipeline architecture, lineage diagrams, and data dictionary',
      'Source-to-target mapping documentation and maintenance runbooks',
      'Full ownership transfer of pipeline code and query repositories',
    ],
  },
];

const dataApproachSteps = [
  {
    number: '01',
    title: 'Collect',
    description:
      'Connect the required sources and bring the relevant information into the data workflow.',
    meansForYou: 'A unified ingestion layer capturing all key operational data.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770098/Discover_Align_vp2l9d.jpg',
  },
  {
    number: '02',
    title: 'Transform',
    description:
      'Apply defined transformations, standardize formats, and combine information where appropriate.',
    meansForYou: 'Normalized, consistent tables structured for downstream analysis.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770100/Plan_Design_rf0t2h.jpg',
  },
  {
    number: '03',
    title: 'Validate',
    description:
      'Check data against relevant rules and identify missing, inconsistent, or invalid information.',
    meansForYou: 'High confidence in data reliability before figures reach reports or models.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770102/Build_Integrate_egvjcw.jpg',
  },
  {
    number: '04',
    title: 'Deliver',
    description:
      'Make prepared data available to the reporting tools, applications, or analytics processes that need it.',
    meansForYou: 'Fast, secure access to timely insights across your organization.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770100/Validate_Handover_e9gotj.jpg',
  },
];

export default function DataEngineeringPage({
  badge = 'AI & AUTOMATION',
  badgeHref = '#overview',
  className,
}: DataEngineeringPageProps) {
  const [activeApproachIndex, setActiveApproachIndex] = useState<number>(0);

  return (
    <div className={cn('relative w-full bg-transparent', className)}>
      {/* ================= 1. HERO SECTION ================= */}
      <div className="relative w-full min-h-[660px] sm:min-h-[720px] lg:min-h-[800px] xl:min-h-[850px] bg-[#051314] rounded-b-[2rem] sm:rounded-b-[2.5rem] lg:rounded-b-[3.5rem] overflow-hidden flex items-center pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-32">
        <div className="absolute inset-0 z-0 w-full h-full pointer-events-none select-none">
          <img
            src="https://res.cloudinary.com/cauders/image/upload/v1792913350/Data_Analytics_dinwsu.jpg"
            alt="Data Engineering & Analytics"
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
                  '<span class="text-cyan-radial font-medium inline-block">Data Engineering</span> &',
                  'Analytics',
                ]}
                subheading="Connect and prepare data from the systems your business relies on, so reporting, operational decisions, and AI applications can use information that is more consistent, accessible, and fit for purpose."
                align="left"
                headingClassName="!text-white"
                subheadingMaxWidth="max-w-xl"
                subheadingClassName="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 leading-relaxed font-normal mb-5 sm:mb-8"
                className="mb-0"
              />

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
                alt="When Business Data Is Hard to Use"
                className="w-full h-auto block select-none pointer-events-none"
              loading="lazy" decoding="async" />

              <div className="absolute inset-0 z-10 flex items-center px-6 sm:px-10 md:px-14 lg:px-16">
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-6 sm:gap-8 lg:gap-12">
                  <div className="lg:col-span-6 flex items-center pl-4 sm:pl-8 lg:pl-12 xl:pl-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white italic leading-[1.15]">
                      When Business Data Is Hard To Use
                    </h2>
                  </div>

                  <div className="hidden lg:block lg:col-span-1 flex justify-center">
                    <div className="h-28 xl:h-36 w-[2px] bg-white/45 mx-auto rounded-full shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                  </div>

                  <div className="lg:col-span-5 flex items-center">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/85 font-light leading-relaxed tracking-normal font-sans antialiased">
                      Data can be available across multiple systems and still be difficult to use reliably. The challenge is connecting, preparing, validating, and delivering it to people and applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>

      {/* ================= 3. 3 USE CASE CARDS ================= */}
      <section className="relative z-20 w-full pt-4 sm:pt-8 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-[95rem] mx-auto">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 items-stretch">
            {[
              {
                title: 'Information Is Spread Across Systems',
                description:
                  'Relevant data sits in disconnected platforms, files, or databases, making it difficult to bring together for consistent reporting or analysis.',
                image: 'https://res.cloudinary.com/cauders/image/upload/v1792906816/Gemini_Generated_Image_ma12k1ma12k1ma12_ftm70g.jpg',
              },
              {
                title: 'Reports Do Not Agree',
                description:
                  'Different sources, inconsistent definitions, or data-quality issues produce conflicting figures and require manual reconciliation.',
                image: 'https://res.cloudinary.com/cauders/image/upload/v1792906816/Gemini_Generated_Image_ma12k1ma12k1ma12_ftm70g.jpg',
              },
              {
                title: 'Data Is Not Ready for Analytics or AI',
                description:
                  'Information requires cleaning, transformation, or structured delivery before it can support meaningful analysis or downstream applications.',
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

      {/* ================= 4. DATA FOUNDATION ================= */}
      <section id="capabilities" className="py-16 md:py-20 relative z-10 text-foreground bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative">
            <div className="lg:col-span-5 relative lg:sticky lg:top-32 h-fit self-start">
              <div>
                <ScrollFadeIn>
                  <ArrowBadge
                    href="#capabilities"
                    text="Data Foundation"
                    variant="black"
                    className="mb-4"
                  />

                  <SectionHeading
                    lines={[
                      'Building The',
                      '<span class="text-cyan-gradient font-medium inline-block">Data Foundation</span>',
                    ]}
                    subheading="We build robust pipelines, data warehouses, and semantic layers that turn raw, distributed records into trusted corporate assets."
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

            <div className="lg:col-span-7 flex flex-col">
              {/* Item 1 */}
              <ScrollSpyItem>
                <div className="pb-8 lg:pb-12 border-b border-border flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      Data Integration
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Connect relevant databases, applications, files, APIs, and other available enterprise data sources.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792808336/Business_Applications-Photoroom_t53gbo.png"
                      alt="Data Integration"
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
                      Data Pipelines
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Build repeatable processes that collect, move, and process data according to defined performance requirements.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792808331/Customer_Partner_Portals-Photoroom_myhnd7.png"
                      alt="Data Pipelines"
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
                      Data Transformation
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Clean, standardize, join, and structure information to support consistent use across reporting and applications.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792808333/Workflow_Operations_Systems-Photoroom_hqp0xn.png"
                      alt="Data Transformation"
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
                      Data Storage &amp; Organization
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Organize prepared data in suitable destinations according to intended use, volume, access needs, and technical constraints.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792808334/Specialized_Software_Solutions-Photoroom_jrol0x.png"
                      alt="Data Storage & Organization"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. ANALYTICS & VISIBILITY (4 VALUE CARDS) ================= */}
      <section className="py-16 md:py-24 relative z-10 text-foreground bg-transparent">
        <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto mb-14 sm:mb-20">
            <SectionHeading
              lines={[
                'From Data To <span class="text-cyan-gradient font-medium inline-block">Reporting &amp; Analytics</span>',
              ]}
              subheading="Transform clean data foundations into actionable decision-making tools, operational dashboards, and AI-ready feeds."
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
                title: 'Reporting & Dashboards',
                description:
                  'Bring relevant measures and information into intuitive dashboards that help teams review business activity.',
                icon: <Database className="w-5 h-5 text-white stroke-[2]" />,
              },
              {
                title: 'Operational Visibility',
                description:
                  'Combine data from relevant sources to make operational processes, velocity, and bottlenecks easier to examine.',
                icon: <Search className="w-5 h-5 text-white stroke-[2]" />,
              },
              {
                title: 'Data for Business Analysis',
                description:
                  'Prepare structured datasets and metrics that support historical comparisons and trend analysis.',
                icon: <GitMerge className="w-5 h-5 text-white stroke-[2]" />,
              },
              {
                title: 'Data for AI Applications',
                description:
                  'Prepare and deliver validated, high-quality feature stores for AI and machine-learning models.',
                icon: <Cpu className="w-5 h-5 text-white stroke-[2]" />,
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

      {/* ================= 6. DATA FLOW (ACCORDION) ================= */}
      <section
        id="development-approach"
        className="relative z-20 w-full py-16 sm:py-20 md:py-28 bg-zinc-gradient text-white overflow-hidden"
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
            <ScrollFadeIn>
              <ArrowBadge
                href="#development-approach"
                text="Data Flow"
                variant="white"
                className="mb-4"
              />
            </ScrollFadeIn>
            <ScrollFadeIn delay={100} className="w-full">
              <SectionHeading
                lines={['Sources, Pipelines & Transformations']}
                align="center"
                headingClassName="text-white"
                className="mb-0"
              />
            </ScrollFadeIn>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            {dataApproachSteps.map((step, idx) => {
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

      {/* ================= DATA QUALITY & GOVERNANCE ================= */}
      <section id="quality-governance" className="relative z-10 w-full py-16 sm:py-20 md:py-24 bg-transparent text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto mb-14 sm:mb-16 md:mb-20">
            <ScrollFadeIn>
              <ArrowBadge
                href="#quality-governance"
                text="Governance & Quality"
                variant="black"
                className="mb-4"
              />
            </ScrollFadeIn>
            <ScrollFadeIn delay={100} className="w-full">
              <SectionHeading
                lines={[
                  'Make Data <span class="text-cyan-gradient font-medium inline-block whitespace-nowrap">More Reliable And Usable</span>',
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
                  <ShieldCheck className="w-8 h-8 text-black stroke-[1.75]" />
                </div>
                <h4 className="text-xl sm:text-2xl font-headline font-bold text-black tracking-tight mb-3 leading-snug">
                  Data Quality &amp; Validation
                </h4>
                <p className="text-sm sm:text-base text-black/70 leading-relaxed font-normal max-w-md">
                  Apply suitable validation checks to identify missing, inconsistent, or invalid operational records.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Pillar 2 */}
            <ScrollFadeIn delay={200} className="w-full">
              <div className="flex flex-col items-center text-center px-2 sm:px-6 md:border-l md:border-[#003431]/10">
                <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                  <Lock className="w-8 h-8 text-black stroke-[1.75]" />
                </div>
                <h4 className="text-xl sm:text-2xl font-headline font-bold text-black tracking-tight mb-3 leading-snug">
                  Access &amp; Permissions
                </h4>
                <p className="text-sm sm:text-base text-black/70 leading-relaxed font-normal max-w-md">
                  Define how users and connected services access sensitive tables according to their verified roles.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Pillar 3 */}
            <ScrollFadeIn delay={300} className="w-full">
              <div className="flex flex-col items-center text-center px-2 sm:px-6 md:border-l md:border-[#003431]/10">
                <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                  <CheckCircle2 className="w-8 h-8 text-black stroke-[1.75]" />
                </div>
                <h4 className="text-xl sm:text-2xl font-headline font-bold text-black tracking-tight mb-3 leading-snug">
                  Consistent Definitions
                </h4>
                <p className="text-sm sm:text-base text-black/70 leading-relaxed font-normal max-w-md">
                  Establish agreed data structures and metric definitions so reporting uses identical, verified interpretations.
                </p>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* ================= SELECTED WORK ================= */}
            {/* ================= CASE STUDIES: REAL PRODUCTION OUTCOMES ================= */}
      <CaseStudiesSection
        badgeText="Case Studies"
        headingLines={["Data Engineering Applied To","<span class=\"text-cyan-gradient font-medium inline-block\">Business Requirements</span>"]}
        subheading="Explore scalable lakehouse architectures, real-time data streaming, and automated pipelines engineered for enterprise decision making."
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
                lines={['What To Expect From Delivery']}
                subheading="Every data platform initiative includes verified ETL pipelines, data dictionaries, automated quality checks, and full architectural handover."
                align="center"
                headingClassName="text-white"
                subheadingClassName="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed font-normal mt-4"
                subheadingMaxWidth="max-w-3xl"
                className="mb-0"
              />
            </ScrollFadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            {dataDeliverablesData.map((item, idx) => (
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
                    alt="Data Engineering Solutions"
                    fill
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 320px"
                    className="object-contain object-bottom-right"
                  />
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-semibold font-headline text-black tracking-tight mb-2 leading-tight">
                    Not Sure <span className="text-cyan-gradient font-semibold inline-block">What</span>
                    <br />
                    <span className="text-cyan-gradient font-semibold inline-block">You Need?</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-2 font-normal leading-relaxed max-w-[14rem]">
                    Discuss your source systems, pipeline volumes, and reporting objectives with our data architects.
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
        <FAQPreview faqs={dataEngineeringFaqs} badgeText="FAQ" badgeHref="#faq" />
      </div>

      {/* ================= 9. CLOSING CTA ================= */}
      <GetAQuote
        title="Let's Discuss Your Data Requirements"
        description="Tell us which information you need to bring together, what is difficult to report or analyze today, and where that data needs to be used."
        ctaText="Discuss a Project"
        ctaHref="/contact"
        contentMaxWidth="max-w-4xl"
        headingMaxWidth="max-w-3xl"
        subheadingMaxWidth="max-w-xl"
      />
    </div>
  );
}
