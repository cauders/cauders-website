'use client';

import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface GradientContainerProps {
  children: ReactNode;
  className?: string;
  imageSrc?: string | null;
}

export default function GradientContainer({ children, className, imageSrc }: GradientContainerProps) {
  const defaultImage = "https://res.cloudinary.com/cauders/image/upload/v1792728816/image_371_lklhny.png";
  const finalImageSrc = imageSrc === undefined ? defaultImage : imageSrc;
  return (
    <div className={cn("relative bg-zinc-gradient text-white overflow-hidden", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_15%,rgba(140,234,229,0.18),transparent_70%)]"
      />
      {finalImageSrc && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden w-full h-full"
        >
          <img
            src={finalImageSrc}
            alt=""
            className="w-full h-full object-cover select-none pointer-events-none opacity-40 mix-blend-overlay"
          loading="lazy" decoding="async" />
        </div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
