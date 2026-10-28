'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2, ArrowRight, Filter, Sparkles, Building2, Globe, Cpu, Smartphone, Layers, Activity } from 'lucide-react';
import ScrollFadeIn from './ScrollFadeIn';
import ArrowBadge from './ArrowBadge';
import SectionHeading from './SectionHeading';
import DarkTealButton from './DarkTealButton';
import ZincGradientContainer from './ZincGradientContainer';
import GetAQuote from './GetAQuote';
import { CaseStudy, caseStudiesData } from '@/lib/case-studies-data';
import { cn } from '@/lib/utils';

const industriesFilter = [
  'All',
  'Retail & E-Commerce',
  'Telecommunications & Infrastructure',
  'Real Estate & PropTech',
  'Social Media & Mobile Apps',
  'Logistics & Food Delivery',
  'Developer Tools & Cloud Platforms',
  'Construction & Home Services',
];

export default function CaseStudiesListingPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const filteredStudies = selectedIndustry === 'All'
    ? caseStudiesData
    : caseStudiesData.filter((s) => s.industry === selectedIndustry);

  return (
    <div className="relative w-full bg-gradient-to-b from-white via-white to-transparent text-foreground">
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] bg-transparent flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
        {/* Background 3D glass illustration aligned to right */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[65%] xl:w-[60%] flex items-center justify-end overflow-hidden pointer-events-none select-none z-0">
          <img
            src="https://res.cloudinary.com/cauders/image/upload/v1792742850/dev_xfjby4.png"
            alt="Cauders Case Studies & Engineering Portfolio"
            className="w-full h-full object-contain object-right max-w-none opacity-90 lg:opacity-100 scale-95 lg:scale-[0.92] origin-right"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 12%, rgba(0,0,0,1) 32%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 12%, rgba(0,0,0,1) 32%)',
            }}
          loading="lazy" decoding="async" />
        </div>

        {/* Content on the left side */}
        <div className="relative z-10 w-full">
          <div className="max-w-[95rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl lg:max-w-2xl text-left">
              <ScrollFadeIn>
                <ArrowBadge
                  href="#portfolio-grid"
                  text="PORTFOLIO & CASE STUDIES"
                  variant="black"
                  className="mb-3 sm:mb-5"
                />
              </ScrollFadeIn>

              <SectionHeading
                as="h1"
                lines={[
                  'Engineered For Scale,',
                  '<span class="text-cyan-gradient font-medium inline-block">Proven In Production</span>'
                ]}
                subheading="Explore real-world technical outcomes, core migrations, headless platforms, and intelligent workflows delivered across complex operational environments."
                align="left"
                subheadingMaxWidth="max-w-xl"
                subheadingClassName="text-xs sm:text-sm md:text-base lg:text-lg text-foreground/80 dark:text-zinc-300 leading-relaxed font-normal mb-5 sm:mb-8"
                className="mb-0"
              />

              <ScrollFadeIn delay={200}>
                <div className="pt-2 flex flex-wrap gap-3">
                  <DarkTealButton href="#portfolio-grid" size="md">
                    Explore Case Studies
                  </DarkTealButton>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-semibold border border-zinc-300 hover:border-darkTeal hover:text-darkTeal transition-colors"
                  >
                    Discuss Your Project
                  </Link>
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. HIGHLIGHT STATS BAR ================= */}
      <section className="relative z-10 border-y border-border/40 bg-zinc-50/70 dark:bg-zinc-900/50 backdrop-blur-sm py-8 sm:py-10">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-left">
            <div>
              <p className="text-xl sm:text-2xl font-headline font-bold text-foreground tracking-tight">Production-Grade</p>
              <p className="text-xs sm:text-sm text-foreground/70 font-medium mt-1">Tested, maintainable software delivery for active operational environments</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-headline font-bold text-foreground tracking-tight">High Concurrency</p>
              <p className="text-xs sm:text-sm text-foreground/70 font-medium mt-1">Architectures engineered for scale, caching layers, and peak traffic surges</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-headline font-bold text-foreground tracking-tight">High Availability</p>
              <p className="text-xs sm:text-sm text-foreground/70 font-medium mt-1">Resilient cloud topologies with automated monitoring and fault isolation</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-headline font-bold text-foreground tracking-tight">Low-Latency Systems</p>
              <p className="text-xs sm:text-sm text-foreground/70 font-medium mt-1">Optimized data pipelines, edge routing, and asynchronous background queues</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. FILTER TABS & PORTFOLIO GRID ================= */}
      <section id="portfolio-grid" className="relative z-10 max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Industry Filter Pills */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 sm:mb-12 pb-4 border-b border-border/40">
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            <div className="flex items-center gap-2 mr-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter By:</span>
            </div>
            {industriesFilter.map((ind) => {
              const isSelected = selectedIndustry === ind;
              const count = ind === 'All'
                ? caseStudiesData.length
                : caseStudiesData.filter((s) => s.industry === ind).length;
              return (
                <button
                  key={ind}
                  onClick={() => setSelectedIndustry(ind)}
                  className={cn(
                    'px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5',
                    isSelected
                      ? 'bg-darkTeal text-white shadow-md'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-foreground/75 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                  )}
                >
                  <span>{ind}</span>
                  <span className={cn(
                    'text-[11px] px-1.5 py-0.5 rounded-full font-mono',
                    isSelected ? 'bg-white/20 text-white' : 'bg-black/5 dark:bg-white/10 text-muted-foreground'
                  )}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="text-xs sm:text-sm font-mono text-muted-foreground whitespace-nowrap">
            Showing <strong className="text-foreground">{filteredStudies.length}</strong> of {caseStudiesData.length} Case Studies
          </p>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study, idx) => (
            <ScrollFadeIn key={study.id} delay={idx * 80} className="h-full">
              <div suppressHydrationWarning className="group rounded-3xl bg-white dark:bg-card text-foreground shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-border/40 hover:border-darkTeal/40 overflow-hidden flex flex-col justify-between transition-all duration-300 h-full hover:-translate-y-1">
                {/* Visual Image Header */}
                <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                  <Image
                    src={study.heroImage}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center grayscale contrast-[1.05] group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  
                  {/* Category Pill Tag Overlay */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md text-foreground shadow-sm">
                      {study.domain}
                    </span>
                  </div>

                  {/* Capability Badge Bottom Left */}
                  <div className="absolute bottom-3 left-4 z-10">
                    <span className="text-xs font-semibold text-[#8CEAE5] drop-shadow-sm">
                      {study.capability}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold font-headline text-foreground tracking-tight mb-2.5 group-hover:text-darkTeal dark:group-hover:text-[#8CEAE5] transition-colors leading-snug">
                      {study.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed font-normal mb-6 line-clamp-3">
                      {study.subtitle || study.overview}
                    </p>

                    {/* Measured Outcome Callout Box */}
                    <div className="bg-[#09555A]/[0.05] dark:bg-white/[0.04] border border-[#09555A]/15 dark:border-white/10 rounded-2xl p-4 mb-6 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-darkTeal dark:text-[#8CEAE5] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-darkTeal dark:text-[#8CEAE5] mb-0.5">
                          Measured Outcome
                        </span>
                        <span suppressHydrationWarning className="block text-xs sm:text-sm font-semibold text-foreground leading-snug">
                          {study.metrics[0]?.value} • {study.metrics[0]?.label}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Client & Link */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/40 mt-auto">
                    <span className="text-xs font-mono font-medium text-muted-foreground uppercase">
                      {study.isNda ? 'NDA Protected' : study.clientName}
                    </span>
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-darkTeal dark:text-[#8CEAE5] hover:opacity-80 transition-opacity"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </section>

      {/* ================= 4. PROVEN DELIVERY DISCIPLINE ================= */}
      <section className="relative z-10 max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-border/40">
        <div className="max-w-3xl mb-12">
          <ScrollFadeIn>
            <ArrowBadge href="/contact" text="Engineering Standard" variant="black" className="mb-3" />
          </ScrollFadeIn>
          <SectionHeading
            lines={['Engineering for Production Reliability']}
            subheading="Every project is engineered with strict boundary controls, automated CI/CD pipelines, backward compatibility checks, and verified SLA standards before any cutover."
            align="left"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-border/40">
            <div className="w-10 h-10 rounded-full bg-darkTeal text-white flex items-center justify-center font-bold text-sm mb-4">
              01
            </div>
            <h4 className="text-base sm:text-lg font-bold font-headline mb-2">Data Integrity & Reconciliation Architecture</h4>
            <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
              We engineer event-driven bridges, idempotency keys, and automated reconciliation daemons to safeguard transaction continuity and protect critical state consistency.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-border/40">
            <div className="w-10 h-10 rounded-full bg-darkTeal text-white flex items-center justify-center font-bold text-sm mb-4">
              02
            </div>
            <h4 className="text-base sm:text-lg font-bold font-headline mb-2">Resilient Edge Performance</h4>
            <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
              Sub-second page rendering and responsive endpoint delivery achieved through distributed edge workers, multi-tier caching, and localized state persistence.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-border/40">
            <div className="w-10 h-10 rounded-full bg-darkTeal text-white flex items-center justify-center font-bold text-sm mb-4">
              03
            </div>
            <h4 className="text-base sm:text-lg font-bold font-headline mb-2">Comprehensive Code Handover</h4>
            <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
              Complete infrastructure-as-code manifests, architecture topology diagrams, API specs, and runbooks delivered with every production engagement.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 5. GET A QUOTE CTA ================= */}
      <GetAQuote
        title="Ready to Build Your Next Mission-Critical Platform?"
        description="Schedule a technical discovery session with our architects to review scope, dependencies, and implementation roadmaps."
        ctaText="Start A Project Discussion"
      />
    </div>
  );
}
