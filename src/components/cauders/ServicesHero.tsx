'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import ArrowBadge from './ArrowBadge';
import SectionHeading from './SectionHeading';
import DarkTealButton from './DarkTealButton';
import ScrollFadeIn from './ScrollFadeIn';

import ZincGradientContainer from './ZincGradientContainer';

export default function ServicesHero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full bg-transparent overflow-hidden">
      {/* Hero section: Image spans full width without cropping (h-auto), and content is overlayed on top */}
      <div className="relative w-full">
        {/* Full image expanded by 10% in height (w-[110%] centered so it naturally gains 10% height with zero cropping) */}
        <div className="w-full flex justify-center overflow-hidden">
          <img
            src="https://res.cloudinary.com/cauders/image/upload/v1792742641/Group_4654_t9qwca.png"
            alt=""
            width={4320}
            height={1674}
            style={{ aspectRatio: '4320 / 1674' }}
            className="w-[110%] max-w-none h-auto block select-none pointer-events-none"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Content overlay on the left side of the hero */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="max-w-[95rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl lg:max-w-2xl text-left">
              {/* ArrowBadge: > SERVICES < */}
              <ScrollFadeIn>
                <ArrowBadge
                  href="#services-directory"
                  text="SERVICES"
                  variant="black"
                  className="mb-3 sm:mb-5"
                />
              </ScrollFadeIn>

              {/* Standardized SectionHeading */}
              <SectionHeading
                as="h1"
                lines={[
                  'What We Build, <span class="text-cyan-radial font-medium inline-block">Connect & Improve</span>'
                ]}
                subheading="We build custom software and digital products, apply AI and automation to workflows, and modernize existing systems to support evolving operational and technical needs."
                align="left"
                subheadingMaxWidth="max-w-xl"
                subheadingClassName="text-xs sm:text-sm md:text-base lg:text-lg text-foreground/80 dark:text-zinc-300 leading-relaxed font-normal mb-5 sm:mb-8"
                className="mb-0"
              />

              {/* CTA Button: Discuss Your Requirements */}
              <ScrollFadeIn delay={250}>
                <div className="pt-1">
                  <DarkTealButton href="/contact" size="md">
                    Discuss Your Requirements
                  </DarkTealButton>
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FULL-WIDTH ZINC GRADIENT BANNER DIRECTLY BELOW HERO (NO OVERLAP) ================= */}
      <div className="relative z-20 w-full">
        <ZincGradientContainer
          withRadialGlow={true}
          className="w-full p-0 border-t border-primary/20 shadow-md relative"
        >
          <div className="relative z-10 max-w-[95rem] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
            
            {/* Pillar 1: Digital Product Engineering */}
            <a
              href="#software-solutions"
              onClick={(e) => scrollToSection(e, 'software-solutions')}
              className="group flex items-center justify-center gap-3 py-4 sm:py-5 px-6 transition-colors cursor-pointer text-sm sm:text-base font-medium tracking-tight"
            >
              <span className="text-white group-hover:text-primary transition-colors duration-200">
                Digital Product Engineering
              </span>
              <ArrowDown className="w-4 h-4 text-white group-hover:text-primary transition-all duration-300 group-hover:translate-y-1" />
            </a>

            {/* Pillar 2: AI & Automation */}
            <a
              href="#ai-automation"
              onClick={(e) => scrollToSection(e, 'ai-automation')}
              className="group flex items-center justify-center gap-3 py-4 sm:py-5 px-6 transition-colors cursor-pointer text-sm sm:text-base font-medium tracking-tight"
            >
              <span className="text-white group-hover:text-primary transition-colors duration-200">
                AI &amp; Automation
              </span>
              <ArrowDown className="w-4 h-4 text-white group-hover:text-primary transition-all duration-300 group-hover:translate-y-1" />
            </a>

            {/* Pillar 3: Teams & Partnerships */}
            <a
              href="#dedicated-teams"
              onClick={(e) => scrollToSection(e, 'dedicated-teams')}
              className="group flex items-center justify-center gap-3 py-4 sm:py-5 px-6 transition-colors cursor-pointer text-sm sm:text-base font-medium tracking-tight"
            >
              <span className="text-white group-hover:text-primary transition-colors duration-200">
                Teams &amp; Partnerships
              </span>
              <ArrowDown className="w-4 h-4 text-white group-hover:text-primary transition-all duration-300 group-hover:translate-y-1" />
            </a>

          </div>
        </ZincGradientContainer>
      </div>
    </div>
  );
}
