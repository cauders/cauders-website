
'use client';

import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedLineProps {
  className?: string;
  reverse?: boolean;
}

export default function AnimatedLine({ className, reverse = false }: AnimatedLineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const pathVariants = {
    // A more complex, overlapping path
    complex: "M 0 50 C 50 0, 100 100, 150 50 S 250 0, 300 50",
  }

  const d = pathVariants.complex;
  const pathLength = 500; // Estimated length for the complex path

  return (
    <div ref={ref} className={cn("w-full max-w-sm h-full", className)}>
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
          strokeWidth="2" // Made the line slightly thinner for a more refined look
          strokeLinecap="round"
          className={cn(
            "transition-all duration-[2000ms] ease-out"
          )}
          style={{
            strokeDasharray: pathLength,
            strokeDashoffset: inView ? 0 : pathLength,
            transform: reverse ? 'scaleX(-1) translate(-300px, 0)' : 'none',
          }}
        />
      </svg>
    </div>
  );
}
