'use client';

import { cn } from '@/lib/utils';

interface BlurCircleProps {
  className?: string;
}

export default function BlurCircle({ className }: BlurCircleProps) {
  return (
    <div
      className={cn(
        'absolute bg-primary/10 rounded-full -z-10',
        'blur-3xl', // Tailwind's largest blur utility
        className
      )}
      style={{ filter: 'blur(200px)'}}
    />
  );
}
