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

  // Smooth vertical-to-horizontal scroll
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current && sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const scrollY = window.scrollY;
        
        // Start the horizontal scroll slightly before entering the section
        const scrollTriggerPoint = sectionTop - window.innerHeight / 2;
        const scrollProgress = Math.max(0, scrollY - scrollTriggerPoint);

        const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
        
        // Apply a small damping factor for a slow, smooth scroll
        const scrollAmount = Math.min(maxScroll, scrollProgress * 0.4); 
        
        scrollContainerRef.current.scrollLeft = scrollAmount;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track cursor position across the entire section
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const sectionRect = sectionRef.current?.getBoundingClientRect();
    if (!sectionRect) return;

    // Smooth the cursor movement by a damping factor
    const newX = e.clientX - sectionRect.left;
    const newY = e.clientY - sectionRect.top;

    setCursorPosition(prevPos => ({
      x: prevPos.x + (newX - prevPos.x) * 0.1,
      y: prevPos.y + (newY - prevPos.y) * 0.1,
    }));

    // Find the nearest card to show the cursor
    let nearestCardIndex: number | null = null;
    let minDistance = 200; // Increased interaction area radius

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

  // Handle proper hover state for text animation
  const handleCardHover = useCallback((index: number, isHovering: boolean) => {
    setActiveCard(isHovering ? index : null);
  }, []);

  return (
    <section 
      id="portfolio-preview" 
      ref={sectionRef} 
      className="py-20 lg:py-32 bg-[#0d091a] relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsCursorNearCard(null)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <ScrollFadeIn>
          <h2 className="text-2xl md:text-3xl font-normal text-white font-inter">
            Enjoy some of our best work in <span className="text-[#a394f8]">immersive web,</span> <span className="text-[#a394f8]">augmented reality</span> and <span className="text-[#a394f8]">virtual reality experiences</span>
          </h2>
        </ScrollFadeIn>
      </div>

      <div 
        ref={scrollContainerRef} 
        className="w-full mt-16 overflow-x-hidden whitespace-nowrap scroll-smooth py-4"
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
                <Card className="overflow-hidden h-full transition-all duration-500 rounded-3xl shadow-lg relative border-none">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={600}
                      height={450}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={project.aiHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* The text container for animation */}
                    <div className="absolute bottom-0 left-0 p-6 z-10 overflow-hidden">
                      <div className={cn("transition-transform duration-500 ease-out", activeCard === index ? "translate-y-0" : "translate-y-full")}>
                        <p className="text-white text-base font-inter opacity-70 mb-1">{project.description}</p>
                        <h3 className="font-bold text-xl text-white font-inter">{project.title}</h3>
                      </div>
                    </div>
                    
                    {/* Custom hover cursor circle with smoother animation */}
                    <div
                      className={cn("absolute w-24 h-24 rounded-full bg-[#a394f8] flex items-center justify-center text-white text-sm font-semibold pointer-events-none z-20 transition-all duration-300 ease-out", isCursorNearCard === index ? "opacity-100" : "opacity-0")}
                      style={{
                        left: `${cursorPosition.x}px`,
                        top: `${cursorPosition.y}px`,
                        transform: `translate(-50%, -50%)`,
                      }}
                    >
                      Drag or click
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
