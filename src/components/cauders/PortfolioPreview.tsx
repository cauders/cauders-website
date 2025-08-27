
"use client"

import { getProjects } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrollFadeIn from "./ScrollFadeIn";
import { ArrowRight } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";


export default function PortfolioPreview() {
  const projects = getProjects().slice(0, 5);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Handle the vertical-to-horizontal scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current && sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const scrollY = window.scrollY;
        
        // Calculate the horizontal scroll based on vertical scroll
        const scrollAmount = Math.max(0, scrollY - sectionTop);
        scrollContainerRef.current.scrollLeft = scrollAmount;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle the custom cursor movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cardRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;
    setCursorPosition({ x, y });
  };

  return (
    <section 
      id="portfolio-preview" 
      ref={sectionRef} 
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <ScrollFadeIn>
          <h2 className="text-2xl md:text-3xl font-normal text-black font-inter">
            Enjoy some of our best work in <span className="text-[#a394f8]">immersive web,</span> <span className="text-[#a394f8]">augmented reality</span> and <span className="text-[#a394f8]">virtual reality experiences</span>
          </h2>
        </ScrollFadeIn>
      </div>

      {/* Main horizontal scroll container */}
      <div 
        ref={scrollContainerRef} 
        className="w-full mt-16 overflow-x-hidden whitespace-nowrap scroll-smooth py-4"
      >
        <div className="inline-flex gap-x-8 px-8">
          {projects.map((project, index) => (
            <div 
              key={project.slug} 
              className="inline-block w-[90vw] md:w-[50vw] lg:w-[30vw] xl:w-[25vw] relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onMouseMove={handleMouseMove}
            >
              <Link href={`/portfolio/${project.slug}`} className="block h-full w-full group">
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
                    <div className="absolute bottom-0 left-0 p-6 z-10">
                      <p className="text-white text-base font-inter opacity-70 mb-1">{project.description}</p>
                      <h3 className="font-bold text-xl text-white font-inter">{project.title}</h3>
                    </div>
                    {/* Custom hover cursor circle */}
                    {hoveredCard === index && (
                      <div
                        className="absolute w-24 h-24 rounded-full bg-[#a394f8] flex items-center justify-center text-white text-sm font-semibold pointer-events-none transition-transform duration-100 ease-out z-20"
                        style={{
                          left: `${cursorPosition.x}px`,
                          top: `${cursorPosition.y}px`,
                          transform: `translate(-50%, -50%)`,
                        }}
                      >
                        Drag or click
                      </div>
                    )}
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
            className="rounded-full px-8 py-6 bg-transparent border-2 border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white transition-colors"
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
