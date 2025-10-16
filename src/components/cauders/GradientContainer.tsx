
'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface GradientContainerProps {
  children: ReactNode;
  className?: string;
  imageSrc?: string;
}

export default function GradientContainer({ children, className, imageSrc = "/images/background/overlay-bg.svg" }: GradientContainerProps) {
  return (
    <div className={cn("relative bg-gradient-container overflow-hidden", className)}>
      <Image
        src={imageSrc}
        alt="background overlay"
        width={1920}
        height={1080}
        className="object-cover absolute w-full h-auto left-0 right-0 z-0"
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
