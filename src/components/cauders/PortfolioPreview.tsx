
"use client"

import { getProjects } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrollFadeIn from "./ScrollFadeIn";
import { ArrowRight } from "lucide-react";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

export default function PortfolioPreview() {
  const projects = getProjects().slice(0, 5);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const followerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isCursorNearCard, setIsCursorNearCard] = useState<number | null>(null);

  const cursorPosition = useRef({ x: 0, y: 0 });
  const followerPosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);
  const scrollAnimationId = useRef<number | null>(null);

  // Animation loop for the cursor follower
  useEffect(() => {
    const animateFollower = () => {
      if (followerRef.current) {
        // Interpolate position for smooth delay
        followerPosition.current.x += (cursorPosition.current.x - followerPosition.current.x) * 0.1;
        followerPosition.current.y += (cursorPosition.current.y - followerPosition.current.y) * 0.1;
        
        followerRef.current.style.transform = `translate(-50%, -50%) translate3d(${followerPosition.current.x}px, ${followerPosition.current.y}px, 0)`;
      }
      animationFrameId.current = requestAnimationFrame(animateFollower);
    };
    animationFrameId.current = requestAnimationFrame(animateFollower);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  // Smooth vertical-to-horizontal scroll
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const section = sectionRef.current;
    if (!scrollContainer || !section) return;

    let targetScrollLeft = 0;
    let currentScrollLeft = 0;
    
    const smoothScroll = () => {
        // If the difference is negligible, stop the animation
        if (Math.abs(targetScrollLeft - currentScrollLeft) < 0.5) {
            if(scrollAnimationId.current) cancelAnimationFrame(scrollAnimationId.current);
            scrollAnimationId.current = null;
            return;
        }
        // Lerp for smoothness (creates the delay effect)
        currentScrollLeft += (targetScrollLeft - currentScrollLeft) * 0.05;
        scrollContainer.scrollLeft = currentScrollLeft;
        scrollAnimationId.current = requestAnimationFrame(smoothScroll);
    };

    const handleScroll = () => {
      const sectionTop = section.offsetTop;
      const scrollY = window.scrollY;
      
      const scrollTriggerPoint = sectionTop - window.innerHeight * 0.8;
      const scrollProgress = Math.max(0, scrollY - scrollTriggerPoint);

      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      
      // Update the target position based on vertical scroll
      targetScrollLeft = Math.min(maxScroll, scrollProgress * 1.0);

      // If animation is not running, start it
      if (scrollAnimationId.current === null) {
        scrollAnimationId.current = requestAnimationFrame(smoothScroll);
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollAnimationId.current) {
        cancelAnimationFrame(scrollAnimationId.current);
      }
    };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const sectionRect = sectionRef.current?.getBoundingClientRect();
    if (!sectionRect) return;

    cursorPosition.current = {
      x: e.clientX - sectionRect.left,
      y: e.clientY - sectionRect.top,
    };
    
    let nearestCardIndex: number | null = null;
    let minDistance = 250; 

    cardRefs.current.forEach((card, index) => {
      if (card) {
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        const distance = Math.sqrt(Math.pow(e.clientX - cardCenterX, 2) + Math.pow(e.clientY - cardCenterY, 2));

        if (distance < minDistance) {
          minDistance = distance;
          nearestCardIndex = index;
        }
      }
    });

    setIsCursorNearCard(nearestCardIndex);
    
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsCursorNearCard(null);
  }, []);

  const handleCardHover = useCallback((index: number, isHovering: boolean) => {
    setActiveCard(isHovering ? index : null);
  }, []);

  return (
    <section 
      id="portfolio-preview" 
      ref={sectionRef} 
      className="py-20 lg:py-32 bg-[#0d091a] text-white relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <ScrollFadeIn>
          <h2 className="text-2xl md:text-3xl font-normal text-white font-inter">
            Enjoy some of our best work in <span className="text-primary">immersive web,</span> <span className="text-primary">augmented reality</span> and <span className="text-primary">virtual reality experiences</span>
          </h2>
        </ScrollFadeIn>
      </div>

       <div
          ref={followerRef}
          className={cn(
            "absolute w-28 h-28 rounded-full bg-primary flex items-center justify-center text-white text-sm font-semibold pointer-events-none z-20 transition-opacity duration-300 ease-out top-0 left-0",
            isCursorNearCard !== null ? "opacity-100 scale-100" : "opacity-0 scale-50"
          )}
          style={{
            filter: 'drop-shadow(0 0 15px hsl(var(--primary) / 0.8))',
          }}
        >
          Drag or click
        </div>

      <div 
        ref={scrollContainerRef} 
        className="w-full mt-16 overflow-x-hidden whitespace-nowrap scroll-smooth py-4 hide-scrollbar perspective-carousel"
      >
        <div className="inline-flex gap-x-8 px-8">
          {projects.map((project, index) => (
            <div 
              key={project.slug} 
              ref={el => { cardRefs.current[index] = el; }}
              className="inline-block w-[95vw] md:w-[60vw] lg:w-[45vw] xl:w-[35vw] relative group"
              onMouseEnter={() => handleCardHover(index, true)}
              onMouseLeave={() => handleCardHover(index, false)}
            >
              {/* Apply tilt and hover transform directly to the Link component */}
              <Link 
                href={`/portfolio/${project.slug}`} 
                className={cn(
                  "block h-full w-full transform transition-all duration-500 ease-out card-tilt"
                )}
              >
                <Card className={cn(
                  "overflow-hidden h-full rounded-3xl shadow-lg relative border-none bg-transparent",
                  activeCard === index && "shadow-primary-glow"
                )}>
                  <div className="aspect-[4/3] relative rounded-3xl overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={600}
                      height={450}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-3xl"
                      data-ai-hint={project.aiHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* The text container for animation, now placed correctly on top */}
                    <div className="absolute bottom-0 left-0 p-6 z-10 w-full">
                      <div className={cn("transition-all duration-500 ease-out", activeCard === index ? "translate-y-0 opacity-100" : "translate-y-full opacity-0")}>
                        <p className="text-sm text-gray-400 font-inter uppercase tracking-wide">
                             WEB • 360° PHOTOGRAPHY • 360° VIDEO • 3D
                        </p>
                        <h3 className="font-bold text-2xl md:text-3xl text-white mt-1 font-inter">{project.title}</h3>
                        <p className="text-lg text-white/70 font-inter">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <ScrollFadeIn>
          <Button 
            size="lg" 
            asChild
            className="rounded-full px-8 py-6 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-colors"
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
