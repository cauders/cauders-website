
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
    // A simple wavy line path
    default: "M 0 50 Q 75 0, 150 50 T 300 50",
    // A more complex, overlapping path
    complex: "M 0 50 C 50 0, 100 100, 150 50 S 250 0, 300 50",
  }

  const d = pathVariants.complex;

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
          strokeWidth="4"
          strokeLinecap="round"
          className={cn(
            "transition-all duration-[2000ms] ease-out",
            inView ? "animate-draw" : "stroke-dashoffset-full"
          )}
          style={{
            strokeDasharray: 500, // A safe, large value to cover path length
            strokeDashoffset: inView ? 0 : 500,
            transform: reverse ? 'scaleX(-1) translate(-300px, 0)' : 'none',
          }}
        />
      </svg>
    </div>
  );
}

// Add keyframes to globals.css if they don't exist
/* In globals.css:
@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
.animate-draw {
  animation: draw 2s ease-out forwards;
}
.stroke-dashoffset-full {
  stroke-dashoffset: 500; // Match the JS value
}

*/
