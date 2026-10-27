'use client';

import React from 'react';
import StandardizedHeading from './StandardizedHeading';
import ScrollFadeIn from './ScrollFadeIn';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  /**
   * Lines for the main heading passed to StandardizedHeading.
   * Can include HTML spans (e.g., text-cyan-gradient).
   */
  lines: (string | { text: string; isGradient?: boolean; className?: string; inline?: boolean; gradientLastWords?: number })[];
  /**
   * Optional subheading / description text underneath the heading.
   */
  subheading?: string | React.ReactNode;
  /**
   * Text alignment: 'left' (default) or 'center'
   */
  align?: 'left' | 'center';
  /**
   * Optional wrapper class name
   */
  className?: string;
  /**
   * Optional custom class for the heading itself
   */
  headingClassName?: string;
  /**
   * Optional custom class for the subheading
   */
  subheadingClassName?: string;
  /**
   * Delay for the subheading animation (ms)
   */
  subheadingDelay?: number;
  /**
   * Max width for the subheading container
   */
  subheadingMaxWidth?: string;
  /**
   * Heading tag type: 'h1' | 'h2' | 'h3' (defaults to 'h2')
   */
  as?: 'h1' | 'h2' | 'h3';
}

export default function SectionHeading({
  lines,
  subheading,
  align = 'left',
  className = '',
  headingClassName = '',
  subheadingClassName = '',
  subheadingDelay = 150,
  subheadingMaxWidth = 'max-w-5xl',
  as = 'h2',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={cn(
        'w-full',
        isCenter ? 'text-center flex flex-col items-center' : 'text-left',
        className
      )}
    >
      <StandardizedHeading
        lines={lines}
        as={as}
        className={cn(
          isCenter ? 'text-center' : 'text-left',
          '[&_.word-highlight]:pointer-events-auto',
          headingClassName
        )}
      />

      {subheading && (
        <ScrollFadeIn delay={subheadingDelay}>
          <p
            className={cn(
              'mt-3 md:mt-4 text-xs sm:text-sm md:text-base text-muted-foreground font-normal leading-relaxed',
              isCenter ? 'text-center mx-auto' : 'text-left',
              subheadingMaxWidth,
              subheadingClassName
            )}
          >
            {subheading}
          </p>
        </ScrollFadeIn>
      )}
    </div>
  );
}
