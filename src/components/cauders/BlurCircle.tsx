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
        'blur-2xl',
        className
      )}
    />
  );
}
