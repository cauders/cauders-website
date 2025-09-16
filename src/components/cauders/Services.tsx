
'use client';

import { getServices } from '@/lib/data';
import Link from 'next/link';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight, Award, CheckCircle, Rocket, ShieldCheck } from 'lucide-react';
import ScrollFadeIn from './ScrollFadeIn';
import { Card, CardTitle, CardContent, CardHeader } from '../ui/card';
import { useRef } from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import Image from 'next/image';
import StandardizedHeading from './StandardizedHeading';
import placeholderImages from '@/lib/placeholder-images.json';

const whyChooseUs = [
  {
      icon: Rocket,
      title: 'Future-Ready Solutions',
      description: 'We build with tomorrow’s technology, ensuring your digital assets are scalable, adaptable, and prepared for future innovation.'
  },
  {
      icon: Award,
      title: 'Industry-Focused Expertise',
      description: 'Our team possesses deep industry knowledge, allowing us to deliver solutions that solve real-world challenges and drive tangible results.'
  },
  {
      icon: ShieldCheck,
      title: 'User-Driven Approach',
      description: 'Security, scalability, and user experience are at the core of our development process, guaranteeing a product that is both robust and intuitive.'
  }
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
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-headline">{service.title}</h2>
                            <p className="text-base text-foreground/80 mb-6">{service.description}</p>
                            <ul className="space-y-3 text-base">
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
                           <div className="relative group h-[400px] w-full max-w-sm cursor-pointer">
                                <Card className="h-full bg-card border shadow-lg overflow-hidden transition-transform duration-500 group-hover:scale-105">
                                    {service.caseStudy?.imageUrl && (
                                        <div className="relative w-full h-full">
                                            <Image 
                                                src={service.caseStudy.imageUrl} 
                                                alt={service.title} 
                                                width={800}
                                                height={600}
                                                priority
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                    )}
                                </Card>
                                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex items-center justify-center rounded-lg">
                                    <Button asChild className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                                        <Link href={`https://www.portfolio.cauders.com/projects`}>
                                            View More <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
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
                <StandardizedHeading lines={["Our Services"]} />
                <ScrollFadeIn>
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
                <ScrollFadeIn className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">Why Choose Cauders?</h2>
                     <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
                        Our commitment to excellence is reflected in every project we undertake. We don't just build products; we build partnerships.
                    </p>
                </ScrollFadeIn>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {whyChooseUs.map((reason, index) => (
                        <ScrollFadeIn key={reason.title} style={{ animationDelay: `${index * 150}ms`}} className="h-full">
                             <Card className="h-full text-center bg-card border hover:border-primary hover:-translate-y-2 transition-transform duration-300 group flex flex-col min-h-[320px]">
                                <CardHeader className="flex-grow flex flex-col">
                                    <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                                        <reason.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl font-headline text-foreground">{reason.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-foreground/80">{reason.description}</p>
                                </CardContent>
                            </Card>
                        </ScrollFadeIn>
                    ))}
                </div>
            </div>
        </section>
    </section>
  );
}
