'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Users,
  Layers,
  Sparkles,
  ChevronDown,
  Cpu,
  ShieldCheck,
  Globe,
  RefreshCw,
  Rocket,
  CheckCircle2,
  Workflow,
  BarChart3,
  Server,
  Building2,
  UserCheck,
  Clock,
  Code2,
  Briefcase,
  Sliders,
} from 'lucide-react';
import ArrowBadge from './ArrowBadge';
import SectionHeading from './SectionHeading';
import SplitSectionHeader from './SplitSectionHeader';
import ContainerCard from './ContainerCard';
import DarkTealButton from './DarkTealButton';
import ScrollFadeIn from './ScrollFadeIn';
import ScrollSpyItem from './ScrollSpyItem';
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
import { cn } from '@/lib/utils';

interface DedicatedTeamsProps {
  badge?: string;
  badgeHref?: string;
  className?: string;
}



const dedicatedTeamsFaqs: FAQ[] = [
  {
    question: 'Can we interview engineers before committing?',
    answer:
      'Yes. We present candidates for your review so you can assess their experience and interview them before making your selection.',
  },
  {
    question: 'How are candidates vetted?',
    answer:
      'Candidates are reviewed against the role requirements before being presented. The screening process and any technical assessments should be defined according to the role and agreed hiring process.',
  },
  {
    question: "What happens if someone isn't the right fit?",
    answer:
      "We'll review the situation with you and discuss the appropriate next step. Replacement eligibility, process, and applicable timeframes are established in the engagement terms.",
  },
  {
    question: 'Who manages the team day to day?',
    answer:
      'Your team can manage the work, coordination can be shared, or Cauders can manage agreed delivery activities.',
  },
  {
    question: 'Who owns the code and work produced?',
    answer:
      'The applicable agreement defines ownership and usage rights for project deliverables, including the treatment of pre-existing intellectual property and third-party components.',
  },
  {
    question: 'How is confidentiality handled?',
    answer:
      'Confidentiality obligations, access permissions, and information-handling requirements are agreed before work begins.',
  },
  {
    question: 'Can we increase or reduce team capacity?',
    answer:
      'Changes can be discussed as workloads and priorities evolve. Adjustments depend on resource availability and the terms of the engagement.',
  },
  {
    question: 'How does onboarding work?',
    answer:
      'We establish responsibilities, access, tools, communication, and working practices before the selected resources begin their assigned work.',
  },
];

const teamApproachSteps = [
  {
    number: '01',
    title: 'Understand Requirements & Tech Stack',
    description:
      'We assess your architecture, technology requirements, team workflows, and roadmap priorities to define the exact skill profiles and seniority levels your project demands.',
    establishes: 'A clear definition of required engineering skills, team structure, and collaboration model.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770098/Discover_Align_vp2l9d.jpg',
  },
  {
    number: '02',
    title: 'Candidate Vetting & Client Interviews',
    description:
      'We shortlist engineers matching your criteria and coordinate direct technical interviews with your team leaders so you select the people who best fit your standards and culture.',
    establishes: 'Full client confidence and approval of every team member before onboarding.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770100/Plan_Design_rf0t2h.jpg',
  },
  {
    number: '03',
    title: 'Rapid Onboarding & System Setup',
    description:
      'We configure access to your repositories, communication tools, and development environments, getting engineers up to speed on codebase conventions and sprint workflows.',
    establishes: 'Seamless operational setup and readiness to ship code in the first sprint.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770102/Build_Integrate_egvjcw.jpg',
  },
  {
    number: '04',
    title: 'Continuous Delivery & Performance Reviews',
    description:
      'Engineers contribute directly to your backlog, participate in daily standups, and provide transparent velocity while Cauders handles HR, operations, and retention.',
    establishes: 'Consistent high-velocity delivery with zero administrative overhead for your company.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770104/Validate_Deploy_m0p8l2.jpg',
  },
];

export default function DedicatedTeams({
  badge = 'DEDICATED TEAMS',
  badgeHref = '#overview',
  className,
}: DedicatedTeamsProps) {
  const [activeApproachIndex, setActiveApproachIndex] = useState<number>(0);
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <div className={cn('relative w-full bg-transparent', className)}>
      {/* ================= 1. HERO SECTION ================= */}
      <div className="relative w-full min-h-[630px] sm:min-h-[690px] lg:min-h-[770px] xl:min-h-[830px] bg-transparent flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        {/* Background 3D illustration: Team around glass table */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[68%] xl:w-[64%] flex items-center justify-end overflow-hidden pointer-events-none select-none z-0">
          <img
            src="https://res.cloudinary.com/cauders/image/upload/v1792857091/Gemini_Generated_Image_fjog64fjog64fjog_japgfd.jpg"
            alt="Dedicated Engineering Teams"
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
                  'Teams Built Around',
                  '<span class="text-cyan-gradient font-medium inline-block">Your Roadmap</span>',
                ]}
                subheading="Add individual specialists or build a dedicated team around your product, technical needs, and delivery priorities with candidates you interview and approve."
                align="left"
                subheadingMaxWidth="max-w-lg"
                subheadingClassName="text-xs sm:text-sm md:text-base lg:text-lg text-foreground/80 dark:text-zinc-300 leading-relaxed font-normal mb-5 sm:mb-8"
                className="mb-0"
              />

              {/* CTA Button */}
              <ScrollFadeIn delay={250}>
                <div className="pt-1">
                  <DarkTealButton href="/contact" size="md">
                    Discuss Your Team
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
                src="https://res.cloudinary.com/cauders/image/upload/v1792857083/Frame_4661_syzfqk.png"
                alt="Where Extra Capacity Makes a Difference"
                className="w-full h-auto block select-none pointer-events-none"
              loading="lazy" decoding="async" />

              <div className="absolute inset-0 z-10 flex items-center px-6 sm:px-10 md:px-14 lg:px-16">
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-6 sm:gap-8 lg:gap-12">
                  <div className="lg:col-span-6 flex items-center pl-4 sm:pl-8 lg:pl-12 xl:pl-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white italic leading-[1.15]">
                      Where Extra Capacity Makes a Difference
                    </h2>
                  </div>

                  <div className="hidden lg:block lg:col-span-1 flex justify-center">
                    <div className="h-28 xl:h-36 w-[2px] bg-white/45 mx-auto rounded-full shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                  </div>

                  <div className="lg:col-span-5 flex items-center">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/85 font-light leading-relaxed tracking-normal font-sans antialiased">
                      Additional capacity can help when delivery demands increase, specialist expertise is needed, or new initiatives require dedicated support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>

      {/* ================= 3. 4 CAPACITY CARDS DIRECTLY UNDER BANNER ================= */}
      <section className="relative z-20 w-full pt-6 sm:pt-10 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-[95rem] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch">
            {/* Card 1: More Work to Deliver */}
            <ScrollFadeIn delay={100} className="h-full">
              <div className="group rounded-[1.75rem] p-7 sm:p-8 bg-white dark:bg-card border-0 shadow-[0_8px_30px_rgba(0,49,46,0.06)] hover:shadow-[0_16px_40px_rgba(0,49,46,0.12)] transition-all duration-300 h-full flex flex-col justify-start hover:-translate-y-1">
                {/* Icon Tile */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#09555A] flex items-center justify-center mb-6 shadow-sm flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-white stroke-[2]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-headline text-foreground mb-3 leading-snug">
                  More Work to Deliver
                </h3>
                <p className="text-xs sm:text-sm text-foreground/75 dark:text-zinc-400 leading-relaxed font-normal">
                  Your team has features to build, releases to prepare, or projects to complete, and additional engineering capacity can help keep delivery moving.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Card 2: Specialist Skills */}
            <ScrollFadeIn delay={200} className="h-full">
              <div className="group rounded-[1.75rem] p-7 sm:p-8 bg-white dark:bg-card border-0 shadow-[0_8px_30px_rgba(0,49,46,0.06)] hover:shadow-[0_16px_40px_rgba(0,49,46,0.12)] transition-all duration-300 h-full flex flex-col justify-start hover:-translate-y-1">
                {/* Icon Tile */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#09555A] flex items-center justify-center mb-6 shadow-sm flex-shrink-0">
                  <Code2 className="w-6 h-6 text-white stroke-[2]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-headline text-foreground mb-3 leading-snug">
                  Specialist Skills
                </h3>
                <p className="text-xs sm:text-sm text-foreground/75 dark:text-zinc-400 leading-relaxed font-normal">
                  Add expertise in a particular role or technology when your existing team doesn&apos;t have the right experience available.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Card 3: Changing Workloads */}
            <ScrollFadeIn delay={300} className="h-full">
              <div className="group rounded-[1.75rem] p-7 sm:p-8 bg-white dark:bg-card border-0 shadow-[0_8px_30px_rgba(0,49,46,0.06)] hover:shadow-[0_16px_40px_rgba(0,49,46,0.12)] transition-all duration-300 h-full flex flex-col justify-start hover:-translate-y-1">
                {/* Icon Tile */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#09555A] flex items-center justify-center mb-6 shadow-sm flex-shrink-0">
                  <Sliders className="w-6 h-6 text-white stroke-[2]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-headline text-foreground mb-3 leading-snug">
                  Changing Workloads
                </h3>
                <p className="text-xs sm:text-sm text-foreground/75 dark:text-zinc-400 leading-relaxed font-normal">
                  Bring in additional capacity for new projects, upcoming milestones, or changing workloads without expanding every internal function permanently.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Card 4: Work Across Disciplines */}
            <ScrollFadeIn delay={400} className="h-full">
              <div className="group rounded-[1.75rem] p-7 sm:p-8 bg-white dark:bg-card border-0 shadow-[0_8px_30px_rgba(0,49,46,0.06)] hover:shadow-[0_16px_40px_rgba(0,49,46,0.12)] transition-all duration-300 h-full flex flex-col justify-start hover:-translate-y-1">
                {/* Icon Tile */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#09555A] flex items-center justify-center mb-6 shadow-sm flex-shrink-0">
                  <Layers className="w-6 h-6 text-white stroke-[2]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-headline text-foreground mb-3 leading-snug">
                  Work Across Disciplines
                </h3>
                <p className="text-xs sm:text-sm text-foreground/75 dark:text-zinc-400 leading-relaxed font-normal">
                  Bring together the engineering and supporting roles required for a product, project, or technical initiative.
                </p>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* ================= 4. WAYS TO ENGAGE CAUDERS ================= */}
      <section id="ways-to-engage" className="py-16 md:py-24 bg-transparent relative z-20 text-foreground">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Eyebrow & Centered Heading */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14 sm:mb-20">
            <ScrollFadeIn>
              <ArrowBadge
                href="#ways-to-engage"
                text="Engagement Options"
                variant="black"
                className="mb-4"
              />
            </ScrollFadeIn>
            <SectionHeading
              lines={[
                'Ways To <span class="text-cyan-gradient font-medium inline-block">Engage Cauders</span>',
              ]}
              subheading="Choose the arrangement that fits the work and the way your team operates."
              align="center"
              subheadingMaxWidth="max-w-3xl"
              subheadingClassName="text-sm sm:text-base md:text-lg text-foreground/75 leading-relaxed font-normal text-center mt-3 mb-0"
              className="mb-0"
            />
          </div>

          {/* 3-Column Grid with subtle vertical dividers on medium+ viewports */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200 dark:divide-zinc-800 max-w-6xl mx-auto items-stretch">
            {/* Column 1: Individual Specialist */}
            <ScrollFadeIn delay={100} className="h-full">
              <div className="flex flex-col items-center text-center px-6 sm:px-8 lg:px-10 py-6 md:py-0 h-full">
                {/* Circular Icon with Primary Accent */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border-[1.5px] border-zinc-900 dark:border-white flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-105 bg-transparent">
                  <UserCheck className="w-7 h-7 text-black dark:text-white stroke-[2]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-headline text-foreground mb-2 leading-snug">
                  Individual Specialist
                </h3>
                <p className="text-sm sm:text-base font-medium text-foreground/90 dark:text-zinc-200 mb-3 leading-snug">
                  Add a specialist to your existing team.
                </p>
                <p className="text-xs sm:text-sm text-foreground/70 dark:text-zinc-400 leading-relaxed font-normal max-w-sm">
                  Bring in an engineer or specialist for a specific role or capability gap. Your team can direct their day-to-day work.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Column 2: Dedicated Teams */}
            <ScrollFadeIn delay={200} className="h-full">
              <div className="flex flex-col items-center text-center px-6 sm:px-8 lg:px-10 py-6 md:py-0 h-full">
                {/* Circular Icon with Primary Accent */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border-[1.5px] border-zinc-900 dark:border-white flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-105 bg-transparent">
                  <Users className="w-7 h-7 text-black dark:text-white stroke-[2]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-headline text-foreground mb-2 leading-snug">
                  Dedicated Teams
                </h3>
                <p className="text-sm sm:text-base font-medium text-foreground/90 dark:text-zinc-200 mb-3 leading-snug">
                  Build a team around your product.
                </p>
                <p className="text-xs sm:text-sm text-foreground/70 dark:text-zinc-400 leading-relaxed font-normal max-w-sm">
                  Bring together the roles and engineering capacity required to support your product, ongoing development, and delivery priorities.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Column 3: Cross-Functional Teams */}
            <ScrollFadeIn delay={300} className="h-full">
              <div className="flex flex-col items-center text-center px-6 sm:px-8 lg:px-10 py-6 md:py-0 h-full">
                {/* Circular Icon with Primary Accent */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border-[1.5px] border-zinc-900 dark:border-white flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-105 bg-transparent">
                  <Workflow className="w-7 h-7 text-black dark:text-white stroke-[2]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-headline text-foreground mb-2 leading-snug">
                  Cross-Functional Teams
                </h3>
                <p className="text-sm sm:text-base font-medium text-foreground/90 dark:text-zinc-200 mb-3 leading-snug">
                  Bring complementary skills together.
                </p>
                <p className="text-xs sm:text-sm text-foreground/70 dark:text-zinc-400 leading-relaxed font-normal max-w-sm">
                  Assemble a team with the relevant engineering and supporting capabilities for work that spans multiple disciplines.
                </p>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* ================= 5. THE ROLES YOU CAN ADD ================= */}
      <section id="roles-you-can-add" className="py-16 md:py-24 bg-transparent relative z-20 text-foreground">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
            {/* Left Column: Heading, Subtitle & CTA */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start text-left lg:sticky lg:top-32 h-fit">
              <ScrollFadeIn>
                <SectionHeading
                  lines={[
                    'The <span class="text-cyan-gradient font-medium inline-block">Roles</span> You Can Add',
                  ]}
                  subheading="Choose from relevant engineering roles and capabilities according to the requirements of your product and team."
                  align="left"
                  subheadingMaxWidth="max-w-md"
                  subheadingClassName="text-sm sm:text-base text-foreground/80 dark:text-zinc-300 leading-relaxed font-normal mt-3 mb-6 sm:mb-8"
                  className="mb-0"
                />

                <div className="pt-2">
                  <DarkTealButton href="/contact" size="md">
                    Discuss Your Team
                  </DarkTealButton>
                </div>
              </ScrollFadeIn>
            </div>

            {/* Right Column: Roles Cards with Tag Pills */}
            <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-4 sm:gap-5">
              {[
                {
                  title: 'Software Engineering',
                  tags: ['Frontend', 'Backend', 'Full-Stack', 'Mobile'],
                  desc: 'Frontend, backend, full-stack, and mobile development.',
                },
                {
                  title: 'Quality Assurance & Testing',
                  tags: ['Functional Testing', 'QA Automation', 'Regression', 'Performance'],
                  desc: 'Software development, functional testing, and quality assurance.',
                },
                {
                  title: 'AI & Machine Learning',
                  tags: ['LLM Integration', 'Machine Learning', 'AI Agents', 'Intelligent Systems'],
                  desc: 'Specialist capabilities for AI applications, machine learning, and intelligent systems.',
                },
                {
                  title: 'Data & Cloud Infrastructure',
                  tags: ['Data Pipelines', 'Integrations', 'Cloud Systems', 'DevOps'],
                  desc: 'Data pipelines, integrations, and systems that support products and business workflows.',
                },
                {
                  title: 'UI/UX & Product Design',
                  tags: ['User Journeys', 'Interface Design', 'Design Systems', 'Product Experiences'],
                  desc: 'User journeys, interface design, and product experiences where the engagement calls for them.',
                },
              ].map((roleGroup, idx) => (
                <ScrollFadeIn key={roleGroup.title} delay={idx * 60}>
                  <div className="rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 bg-white dark:bg-card border-0 shadow-[0_6px_25px_rgba(0,49,46,0.05)] hover:shadow-[0_12px_35px_rgba(0,49,46,0.09)] transition-all duration-300">
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold font-headline text-foreground mb-1.5 tracking-tight">
                      {roleGroup.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/70 dark:text-zinc-400 mb-4 font-normal">
                      {roleGroup.desc}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                      {roleGroup.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-medium bg-zinc-100/90 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollFadeIn>
              ))}

              {/* Confirmation Note at Bottom */}
              <ScrollFadeIn delay={350}>
                <div className="pt-2 px-2">
                  <p className="text-xs sm:text-sm text-foreground/60 dark:text-zinc-400 italic">
                    Available roles, seniority, and team composition are confirmed against the engagement requirements.
                  </p>
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. SELECTION PROCESS: YOU CHOOSE WHO JOINS YOUR TEAM ================= */}
      <section id="selection-process" className="relative z-20 w-full py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-zinc-gradient text-white overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(140,234,229,0.22),transparent_70%)]"
        />

        <div className="relative z-10 max-w-[95rem] mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-14 sm:mb-20">
            <ScrollFadeIn>
              <ArrowBadge
                href="#selection-process"
                text="Selection Process"
                variant="white"
                className="mb-3 md:mb-4"
              />
            </ScrollFadeIn>
            <SectionHeading
              lines={['You Choose Who Joins Your Team']}
              subheading="Review candidates, interview them, and make the selection based on your technical requirements and working environment."
              align="center"
              headingClassName="!text-white font-normal"
              subheadingClassName="!text-white/80 max-w-2xl text-center mx-auto mt-3 font-normal"
              className="mb-0"
            />
          </div>

          {/* 5-Card Layout: Left 2 stacked, Center 1 prominent card, Right 2 stacked */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 items-stretch max-w-[85rem] mx-auto">
            {/* Left Column: Card 01 & Card 02 */}
            <div className="lg:col-span-4 flex flex-col gap-6 sm:gap-7">
              {/* Card 01: Define the Role */}
              <ScrollFadeIn delay={100} className="h-full">
                <div className="group relative rounded-[2rem] bg-white text-zinc-900 p-6 sm:p-7 flex flex-col justify-between h-full shadow-[0_12px_40px_rgba(0,35,30,0.18)] hover:shadow-[0_20px_50px_rgba(0,35,30,0.28)] transition-all duration-300 overflow-hidden">
                  {/* Background Illustration behind text */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-6 -bottom-6 w-48 h-48 sm:w-56 sm:h-56 opacity-25 dark:opacity-20 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                  >
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792859565/Define_ecvpuv.jpg"
                      alt=""
                      className="w-full h-full object-contain"
                    loading="lazy" decoding="async" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#09555A]/10 text-[#09555A]">
                        Step 01
                      </span>
                      <span className="font-headline font-semibold text-4xl sm:text-5xl text-zinc-200 select-none">
                        01
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold font-headline text-black mb-2 tracking-tight">
                      Define the Role
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed mb-3">
                      Agree on the responsibilities, skills, experience, and seniority required for the position or team.
                    </p>
                  </div>

                  {/* Details directly on the card */}
                  <div className="relative z-10 pt-3 border-t border-zinc-100">
                    <p className="text-[11px] sm:text-xs text-zinc-500 font-normal leading-relaxed">
                      Seniority & tech stack profiling • Timezone overlap & cadence alignment
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>

              {/* Card 02: Review Candidates */}
              <ScrollFadeIn delay={150} className="h-full">
                <div className="group relative rounded-[2rem] bg-white text-zinc-900 p-6 sm:p-7 flex flex-col justify-between h-full shadow-[0_12px_40px_rgba(0,35,30,0.18)] hover:shadow-[0_20px_50px_rgba(0,35,30,0.28)] transition-all duration-300 overflow-hidden">
                  {/* Background Illustration behind text */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-6 -bottom-6 w-48 h-48 sm:w-56 sm:h-56 opacity-25 dark:opacity-20 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                  >
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792857376/Review_bxsyvd.jpg"
                      alt=""
                      className="w-full h-full object-contain"
                    loading="lazy" decoding="async" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#09555A]/10 text-[#09555A]">
                        Step 02
                      </span>
                      <span className="font-headline font-semibold text-4xl sm:text-5xl text-zinc-200 select-none">
                        02
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold font-headline text-black mb-2 tracking-tight">
                      Review Candidates
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed mb-3">
                      Present suitable candidates against the agreed requirements for your review.
                    </p>
                  </div>

                  {/* Details directly on the card */}
                  <div className="relative z-10 pt-3 border-t border-zinc-100">
                    <p className="text-[11px] sm:text-xs text-zinc-500 font-normal leading-relaxed">
                      Verified GitHub code samples & CVs • Pre-screened technical benchmarks
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>
            </div>

            {/* Center Column: Card 03 - Prominent Centerpiece Card */}
            <div className="lg:col-span-4 flex flex-col">
              <ScrollFadeIn delay={200} className="h-full">
                <div className="group relative rounded-[2rem] bg-white text-zinc-900 p-6 sm:p-7 lg:p-8 flex flex-col justify-between h-full shadow-[0_16px_50px_rgba(0,35,30,0.24)] hover:shadow-[0_24px_60px_rgba(0,35,30,0.32)] transition-all duration-300 overflow-hidden">
                  {/* Top section: badge & number */}
                  <div className="relative z-10 flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#09555A] text-white">
                      Key Milestone 03
                    </span>
                    <span className="font-headline font-semibold text-5xl sm:text-6xl text-zinc-200 select-none">
                      03
                    </span>
                  </div>

                  {/* Heading & description */}
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-semibold font-headline text-black mb-2 tracking-tight leading-snug">
                      Interview & Decide
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-700 font-normal leading-relaxed mb-1 max-w-sm">
                      Interview candidates, including senior candidates where relevant, assess their fit, and decide who to select.
                    </p>
                  </div>

                  {/* Illustration placed in the middle, increased further by 10% and blended at bottom */}
                  <div
                    className="relative z-10 my-auto py-1 w-full flex items-center justify-center overflow-hidden"
                    style={{
                      WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
                      maskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
                    }}
                  >
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792857713/Interview_exaefn.jpg"
                      alt="Interview & Decide"
                      className="w-full h-auto max-h-[280px] sm:max-h-[300px] scale-[1.22] object-contain transition-transform duration-500 group-hover:scale-[1.27]"
                    loading="lazy" decoding="async" />
                  </div>

                  {/* Details directly on the card */}
                  <div className="relative z-10 pt-3 border-t border-zinc-100">
                    <p className="text-[11px] sm:text-xs text-zinc-600 font-normal leading-relaxed">
                      Direct video interviews with your tech leads • Live architecture or coding review
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>
            </div>

            {/* Right Column: Card 04 & Card 05 */}
            <div className="lg:col-span-4 flex flex-col gap-6 sm:gap-7">
              {/* Card 04: Agree on Arrangement */}
              <ScrollFadeIn delay={250} className="h-full">
                <div className="group relative rounded-[2rem] bg-white text-zinc-900 p-6 sm:p-7 flex flex-col justify-between h-full shadow-[0_12px_40px_rgba(0,35,30,0.18)] hover:shadow-[0_20px_50px_rgba(0,35,30,0.28)] transition-all duration-300 overflow-hidden">
                  {/* Background Illustration behind text */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-6 -bottom-6 w-48 h-48 sm:w-56 sm:h-56 opacity-25 dark:opacity-20 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                  >
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792857373/Agree_ms0cmm.jpg"
                      alt=""
                      className="w-full h-full object-contain"
                    loading="lazy" decoding="async" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#09555A]/10 text-[#09555A]">
                        Step 04
                      </span>
                      <span className="font-headline font-semibold text-4xl sm:text-5xl text-zinc-200 select-none">
                        04
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold font-headline text-black mb-2 tracking-tight">
                      Agree on Arrangement
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed mb-3">
                      Confirm responsibilities, engagement terms, access, tools, and communication practices.
                    </p>
                  </div>

                  {/* Details directly on the card */}
                  <div className="relative z-10 pt-3 border-t border-zinc-100">
                    <p className="text-[11px] sm:text-xs text-zinc-500 font-normal leading-relaxed">
                      IP assignment & NDA confirmation • Tooling & communication protocol setup
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>

              {/* Card 05: Onboard & Begin Delivery */}
              <ScrollFadeIn delay={300} className="h-full">
                <div className="group relative rounded-[2rem] bg-white text-zinc-900 p-6 sm:p-7 flex flex-col justify-between h-full shadow-[0_12px_40px_rgba(0,35,30,0.18)] hover:shadow-[0_20px_50px_rgba(0,35,30,0.28)] transition-all duration-300 overflow-hidden">
                  {/* Background Illustration behind text */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-6 -bottom-6 w-48 h-48 sm:w-56 sm:h-56 opacity-25 dark:opacity-20 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                  >
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792857369/Onboard_eqwgsq.jpg"
                      alt=""
                      className="w-full h-full object-contain"
                    loading="lazy" decoding="async" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#09555A]/10 text-[#09555A]">
                        Step 05
                      </span>
                      <span className="font-headline font-semibold text-4xl sm:text-5xl text-zinc-200 select-none">
                        05
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold font-headline text-black mb-2 tracking-tight">
                      Onboard & Begin Delivery
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed mb-3">
                      Integrate the selected people into the agreed working environment and begin the planned work.
                    </p>
                  </div>

                  {/* Details directly on the card */}
                  <div className="relative z-10 pt-3 border-t border-zinc-100">
                    <p className="text-[11px] sm:text-xs text-zinc-500 font-normal leading-relaxed">
                      Codebase access & local setup • Sprint planning & first backlog ticket delivery
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 7. WORKING MODEL: DECIDE HOW WE WORK TOGETHER ================= */}
      <section id="working-model" className="py-16 md:py-24 bg-transparent relative z-20 text-foreground">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row: Standard SectionHeading on left, Subheading & DarkTealButton on right */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
            <div className="max-w-2xl">
              <ScrollFadeIn>
                <ArrowBadge
                  href="#working-model"
                  text="Working Model"
                  variant="black"
                  className="mb-4"
                />
              </ScrollFadeIn>
              <SectionHeading
                lines={[
                  'Decide How We',
                  'Work <span class="text-cyan-gradient font-medium inline-block">Together</span>'
                ]}
                align="left"
                headingClassName="text-foreground font-medium !leading-[1.15]"
                className="mb-0"
              />
            </div>

            <div className="flex flex-col items-start lg:items-end gap-5 max-w-xl">
              <ScrollFadeIn delay={150}>
                <p className="text-sm sm:text-base text-foreground/75 dark:text-zinc-300 font-normal leading-relaxed text-left lg:text-right max-w-xl">
                  Some teams have the processes to run the work themselves. Others want Cauders to coordinate more. You decide how much we take on
                </p>
              </ScrollFadeIn>
              <ScrollFadeIn delay={200}>
                <DarkTealButton href="/contact" size="md">
                  Discuss Your Model
                </DarkTealButton>
              </ScrollFadeIn>
            </div>
          </div>

          {/* 3 Working Model Cards reusing Capacity Card design with round icon circle */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {/* Card 1: You Manage */}
            <ScrollFadeIn delay={100} className="h-full">
              <div className="group rounded-[1.75rem] p-7 sm:p-8 bg-white dark:bg-card border-0 shadow-[0_8px_30px_rgba(0,49,46,0.06)] hover:shadow-[0_16px_40px_rgba(0,49,46,0.12)] transition-all duration-300 h-full flex flex-col justify-start hover:-translate-y-1">
                {/* Round Icon Circle */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#09555A] flex items-center justify-center mb-6 shadow-sm flex-shrink-0">
                  <UserCheck className="w-6 h-6 text-white stroke-[2]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-headline text-foreground mb-3 leading-snug">
                  You Manage
                </h3>
                <p className="text-xs sm:text-sm text-foreground/75 dark:text-zinc-400 leading-relaxed font-normal">
                  Your team sets priorities, assigns work, and manages day-to-day activity. The engineers work within your existing tools and processes.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Card 2: Shared Coordination */}
            <ScrollFadeIn delay={200} className="h-full">
              <div className="group rounded-[1.75rem] p-7 sm:p-8 bg-white dark:bg-card border-0 shadow-[0_8px_30px_rgba(0,49,46,0.06)] hover:shadow-[0_16px_40px_rgba(0,49,46,0.12)] transition-all duration-300 h-full flex flex-col justify-start hover:-translate-y-1">
                {/* Round Icon Circle */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#09555A] flex items-center justify-center mb-6 shadow-sm flex-shrink-0">
                  <Sliders className="w-6 h-6 text-white stroke-[2]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-headline text-foreground mb-3 leading-snug">
                  Shared Coordination
                </h3>
                <p className="text-xs sm:text-sm text-foreground/75 dark:text-zinc-400 leading-relaxed font-normal">
                  Your team leads product direction and priorities, while Cauders handles agreed coordination and delivery support.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Card 3: Cauders-Led Delivery */}
            <ScrollFadeIn delay={300} className="h-full">
              <div className="group rounded-[1.75rem] p-7 sm:p-8 bg-white dark:bg-card border-0 shadow-[0_8px_30px_rgba(0,49,46,0.06)] hover:shadow-[0_16px_40px_rgba(0,49,46,0.12)] transition-all duration-300 h-full flex flex-col justify-start hover:-translate-y-1">
                {/* Round Icon Circle */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#09555A] flex items-center justify-center mb-6 shadow-sm flex-shrink-0">
                  <Workflow className="w-6 h-6 text-white stroke-[2]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-headline text-foreground mb-3 leading-snug">
                  Cauders-Led Delivery
                </h3>
                <p className="text-xs sm:text-sm text-foreground/75 dark:text-zinc-400 leading-relaxed font-normal">
                  Cauders manages the agreed delivery responsibilities, coordinates the work, and reports progress against established expectations.
                </p>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* ================= 8. WORKING TERMS: CLEAR EXPECTATIONS FROM DAY ONE ================= */}
      <section id="working-terms" className="relative z-20 w-full py-16 sm:py-20 md:py-28 bg-zinc-gradient text-white overflow-hidden">
        {/* Background Graphic on the Left Side behind content (like Our Standards) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 top-0 left-0 w-full lg:w-[55%] z-0 overflow-hidden flex items-end justify-start select-none"
        >
          <img
            src="https://res.cloudinary.com/cauders/image/upload/v1792833068/image_371_r0rqrq.png"
            alt=""
            className="h-full w-auto max-w-none object-contain object-left-bottom opacity-90 select-none pointer-events-none origin-bottom-left scale-[0.85]"
          loading="lazy" decoding="async" />
        </div>

        <div className="relative z-10 max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-20 items-start justify-between">
            {/* Left Column: Eyebrow, Heading, and Team Image */}
            <div className="lg:col-span-5 flex flex-col items-start text-left pt-0">
              <ScrollFadeIn>
                <ArrowBadge
                  href="#working-terms"
                  text="Working Terms"
                  variant="white"
                  className="mb-4 sm:mb-5"
                />
              </ScrollFadeIn>

              <SectionHeading
                lines={[
                  'Clear Expectations',
                  'From Day One'
                ]}
                align="left"
                headingClassName="!text-white font-medium !leading-[1.12] text-3xl sm:text-4xl md:text-5xl lg:text-[2.6rem] xl:text-[3rem]"
                className="mb-6 sm:mb-8 w-full"
              />

              {/* Team Collaboration Image */}
              <ScrollFadeIn delay={150} className="w-full">
                <div className="relative w-full aspect-[16/10.5] rounded-3xl overflow-hidden shadow-[0_16px_50px_rgba(0,0,0,0.35)] group bg-zinc-900 border border-white/10">
                  <img
                    src="https://res.cloudinary.com/cauders/image/upload/v1792899284/Gemini_Generated_Image_5i678u5i678u5i67_jweakt.jpg"
                    alt="Team discussing architecture plans"
                    className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                  loading="lazy" decoding="async" />
                </div>
              </ScrollFadeIn>
            </div>

            {/* Right Column: 5 Terms Items */}
            <div className="lg:col-span-7 flex flex-col items-end pt-0">
              <div className="w-full max-w-2xl xl:max-w-3xl ml-auto flex flex-col pt-0">
              {[
                {
                  title: 'Scope & Responsibilities',
                  description:
                    'Roles, responsibilities, priorities, and reporting lines are agreed before work starts, so teams focus on delivery from day one.',
                },
                {
                  title: 'Communication & Progress',
                  description:
                    'Agreed channels and regular progress reviews keep you informed, and issues or changes are raised as they appear.',
                },
                {
                  title: 'Access & Security',
                  description:
                    'Access and permissions are defined for each role, and responsibility for handling your information is clear on both sides.',
                },
                {
                  title: 'Confidentiality & IP',
                  description:
                    'Confidentiality obligations and ownership of the code and work produced are documented before delivery begins.',
                },
                {
                  title: 'Continuity & Replacement',
                  description:
                    'A replacement and handover process is agreed up front, along with how team capacity can change as your needs do.',
                },
              ].map((term, idx, arr) => (
                <ScrollFadeIn key={term.title} delay={idx * 70}>
                  <div className={`py-6 sm:py-7 ${idx === 0 ? 'pt-0' : ''} ${idx !== arr.length - 1 ? 'border-b border-white/20' : ''}`}>
                    <h3 className="text-xl sm:text-2xl font-semibold font-headline text-white tracking-tight mb-2 sm:mb-2.5">
                      {term.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal whitespace-normal xl:whitespace-nowrap">
                      {term.description}
                    </p>
                  </div>
                </ScrollFadeIn>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 9. CASE STUDIES CAROUSEL ================= */}
      <section className="py-16 md:py-24 bg-transparent relative z-20">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14">
            <div>
              <ScrollFadeIn>
                <ArrowBadge
                  href="#case-studies"
                  text="Client Outcomes"
                  variant="black"
                  className="mb-4"
                />
              </ScrollFadeIn>
              <SectionHeading
                lines={[
                  'How Dedicated Teams <span class="text-cyan-gradient font-medium inline-block">Deliver Value</span>',
                ]}
                subheading="See how companies scale engineering capacity with Cauders specialists."
                align="left"
                className="mb-0"
              />
            </div>
          </div>

          <Carousel
            plugins={[autoplayPlugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent
              wrapperClassName="overflow-hidden py-10 px-4 sm:px-6 lg:px-8"
              className="-ml-4 sm:-ml-6"
            >
              {/* Slide 1 */}
              <CarouselItem className="pl-4 sm:pl-6 md:basis-[60%] lg:basis-[48%] xl:basis-[42%]">
                <div className="group rounded-3xl bg-white text-zinc-900 shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-7 sm:p-9 lg:p-10 flex flex-col justify-between transition-all duration-300 h-full">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold font-headline text-black tracking-tight mb-3 leading-snug">
                      Scaling frontend & backend throughput for a high-growth fintech
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed mb-6">
                      Deployed 4 senior full-stack engineers within 10 days to help refactor legacy transaction services and build out new customer onboarding flows.
                    </p>

                    <div className="flex flex-wrap items-center gap-2 mb-8">
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-700 bg-zinc-100/80">
                        Dedicated Squad
                      </span>
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-700 bg-zinc-100/80">
                        Fintech
                      </span>
                    </div>

                    <div className="flex items-center justify-between pb-6 border-b border-zinc-100">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white">
                          <Users className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-lg font-bold font-headline text-zinc-900 tracking-tight">
                          PAY<span className="text-[#09555A]">SYNC</span>
                        </span>
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#09555A] hover:text-[#003B38] transition-colors"
                      >
                        Start A Team <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  <div className="pt-6 flex items-start gap-4 sm:gap-5">
                    <div className="w-20 h-20 min-w-[5rem] min-h-[5rem] max-w-[5rem] max-h-[5rem] rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center flex-shrink-0 text-zinc-400 self-start">
                      <svg className="w-9 h-9 fill-current opacity-70" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <div className="flex flex-col justify-center min-h-[5rem] flex-1">
                      <p className="text-xs sm:text-sm text-zinc-800 font-medium leading-relaxed mb-2">
                        &ldquo;Cauders engineers felt like an organic extension of our core team. Velocity doubled without any culture mismatch.&rdquo;
                      </p>
                      <span className="block text-xs font-semibold text-black">Head of Engineering</span>
                      <span className="block text-[0.75rem] text-zinc-500">PaySync Technologies</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Slide 2 */}
              <CarouselItem className="pl-4 sm:pl-6 md:basis-[60%] lg:basis-[48%] xl:basis-[42%]">
                <div className="group rounded-3xl bg-white text-zinc-900 shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-7 sm:p-9 lg:p-10 flex flex-col justify-between transition-all duration-300 h-full">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold font-headline text-black tracking-tight mb-3 leading-snug">
                      Automated QA and continuous deployment for enterprise healthcare
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed mb-6">
                      Provided dedicated QA test automation engineers who designed an automated regression framework, reducing release verification time by 75%.
                    </p>

                    <div className="flex flex-wrap items-center gap-2 mb-8">
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-700 bg-zinc-100/80">
                        QA Automation
                      </span>
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-700 bg-zinc-100/80">
                        Healthcare
                      </span>
                    </div>

                    <div className="flex items-center justify-between pb-6 border-b border-zinc-100">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white">
                          <ShieldCheck className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-lg font-bold font-headline text-zinc-900 tracking-tight">
                          MEDI<span className="text-[#09555A]">FLOW</span>
                        </span>
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#09555A] hover:text-[#003B38] transition-colors"
                      >
                        Start A Team <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  <div className="pt-6 flex items-start gap-4 sm:gap-5">
                    <div className="w-20 h-20 min-w-[5rem] min-h-[5rem] max-w-[5rem] max-h-[5rem] rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center flex-shrink-0 text-zinc-400 self-start">
                      <svg className="w-9 h-9 fill-current opacity-70" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <div className="flex flex-col justify-center min-h-[5rem] flex-1">
                      <p className="text-xs sm:text-sm text-zinc-800 font-medium leading-relaxed mb-2">
                        &ldquo;The QA team delivered spotless test coverage and completely unlocked our weekly release cycles.&rdquo;
                      </p>
                      <span className="block text-xs font-semibold text-black">Director of Product</span>
                      <span className="block text-[0.75rem] text-zinc-500">MediFlow Systems</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </section>


      {/* ================= 9. FREQUENTLY ASKED QUESTIONS ================= */}
      <div id="faq">
        <FAQPreview faqs={dedicatedTeamsFaqs} badgeText="FAQ" badgeHref="#faq" />
      </div>

      {/* ================= 10. GET A QUOTE / CTA ================= */}
      <GetAQuote
        title="Let's Talk About Your Team"
        description="Tell us which roles you want to add, what your team is working on, and how you want the engagement to operate."
        ctaText="Discuss Requirements"
        ctaHref="/contact"
        contentMaxWidth="max-w-4xl"
        headingMaxWidth="max-w-3xl"
        subheadingMaxWidth="max-w-xl"
      />
    </div>
  );
}
