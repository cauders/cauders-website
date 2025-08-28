
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

const CARD_ANGLE = 45; // Angle between each card in the carousel
const TILT_AMOUNT = 5; // How much the card tilts on hover

export default function PortfolioPreview() {
  const projects = getProjects().slice(0, 5);
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselWrapRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  // Refs for animation and dragging
  const cursorPosition = useRef({ x: 0, y: 0 });
  const followerPosition = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startRotateY = useRef(0);
  const currentRotateY = useRef(0);
  const targetRotateY = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  const carouselRadius = 800 / (2 * Math.tan(Math.PI / projects.length));

  // Main animation loop for smoothing transforms
  useEffect(() => {
    const animate = () => {
      // Animate cursor follower
      if (followerRef.current) {
        followerPosition.current.x += (cursorPosition.current.x - followerPosition.current.x) * 0.1;
        followerPosition.current.y += (cursorPosition.current.y - followerPosition.current.y) * 0.1;
        followerRef.current.style.transform = `translate(-50%, -50%) translate3d(${followerPosition.current.x}px, ${followerPosition.current.y}px, 0)`;
      }

      // Animate carousel rotation
      if (carouselWrapRef.current) {
        currentRotateY.current += (targetRotateY.current - currentRotateY.current) * 0.05;
        carouselWrapRef.current.style.transform = `translateZ(-${carouselRadius}px) rotateY(${currentRotateY.current}deg)`;
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
      if (isDragging.current || !sectionRef.current) return;
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, -sectionRect.top / (sectionRect.height - window.innerHeight));
      
      const rotation = scrollProgress * 180;
      targetRotateY.current = rotation;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const sectionRect = sectionRef.current?.getBoundingClientRect();
    if (!sectionRect) return;

    cursorPosition.current = { x: e.clientX, y: e.clientY };

    if (isDragging.current) {
      const walk = (e.pageX - startX.current) * 0.5; // Drag sensitivity
      targetRotateY.current = startRotateY.current + walk;
    }
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
  }, []);

  return (
    <section
      id="portfolio-preview"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-background relative min-h-[100vh]"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn className="text-center md:text-left mb-16">
          <h2 className="text-2xl md:text-3xl font-normal text-foreground font-inter">
            Enjoy some of our best work in{" "}
            <span className="text-primary">immersive web,</span>{" "}
            <span className="text-primary">augmented reality</span> and{" "}
            <span className="text-primary">virtual reality experiences</span>
          </h2>
        </ScrollFadeIn>
      </div>

      <div
        ref={followerRef}
        className={cn(
          "fixed w-28 h-28 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold pointer-events-none z-20 transition-opacity duration-300 ease-out top-0 left-0",
          isDragging.current ? "opacity-100 scale-100" : "opacity-0 scale-50"
        )}
        style={{ filter: "drop-shadow(0 0 15px hsl(var(--primary) / 0.8))" }}
      >
        Drag
      </div>

      {/* 3D Carousel Area */}
      <div className="h-[60vh] mt-16 perspective-carousel">
        <div ref={carouselWrapRef} className="relative w-full h-full carousel-wrap">
          {projects.map((project, index) => {
            const cardRotation = index * CARD_ANGLE;
            return (
              <div
                key={project.slug}
                className="absolute w-[95vw] md:w-[60vw] lg:w-[45vw] xl:w-[35vw] h-full group top-0 left-0 right-0 mx-auto"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                style={{
                  transform: `rotateY(${cardRotation}deg) translateZ(${carouselRadius}px)`,
                }}
              >
                <Link
                  href={`/portfolio/${project.slug}`}
                  className={cn(
                    "block h-full w-full transition-all duration-500 ease-out rounded-3xl",
                    activeCard === index && "shadow-primary-glow"
                  )}
                  draggable={false}
                >
                  <Card className="h-full w-full bg-card overflow-hidden rounded-3xl shadow-lg">
                    <div className="w-full h-full relative overflow-hidden rounded-3xl transition-transform duration-500 group-hover:scale-105">
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
            );
          })}
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
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
    </section>
  );
}
