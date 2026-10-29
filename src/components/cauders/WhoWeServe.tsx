'use client';

import React from 'react';
import Link from 'next/link';
import { Rocket, Building2, Handshake } from 'lucide-react';
import ScrollFadeIn from './ScrollFadeIn';
import StandardizedHeading from './StandardizedHeading';
import { typography } from '@/lib/typography';
import { Button } from '@/components/ui/button';

const audiences = [
  {
    icon: Rocket,
    title: 'Startups & Scaleups',
    description:
      'For fast-moving founders and venture-backed teams, we provide the dedicated technical execution to launch rapidly. From clickable prototypes and AI-powered MVPs to robust multi-tenant SaaS platforms, we balance immediate speed-to-market with scalable architectural foundations.',
  },
  {
    icon: Building2,
    title: 'Enterprises & Mid-Market',
    description:
      'For enterprise leaders and growing organizations, we modernize mission-critical systems and deploy deterministic AI workflows into core operations. We engineer secure cloud platforms, custom internal tools, and ERP integrations built for high concurrency, high availability, and strict governance.',
  },
  {
    icon: Handshake,
    title: 'Agencies & Consultancies',
    description:
      'For creative agencies, system integrators, and consultancies, we act as an invisible, white-label engineering partner. We deliver full-stack web, mobile, and custom AI solutions under your NDA—expanding your technical capacity and project margins without the overhead of expanding payroll.',
  },
];

export default function WhoWeServe() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <StandardizedHeading lines={[{ text: 'Who We Serve' }]} />
          <ScrollFadeIn delay={150}>
            <p className={`mt-3 md:mt-4 ${typography.bodyBase} font-normal text-foreground/80 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed`}>
              Orchestrating digital transformation, applied AI, and custom engineering across high-growth, enterprise, and partner ecosystems.
            </p>
          </ScrollFadeIn>
        </div>

        {/* 3 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {audiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollFadeIn key={item.title} delay={index * 120} className="h-full">
                <div className="relative h-full rounded-3xl border border-border/70 bg-card/60 dark:bg-zinc-900/40 backdrop-blur-md p-8 lg:p-10 flex flex-col justify-between hover:border-zinc/30 dark:hover:border-zinc-700 hover:shadow-smooth-lift hover:-translate-y-1 transition-all duration-300 group">
                  <div>
                    {/* Outline Icon Squircle (Zinc Color) */}
                    <div className="w-14 h-14 rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 flex items-center justify-center mb-6 shadow-xs group-hover:border-zinc/40 group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-7 h-7 text-zinc dark:text-zinc-200" strokeWidth={1.75} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold font-headline text-foreground mb-4">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className={`${typography.bodyBase} font-normal text-foreground/75 dark:text-zinc-300/90 leading-relaxed text-sm md:text-base`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>
            );
          })}
        </div>

        {/* Bottom Standard CTA Button */}
        <ScrollFadeIn delay={400} className="mt-12 md:mt-16 flex justify-center">
          <Button 
            asChild 
            variant="zinc" 
            size="lg"
          >
            <Link href="/contact">
              Contact Us
            </Link>
          </Button>
        </ScrollFadeIn>

      </div>
    </section>
  );
}
