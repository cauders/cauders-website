
"use client";

import { getServices } from "@/lib/data";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef, useState, useEffect } from "react";

export default function ServicesPreview() {
  const services = getServices();
  const containerRef = useRef<HTMLDivElement>(null);
  const [titleTransform, setTitleTransform] = useState('translateY(100%)');
  const [subtitleTransform, setSubtitleTransform] = useState('translateY(100%)');
  const [cardTransforms, setCardTransforms] = useState(services.map(() => 'rotateY(-90deg)'));

  const scrollHandler = () => {
    if (!containerRef.current) return;

    const { top, height } = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // --- Title Animation ---
    const titleAnimationStart = windowHeight * 0.8;
    const titleAnimationEnd = windowHeight * 0.4;
    const titleScrollDist = titleAnimationStart - titleAnimationEnd;
    const titleProgress = Math.max(0, Math.min(1, (titleAnimationStart - top) / titleScrollDist));

    const titleY = 100 - (titleProgress * 100);
    setTitleTransform(`translateY(${titleY}%)`);

    const subtitleProgress = Math.max(0, Math.min(1, (titleProgress - 0.2) * 1.2));
    const subtitleY = 100 - (subtitleProgress * 100);
    setSubtitleTransform(`translateY(${subtitleY}%)`);


    // --- Cards Animation ---
    if (titleProgress >= 1) {
      const cardsAnimationStart = top - windowHeight * 0.1;
      const cardsAnimationEnd = top + height - windowHeight;
      const cardsScrollDist = Math.abs(cardsAnimationEnd - cardsAnimationStart);
      
      const newCardTransforms = services.map((_, index) => {
        const cardStartOffset = (windowHeight * 0.6) * index;
        const cardProgress = Math.max(0, Math.min(1, (-(top - windowHeight * 0.8) - cardStartOffset) / 400));
        
        const rotation = -90 + (cardProgress * 90);
        return `rotateY(${rotation}deg)`;
      });
      setCardTransforms(newCardTransforms);
    } else {
       // Reset cards if scrolling back up before title is fully visible
       setCardTransforms(services.map(() => 'rotateY(-90deg)'));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, { passive: true });
    scrollHandler();
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <section id="services-preview" ref={containerRef} className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="overflow-hidden py-2">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-foreground transition-transform duration-300 ease-out"
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
    </section>
  );
}
