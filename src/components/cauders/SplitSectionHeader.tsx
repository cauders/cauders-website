"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ArrowBadge from './ArrowBadge';
import StandardizedHeading from './StandardizedHeading';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';

interface SplitSectionHeaderProps {
  badgeText?: string;
  badgeHref?: string;
  headingLines: (string | { text: string; isGradient?: boolean; gradientType?: 'primary' | 'light'; gradientLastWords?: number; inline?: boolean })[];
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  onCtaClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
  theme?: 'light' | 'dark'; // dark theme means text is white
  as?: 'h1' | 'h2' | 'h3';
}

export default function SplitSectionHeader({
  badgeText,
  badgeHref = '#',
  headingLines,
  description,
  ctaText,
  ctaLink,
  onCtaClick,
  className = '',
  theme = 'light',
  as = 'h2',
}: SplitSectionHeaderProps) {
  const isDark = theme === 'dark';
  
  return (
    <div className={`mb-12 lg:mb-20 w-full flex flex-col ${className}`}>
      {badgeText && (
        <div className={`w-full mb-4 md:mb-6 flex justify-start`}>
          <ArrowBadge href={badgeHref} text={badgeText} variant={isDark ? "white" : "black"} />
        </div>
      )}
      
      <div className={`w-full flex flex-col md:flex-row md:justify-between items-start text-left gap-6 md:gap-0`}>
        <div className={`w-full flex flex-col md:w-[45%] lg:w-[40%] max-w-3xl`}>
          <StandardizedHeading lines={headingLines} as={as} className={cn('text-left', isDark ? 'text-white' : '')} />
        </div>
        {(description || ctaText) && (
          <div className={`flex flex-col gap-3 md:gap-4 w-full md:w-[45%] lg:w-[35%] items-start md:items-end text-left md:text-right md:mt-2`}>
            {description && (
              <p className={`${typography.bodyBase} font-normal ${isDark ? 'text-white' : 'text-foreground'}`}>
                {description}
              </p>
            )}
            {ctaText && ctaLink && (
              <Button asChild variant="zinc" size="lg" className="w-fit">
                <Link 
                  href={ctaLink} 
                  onClick={(e) => {
                    if (ctaLink.startsWith('#')) {
                      e.preventDefault();
                      const target = document.querySelector(ctaLink);
                      if (target) {
                        const headerOffset = 100;
                        const elementPosition = target.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.scrollY - headerOffset;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: "smooth"
                        });
                      }
                    }
                    if (onCtaClick) onCtaClick(e);
                  }}
                >
                  {ctaText}
                </Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
