
"use client"

import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const textLines = [
  { text: "WE ENGINEER", direction: "left" },
  { text: "HIGH-PERFORMANCE,", className: "text-primary", direction: "right" },
  { text: "CUTTING-EDGE PLATFORMS", className: "text-primary", direction: "left" },
  { text: "THAT EMPOWER BUSINESSES TO", direction: "right" },
  { text: "DOMINATE THE DIGITAL LANDSCAPE.", direction: "left" },
];

const StickyScrollText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transforms, setTransforms] = useState<string[]>(
    textLines.map(line => line.direction === 'left' ? 'translateX(-100%)' : 'translateX(100%)')
  );

  const scrollHandler = () => {
    if (!containerRef.current) return;

    const { top, height } = containerRef.current.getBoundingClientRect();
    const scrollableHeight = height - window.innerHeight;
    
    // Calculate overall scroll progress within the container (from 0 to 1)
    const progress = Math.max(0, Math.min(1, -top / scrollableHeight));

    const numLines = textLines.length;
    const progressPerLine = 1 / numLines;

    const newTransforms = textLines.map((line, index) => {
      const lineStartProgress = index * progressPerLine;
      const lineEndProgress = (index + 1) * progressPerLine;

      // Calculate this line's individual animation progress (0 to 1)
      const lineProgress = Math.max(0, Math.min(1, (progress - lineStartProgress) / (lineEndProgress - lineStartProgress)));
      
      let x = 0;
      if (line.direction === 'left') {
        // Start from -100% and move to 0
        x = -100 + (lineProgress * 100);
      } else {
        // Start from 100% and move to 0
        x = 100 - (lineProgress * 100);
      }
      
      return `translateX(${x}%)`;
    });
    
    setTransforms(newTransforms);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, { passive: true });
    scrollHandler(); // Initial call
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-background">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {textLines.map((line, index) => (
                <div key={index} className="overflow-hidden">
                    <h2
                        className={cn(
                            "text-4xl md:text-5xl font-extrabold text-foreground uppercase tracking-tight",
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
