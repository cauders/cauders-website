
"use client";

import React, { useRef, useState, useEffect, Suspense, useCallback } from "react";
import { cn } from "@/lib/utils";
import StickyScroll3D from "@/components/cauders/StickyScroll3D";
import { Skeleton } from "../ui/skeleton";
import ScrollFadeIn from "./ScrollFadeIn";
import PortfolioPreview from "./PortfolioPreview";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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


export default function PortfolioSection() {
    const containerRef = useRef<HTMLDivElement>(null);
  
    const [progress, setProgress] = useState(0);
  
    const scrollHandler = useCallback(() => {
      if (!containerRef.current) return;
  
      const { top, height } = containerRef.current.getBoundingClientRect();
      // Adjust scrollable height to make scrolling feel more natural
      const scrollableHeight = height - window.innerHeight;
      
      const currentProgress = Math.max(0, Math.min(1, -top / scrollableHeight));
      
      setProgress(currentProgress);
    }, []);
  
    useEffect(() => {
      window.addEventListener('scroll', scrollHandler, { passive: true });
      scrollHandler(); 
      return () => window.removeEventListener('scroll', scrollHandler);
    }, [scrollHandler]);

    // Animation progress for different parts of the section
    const topTextProgress = Math.max(0, Math.min(1, progress * 5)); // Animates from 0% to 20% of scroll
    const portfolioProgress = Math.max(0, Math.min(1, (progress - 0.25) / 0.5)); // Animates from 25% to 75%
    const bottomTextProgress = Math.max(0, Math.min(1, (progress - 0.8) * 5)); // Animates from 80% to 100%

    // Opacity and scale for the portfolio section for a fade/zoom effect
    const portfolioOpacity = portfolioProgress < 1 ? Math.sin(portfolioProgress * Math.PI) : 0;
    const portfolioScale = portfolioProgress < 1 ? 0.9 + portfolioProgress * 0.1 : 1;

    return (
        <section id="portfolio-preview" className="bg-background">
            <div ref={containerRef} className="relative flex flex-col h-[600vh] bg-background">
                <div className="absolute inset-0 z-0">
                    <Suspense fallback={<Skeleton className="w-full h-full" />}>
                        <StickyScroll3D scrollProgress={progress} />
                    </Suspense>
                </div>
                
                <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
                    {/* Top Text */}
                    <AnimatedTextSection lines={textLinesTop} scrollProgress={topTextProgress} />

                    {/* Portfolio Preview */}
                    <div 
                        className="absolute inset-0 flex flex-col justify-center"
                        style={{
                            opacity: portfolioOpacity,
                            transform: `scale(${portfolioScale})`,
                            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
                        }}
                    >
                        <PortfolioPreview />
                    </div>

                    {/* Bottom Text */}
                    <AnimatedTextSection lines={textLinesBottom} scrollProgress={bottomTextProgress} />
                </div>
            </div>
             <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-32 text-center -mt-24">
                <ScrollFadeIn>
                <Button
                    size="lg"
                    asChild
                    className="rounded-full px-8 py-6 bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                    <Link href="/portfolio">
                    Discover more of our work <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
                </ScrollFadeIn>
            </div>
        </section>
    );
}


const AnimatedTextSection = ({ lines, scrollProgress }: { lines: any[], scrollProgress: number }) => {
    const [transforms, setTransforms] = useState(
        lines.map(line => line.direction === 'left' ? 'translateX(-100%)' : 'translateX(100%)')
    );

    const isVisible = scrollProgress > 0 && scrollProgress < 1;

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
        <div className={cn("absolute inset-0 flex flex-col items-center justify-center z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-opacity duration-500",
            isVisible ? "opacity-100" : "opacity-0 pointer-events-none",
        )}>
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
