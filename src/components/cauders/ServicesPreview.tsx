

"use client";

import { getServices } from "@/lib/data";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef, useState, useEffect, useCallback, Suspense } from "react";
import { Skeleton } from "../ui/skeleton";

export default function ServicesPreview() {
  const services = getServices().slice(0, 4); // Get top 4 services
  const containerRef = useRef<HTMLDivElement>(null);
  const [titleTransform, setTitleTransform] = useState('translateY(101%)');
  const [subtitleTransform, setSubtitleTransform] = useState('translateY(101%)');
  const [cardTransforms, setCardTransforms] = useState(services.map(() => 'rotateY(-90deg)'));
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const scrollHandler = useCallback(() => {
    if (!containerRef.current) return;

    const { top, height } = containerRef.current.getBoundingClientRect();
    const scrollableHeight = height - window.innerHeight;
    
    const currentProgress = Math.max(0, Math.min(1, -top / scrollableHeight));

    // --- Text Animation ---
    const titleProgress = Math.max(0, Math.min(1, currentProgress * 4));
    const titleY = 101 - (titleProgress * 101);
    setTitleTransform(`translateY(${titleY}%)`);

    const subtitleProgress = Math.max(0, Math.min(1, (currentProgress - 0.1) * 4));
    const subtitleY = 101 - (subtitleProgress * 101);
    setSubtitleTransform(`translateY(${subtitleY}%)`);

    // --- Cards Animation ---
    const cardsStartProgress = 0.25;
    const totalCardsProgress = 1 - cardsStartProgress;
    const progressPerCard = totalCardsProgress / services.length;

    const newCardTransforms = services.map((_, index) => {
        const cardStart = cardsStartProgress + (index * progressPerCard);
        const cardProgress = Math.max(0, Math.min(1, (currentProgress - cardStart) / progressPerCard));
        const rotation = -90 + (cardProgress * 90);
        return `rotateY(${rotation}deg)`;
    });
    setCardTransforms(newCardTransforms);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, { passive: true });
    scrollHandler(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    }
  }, [scrollHandler]);

  return (
    <section id="services-preview" ref={containerRef} className="relative h-[400vh] bg-background">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="overflow-hidden py-2">
            <h2
                className="text-5xl md:text-7xl font-extrabold text-foreground transition-transform duration-300 ease-out font-headline"
                style={{ transform: titleTransform }}
            >
                What We Offer
            </h2>
            </div>
            <div className="overflow-hidden py-1">
            <p
                className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto transition-transform duration-300 ease-out"
                style={{ transform: subtitleTransform, transitionDelay: '50ms' }}
            >
                Our expertise spans the entire development lifecycle, delivering excellence at every step.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {services.map((service, index) => (
                <div
                    key={service.slug}
                    className="h-full"
                    style={{
                        perspective: '1000px',
                        transition: 'transform 0.5s ease-out',
                        transformStyle: 'preserve-3d',
                        transform: cardTransforms[index],
                    }}
                >
                <div 
                    className={cn("flip-card h-full min-h-[300px] md:min-h-[320px]")}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <div className={cn("flip-card-inner relative w-full h-full", hoveredCard === index && "is-flipped")}>
                    {/* Front of the card */}
                    <div className="flip-card-front absolute w-full h-full">
                        <Card className="h-full text-center flex flex-col bg-card border">
                            <CardHeader className="p-8 flex-grow">
                                <div className="mx-auto w-24 h-24 mb-4 flex items-center justify-center">
                                    <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto">
                                        <service.icon className="w-8 h-8 text-primary" />
                                    </div>
                                </div>
                                <CardTitle className="text-foreground">{service.title}</CardTitle>
                                <CardDescription className="pt-2 text-foreground/80 line-clamp-3">{service.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                    {/* Back of the card */}
                    <div className="flip-card-back absolute w-full h-full">
                        <Card className={cn("h-full flex flex-col justify-between animated-border-card bg-card border")}>
                        <CardHeader>
                            <CardTitle className="text-foreground">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-left">
                            {service.included.slice(0, 3).map((item, i) => (
                                <li key={i} className="flex items-start text-sm">
                                <ArrowRight className="w-4 h-4 text-primary mr-2 mt-0.5 shrink-0" />
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
                </div>
            ))}
            </div>
            
            <div className="text-center mt-16">
            <Button size="lg" asChild>
                <Link href="/services">
                Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
