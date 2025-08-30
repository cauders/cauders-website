
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
  const [transforms, setTransforms] = useState<string[]>(Array(textLines.length).fill('translateX(-100%)'));

  const scrollHandler = () => {
    if (!containerRef.current) return;

    const { top, height } = containerRef.current.getBoundingClientRect();
    const scrollableHeight = height - window.innerHeight;
    
    // Calculate scroll progress within the container (from 0 to 1)
    // We add a buffer so the animation starts a bit after the section enters and finishes before it exits
    const progress = Math.max(0, Math.min(1, -top / scrollableHeight));
    
    const newTransforms = textLines.map((line, index) => {
      // Stagger the animation for each line
      const startProgress = index * 0.15;
      const endProgress = startProgress + 0.5;

      // Calculate progress for this specific line
      const lineProgress = Math.max(0, Math.min(1, (progress - startProgress) / (endProgress - startProgress)));

      if (lineProgress > 0 && lineProgress < 1) {
        document.body.style.setProperty('--no-cursor', 'none');
      } else {
         document.body.style.setProperty('--no-cursor', 'auto');
      }
      
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
    window.addEventListener('scroll', scrollHandler);
    scrollHandler(); // Initial call
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {textLines.map((line, index) => (
                <div key={index} className="overflow-hidden">
                    <h2
                        className={cn(
                            "text-4xl md:text-5xl font-extrabold text-foreground uppercase tracking-tight transition-transform duration-300 ease-out",
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
