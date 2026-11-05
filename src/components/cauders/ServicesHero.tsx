'use client';

import React from 'react';
import Image from 'next/image';
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
      <div className="relative w-full min-h-[420px] sm:min-h-[480px] lg:min-h-[550px]">
        <div className="w-full flex justify-center overflow-hidden">
          <Image
            src="https://res.cloudinary.com/cauders/image/upload/f_auto,q_auto,w_1920/v1792742641/Group_4654_t9qwca.png"
            alt=""
            aria-hidden="true"
            width={1920}
            height={744}
            priority
            sizes="100vw"
            style={{ aspectRatio: '4320 / 1674' }}
            className="w-[110%] max-w-none h-auto block select-none pointer-events-none"
          />
        </div>

        {/* Content overlay on the left side of the hero */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="max-w-[95rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl lg:max-w-2xl text-left">
              <ScrollFadeIn>
                <ArrowBadge
                  href="#services-directory"
                  text="SERVICES"
                  variant="black"
                  className="mb-3 sm:mb-5"
                />
              </ScrollFadeIn>

              <SectionHeading
                as="h1"
                lines={[
                  'What We Build, <span class="text-cyan-radial font-medium inline-block">Connect & Improve</span>',
                ]}
                subheading="We build custom software and digital products, apply AI and automation to workflows, and modernize existing systems to support evolving operational and technical needs."
                align="left"
                subheadingMaxWidth="max-w-xl"
                subheadingClassName="text-xs sm:text-sm md:text-base lg:text-lg text-foreground/80 dark:text-zinc-300 leading-relaxed font-normal mb-5 sm:mb-8"
                className="mb-0"
              />

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

      {/* Full-width zinc gradient banner directly below hero */}
      <div className="relative z-20 w-full">
        <ZincGradientContainer
          withRadialGlow={true}
          className="w-full p-0 border-t border-primary/20 shadow-md relative"
        >
          <div className="relative z-10 max-w-[95rem] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
            <a
              href="#software-solutions"
              onClick={(e) => scrollToSection(e, 'software-solutions')}
              className="group flex items-center justify-center gap-3 py-4 sm:py-5 px-6 transition-colors cursor-pointer text-sm sm:text-base font-medium tracking-tight"
            >
              <span className="text-white group-hover:text-primary transition-colors duration-200">
                Digital Product Engineering
              </span>
              <ArrowDown className="w-4 h-4 text-white group-hover:text-primary transition-transform duration-300 group-hover:translate-y-1" />
            </a>

            <a
              href="#ai-automation"
              onClick={(e) => scrollToSection(e, 'ai-automation')}
              className="group flex items-center justify-center gap-3 py-4 sm:py-5 px-6 transition-colors cursor-pointer text-sm sm:text-base font-medium tracking-tight"
            >
              <span className="text-white group-hover:text-primary transition-colors duration-200">
                AI &amp; Automation
              </span>
              <ArrowDown className="w-4 h-4 text-white group-hover:text-primary transition-transform duration-300 group-hover:translate-y-1" />
            </a>

            <a
              href="#dedicated-teams"
              onClick={(e) => scrollToSection(e, 'dedicated-teams')}
              className="group flex items-center justify-center gap-3 py-4 sm:py-5 px-6 transition-colors cursor-pointer text-sm sm:text-base font-medium tracking-tight"
            >
              <span className="text-white group-hover:text-primary transition-colors duration-200">
                Teams &amp; Partnerships
              </span>
              <ArrowDown className="w-4 h-4 text-white group-hover:text-primary transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </div>
        </ZincGradientContainer>
      </div>
    </div>
  );
}
