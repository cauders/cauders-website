'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import ArrowBadge from './ArrowBadge';
import SectionHeading from './SectionHeading';
import ScrollFadeIn from './ScrollFadeIn';

export default function WhyCaudersPartnership() {
  return (
    <section className="relative z-10 py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent">
      <div className="max-w-[95rem] mx-auto">
        {/* Section Header: ArrowBadge + SectionHeading + Subtitle */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <ScrollFadeIn>
            <ArrowBadge
              href="#why-cauders"
              text="Why Cauders"
              variant="black"
              className="mb-3 sm:mb-4"
            />
          </ScrollFadeIn>

          <SectionHeading
            lines={[
              'A Partnership <span class="text-cyan-gradient font-medium inline-block">Built on Clarity</span>'
            ]}
            align="center"
            subheading="From the first conversation through delivery and beyond, the relationship is grounded in transparency and shared expectations."
            subheadingMaxWidth="max-w-2xl"
            subheadingClassName="text-sm sm:text-base text-foreground/80 dark:text-zinc-300 leading-relaxed font-normal mt-3"
            className="mb-0"
          />
        </div>

        {/* 3 Cards Grid (matching Home Services section Bento styling) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          
          {/* Card 1: Clear Communication (Light Card) */}
          <ScrollFadeIn delay={100} className="h-full">
            <div className="group relative rounded-3xl bg-white dark:bg-card border-0 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden min-h-[460px] sm:min-h-[490px] h-full shadow-[0_6px_20px_rgba(0,49,46,0.06)]">
              {/* Top 3D illustration */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-transparent flex items-center justify-center">
                <Image
                  src="https://res.cloudinary.com/cauders/image/upload/v1792831738/Clear_Communication_atqqwc.jpg"
                  alt="Clear Communication"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 450px"
                  className="object-contain object-center p-4 transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
              </div>

              {/* Bottom Content */}
              <div className="p-7 sm:p-8 pt-2 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight mb-2.5">
                    Clear Communication
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal mb-6">
                    Progress, risks, dependencies, and constraints are discussed openly, helping maintain realistic expectations and reduce uncertainty.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-darkTeal hover:text-darkTeal/80 transition-colors"
                >
                  <span>Explore How We Work</span>
                  <span className="text-base leading-none">→</span>
                </Link>
              </div>
            </div>
          </ScrollFadeIn>

          {/* Card 2: Transparent Collaboration (Gradient Teal Card with Arrow Circle button) */}
          <ScrollFadeIn delay={200} className="h-full">
            <div className="group relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between text-white overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 min-h-[460px] sm:min-h-[490px] h-full">
              {/* Background 3D glass geometry image */}
              <Image
                src="https://res.cloudinary.com/cauders/image/upload/v1792831764/Group_4659_y8fmle.png"
                alt="Transparent Collaboration"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 450px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />

              {/* Content on top */}
              <div className="relative z-10 max-w-[90%]">
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3">
                  Transparent Collaboration
                </h3>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                  Important decisions, delivery priorities, and project progress remain visible throughout the engagement, giving stakeholders greater insight into how work moves forward.
                </p>
              </div>

              {/* Bottom CTA Row */}
              <div className="relative z-10 mt-8 flex items-center justify-between">
                <Link
                  href="/about"
                  className="text-xs sm:text-sm font-medium text-white/95 hover:text-white transition-colors"
                >
                  Explore Our Approach
                </Link>
                <Link
                  href="/about"
                  aria-label="Explore Our Approach"
                  className="w-11 h-11 rounded-full bg-white text-[#09555A] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-md"
                >
                  <ArrowUpRight className="w-5 h-5 stroke-[2.2]" />
                </Link>
              </div>
            </div>
          </ScrollFadeIn>

          {/* Card 3: Long-Term Partnership (Light Card) */}
          <ScrollFadeIn delay={300} className="h-full">
            <div className="group relative rounded-3xl bg-white dark:bg-card border-0 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden min-h-[460px] sm:min-h-[490px] h-full shadow-[0_6px_20px_rgba(0,49,46,0.06)]">
              {/* Top 3D illustration */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-transparent flex items-center justify-center">
                <Image
                  src="https://res.cloudinary.com/cauders/image/upload/v1792831755/Long-Term_Partnership_qdrpfl.jpg"
                  alt="Long-Term Partnership"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 450px"
                  className="object-contain object-center p-4 transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
              </div>

              {/* Bottom Content */}
              <div className="p-7 sm:p-8 pt-2 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight mb-2.5">
                    Long-Term Partnership
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal mb-6">
                    Whether supporting a project, extending a team, or collaborating over time, the focus remains on sustainable outcomes and mutual trust.
                  </p>
                </div>

                <Link
                  href="/partners"
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-darkTeal hover:text-darkTeal/80 transition-colors"
                >
                  <span>Explore Partnerships</span>
                  <span className="text-base leading-none">→</span>
                </Link>
              </div>
            </div>
          </ScrollFadeIn>

        </div>
      </div>
    </section>
  );
}
