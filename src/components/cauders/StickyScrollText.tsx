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

// Easing function for a bouncy effect
const easeOutElastic = (x: number): number => {
    const c4 = (2 * Math.PI) / 3;
    return x === 0
      ? 0
      : x === 1
      ? 1
      : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
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
    
    // Calculate raw progress. The animation will be mapped to a specific window within this progress.
    const rawProgress = Math.max(0, Math.min(1, -top / scrollableHeight));
    
    // We want the animation to happen between 33% and 80% of the scroll through the container
    const animationStart = 0.33; 
    const animationEnd = 0.8;
    const animationWindow = animationEnd - animationStart;

    // Remap raw progress to our animation window
    const progress = Math.max(0, Math.min(1, (rawProgress - animationStart) / animationWindow));

    const numLines = textLines.length;
    const progressPerLine = 1 / (numLines + 1); // Add more spacing between triggers

    const newTransforms = textLines.map((line, index) => {
      const lineStartProgress = index * progressPerLine;
      const animationDuration = progressPerLine * 1.5; // Each animation takes this much progress to complete
      const lineEndProgress = lineStartProgress + animationDuration;

      // Calculate the progress for this specific line's animation (0 to 1)
      const lineProgress = Math.max(0, Math.min(1, (progress - lineStartProgress) / (lineEndProgress - lineStartProgress)));
      
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
    <div ref={containerRef} className="relative flex flex-col h-[300vh] bg-background">
      {/* Sticky container for the animated text */}
      <div className="sticky top-0 flex-shrink-0 flex items-center justify-center overflow-hidden h-[100vh]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {textLines.map((line, index) => (
                <div key={index} className="overflow-hidden py-1">
                    <h2
                        className={cn(
                            "text-4xl md:text-6xl font-extrabold text-foreground uppercase tracking-tight transition-transform duration-300 ease-out",
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
