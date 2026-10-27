'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ZincGradientContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  withRadialGlow?: boolean;
}

/**
 * Reusable Zinc Gradient Container
 * Uses the custom zinc-gradient (#003431 0% to #28938E 100%)
 * with optional ambient radial lighting for rich depth.
 */
export default function ZincGradientContainer({
  children,
  className,
  withRadialGlow = true,
  ...props
}: ZincGradientContainerProps) {
  return (
    <div
      className={cn(
        'relative bg-zinc-gradient text-white overflow-hidden',
        className
      )}
      {...props}
    >
      {withRadialGlow && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(140,234,229,0.18),transparent_70%)]"
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
