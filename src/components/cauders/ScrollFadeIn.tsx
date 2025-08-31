
"use client";

import { useRef, useEffect, type ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollFadeInProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  direction?: 'up' | 'left' | 'right' | 'stretch-up';
}

export default function ScrollFadeIn({ children, className, style, direction = 'up' }: ScrollFadeInProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = elementRef.current;
    if (!currentRef) return;

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
  }, []);
  
  if (direction === 'stretch-up') {
      return (
        <div ref={elementRef} className={cn(className)}>
          {isVisible && (
            <div className='animate-footer-slide-in' style={style}>
              {children}
            </div>
          )}
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
