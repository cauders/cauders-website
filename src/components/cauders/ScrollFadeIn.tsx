"use client";

import { useRef, useEffect, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ScrollFadeInProps {
  children: ReactNode;
  className?: string;
  delay?: string;
  threshold?: number;
}

export default function ScrollFadeIn({ children, className, delay = '', threshold = 0.1 }: ScrollFadeInProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = elementRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      className={cn(
        'opacity-0 transform translate-y-10 transition-all duration-700 ease-out',
        delay,
        className
      )}
    >
      {children}
    </div>
  );
}
