
"use client";

import { useRef, useEffect, useState, Suspense } from 'react';
import { cn } from '@/lib/utils';
import StickyScroll3D from '@/components/cauders/StickyScroll3D';
import { Skeleton } from '../ui/skeleton';
import PortfolioPreview from '../cauders/PortfolioPreview';

const textLinesTop = [
  { text: "WE ARCHITECT", direction: "left" },
  { text: "SEAMLESS DIGITAL EXPERIENCES", className: "text-primary", direction: "right" },
];

const textLinesBottom = [
  { text: "THAT BRIDGE THE GAP", direction: "left" },
  { text: "BETWEEN IMAGINATION", className: "text-primary", direction: "right" },
  { text: "AND INTERACTION.", direction: "left" },
]

const easeOutExpo = (x: number): number => {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
};

const AnimatedTextSection = ({ lines, scrollProgress }: { lines: typeof textLinesTop, scrollProgress: number }) => {
    const [transforms, setTransforms] = useState(
        lines.map(line => line.direction === 'left' ? 'translateX(-100%)' : 'translateX(100%)')
    );

    useEffect(() => {
        const numLines = lines.length;
        const progressPerLine = 1 / numLines;

        const newTransforms = lines.map((line, index) => {
            const lineStartProgress = index * progressPerLine;
            const animationDuration = progressPerLine * 1.8;
            
            const lineProgress = Math.max(0, Math.min(1, (scrollProgress - lineStartProgress) / animationDuration));
            
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
    }, [scrollProgress, lines]);

    return (
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {lines.map((line, index) => (
                <div key={index} className="overflow-hidden py-1">
                    <h2
                        className={cn(
                            "text-5xl md:text-7xl font-extrabold text-foreground uppercase tracking-tight transition-transform duration-300 ease-out font-headline",
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
    )
}


const PortfolioScrollText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [progress, setProgress] = useState(0);
  const [topTextProgress, setTopTextProgress] = useState(0);
  const [bottomTextProgress, setBottomTextProgress] = useState(0);

  const scrollHandler = () => {
    if (!containerRef.current) return;

    const { top, height } = containerRef.current.getBoundingClientRect();
    const scrollableHeight = height - window.innerHeight;
    
    const currentProgress = Math.max(0, Math.min(1, -top / scrollableHeight));
    
    setProgress(currentProgress);

    // Split progress for top and bottom sections
    setTopTextProgress(Math.max(0, Math.min(1, currentProgress * 3)));
    setBottomTextProgress(Math.max(0, Math.min(1, (currentProgress - 0.6) * 3)));

  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, { passive: true });
    scrollHandler(); 
    return () => window.removeEventListener('scroll', scrollHandler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="portfolio-preview" className="bg-background">
        <div ref={containerRef} className="relative flex flex-col h-[600vh] bg-background">
            <div className="absolute inset-0 z-0">
                <Suspense fallback={<Skeleton className="w-full h-full" />}>
                    <StickyScroll3D scrollProgress={progress} />
                </Suspense>
            </div>
            
            {/* Stage 1: Top Text */}
            <div className="sticky top-0 flex-shrink-0 flex items-center justify-center overflow-hidden h-[100vh]">
                <AnimatedTextSection lines={textLinesTop} scrollProgress={topTextProgress} />
            </div>

            {/* Spacer */}
            <div className="h-[100vh]"></div>
            
            {/* Stage 2: Portfolio Preview */}
            <div className="relative z-10 h-[200vh]">
                 <PortfolioPreview />
            </div>

            {/* Spacer */}
             <div className="h-[100vh]"></div>

            {/* Stage 3: Bottom Text */}
            <div className="sticky bottom-0 flex-shrink-0 flex items-center justify-center overflow-hidden h-[100vh]">
               <AnimatedTextSection lines={textLinesBottom} scrollProgress={bottomTextProgress} />
            </div>
        </div>
    </section>
  );
};

export default PortfolioScrollText;
