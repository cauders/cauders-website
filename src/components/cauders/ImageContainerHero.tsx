"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ArrowBadge from './ArrowBadge';
import StandardizedHeading from './StandardizedHeading';
import ScrollFadeIn from './ScrollFadeIn';
import { Button } from '@/components/ui/button';
import { typography } from '@/lib/typography';

export interface ImageContainerHeroProps {
  imageUrl: string;
  imageAlt?: string;
  badgeText?: string;
  badgeHref?: string;
  headingLines: (string | { text: string; isGradient?: boolean; inline?: boolean; gradientType?: 'primary' | 'light' })[];
  description: string;
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  onSecondaryCtaClick?: () => void;
  variant?: 'light' | 'dark';
}

export default function ImageContainerHero({
  imageUrl,
  imageAlt = "Hero Background",
  badgeText,
  badgeHref = "#overview",
  headingLines,
  description,
  ctaText,
  ctaHref,
  onCtaClick,
  secondaryCtaText,
  secondaryCtaHref,
  onSecondaryCtaClick,
  variant = 'light'
}: ImageContainerHeroProps) {
  
  const isDark = variant === 'dark';
  const glassClass = isDark ? 'glass-effect text-white' : 'glass-effect-light';
  const textColorClass = isDark ? 'text-white' : 'text-foreground';
  const headingClass = isDark ? 'text-white' : '';
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
        {/* Smooth, eased top scrim to ensure header legibility while blending seamlessly into the photograph */}
        <div 
          className="absolute inset-x-0 top-0 h-72 sm:h-80 lg:h-96 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.34) 14%, rgba(0, 0, 0, 0.25) 28%, rgba(0, 0, 0, 0.16) 44%, rgba(0, 0, 0, 0.08) 60%, rgba(0, 0, 0, 0.03) 76%, rgba(0, 0, 0, 0.008) 88%, transparent 100%)'
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col h-full items-center justify-center text-center px-4">
        <div className={`${glassClass} rounded-3xl px-8 py-12 md:px-12 md:py-16 lg:py-20 border-white/20 max-w-5xl mx-auto w-full flex flex-col items-center`}>
          {badgeText && (
            <ScrollFadeIn direction="up" delay={100}>
              <ArrowBadge href={badgeHref} text={badgeText} variant={isDark ? "white" : "black"} className="mb-4" />
            </ScrollFadeIn>
          )}
          
          <ScrollFadeIn direction="up" delay={200} className="w-full">
            <StandardizedHeading lines={headingLines} className={headingClass} />
          </ScrollFadeIn>

          <ScrollFadeIn direction="up" delay={300}>
            <p className={`mt-2 md:mt-4 ${typography.bodyBase} leading-relaxed ${textColorClass} max-w-2xl mx-auto font-normal `}>
              {description}
            </p>
          </ScrollFadeIn>

          {ctaText && (
            <ScrollFadeIn direction="up" delay={400} className="mt-8 md:mt-10">
              <div className="flex flex-wrap items-center justify-center gap-4">
                {onCtaClick ? (
                  <Button onClick={onCtaClick} variant="zinc" size="lg" className="group">
                    <span>{ctaText}</span>
                  </Button>
                ) : (
                  <Button asChild variant="zinc" size="lg" className="group">
                    <Link 
                      href={ctaHref || '#'} 
                      className="block"
                      onClick={(e) => {
                        if (ctaHref?.startsWith('#')) {
                          e.preventDefault();
                          document.querySelector(ctaHref)?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {ctaText}
                    </Link>
                  </Button>
                )}
                
                {secondaryCtaText && (
                  onSecondaryCtaClick ? (
                    <Button onClick={onSecondaryCtaClick} variant="outline" size="lg" className="group">
                      <span>{secondaryCtaText}</span>
                    </Button>
                  ) : (
                    <Button asChild variant="outline" size="lg" className="group">
                      <Link 
                        href={secondaryCtaHref || '#'} 
                        className="block"
                        onClick={(e) => {
                          if (secondaryCtaHref?.startsWith('#')) {
                            e.preventDefault();
                            document.querySelector(secondaryCtaHref)?.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        {secondaryCtaText}
                      </Link>
                    </Button>
                  )
                )}
              </div>
            </ScrollFadeIn>
          )}
        </div>
      </div>
    </section>
  );
}
