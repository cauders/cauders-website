
"use client";

import React, { useRef, useState, useEffect, Suspense, useCallback } from "react";
import { cn } from "@/lib/utils";
import StickyScroll3D from "@/components/cauders/StickyScroll3D";
import { Skeleton } from "../ui/skeleton";
import { getProjects } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollFadeIn from "./ScrollFadeIn";

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


const CARD_ANGLE = 30; // Angle between each card in the carousel


export default function PortfolioSection() {
    const containerRef = useRef<HTMLDivElement>(null);
  
    const [progress, setProgress] = useState(0);
  
    const scrollHandler = () => {
      if (!containerRef.current) return;
  
      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrollableHeight = height - window.innerHeight;
      
      const currentProgress = Math.max(0, Math.min(1, -top / scrollableHeight));
      
      setProgress(currentProgress);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', scrollHandler, { passive: true });
      scrollHandler(); 
      return () => window.removeEventListener('scroll', scrollHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Text animation logic
    const topTextProgress = Math.max(0, Math.min(1, progress * 4)); // 0 -> 0.25
    const bottomTextProgress = Math.max(0, Math.min(1, (progress - 0.75) * 4)); // 0.75 -> 1

    // Portfolio animation logic
    const portfolioProgress = Math.max(0, Math.min(1, (progress - 0.2) / 0.6)); // 0.2 -> 0.8
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
            isVisible ? "opacity-100" : "opacity-0",
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


function PortfolioPreview() {
  const projects = getProjects().slice(0, 12);
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselWrapRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isCursorNearCard, setIsCursorNearCard] = useState<number | null>(null);

  // Calculate the initial rotation to center the middle card dynamically
  const middleCardIndex = Math.floor(projects.length / 2);
  const initialRotation = -middleCardIndex * CARD_ANGLE;

  // Refs for animation and dragging
  const cursorPosition = useRef({ x: 0, y: 0 });
  const followerPosition = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startRotateY = useRef(initialRotation);
  const currentRotateY = useRef(initialRotation);
  const targetRotateY = useRef(initialRotation);
  const animationFrameId = useRef<number | null>(null);

  // New ref to track previous scroll position
  const lastScrollY = useRef(0);

  const carouselRadius = -630 / (2 * Math.tan(Math.PI / projects.length));

  // Main animation loop for smoothing transforms
  useEffect(() => {
    const animate = () => {
      // Animate cursor follower with offset
      if (followerRef.current) {
        followerPosition.current.x += (cursorPosition.current.x - followerPosition.current.x - 20) * 0.01;
        followerPosition.current.y += (cursorPosition.current.y - followerPosition.current.y - 20) * 0.01;
        followerRef.current.style.transform = `translate(-50%, -50%) translate3d(${followerPosition.current.x}px, ${followerPosition.current.y}px, 0)`;
      }

      // Animate carousel rotation with different damping for drag and scroll
      if (carouselWrapRef.current) {
        // Adjust the damping for a more subtle scroll effect
        const damping = isDragging.current ? 0.1 : 0.02;

        currentRotateY.current += (targetRotateY.current - currentRotateY.current) * damping;
        carouselWrapRef.current.style.transform = `translateZ(${Math.abs(carouselRadius)}px) rotateY(${currentRotateY.current}deg) rotateX(0deg)`;
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };
    animationFrameId.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [carouselRadius]);

  // Handle vertical page scroll to rotate carousel
  useEffect(() => {
    const handleScroll = () => {
      if (isDragging.current) return;
      
      // Calculate the change in scroll position
      const deltaScroll = window.scrollY - lastScrollY.current;
      
      // Update the target rotation based on the scroll change. Adjust 0.5 for sensitivity.
      targetRotateY.current -= deltaScroll * 0.05; // Reduced sensitivity

      // Update the last scroll position for the next frame
      lastScrollY.current = window.scrollY;
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    cursorPosition.current = { x: e.clientX, y: e.clientY };

    if (isDragging.current) {
      const walk = (e.pageX - startX.current) * -0.5; // Drag sensitivity
      targetRotateY.current = startRotateY.current + walk;
    }
    
    let nearestCardIndex: number | null = null;
    let minDistance = 250;

    cardRefs.current.forEach((card, index) => {
      if (card) {
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        const distance = Math.sqrt(
          Math.pow(e.clientX - cardCenterX, 2) +
          Math.pow(e.clientY - cardCenterY, 2)
        );

        if (distance < minDistance) {
          minDistance = distance;
          nearestCardIndex = index;
        }
      }
    });

    setIsCursorNearCard(nearestCardIndex);
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    startX.current = e.pageX;
    startRotateY.current = targetRotateY.current;
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);
  
  const handleMouseLeave = useCallback(() => {
    isDragging.current = false;
    setIsCursorNearCard(null);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col justify-center py-20 h-full"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={followerRef}
        className={cn(
          "fixed w-28 h-28 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold pointer-events-none z-20 transition-opacity duration-300 ease-out top-0 left-0",
          (isCursorNearCard !== null || isDragging.current) ? "opacity-100 scale-100" : "opacity-0 scale-50"
        )}
        style={{ filter: "drop-shadow(0 0 35px hsl(var(--primary) / 0.6))" }}
      >
        Drag
      </div>


      {/* 3D Carousel Area */}
      <div className="h-[45vh] mt-16 perspective-carousel">
        <div ref={carouselWrapRef} className="relative w-full h-full carousel-wrap">
          {projects.map((project, index) => {
            const cardRotation = index * CARD_ANGLE;
            return (
              <div
                key={project.slug}
                ref={(el) => { cardRefs.current[index] = el; }}
                className="absolute w-[95vw] md:w-[60vw] lg:w-[45vw] xl:w-[35vw] h-full group top-0 left-0 right-0 mx-auto"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                style={{
                  transform: `rotateY(${cardRotation}deg) translateZ(${carouselRadius}px)`,
                }}
              >
                {/* This Link wraps the card itself */}
                <Link
                  href={`/portfolio/${project.slug}`}
                  className={cn(
                    "block h-full w-full transition-all duration-500 ease-out rounded-3xl",
                    activeCard === index && "shadow-primary-glow"
                  )}
                  draggable={false}
                >
                  <Card className="h-full w-full overflow-hidden rounded-3xl shadow-lg">
                    <div className="w-full h-full bg-foreground relative overflow-hidden rounded-3xl transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        width={600}
                        height={450}
                        className="w-full h-full object-cover pointer-events-none"
                        data-ai-hint={project.aiHint}
                        draggable={false}
                      />
                      <div className="absolute inset-0"></div>
                    </div>
                  </Card>
                </Link>
                {/* THIS IS THE NEW TEXT CONTAINER POSITION */}
                <div
                  className={cn(
                    "absolute w-[95%] -bottom-32 p-7 z-20 transition-all duration-700 ease-out text-left",
                    activeCard === index ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                  )}
                >
                  {/* The description text also gets a bit more weight for clarity */}
                  <p className="text-lg text-white font-medium font-inter drop-shadow-md">
                    {project.description}
                  </p>
                  {/* The title text gets an even heavier font weight and a stronger shadow */}
                  <h3 className="font-black text-4xl md:text-5xl text-white mt-1 font-inter drop-shadow-2xl">
                    {project.title}
                  </h3>
                  {/* Add a top margin (e.g., mt-4) to create space above this element */}
                  <p className="mt-4 text-xs text-primary font-semibold uppercase tracking-wide drop-shadow-md">
                    WEB • 360° PHOTOGRAPHY • 360° VIDEO • 3D
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-44 text-center">
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
    </div>
  );
}
