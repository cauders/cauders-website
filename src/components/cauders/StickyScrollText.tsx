
"use client";

import { useRef, useEffect, useState, Suspense } from 'react';
import { cn } from '@/lib/utils';
import StickyScroll3D from './StickyScroll3D';
import { Skeleton } from '../ui/skeleton';

const textLines = [
  { text: "WE ENGINEER", direction: "left" },
  { text: "HIGH-PERFORMANCE,", className: "text-primary", direction: "right" },
  { text: "CUTTING-EDGE PLATFORMS", className: "text-primary", direction: "left" },
  { text: "THAT EMPOWER BUSINESSES", direction: "right" },
  { text: "TO DOMINATE THE DIGITAL LANDSCAPE.", direction: "left" },
];

// Easing function for a smooth slide with settle
const easeOutExpo = (x: number): number => {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
};

const StickyScrollText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transforms, setTransforms] = useState(
    textLines.map(line => line.direction === 'left' ? 'translateX(-100%)' : 'translateX(100%)')
  );
  const [progress, setProgress] = useState(0);

  const scrollHandler = () => {
    if (!containerRef.current) return;

    const { top, height } = containerRef.current.getBoundingClientRect();
    const scrollableHeight = height - window.innerHeight;
    
    // Start animation when the component is well into view
    const animationStartPoint = window.innerHeight * 0.8;
    const currentProgress = Math.max(0, Math.min(1, (window.scrollY - containerRef.current.offsetTop + animationStartPoint) / (scrollableHeight + animationStartPoint)));
    
    setProgress(currentProgress);

    const numLines = textLines.length;
    const progressPerLine = 1 / numLines; 

    const newTransforms = textLines.map((line, index) => {
      // Each line starts animating after the previous one is mostly done.
      const lineStartProgress = index * progressPerLine;
      // Spread out the animation duration for each line.
      const animationDuration = progressPerLine * 1.8;
      
      const lineProgress = Math.max(0, Math.min(1, (currentProgress - lineStartProgress) / animationDuration));
      
      // Apply the ease out expo effect
      const easedProgress = easeOutExpo(lineProgress);

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
    <div ref={containerRef} className="relative flex flex-col h-[400vh] bg-background">
      <div className="absolute inset-0 z-0">
         <Suspense fallback={<Skeleton className="w-full h-full" />}>
           <StickyScroll3D scrollProgress={progress} />
         </Suspense>
      </div>
      {/* Sticky container for the animated text */}
      <div className="sticky top-0 flex-shrink-0 flex items-center justify-center overflow-hidden h-[100vh]">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {textLines.map((line, index) => (
                <div key={index} className="overflow-hidden py-1">
                    <h2
                        className={cn(
                            "text-5xl md:text-6xl font-extrabold text-foreground uppercase tracking-tight transition-transform duration-300 ease-out",
                            line.className
                        )}
                        style={{ transform: transforms[index] }}
                    >
                      <span
                        className="inline-block px-4 py-2 rounded-md"
                        style={{
                          backgroundColor: 'hsl(var(--background) / 0.5)',
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                        }}
                      >
                        {line.text}
                      </span>
                    </h2>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default StickyScrollText;
