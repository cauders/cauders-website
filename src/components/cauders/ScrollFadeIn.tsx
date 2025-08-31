
"use client";

import { useRef, useEffect, type ReactNode, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface ScrollFadeInProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  direction?: 'up' | 'left' | 'right' | 'stretch-up';
}

const easeOutCubic = (x: number): number => 1 - Math.pow(1 - x, 3);

export default function ScrollFadeIn({ children, className, style, direction = 'up' }: ScrollFadeInProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [transformStyle, setTransformStyle] = useState<React.CSSProperties>({});


  const handleScroll = useCallback(() => {
    const currentRef = elementRef.current;
    if (!currentRef) return;
    
    const { top, height } = currentRef.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (direction === 'stretch-up') {
        const start = viewportHeight * 0.9;
        const end = viewportHeight * 0.7;
        
        // Calculate progress from 0 to 1 based on the element's position
        const progress = Math.max(0, Math.min(1, (start - top) / (start - end)));
        const easedProgress = easeOutCubic(progress);

        if (top < viewportHeight && top > -height) {
            setIsVisible(true);
            setTransformStyle({
                opacity: easedProgress,
                transform: `translateY(${(1 - easedProgress) * 50}px) scaleY(${0.9 + easedProgress * 0.1})`,
                transformOrigin: 'bottom',
            });
        }
    } else {
         if (top < viewportHeight * 0.9) {
            setIsVisible(true);
        }
    }
  }, [direction]);


  useEffect(() => {
    const currentRef = elementRef.current;
    if (!currentRef) return;

    if (direction === 'stretch-up') {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    } else {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
            });
        },
        { threshold: 0.1 }
        );

        observer.observe(currentRef);

        return () => {
        if (currentRef) {
            observer.unobserve(currentRef);
        }
        };
    }
  }, [direction, handleScroll]);
  
  if (direction === 'stretch-up') {
      return (
        <div ref={elementRef} className={cn(className)}>
          <div style={{ ...style, ...transformStyle }}>
              {children}
          </div>
        </div>
      )
  }

  const getInitialTransform = () => {
    switch (direction) {
      case 'left':
        return 'translateX(-100px)';
      case 'right':
        return 'translateX(100px)';
      case 'up':
      default:
        return 'translateY(40px) scale(0.95)';
    }
  };

  const getVisibleTransform = () => {
    switch (direction) {
      case 'left':
      case 'right':
        return 'translateX(0)';
      case 'up':
      default:
        return 'translateY(0) scale(1)';
    }
  };

  return (
    <div
      ref={elementRef}
      className={cn(className, "transition-all duration-700 ease-out", isVisible ? 'opacity-100' : 'opacity-0')}
      style={{
        ...style,
        transform: isVisible ? getVisibleTransform() : getInitialTransform(),
      }}
    >
      {children}
    </div>
  );
}
