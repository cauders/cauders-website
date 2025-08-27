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
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorNearCard, setIsCursorNearCard] = useState<number | null>(null);
  const animationFrameId = useRef<number | null>(null);

  // Smooth vertical-to-horizontal scroll
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const section = sectionRef.current;
    if (!scrollContainer || !section) return;

    let targetScrollLeft = 0;
    let currentScrollLeft = 0;
    
    const smoothScroll = () => {
        if (Math.abs(targetScrollLeft - currentScrollLeft) < 0.5) {
            if(animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
            animationFrameId.current = null;
            return;
        }
        currentScrollLeft += (targetScrollLeft - currentScrollLeft) * 0.05;
        scrollContainer.scrollLeft = currentScrollLeft;
        animationFrameId.current = requestAnimationFrame(smoothScroll);
    };

    const handleScroll = () => {
      const sectionTop = section.offsetTop;
      const scrollY = window.scrollY;
      
      const scrollTriggerPoint = sectionTop - window.innerHeight * 0.8;
      const scrollProgress = Math.max(0, scrollY - scrollTriggerPoint);

      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      
      targetScrollLeft = Math.min(maxScroll, scrollProgress * 0.4);

      if (animationFrameId.current === null) {
        animationFrameId.current = requestAnimationFrame(smoothScroll);
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  // Track cursor position across the entire section
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const sectionRect = sectionRef.current?.getBoundingClientRect();
    if (!sectionRect) return;

    const newX = e.clientX - sectionRect.left;
    const newY = e.clientY - sectionRect.top;

    setCursorPosition(prevPos => ({
      x: prevPos.x + (newX - prevPos.x) * 0.02,
      y: prevPos.y + (newY - prevPos.y) * 0.02,
    }));

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
          className={cn(
            "absolute w-28 h-28 rounded-full bg-primary flex items-center justify-center text-white text-sm font-semibold pointer-events-none z-20 transition-opacity duration-300",
            isCursorNearCard !== null ? "opacity-100" : "opacity-0"
          )}
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: `translate(-50%, -50%)`,
            filter: 'drop-shadow(0 0 15px hsl(var(--primary) / 0.8))',
          }}
        >
          Drag or click
        </div>

      <div 
        ref={scrollContainerRef} 
        className="w-full mt-16 overflow-x-hidden whitespace-nowrap scroll-smooth py-4 hide-scrollbar"
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
              <Link href={`/portfolio/${project.slug}`} className="block h-full w-full">
                <Card className={cn(
                  "overflow-visible h-full transition-all duration-500 rounded-3xl shadow-lg relative border-none bg-transparent",
                  activeCard === index && "shadow-primary-glow"
                )}>
                  <div className="aspect-[4/3] overflow-hidden relative rounded-3xl">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={600}
                      height={450}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={project.aiHint}
                    />
                  </div>
                </Card>
              </Link>
              <div className="mt-4 pl-2 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-lg text-white/70">{project.description}</p>
                  <h3 className="font-bold text-3xl text-white mt-1">{project.title}</h3>
              </div>
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
