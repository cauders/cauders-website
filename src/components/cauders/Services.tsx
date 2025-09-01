
'use client';

import { getServices } from '@/lib/data';
import Link from 'next/link';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight, CheckCircle } from 'lucide-react';
import ScrollFadeIn from './ScrollFadeIn';
import { Card, CardTitle, CardContent } from '../ui/card';
import { useRef } from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import Image from 'next/image';

const whyChooseUs = [
  'Future-ready digital solutions',
  'Industry-focused expertise',
  'Secure, scalable, and user-driven approach'
];


const ServiceSection = ({ service, index }: { service: ReturnType<typeof getServices>[0], index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const progress = useScrollProgress(ref);

    const isEven = index % 2 === 0;

    // The animation will now complete when progress is 1 and stay that way.
    const easedProgress = progress; // Can apply an easing function here if desired

    const cardScale = 0.9 + easedProgress * 0.1;
    const cardOpacity = easedProgress;
    
    return (
        <div ref={ref} className="h-[90vh] relative">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <ScrollFadeIn direction={isEven ? 'left' : 'right'} className={cn("flex flex-col justify-center", isEven ? 'md:order-1' : 'md:order-2')}>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-headline">{service.title}</h2>
                            <p className="text-lg text-foreground/80 mb-6">{service.description}</p>
                            <ul className="space-y-3">
                                {service.included.slice(0, 3).map((item) => (
                                    <li key={item} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                                        <span className="text-foreground/80">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </ScrollFadeIn>
                        <div
                             style={{
                                opacity: cardOpacity,
                                transform: `scale(${cardScale})`,
                             }}
                             className={cn("flex items-center justify-center", isEven ? 'md:order-2' : 'md:order-1')}
                        >
                           <div className="flip-card h-[400px] w-full max-w-sm">
                              <div className="flip-card-inner relative w-full h-full">
                                  {/* Front of the card */}
                                  <div className="flip-card-front absolute w-full h-full">
                                      <Card className="h-full bg-card border shadow-lg overflow-hidden">
                                        {service.caseStudy?.imageUrl && (
                                            <div className="relative w-full h-full">
                                                <Image 
                                                    src={service.caseStudy.imageUrl} 
                                                    alt={service.title} 
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        )}
                                      </Card>
                                  </div>
                                  {/* Back of the card */}
                                  <div className="flip-card-back absolute w-full h-full">
                                    <div className="relative w-full h-full bg-foreground/90 rounded-lg overflow-hidden">
                                      <div className="absolute top-[-80px] left-[-80px] w-64 h-64 bg-primary/30 rounded-full blur-3xl opacity-80"></div>
                                      <div className="absolute bottom-[-80px] right-[-80px] w-64 h-64 bg-primary/30 rounded-full blur-3xl opacity-80"></div>
                                      <Card className={cn("relative z-10 h-full flex flex-col justify-between items-center text-center glass-effect animated-border-card border-border/20 p-6")}>
                                          <CardTitle className="text-background text-3xl">{service.title}</CardTitle>
                                          <div className="w-full">
                                            <Button asChild className="button w-full">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const easeOutCubic = (x: number): number => 1 - Math.pow(1 - x, 3);

const AnimatedHeroText = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const progress = useScrollProgress(sectionRef);
    const easedProgress = easeOutCubic(progress);

    const titleOpacity = Math.min(1, easedProgress * 2);
    const titleTranslateY = (1 - easedProgress) * 50;

    const descriptionOpacity = Math.min(1, Math.max(0, (easedProgress - 0.2) * 2));
    const descriptionTranslateY = (1 - easeOutCubic(Math.max(0, Math.min(1, (progress - 0.2) * 2)))) * 50;


    return (
        <div ref={sectionRef} className="h-[100vh] relative text-center flex flex-col justify-center">
            <div className="sticky top-1/2 -translate-y-1/2">
                <ScrollFadeIn>
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground font-headline">Our Services</h1>
                    <p className="mt-6 text-lg text-foreground/70 max-w-3xl mx-auto">
                        At Cauders, we deliver future-ready digital solutions that combine innovation, performance, and scalability. Our expertise spans across multiple domains to help businesses thrive in the evolving tech landscape.
                    </p>
                </ScrollFadeIn>
            </div>
        </div>
    )
}


export default function Services() {
  const services = getServices();

  return (
    <section id="services" className="bg-background">
        <AnimatedHeroText />
        
        <div className="flex flex-col">
          {services.map((service, index) => (
            <ServiceSection key={service.slug} service={service} index={index} />
          ))}
        </div>

        <section className="py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollFadeIn className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Choose Cauders?</h2>
                </ScrollFadeIn>
                <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    {whyChooseUs.map((reason, index) => (
                        <ScrollFadeIn key={reason} style={{ animationDelay: `${index * 150}ms`}}>
                            <div className="flex flex-col items-center">
                                <div className="bg-primary/10 rounded-full p-4 mb-4">
                                    <CheckCircle className="w-8 h-8 text-primary" />
                                </div>
                                <p className="text-lg text-foreground/80">{reason}</p>
                            </div>
                        </ScrollFadeIn>
                    ))}
                </div>
            </div>
        </section>
    </section>
  );
}
