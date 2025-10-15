"use client";

import { useRef, type ReactNode, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollFadeInProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: string;
}

export default function ScrollFadeIn({ children, className, style, direction = 'up', delay = 'delay-0' }: ScrollFadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
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

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    switch (direction) {
      case 'up':
        return 'animate-fade-in-up';
      case 'down':
        return 'animate-fade-in-down';
      case 'left':
        return 'animate-fade-in-left';
      case 'right':
        return 'animate-fade-in-right';
      default:
        return 'animate-fade-in';
    }
  };
  
  const getDelayClass = () => {
      const delayValue = delay?.replace('delay-', '');
      if (delayValue && !isNaN(Number(delayValue))) {
          return `animation-delay-${delayValue}`;
      }
      return '';
  }

  return (
    <div
      ref={ref}
      className={cn(className, 'transition-opacity', getAnimationClass())}
      style={style}
    >
      {children}
    </div>
  );
}
