'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronRight, Clock, Shield, Building, Award, Terminal, Zap } from 'lucide-react';
import ScrollFadeIn from './ScrollFadeIn';
import ArrowBadge from './ArrowBadge';
import SectionHeading from './SectionHeading';
import DarkTealButton from './DarkTealButton';
import ZincGradientContainer from './ZincGradientContainer';
import GetAQuote from './GetAQuote';
import { CaseStudy } from '@/lib/case-studies-data';

interface CaseStudyDetailPageProps {
  study: CaseStudy;
}

export default function CaseStudyDetailPage({ study }: CaseStudyDetailPageProps) {
  if (!study) {
    notFound();
  }

  return (
    <div className="relative w-full bg-gradient-to-b from-white via-white to-transparent text-foreground" suppressHydrationWarning>
      {/* ================= 1. BREADCRUMBS & HERO ================= */}
      <section className="relative w-full pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 border-b border-border/40 overflow-hidden bg-zinc-50/50 dark:bg-zinc-950/40">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb nav */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-muted-foreground mb-6">
            <Link href="/" className="hover:text-darkTeal transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <Link href="/case-studies" className="hover:text-darkTeal transition-colors">Case Studies</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-foreground truncate max-w-[220px] sm:max-w-md">{study.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <ScrollFadeIn>
                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-darkTeal text-white">
                    {study.domain}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-200/80 dark:bg-zinc-800 text-foreground">
                    {study.capability}
                  </span>
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn delay={100}>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-foreground tracking-tight leading-[1.15] mb-5 sm:mb-6" suppressHydrationWarning>
                  {study.title}
                </h1>
              </ScrollFadeIn>

              <ScrollFadeIn delay={150}>
                <p className="text-sm sm:text-base md:text-lg text-foreground/80 dark:text-zinc-300 leading-relaxed font-normal mb-8 max-w-2xl" suppressHydrationWarning>
                  {study.subtitle}
                </p>
              </ScrollFadeIn>

              {/* Meta stats chips */}
              <ScrollFadeIn delay={200} className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-border/40 w-full mb-8" suppressHydrationWarning>
                  <div>
                    <span className="block text-[11px] font-mono text-muted-foreground uppercase">Client</span>
                    <span className="block text-xs sm:text-sm font-semibold text-foreground mt-0.5">
                      {study.isNda ? 'NDA Protected' : study.clientName}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-muted-foreground uppercase">Industry</span>
                    <span className="block text-xs sm:text-sm font-semibold text-foreground mt-0.5">
                      {study.industry}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-muted-foreground uppercase">Timeline</span>
                    <span className="block text-xs sm:text-sm font-semibold text-foreground mt-0.5">
                      {study.duration}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-muted-foreground uppercase">Project Context</span>
                    <span className="block text-xs sm:text-sm font-semibold text-foreground mt-0.5" title={study.deliveryContext?.description}>
                      {study.deliveryContext?.label || 'Production Live'}
                    </span>
                  </div>
                </div>

                {study.deliveryContext && (
                  <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-zinc-100/70 dark:bg-zinc-900/50 border border-border/40 text-xs text-muted-foreground mb-8" suppressHydrationWarning>
                    <span className="font-semibold text-foreground font-mono uppercase tracking-wider text-[10px] px-2 py-0.5 rounded bg-white dark:bg-zinc-800 border border-border/40 shrink-0">
                      Delivery Context
                    </span>
                    <span className="leading-relaxed">
                      {study.deliveryContext.description}
                    </span>
                  </div>
                )}
              </ScrollFadeIn>

              <ScrollFadeIn delay={250}>
                <div className="flex items-center gap-3">
                  <DarkTealButton href="/contact" size="md">
                    Discuss Similar Project
                  </DarkTealButton>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    All Case Studies
                  </Link>
                </div>
              </ScrollFadeIn>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <ScrollFadeIn delay={200}>
                <div className="relative w-full h-[360px] sm:h-[440px] md:h-[480px] rounded-3xl overflow-hidden border border-border/40 shadow-2xl group">
                  <Image
                    src={study.heroImage}
                    alt={study.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center grayscale contrast-[1.05] group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  {/* Floating Measured Outcome Badge inside image */}
                  <div className="absolute bottom-5 inset-x-5 p-5 rounded-2xl bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border border-white/20 shadow-lg">
                    <span className="text-[11px] font-mono uppercase text-darkTeal dark:text-[#8CEAE5] font-bold block mb-1">
                      Validated Milestone
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-foreground leading-snug" suppressHydrationWarning>
                      {study.outcome.headline}
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. KEY METRICS GRID ================= */}
      <section className="relative z-10 max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 -mt-6" suppressHydrationWarning>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {study.metrics.map((metric, mIdx) => (
            <div
              key={mIdx}
              className="p-6 rounded-2xl bg-white dark:bg-card border border-border/50 shadow-md flex flex-col justify-between"
            >
              <span className="text-xs font-mono font-medium text-muted-foreground uppercase">
                {metric.label}
              </span>
              <span className="text-2xl sm:text-3xl font-headline font-bold text-darkTeal dark:text-[#8CEAE5] tracking-tight mt-2" suppressHydrationWarning>
                {metric.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 3. OVERVIEW & CHALLENGE ================= */}
      <section className="relative z-10 max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Case Study Body */}
          <div className="lg:col-span-8 flex flex-col gap-14 sm:gap-16">
            {/* Overview Block */}
            <div>
              <ArrowBadge href="#overview" text="Executive Summary" variant="black" className="mb-4" />
              <h2 className="text-2xl sm:text-3xl font-headline font-bold text-foreground tracking-tight mb-4">
                The Operational Context
              </h2>
              <p className="text-sm sm:text-base text-foreground/80 dark:text-zinc-300 leading-relaxed font-normal" suppressHydrationWarning>
                {study.overview}
              </p>
            </div>

            {/* The Challenge Block */}
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-border/40">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-darkTeal dark:text-[#8CEAE5] block mb-2">
                The Core Bottleneck
              </span>
              <h3 className="text-xl sm:text-2xl font-headline font-bold text-foreground mb-4" suppressHydrationWarning>
                {study.challenge.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-foreground/80 leading-relaxed mb-6 font-normal" suppressHydrationWarning>
                {study.challenge.description}
              </p>
              <ul className="space-y-3">
                {study.challenge.bulletPoints.map((bp, bpIdx) => (
                  <li key={bpIdx} className="flex items-start gap-3 text-xs sm:text-sm text-foreground/85">
                    <span className="w-1.5 h-1.5 rounded-full bg-darkTeal dark:bg-[#8CEAE5] mt-2 flex-shrink-0" />
                    <span>{bp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Solution Block */}
            <div>
              <ArrowBadge href="#solution" text="Technical Execution" variant="black" className="mb-4" />
              <h2 className="text-2xl sm:text-3xl font-headline font-bold text-foreground tracking-tight mb-4">
                {study.solution.title}
              </h2>
              <p className="text-sm sm:text-base text-foreground/80 dark:text-zinc-300 leading-relaxed font-normal mb-8">
                {study.solution.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {study.solution.keyHighlights.map((kh, khIdx) => (
                  <div
                    key={khIdx}
                    className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-border/50 shadow-sm"
                  >
                    <div className="w-7 h-7 rounded-full bg-darkTeal text-white flex items-center justify-center text-xs font-bold mb-3">
                      {khIdx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-medium">
                      {kh}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Measured Outcomes Block */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#003431]/5 dark:bg-white/5 border border-darkTeal/20">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-darkTeal dark:text-[#8CEAE5] block mb-2">
                Business Impact & Metrics
              </span>
              <h3 className="text-xl sm:text-2xl font-headline font-bold text-foreground mb-4" suppressHydrationWarning>
                {study.outcome.headline}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-foreground/80 leading-relaxed mb-6 font-normal" suppressHydrationWarning>
                {study.outcome.description}
              </p>
              <div className="space-y-3">
                {study.outcome.impactList.map((imp, impIdx) => (
                  <div key={impIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-darkTeal dark:text-[#8CEAE5] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-foreground" suppressHydrationWarning>{imp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sticky Sidebar: Deliverables & Tech Stack */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              {/* Deliverables Card */}
              <div className="p-7 rounded-3xl bg-white dark:bg-card border border-border/50 shadow-lg">
                <h4 className="text-base sm:text-lg font-bold font-headline mb-4 pb-3 border-b border-border/40">
                  Key Deliverables
                </h4>
                <ul className="space-y-3">
                  {study.deliverables.map((deliv, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85">
                      <span className="w-1.5 h-1.5 rounded-full bg-darkTeal dark:bg-[#8CEAE5] mt-2 flex-shrink-0" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture & Tech Stack Card */}
              <div className="p-7 rounded-3xl bg-white dark:bg-card border border-border/50 shadow-lg">
                <h4 className="text-base sm:text-lg font-bold font-headline mb-3 pb-3 border-b border-border/40">
                  {study.architecture.title}
                </h4>
                <p className="text-xs text-foreground/75 leading-relaxed mb-5 font-normal">
                  {study.architecture.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.architecture.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-foreground border border-border/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Consultation Box */}
              <div className="p-7 rounded-3xl bg-darkTeal text-white shadow-xl flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#8CEAE5] font-semibold block mb-2">
                    Need Similar Capabilities?
                  </span>
                  <h4 className="text-lg font-bold font-headline mb-3">
                    Let's Review Your Architecture
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed font-normal mb-6">
                    Our technical leads are ready to assess your technical bottlenecks and map out practical implementation phases.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-5 py-3 rounded-full text-xs sm:text-sm font-semibold bg-white text-zinc-950 hover:bg-zinc-100 transition-colors shadow-md"
                >
                  Schedule A Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. GET A QUOTE BOTTOM CTA ================= */}
      <GetAQuote
        title="Ready to Build Your Production System?"
        description="Schedule a technical consultation with our engineering team to review requirements, architectures, and implementation roadmaps."
        ctaText="Start A Project Discussion"
      />
    </div>
  );
}
