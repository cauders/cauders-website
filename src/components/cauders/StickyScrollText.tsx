"use client";

import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const textLines = [
  { text: "WE ENGINEER", direction: "left" },
  { text: "HIGH-PERFORMANCE,", className: "text-primary", direction: "right" },
  { text: "CUTTING-EDGE PLATFORMS", className: "text-primary", direction: "left" },
  { text: "THAT EMPOWER BUSINESSES TO", direction: "right" },
  { text: "DOMINATE THE DIGITAL LANDSCAPE.", direction: "left" },
];

// Easing function for a more pronounced bouncy effect
const easeOutElastic = (x: number): number => {
    const c5 = (2 * Math.PI) / 4.5; // Adjusted for a bouncier feel

    return x === 0
      ? 0
      : x === 1
      ? 1
      : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c5) + 1;
};

const StickyScrollText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transforms, setTransforms] = useState(
    textLines.map(line => line.direction === 'left' ? 'translateX(-100%)' : 'translateX(100%)')
  );

  const scrollHandler = () => {
    if (!containerRef.current) return;

    const { top, height } = containerRef.current.getBoundingClientRect();
    const scrollableHeight = height - window.innerHeight;
    
    // Start animation when the component is well into view
    const animationStartPoint = window.innerHeight * 0.5;
    const progress = Math.max(0, Math.min(1, (-top - animationStartPoint) / (scrollableHeight + animationStartPoint)));

    const numLines = textLines.length;
    const progressPerLine = 1 / numLines; 

    const newTransforms = textLines.map((line, index) => {
      // Each line starts animating after the previous one is mostly done.
      const lineStartProgress = index * progressPerLine;
      // Spread out the animation duration for each line.
      const animationDuration = progressPerLine * 1.5;
      
      const lineProgress = Math.max(0, Math.min(1, (progress - lineStartProgress) / animationDuration));
      
      // Apply the bounce effect
      const easedProgress = easeOutElastic(lineProgress);

      let x = 0;
      if (line.direction === 'left') {
        x = -100 + (easedProgress * 100);
      } else {
        x = 100 - (easedProgress * 100);
      }
      
      return `translateX(${x}%)`;
    });
    
    setTransforms(newTransforms);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, { passive: true });
    scrollHandler(); 
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <div ref={containerRef} className="relative flex flex-col h-[500vh] bg-background">
      {/* Sticky container for the animated text */}
      <div className="sticky top-0 flex-shrink-0 flex items-center justify-center overflow-hidden h-[100vh]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {textLines.map((line, index) => (
                <div key={index} className="overflow-hidden py-1">
                    <h2
                        className={cn(
                            "text-5xl md:text-6xl font-extrabold text-foreground uppercase tracking-tight transition-transform duration-300 ease-out",
                            line.className
                        )}
                        style={{ transform: transforms[index] }}
                    >
                        {line.text}
                    </h2>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default StickyScrollText;
