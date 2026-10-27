'use client';

import React from 'react';
import Link from 'next/link';
import { Linkedin, Quote, Target, Cpu, Users, Compass } from 'lucide-react';
import ArrowBadge from './ArrowBadge';
import SectionHeading from './SectionHeading';
import ScrollFadeIn from './ScrollFadeIn';
import { teamMembers } from '@/lib/team-data';

interface PillarItem {
  title: string;
  subheading: string;
  icon: React.ReactNode;
}

const pillars: PillarItem[] = [
  {
    title: 'Business focused',
    subheading: 'Aligning software architecture with business priorities and measurable ROI.',
    icon: <Target className="w-6 h-6 text-darkTeal dark:text-[#8CEAE5] stroke-[2]" />,
  },
  {
    title: 'Modern engineering',
    subheading: 'Resilient system design built for maintainability, speed, and long-term stability.',
    icon: <Cpu className="w-6 h-6 text-darkTeal dark:text-[#8CEAE5] stroke-[2]" />,
  },
  {
    title: 'Collaborative approach',
    subheading: 'Direct communication, visible milestones, and close integration with your team.',
    icon: <Users className="w-6 h-6 text-darkTeal dark:text-[#8CEAE5] stroke-[2]" />,
  },
  {
    title: "Built for What's next",
    subheading: 'Scalable foundations engineered to adapt as technology and business demands evolve.',
    icon: <Compass className="w-6 h-6 text-darkTeal dark:text-[#8CEAE5] stroke-[2]" />,
  },
];

export default function WhoWeAreSection() {
  const anees = teamMembers[0];
  const muryam = teamMembers[1];

  return (
    <section className="relative z-10 w-full py-16 sm:py-20 md:py-24 bg-transparent text-foreground overflow-hidden">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Block: Who We Are & 4 Pillars in Balanced Horizontal Row Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start mb-20 md:mb-24">
          {/* Left Column: Heading & Intro Paragraphs */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start text-left">
            <ScrollFadeIn>
              <ArrowBadge
                href="#who-we-are"
                text="Who We Are"
                variant="black"
                className="mb-4 sm:mb-6"
              />
            </ScrollFadeIn>

            <SectionHeading
              lines={[
                'A Company <span class="text-cyan-gradient font-medium inline-block">Built on Trust</span>'
              ]}
              align="left"
              headingClassName="text-foreground font-medium !leading-[1.15] text-2xl sm:text-3xl md:text-4xl lg:text-[2.35rem] xl:text-[2.75rem] whitespace-nowrap"
              className="mb-6 w-full"
            />

            <ScrollFadeIn delay={150}>
              <div className="space-y-4 max-w-xl text-sm sm:text-base text-foreground/80 dark:text-zinc-300 leading-relaxed">
                <p>
                  Cauders is built around a simple conviction: good business relationships go beyond a single delivery. They rest on trust, clear commitments, and a shared understanding of what success means.
                </p>
                <p>
                  We are a software engineering company based in Lahore, Pakistan. We design, build, and integrate custom software, applied AI, and workflow automation, and we work with businesses, product teams, and partner organizations through defined projects, dedicated engineering teams, and longer-term partnerships.
                </p>
              </div>
            </ScrollFadeIn>
          </div>

          {/* Right Column: 4 Clean Items (container & shadow only under the icon, wide enough for single line subheading) */}
          <div className="lg:col-span-7 xl:col-span-7 flex justify-start lg:justify-end">
            <div className="flex flex-col gap-6 sm:gap-7 w-full max-w-2xl pt-2 lg:pt-4">
              {pillars.map((pillar, idx) => (
                <ScrollFadeIn key={idx} delay={idx * 70}>
                  <div className="group flex items-center gap-4 sm:gap-5 cursor-default">
                    {/* Container only under the icon: no border, rounded, with shadow */}
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white dark:bg-zinc-800 shadow-[0_4px_20px_rgba(0,49,46,0.10)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.35)] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_6px_24px_rgba(0,49,46,0.15)]">
                      {pillar.icon}
                    </div>

                    {/* Right Title & Subheading (no container behind text, single line fit) */}
                    <div className="flex flex-col justify-center text-left flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-white tracking-tight leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/75 dark:text-zinc-400 mt-0.5 leading-relaxed font-normal whitespace-normal xl:whitespace-nowrap">
                        {pillar.subheading}
                      </p>
                    </div>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Block: Build On Trust, Driven By People & Founders */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Subtext, Our Conviction Quote */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start text-left">
            <SectionHeading
              lines={[
                'Build On Trust,',
                'Driven By <span class="text-cyan-gradient font-medium inline-block">People</span>'
              ]}
              align="left"
              headingClassName="text-foreground font-medium !leading-[1.12]"
              className="mb-5 w-full"
            />

            <ScrollFadeIn delay={100}>
              <p className="text-sm sm:text-base text-foreground/80 dark:text-zinc-300 leading-relaxed mb-8 max-w-lg">
                We&apos;re a team of engineers, technology professionals, and problem-solvers united by a commitment to helping businesses overcome technical challenges and deliver reliable outcomes.
              </p>
            </ScrollFadeIn>

            <ScrollFadeIn delay={150}>
              <ArrowBadge
                href="#our-conviction"
                text="Our Conviction"
                variant="black"
                className="mb-4"
              />
            </ScrollFadeIn>

            <ScrollFadeIn delay={200} className="w-full">
              <div className="relative pl-6 py-2 mt-2 max-w-lg">
                {/* Vibrant cyan gradient bar */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 bottom-0 w-[4px] rounded-full bg-gradient-to-b from-[#8CEAE5] via-[#00645F] to-[#003B38]"
                />
                <Quote className="w-6 h-6 text-darkTeal dark:text-[#8CEAE5] mb-2 rotate-180" />
                <p className="text-lg sm:text-xl md:text-[1.35rem] font-medium text-foreground tracking-tight italic leading-snug">
                  Good Business Relationships<br />
                  Go Beyond A Single Delivery.
                </p>
              </div>
            </ScrollFadeIn>
          </div>

          {/* Right Column: Founder Portrait Cards */}
          <div className="lg:col-span-7 xl:col-span-7 flex justify-center lg:justify-end">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-2xl">
              
              {/* Anees Ahmad Card - Zoomed in to match Muryam portrait framing */}
              <ScrollFadeIn delay={250}>
                <div className="group relative rounded-[2rem] overflow-hidden bg-zinc-900 text-white shadow-xl aspect-[3/4] flex flex-col justify-end">
                  <img
                    src={anees.imageUrl}
                    alt={anees.name}
                    className="absolute inset-0 w-full h-full object-cover object-top filter grayscale contrast-105 transition-transform duration-700 group-hover:scale-105"
                    style={{
                      transform: 'scale(2.1)',
                      transformOrigin: 'top center',
                      objectPosition: 'top center',
                    }}
                  loading="lazy" decoding="async" />
                  {/* Subtle dark gradient overlay on bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                  {/* Card Info Overlay */}
                  <div className="relative z-10 p-6 sm:p-7">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                      {anees.name}
                    </h3>
                    <div className="flex items-center justify-between mt-1.5">
                      <span className="text-xs sm:text-sm text-primary font-medium tracking-wide">
                        {anees.role}
                      </span>
                      {anees.socials.linkedin && (
                        <Link
                          href={anees.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-md bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200"
                          aria-label={`${anees.name} LinkedIn`}
                        >
                          <Linkedin className="w-3.5 h-3.5 fill-current" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>

              {/* Muryam Naveed Card */}
              <ScrollFadeIn delay={350}>
                <div className="group relative rounded-[2rem] overflow-hidden bg-zinc-900 text-white shadow-xl aspect-[3/4] flex flex-col justify-end">
                  <img
                    src={muryam.imageUrl}
                    alt={muryam.name}
                    className="absolute inset-0 w-full h-full object-cover object-top filter grayscale contrast-105 transition-transform duration-700 group-hover:scale-105"
                    style={{
                      transform: 'scale(1.25)',
                      transformOrigin: 'top center',
                      objectPosition: 'top center',
                    }}
                  loading="lazy" decoding="async" />
                  {/* Subtle dark gradient overlay on bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                  {/* Card Info Overlay */}
                  <div className="relative z-10 p-6 sm:p-7">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                      {muryam.name}
                    </h3>
                    <div className="flex items-center justify-between mt-1.5">
                      <span className="text-xs sm:text-sm text-primary font-medium tracking-wide">
                        Co-Founder & CEO
                      </span>
                      {muryam.socials.linkedin && (
                        <Link
                          href={muryam.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-md bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200"
                          aria-label={`${muryam.name} LinkedIn`}
                        >
                          <Linkedin className="w-3.5 h-3.5 fill-current" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
