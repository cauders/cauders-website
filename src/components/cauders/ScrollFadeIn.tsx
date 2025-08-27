
"use client";

import { useRef, useEffect, type ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollFadeInProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function ScrollFadeIn({ children, className, style }: ScrollFadeInProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = elementRef.current;
    if (!currentRef) return;

    const handleScroll = () => {
      const { top, bottom, height } = currentRef.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the element is in the viewport
      if (top < windowHeight && bottom > 0) {
        setIsVisible(true);
        // Calculate the percentage of the element that is visible
        const visibleHeight = Math.min(bottom, windowHeight) - Math.max(top, 0);
        const progress = visibleHeight / height;
        
        // Calculate scale and opacity based on progress
        // It starts animating when the top of the element hits the bottom of the viewport
        // and is fully visible/animated when it's centered.
        const entryProgress = Math.min(1, (windowHeight - top) / (windowHeight / 1.5));
        const scale = 0.95 + (0.05 * entryProgress);
        const opacity = entryProgress;

        currentRef.style.opacity = `${Math.min(1, opacity)}`;
        currentRef.style.transform = `translateY(0) scale(${Math.min(1, scale)})`;
      } else {
        if (isVisible) {
           // Reset when it goes out of view
           currentRef.style.opacity = `0`;
           currentRef.style.transform = `translateY(40px) scale(0.95)`;
           setIsVisible(false);
        }
      }
    };
    
    // Initial state
    currentRef.style.opacity = `0`;
    currentRef.style.transform = `translateY(40px) scale(0.95)`;
    currentRef.style.transition = `transform 0.5s ease-out, opacity 0.5s ease-out`;

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <div
      ref={elementRef}
      className={cn(className)}
      style={style}
    >
      {children}
    </div>
  );
}
