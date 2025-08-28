"use client";

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

  // Refs for dragging functionality
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  // Animation loop for the cursor follower
  useEffect(() => {
    const animateFollower = () => {
      if (followerRef.current) {
        // Interpolate position for smooth delay
        followerPosition.current.x +=
          (cursorPosition.current.x - followerPosition.current.x) * 0.02;
        followerPosition.current.y +=
          (cursorPosition.current.y - followerPosition.current.y) * 0.02;

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
      // If not dragging, perform the smooth scroll
      if (!isDragging.current) {
        // If the difference is negligible, stop the animation
        if (Math.abs(targetScrollLeft - currentScrollLeft) < 0.5) {
          if (scrollAnimationId.current)
            cancelAnimationFrame(scrollAnimationId.current);
          scrollAnimationId.current = null;
          return;
        }
        // Lerp for smoothness (creates the delay effect)
        currentScrollLeft += (targetScrollLeft - currentScrollLeft) * 0.02;
        scrollContainer.scrollLeft = currentScrollLeft;
      }
      scrollAnimationId.current = requestAnimationFrame(smoothScroll);
    };

    const handleScroll = () => {
      const sectionTop = section.offsetTop;
      const scrollY = window.scrollY;

      const scrollTriggerPoint = sectionTop - window.innerHeight * 0.8;
      const scrollProgress = Math.max(0, scrollY - scrollTriggerPoint);

      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

      // Update the target position based on vertical scroll
      targetScrollLeft = Math.min(maxScroll, scrollProgress * 0.4);

      // Update current scroll left for the animation loop
      currentScrollLeft = scrollContainer.scrollLeft;

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

    // Dragging logic
    if (isDragging.current && scrollContainerRef.current) {
      e.preventDefault();
      const x = e.pageX - (scrollContainerRef.current.offsetParent as HTMLElement)?.offsetLeft;
      const walk = (x - startX.current) * 2; // The multiplier increases drag speed
      scrollContainerRef.current.scrollLeft = scrollLeftStart.current - walk;
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

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsCursorNearCard(null);
    isDragging.current = false;
  }, []);

  const handleCardHover = useCallback((index: number, isHovering: boolean) => {
    setActiveCard(isHovering ? index : null);
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - (scrollContainerRef.current.offsetParent as HTMLElement)?.offsetLeft;
    scrollLeftStart.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = false;
  };

  return (
    <section
      id="portfolio-preview"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-background relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* All content is now within this single container */}

        {/* Heading */}
        <ScrollFadeIn className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-normal text-foreground font-inter">
            Enjoy some of our best work in{" "}
            <span className="text-primary">immersive web,</span>{" "}
            <span className="text-primary">augmented reality</span> and{" "}
            <span className="text-primary">virtual reality experiences</span>
          </h2>
        </ScrollFadeIn>

        {/* Cursor Follower (moved out of the main container for absolute positioning) */}
        <div
          ref={followerRef}
          className={cn(
            "absolute w-28 h-28 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold pointer-events-none z-20 transition-opacity duration-300 ease-out top-0 left-0",
            isCursorNearCard !== null && !isDragging.current
              ? "opacity-100 scale-100"
              : "opacity-0 scale-50"
          )}
          style={{
            filter: "drop-shadow(0 0 15px hsl(var(--primary) / 0.8))",
          }}
        >
          Drag or click
        </div>

        {/* Carousel */}
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "w-full mt-16 whitespace-nowrap scroll-smooth py-4 hide-scrollbar perspective-carousel",
            isDragging.current ? "cursor-grabbing" : "cursor-grab"
          )}
        >
          <div className="inline-flex gap-x-8 px-8">
            {projects.map((project, index) => (
              <div
                key={project.slug}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="inline-block w-[95vw] md:w-[60vw] lg:w-[45vw] xl:w-[35vw] relative group"
                onMouseEnter={() => handleCardHover(index, true)}
                onMouseLeave={() => handleCardHover(index, false)}
              >
                <Link
                  href={`/portfolio/${project.slug}`}
                  className={cn(
                    "block h-full w-full transform transition-all duration-500 ease-out card-tilt",
                    activeCard === index && "shadow-primary-glow"
                  )}
                  draggable={false}
                >
                  <Card className="h-full w-full bg-card border-none overflow-visible rounded-3xl shadow-lg">
                    <div className="aspect-[4/3] relative overflow-hidden rounded-3xl transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        width={600}
                        height={450}
                        className="w-full h-full object-cover pointer-events-none"
                        data-ai-hint={project.aiHint}
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                      <div className="absolute bottom-0 left-0 p-6 z-10 w-full">
                        <div
                          className={cn(
                            "transition-all duration-500 ease-out",
                            activeCard === index
                              ? "translate-y-0 opacity-100"
                              : "translate-y-full opacity-0"
                          )}
                        >
                          <p className="text-sm text-muted uppercase tracking-wide">
                            WEB • 360° PHOTOGRAPHY • 360° VIDEO • 3D
                          </p>
                          <h3 className="font-bold text-2xl md:text-3xl text-white mt-1 font-inter">
                            {project.title}
                          </h3>
                          <p className="text-lg text-white/70 font-inter">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="mt-16">
          <ScrollFadeIn>
            <Button
              size="lg"
              asChild
              className="rounded-full px-8 py-6 bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              <Link href="/portfolio">
                Discover more of our work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
