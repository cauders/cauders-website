"use client";

import { useRef, type ReactNode, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

let sharedObserver: IntersectionObserver | null = null;
const observerCallbacks = new WeakMap<Element, () => void>();

interface ScrollFadeInProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: string | number;
}

export default function ScrollFadeIn({ children, className, style, direction = 'up', delay = 0 }: ScrollFadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    // Check prefers-reduced-motion: if user/device prefers reduced motion, reveal immediately
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    // Immediate viewport check: if element is in/near viewport, show immediately without waiting for observer
    if (typeof window !== 'undefined') {
      const rect = currentRef.getBoundingClientRect();
      if (rect.top < window.innerHeight + 180 && rect.bottom > -100) {
        setIsVisible(true);
        return;
      }
    }

    if (!sharedObserver) {
      sharedObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const callback = observerCallbacks.get(entry.target);
              if (callback) {
                callback();
                sharedObserver?.unobserve(entry.target);
                observerCallbacks.delete(entry.target);
              }
            }
          });
        },
        { rootMargin: '160px 0px 160px 0px', threshold: 0.01 }
      );
    }

    observerCallbacks.set(currentRef, () => setIsVisible(true));
    sharedObserver.observe(currentRef);

    // Safety fallback: ensure content is never stuck invisible on slow/older devices
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    return () => {
      clearTimeout(fallbackTimer);
      if (currentRef) {
        sharedObserver?.unobserve(currentRef);
        observerCallbacks.delete(currentRef);
      }
    };
  }, []);

  const getAnimationClass = () => {
    if (!isVisible) return '';
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
  
  const animationDelay = typeof delay === 'string' ? delay.replace('delay-', '') : delay;
  const delayInMs = Number(animationDelay) || 0;

  return (
    <div
      ref={ref}
      className={cn(className, 'transition-opacity', isVisible ? 'opacity-100' : 'opacity-0', getAnimationClass())}
      style={{ ...style, animationDelay: `${delayInMs}ms`, animationFillMode: 'forwards' }}
    >
      {children}
    </div>
  );
}
