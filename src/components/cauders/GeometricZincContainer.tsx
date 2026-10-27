'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface GeometricZincContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  imageSrc?: string;
  zoomScale?: number;
  withRadialGlow?: boolean;
}

/**
 * GeometricZincContainer
 * Reusable full-bleed Zinc Gradient container with the centered, height-fitted
 * background graphic that clips horizontally beyond the viewport without distortion.
 */
export default function GeometricZincContainer({
  children,
  className,
  imageSrc = 'https://res.cloudinary.com/cauders/image/upload/v1792816431/image_371_qqfli1.png',
  zoomScale = 1.3,
  withRadialGlow = false,
  ...props
}: GeometricZincContainerProps) {
  return (
    <div
      className={cn(
        'relative bg-zinc-gradient text-white overflow-hidden p-0 w-full',
        className
      )}
      {...props}
    >
      {withRadialGlow && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_15%,rgba(140,234,229,0.18),transparent_70%)]"
        />
      )}

      {/* Background geometry graphic: 100% height fit with no distortion, centered & zoomed */}
      {imageSrc && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden w-full h-full flex items-center justify-center"
        >
          <img
            src={imageSrc}
            alt=""
            className="h-full w-auto max-w-none select-none pointer-events-none block"
            style={{
              height: '100%',
              width: 'auto',
              maxWidth: 'none',
              transform: `scale(${zoomScale})`,
            }}
          loading="lazy" decoding="async" />
        </div>
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
