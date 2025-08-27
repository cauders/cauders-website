
"use client";

import { useRef, useEffect, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ScrollFadeInProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  threshold?: number;
}

export default function ScrollFadeIn({ children, className, style, threshold = 0.1 }: ScrollFadeInProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = elementRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(currentRef);

    return () => {
        if(currentRef) {
            observer.unobserve(currentRef);
        }
    };
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      className={cn('opacity-0', className)}
      style={style}
    >
      {children}
    </div>
  );
}
