
"use client";

import { getServices } from "@/lib/data";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef, useState, useEffect, useCallback } from "react";
import StandardizedHeading from "./StandardizedHeading";
import ScrollFadeIn from "./ScrollFadeIn";

export default function ServicesPreview() {
  const services = getServices(); // Get all services
  
  // --- Mobile-specific render ---
  const MobileView = () => (
    <section id="services-preview-mobile" className="lg:hidden bg-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <StandardizedHeading lines={["What We Offer"]} className="text-4xl sm:text-5xl md:text-6xl" />
            <p className="mt-4 text-base md:text-xl text-foreground/70 max-w-2xl mx-auto">
                Our expertise spans the entire development lifecycle, delivering excellence at every step. From initial strategy and design to development, deployment, and ongoing support, we provide comprehensive solutions that drive results.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16">
                {services.map((service, index) => (
                    <ScrollFadeIn key={service.slug} delay={index * 100}>
                         <Link href={`/services/${service.slug}`} className="block h-full">
                            <Card className="h-full text-center flex flex-col bg-card border hover:border-primary hover:-translate-y-1 transition-transform duration-300 min-h-[200px]">
                                <CardHeader className="p-6 flex-grow flex flex-col items-center justify-center">
                                    <CardTitle className="text-xl text-foreground font-headline">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-foreground/80 line-clamp-3">
                                        {service.description}
                                    </p>
                                </CardContent>
                                <div className="p-6 pt-0">
                                    <Button variant="link">
                                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </Card>
                        </Link>
                    </ScrollFadeIn>
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
    </section>
  );

  // --- Desktop-specific render with scroll animations ---
  const DesktopView = () => {
    const desktopServices = getServices().slice(0, 4); // Keep desktop to 4 services for the flip animation layout
    const containerRef = useRef<HTMLDivElement>(null);
    const [subtitleTransform, setSubtitleTransform] = useState('translateY(101%)');
    const [cardStyles, setCardStyles] = useState(desktopServices.map(() => ({ opacity: 0, transform: 'translateY(40px)' })));
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const scrollHandler = useCallback(() => {
      if (!containerRef.current) return;
    
      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrollableHeight = height - window.innerHeight;
      
      if (scrollableHeight <= 0) {
        setSubtitleTransform('translateY(0%)');
        setCardStyles(desktopServices.map(() => ({ opacity: 1, transform: 'translateY(0px)' })));
        return;
      }
    
      const currentProgress = Math.max(0, Math.min(1, -top / scrollableHeight));
    
      const subtitleProgress = Math.max(0, Math.min(1, currentProgress * 5));
      const subtitleY = 101 - (subtitleProgress * 101);
      setSubtitleTransform(`translateY(${subtitleY}%)`);
    
      const cardsStartProgress = 0.15;
      const totalCardsProgress = 0.8;
      const progressPerCard = totalCardsProgress / desktopServices.length;
    
      const newCardStyles = desktopServices.map((_, index) => {
        const cardStart = cardsStartProgress + (index * progressPerCard);
        const cardProgress = Math.max(0, Math.min(1, (currentProgress - cardStart) / (progressPerCard * 0.75)));
        
        const opacity = cardProgress;
        const translateY = 40 * (1 - cardProgress);
    
        return {
            opacity: opacity,
            transform: `translateY(${translateY}px)`
        };
      });
      setCardStyles(newCardStyles);
    }, [desktopServices.length]);

    useEffect(() => {
      window.addEventListener('scroll', scrollHandler, { passive: true });
      scrollHandler();
      
      return () => {
        window.removeEventListener('scroll', scrollHandler);
      }
    }, [scrollHandler]);

    return (
      <section id="services-preview-desktop" ref={containerRef} className="relative hidden lg:block h-[250vh] bg-background">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <StandardizedHeading lines={["What We Offer"]} className="mt-16 text-4xl sm:text-5xl md:text-6xl" />
              <div className="overflow-hidden py-1">
              <p
                  className="mt-4 text-base md:text-xl text-foreground/70 max-w-2xl mx-auto transition-transform duration-300 ease-out"
                  style={{ transform: subtitleTransform, transitionDelay: '50ms' }}
              >
                  Our expertise spans the entire development lifecycle, delivering excellence at every step. From initial strategy and design to development, deployment, and ongoing support, we provide comprehensive solutions that drive results.
              </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-16">
              {desktopServices.map((service, index) => (
                  <div
                      key={service.slug}
                      className="h-full"
                      style={{
                          ...cardStyles[index],
                          transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
                      }}
                  >
                  <Link href={`/services/${service.slug}`} className="block h-full">
                    <div 
                        className={cn("flip-card h-full min-h-[300px] md:min-h-[320px]")}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div className={cn("flip-card-inner relative w-full h-full", hoveredCard === index && "is-flipped")}>
                        {/* Front of the card */}
                        <div className="flip-card-front absolute w-full h-full">
                            <div className="relative w-full h-full rounded-lg overflow-hidden bg-foreground">
                                <div className="absolute top-[-80px] left-[-80px] w-48 h-48 bg-primary/30 rounded-full blur-3xl opacity-50"></div>
                                <div className="absolute bottom-[-80px] right-[-80px] w-48 h-48 bg-primary/30 rounded-full blur-3xl opacity-50"></div>
                                <Card className="h-full text-center flex flex-col bg-card/80 border-0 relative z-10 glass-effect">
                                    <CardHeader className="p-8 flex-grow flex flex-col items-center justify-center">
                                        <CardTitle className="text-xl md:text-2xl text-background font-headline">{service.title}</CardTitle>
                                    </CardHeader>
                                </Card>
                            </div>
                        </div>
                        {/* Back of the card */}
                        <div className="flip-card-back absolute w-full h-full">
                            <Card className={cn("h-full flex flex-col justify-between animated-border-card bg-card border")}>
                            <CardHeader>
                                <CardTitle className="text-xl md:text-2xl text-foreground font-headline">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-left text-xs">
                                {service.included.slice(0, 3).map((item, i) => (
                                    <li key={i} className="flex items-start">
                                    <ArrowRight className="w-4 h-4 text-primary mr-2 mt-0.5 shrink-0" />
                                    <span className="text-foreground/80">{item}</span>
                                    </li>
                                ))}
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button asChild className="w-full">
                                  <div>
                                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                  </div>
                                </Button>
                            </div>
                            </Card>
                        </div>
                        </div>
                    </div>
                  </Link>
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

  return (
    <>
      <MobileView />
      <DesktopView />
    </>
  );
}
