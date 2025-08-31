
'use client';

import { cn } from '@/lib/utils';

interface AnimatedLineProps {
  className?: string;
  reverse?: boolean;
}

export default function AnimatedLine({ className, reverse = false }: AnimatedLineProps) {
  const pathVariants = {
    complex: "M 0 50 C 50 0, 100 100, 150 50 S 250 0, 300 50",
  }

  const d = pathVariants.complex;

  return (
    <div className={cn("w-full max-w-sm h-full", className)}>
      <svg
        className="w-full h-full"
        viewBox="0 0 300 100"
        preserveAspectRatio="none"
        overflow="visible"
      >
        <path
          d={d}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          style={{
            transform: reverse ? 'scaleX(-1) translate(-300px, 0)' : 'none',
          }}
        />
      </svg>
    </div>
  );
}
