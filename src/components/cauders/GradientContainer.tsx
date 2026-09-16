
'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface GradientContainerProps {
 children: ReactNode;
 className?: string;
 imageSrc?: string | null;
}

export default function GradientContainer({ children, className, imageSrc }: GradientContainerProps) {
 const defaultImage = "/images/background/overlay-bg.svg";
 const finalImageSrc = imageSrc === undefined ? defaultImage : imageSrc;

 return (
 <div className={cn("relative bg-gradient-container", className)}>
 {finalImageSrc && (
 <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-inherit z-0">
 <Image
 src={finalImageSrc}
 alt="background overlay"
 width={1920}
 height={1080}
 className="object-cover absolute w-full h-auto left-0 right-0 bottom-0"
 />
 </div>
 )}
 <div className="relative z-10">
 {children}
 </div>
 </div>
 );
}
