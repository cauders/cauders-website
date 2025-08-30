
"use client"

import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { getServices } from "@/lib/data";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrollFadeIn from "./ScrollFadeIn";
import { ArrowRight, CheckCircle } from "lucide-react";

const textLines = [
  { text: "WE ENGINEER", direction: "left" },
  { text: "HIGH-PERFORMANCE,", className: "text-primary", direction: "right" },
  { text: "CUTTING-EDGE PLATFORMS", className: "text-primary", direction: "left" },
  { text: "THAT EMPOWER BUSINESSES TO", direction: "right" },
  { text: "DOMINATE THE DIGITAL LANDSCAPE.", direction: "left" },
];

const StickyScrollText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transforms, setTransforms] = useState<string[]>(
    textLines.map(line => line.direction === 'left' ? 'translateX(-100%)' : 'translateX(100%)')
  );

  const services = getServices();

  const scrollHandler = () => {
    if (!containerRef.current) return;

    const { top, height } = containerRef.current.getBoundingClientRect();
    const scrollableHeight = height - window.innerHeight;
    
    const progress = Math.max(0, Math.min(1, -top / scrollableHeight));

    const numLines = textLines.length;
    const progressPerLine = 1 / numLines;

    const newTransforms = textLines.map((line, index) => {
      const lineStartProgress = index * progressPerLine;
      const lineEndProgress = (index + 1) * progressPerLine;

      const lineProgress = Math.max(0, Math.min(1, (progress - lineStartProgress) / (lineEndProgress - lineStartProgress)));
      
      let x = 0;
      if (line.direction === 'left') {
        x = -100 + (lineProgress * 100);
      } else {
        x = 100 - (lineProgress * 100);
      }
      
      return `translateX(${x}%)`;
    });
    
    setTransforms(newTransforms);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, { passive: true });
    scrollHandler(); 
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <div ref={containerRef} id="services-preview" className="relative h-[200vh] bg-background">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden z-10">
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
      <div className="absolute bottom-0 left-0 right-0 py-20 lg:py-32">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
                <ScrollFadeIn
                key={service.slug}
                className="h-full"
                >
                <div className="flip-card h-full min-h-[300px] md:min-h-[320px]">
                    <div className="flip-card-inner relative w-full h-full">
                    {/* Front of the card */}
                    <div className="flip-card-front absolute w-full h-full">
                        <Card className="h-full text-center bg-card flex flex-col">
                        <CardHeader className="p-8 flex-grow">
                            <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                            <service.icon className="w-8 h-8 text-primary" />
                            </div>
                            <CardTitle className="text-foreground">{service.title}</CardTitle>
                            <CardDescription className="pt-2 text-foreground/80 line-clamp-3">{service.description}</CardDescription>
                        </CardHeader>
                        </Card>
                    </div>
                    {/* Back of the card */}
                    <div className="flip-card-back absolute w-full h-full">
                        <Card className={cn("h-full bg-card flex flex-col justify-between animated-border-card")}>
                        <CardHeader>
                            <CardTitle className="text-foreground">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-left">
                            {service.included.slice(0, 3).map((item, i) => (
                                <li key={i} className="flex items-start text-sm">
                                <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 shrink-0" />
                                <span className="text-foreground/80">{item}</span>
                                </li>
                            ))}
                            </ul>
                        </CardContent>
                        <div className="p-6 pt-0">
                            <Button asChild className="w-full">
                            <Link href={`/services/${service.slug}`}>
                                Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                            </Button>
                        </div>
                        </Card>
                    </div>
                    </div>
                </div>
                </ScrollFadeIn>
            ))}
            </div>
            
            <ScrollFadeIn className="text-center mt-16">
            <Button size="lg" asChild>
                <Link href="/services">
                Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
            </ScrollFadeIn>
        </div>
      </div>
    </div>
  );
};

export default StickyScrollText;
