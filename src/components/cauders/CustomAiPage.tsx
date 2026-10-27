'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  Target,
  FileSearch,
  Sliders,
  CheckCircle2,
  ChevronDown,
  TrendingUp,
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


interface CustomAiPageProps {
  badge?: string;
  badgeHref?: string;
  className?: string;
}

const customAiFaqs: FAQ[] = [
  {
    question: 'When should we use custom machine learning instead of fixed rules?',
    answer:
      'Machine learning can be appropriate when the task depends on patterns in data that are difficult to express adequately through fixed rules. Predictable processes are often better handled by conventional software or rules-based logic.',
  },
  {
    question: 'Do we need our own dataset?',
    answer:
      'Not necessarily, but the feasibility of the task depends on the available data, the required outcome, and the chosen approach. Some use cases can use existing models, while others require suitable training or evaluation data.',
  },
  {
    question: 'Can you work with our existing AI models or APIs?',
    answer:
      'Yes. We can assess available models and APIs and integrate suitable options into the required application or workflow, subject to their capabilities, licensing, access, and technical constraints.',
  },
  {
    question: 'Can you guarantee a specific level of model accuracy?',
    answer:
      'Accuracy depends on the task, input data, evaluation method, and operating conditions. We define appropriate evaluation criteria and report the results and limitations rather than promise a universal accuracy level.',
  },
  {
    question: 'Can a model be integrated into an existing application?',
    answer:
      'Yes. Where the architecture and interfaces support it, model functionality can be integrated into an application, API, or business workflow.',
  },
  {
    question: 'What happens after the model is delivered?',
    answer:
      'Further monitoring, performance review, updates, or retraining can be agreed according to the model\'s purpose, operating environment, and ongoing requirements.',
  },
];

const customAiDeliverablesData = [
  {
    title: 'Defined Task & Evaluation Criteria',
    items: [
      'Agreed problem definition, target outcomes, and input variables',
      'Evaluation metrics and acceptable operational tolerances',
      'Pre-processing and feature engineering specifications',
    ],
  },
  {
    title: 'Model Functionality',
    items: [
      'Developed, fine-tuned, or configured model weights and pipelines',
      'Training and validation code with reproducible artifacts',
      'Alignment with agreed technical scope and target infrastructure',
    ],
  },
  {
    title: 'Evaluation & Validation',
    items: [
      'Empirical evaluation against representative test datasets',
      'Analysis of error cases, edge conditions, and boundaries',
      'Validation of end-to-end model inference and latency',
    ],
  },
  {
    title: 'Integration & Handover',
    items: [
      'Application or API integration and containerized deployment',
      'Detailed technical documentation, pipeline code, and model cards',
      'Full intellectual property ownership and training guidelines',
    ],
  },
  {
    title: 'Further Evaluation & Improvement',
    items: [
      'Monitoring protocols for data drift and concept degradation',
      'Retraining workflows and performance reviews as conditions change',
      'Iterative model optimization based on operational telemetry',
    ],
  },
];

const customAiApproachSteps = [
  {
    number: '01',
    title: 'Define the Task',
    description:
      'Clarify the business problem, desired output, available inputs, and criteria for evaluating whether the model is useful.',
    meansForYou: 'A defined problem and measurable evaluation objectives.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770098/Discover_Align_vp2l9d.jpg',
  },
  {
    number: '02',
    title: 'Assess the Data',
    description:
      'Review available datasets, data quality, representativeness, and preparation requirements. Identify limitations that could affect model development.',
    meansForYou: 'A clearer understanding of the data available and its suitability for the task.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770100/Plan_Design_rf0t2h.jpg',
  },
  {
    number: '03',
    title: 'Develop & Evaluate',
    description:
      'Select an appropriate modelling approach, develop or configure the solution, and evaluate it against relevant data and agreed criteria.',
    meansForYou: 'Model results evaluated against the requirements, with limitations identified.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770102/Build_Integrate_egvjcw.jpg',
  },
  {
    number: '04',
    title: 'Integrate & Validate',
    description:
      'Integrate the model into the required application or workflow and validate how it performs within the intended operating environment.',
    meansForYou: 'Model functionality integrated and reviewed within the agreed scope.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770100/Validate_Handover_e9gotj.jpg',
  },
];

export default function CustomAiPage({
  badge = 'AI & AUTOMATION',
  badgeHref = '#overview',
  className,
}: CustomAiPageProps) {
  const [activeApproachIndex, setActiveApproachIndex] = useState<number>(0);

  return (
    <div className={cn('relative w-full bg-transparent', className)}>
      {/* ================= 1. HERO SECTION ================= */}
      <div className="relative w-full min-h-[660px] sm:min-h-[720px] lg:min-h-[800px] xl:min-h-[850px] bg-[#051314] rounded-b-[2rem] sm:rounded-b-[2.5rem] lg:rounded-b-[3.5rem] overflow-hidden flex items-center pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-32">
        <div className="absolute inset-0 z-0 w-full h-full pointer-events-none select-none">
          <img
            src="https://res.cloudinary.com/cauders/image/upload/v1792912134/custom_ai_x7ljqa.jpg"
            alt="Custom AI & Machine Learning"
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
                  '<span class="text-cyan-radial font-medium inline-block">Custom AI</span> &',
                  'Machine Learning',
                ]}
                subheading="Develop AI and machine-learning solutions for defined business tasks such as prediction, classification, and computer vision. We evaluate the problem, available data, and performance requirements to determine an appropriate technical approach."
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
                alt="When Custom AI & Machine Learning Makes Sense"
                className="w-full h-auto block select-none pointer-events-none"
              loading="lazy" decoding="async" />

              <div className="absolute inset-0 z-10 flex items-center px-6 sm:px-10 md:px-14 lg:px-16">
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-6 sm:gap-8 lg:gap-12">
                  <div className="lg:col-span-6 flex items-center pl-4 sm:pl-8 lg:pl-12 xl:pl-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white italic leading-[1.15]">
                      When Custom AI &amp; ML Makes Sense
                    </h2>
                  </div>

                  <div className="hidden lg:block lg:col-span-1 flex justify-center">
                    <div className="h-28 xl:h-36 w-[2px] bg-white/45 mx-auto rounded-full shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                  </div>

                  <div className="lg:col-span-5 flex items-center">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/85 font-light leading-relaxed tracking-normal font-sans antialiased">
                      Custom AI can be useful when a business task depends on patterns in data, image or video interpretation, or predictions that conventional rules alone cannot adequately provide.
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
                title: 'You Need to Predict an Outcome',
                description:
                  'Use historical data to develop models that support forecasting or estimate outcomes for a defined business task.',
                image: 'https://res.cloudinary.com/cauders/image/upload/v1792906816/Gemini_Generated_Image_ma12k1ma12k1ma12_ftm70g.jpg',
              },
              {
                title: 'Information Needs to Be Classified',
                description:
                  'Apply models to categorize documents, records, images, or other inputs according to the requirements of a particular workflow.',
                image: 'https://res.cloudinary.com/cauders/image/upload/v1792906816/Gemini_Generated_Image_ma12k1ma12k1ma12_ftm70g.jpg',
              },
              {
                title: 'Visual Information Needs Analysis',
                description:
                  'Explore computer-vision solutions for tasks involving image analysis, object detection, visual classification, or other defined visual requirements.',
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

      {/* ================= 4. CAPABILITIES: PROBLEMS WE CAN ADDRESS ================= */}
      <section id="capabilities" className="py-16 md:py-20 relative z-10 text-foreground bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative">
            <div className="lg:col-span-5 relative lg:sticky lg:top-32 h-fit self-start">
              <div>
                <ScrollFadeIn>
                  <ArrowBadge
                    href="#capabilities"
                    text="Capabilities"
                    variant="black"
                    className="mb-4"
                  />

                  <SectionHeading
                    lines={[
                      'Problems',
                      '<span class="text-cyan-gradient font-medium inline-block">We Can Address</span>',
                    ]}
                    subheading="We build targeted predictive models, classifiers, computer-vision engines, and integration pipelines tuned to your real-world data."
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
                      Prediction &amp; Forecasting
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Develop models to estimate defined outcomes from relevant historical and contextual data.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792808336/Business_Applications-Photoroom_t53gbo.png"
                      alt="Prediction & Forecasting"
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
                      Classification
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Classify information into defined categories to support review, routing, analysis, or downstream workflows.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792808331/Customer_Partner_Portals-Photoroom_myhnd7.png"
                      alt="Classification"
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
                      Computer Vision
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Develop visual-processing capabilities for image-based tasks, depending on the available data and evaluation requirements.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792808333/Workflow_Operations_Systems-Photoroom_hqp0xn.png"
                      alt="Computer Vision"
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
                      Model Integration
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Integrate trained or selected models into applications, APIs, and operational workflows so their outputs can support the intended task.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792808334/Specialized_Software_Solutions-Photoroom_jrol0x.png"
                      alt="Model Integration"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. DATA & MODEL SELECTION (4 VALUE CARDS) ================= */}
      <section className="py-16 md:py-24 relative z-10 text-foreground bg-transparent">
        <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto mb-14 sm:mb-20">
            <SectionHeading
              lines={[
                'Start With The <span class="text-cyan-gradient font-medium inline-block">Problem And The Data</span>',
              ]}
              subheading="The choice of model depends on what needs to be predicted or recognized, what information is available, and how the output will be used."
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
                title: 'Define the Target Task',
                description:
                  'Establish the target, inputs, intended use, and the consequences of an incorrect or uncertain result.',
                icon: <Target className="w-5 h-5 text-white stroke-[2]" />,
              },
              {
                title: 'Evaluate Data Suitability',
                description:
                  'Review data availability, quality, relevance, coverage, and labelling requirements where applicable.',
                icon: <FileSearch className="w-5 h-5 text-white stroke-[2]" />,
              },
              {
                title: 'Select an Approach',
                description:
                  'Evaluate whether an existing model, machine learning, or a combination of methods fits the task and constraints.',
                icon: <Sliders className="w-5 h-5 text-white stroke-[2]" />,
              },
              {
                title: 'Establish Evaluation Criteria',
                description:
                  'Define how model performance will be measured, which errors matter, and what level of performance is appropriate.',
                icon: <CheckCircle2 className="w-5 h-5 text-white stroke-[2]" />,
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

      {/* ================= 6. DEVELOPMENT APPROACH (ACCORDION) ================= */}
      <section
        id="development-approach"
        className="relative z-20 w-full py-16 sm:py-20 md:py-28 bg-zinc-gradient text-white overflow-hidden"
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                lines={['From Problem Definition To Integrated Model']}
                align="center"
                headingClassName="text-white"
                className="mb-0"
              />
            </ScrollFadeIn>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            {customAiApproachSteps.map((step, idx) => {
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

      {/* ================= MODEL PERFORMANCE (CONTROLS) ================= */}
      <section id="model-performance" className="relative z-10 w-full py-16 sm:py-20 md:py-24 bg-transparent text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto mb-14 sm:mb-16 md:mb-20">
            <ScrollFadeIn>
              <ArrowBadge
                href="#model-performance"
                text="Model Performance"
                variant="black"
                className="mb-4"
              />
            </ScrollFadeIn>
            <ScrollFadeIn delay={100} className="w-full">
              <SectionHeading
                lines={[
                  'Understand Performance, <span class="text-cyan-gradient font-medium inline-block whitespace-nowrap">Limitations &amp; Monitoring</span>',
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
                  <CheckCircle2 className="w-8 h-8 text-black stroke-[1.75]" />
                </div>
                <h4 className="text-xl sm:text-2xl font-headline font-bold text-black tracking-tight mb-3 leading-snug">
                  Evaluate on Relevant Data
                </h4>
                <p className="text-sm sm:text-base text-black/70 leading-relaxed font-normal max-w-md">
                  Assess model performance using representative data and metrics suitable for the task, rather than relying on headline scores.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Pillar 2 */}
            <ScrollFadeIn delay={200} className="w-full">
              <div className="flex flex-col items-center text-center px-2 sm:px-6 md:border-l md:border-[#003431]/10">
                <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                  <Sliders className="w-8 h-8 text-black stroke-[1.75]" />
                </div>
                <h4 className="text-xl sm:text-2xl font-headline font-bold text-black tracking-tight mb-3 leading-snug">
                  Understand Error Modes
                </h4>
                <p className="text-sm sm:text-base text-black/70 leading-relaxed font-normal max-w-md">
                  Identify where the model performs less reliably, which errors matter, and whether human review is required.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Pillar 3 */}
            <ScrollFadeIn delay={300} className="w-full">
              <div className="flex flex-col items-center text-center px-2 sm:px-6 md:border-l md:border-[#003431]/10">
                <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                  <TrendingUp className="w-8 h-8 text-black stroke-[1.75]" />
                </div>
                <h4 className="text-xl sm:text-2xl font-headline font-bold text-black tracking-tight mb-3 leading-snug">
                  Monitor Under Live Conditions
                </h4>
                <p className="text-sm sm:text-base text-black/70 leading-relaxed font-normal max-w-md">
                  Track operational performance indicators and review the model when input data, business conditions, or requirements change.
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
        headingLines={["Custom AI Applied To","<span class=\"text-cyan-gradient font-medium inline-block\">Defined Business Problems</span>"]}
        subheading="Explore bespoke machine learning models, computer vision systems, and custom predictive intelligence built for high-stakes operational environments."
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
                subheading="Every custom machine learning engagement provides clear evaluation data, reproducible code pipelines, and robust operational integration."
                align="center"
                headingClassName="text-white"
                subheadingClassName="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed font-normal mt-4"
                subheadingMaxWidth="max-w-3xl"
                className="mb-0"
              />
            </ScrollFadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            {customAiDeliverablesData.map((item, idx) => (
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
                    alt="Custom AI Engineering"
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
                    Discuss your data, prediction tasks, and feasibility criteria with our machine learning team.
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
        <FAQPreview faqs={customAiFaqs} badgeText="FAQ" badgeHref="#faq" />
      </div>

      {/* ================= 9. CLOSING CTA ================= */}
      <GetAQuote
        title="Let's Discuss Your AI Use Case"
        description="Tell us what you need to predict, classify, or recognize, what data is available, and how the output would support your business."
        ctaText="Discuss a Project"
        ctaHref="/contact"
        contentMaxWidth="max-w-4xl"
        headingMaxWidth="max-w-3xl"
        subheadingMaxWidth="max-w-xl"
      />
    </div>
  );
}
