

'use client';

import { getServices } from '@/lib/data';
import Link from 'next/link';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight, Award, CheckCircle, Rocket, ShieldCheck } from 'lucide-react';
import ScrollFadeIn from './ScrollFadeIn';
import { Card, CardTitle, CardContent, CardHeader } from '../ui/card';
import { useRef, Fragment, useState, useEffect } from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import Image from 'next/image';
import StandardizedHeading from './StandardizedHeading';
import placeholderImages from '@/lib/placeholder-images.json';
import { Separator } from '../ui/separator';
import MagneticLink from './MagneticLink';
import { Skeleton } from '../ui/skeleton';

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
            <div className={cn("sticky top-0 h-screen flex items-center justify-center overflow-hidden", !isEven && "bg-secondary/30")}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <ScrollFadeIn direction={isEven ? 'left' : 'right'} className={cn("flex flex-col justify-center", isEven ? 'md:order-1' : 'md:order-2')}>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-headline">{service.title}</h2>
                            <p className="text-base text-foreground/80 mb-6">{service.description}</p>
                            <div className="space-y-4 text-base">
                                {service.included.slice(0, 3).map((item, itemIndex) => (
                                    <Fragment key={item}>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                                            <span className="text-foreground/80">{item}</span>
                                        </div>
                                        {itemIndex < 2 && <Separator className="bg-border/50" />}
                                    </Fragment>
                                ))}
                            </div>
                            <Button asChild variant="link" className="px-0 justify-start mt-6 text-base">
                                <Link href={`/services/${service.slug}`}>
                                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </ScrollFadeIn>
                        <div
                             style={{
                                opacity: cardOpacity,
                                transform: `scale(${cardScale})`,
                             }}
                             className={cn("flex items-center justify-center", isEven ? 'md:order-2' : 'md:order-1')}
                        >
                           <div className="relative group h-[400px] w-full max-w-sm cursor-pointer">
                                <Card className="h-full bg-card border shadow-lg overflow-hidden rounded-lg">
                                    {service.caseStudy?.imageUrl && (
                                        <div className="relative w-full h-full overflow-hidden rounded-lg">
                                            <Image 
                                                src={service.caseStudy.imageUrl} 
                                                alt={service.title} 
                                                width={800}
                                                height={600}
                                                priority
                                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    )}
                                </Card>
                                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex items-center justify-center rounded-lg">
                                     <MagneticLink href={`https://www.portfolio.cauders.com/projects`} className="text-white !text-lg w-36 h-36 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                        View More
                                    </MagneticLink>
                                </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ServicesSkeleton = () => (
    <div className="bg-background">
        <div className="h-[100vh] relative text-center flex flex-col justify-center">
            <div className="sticky top-1/2 -translate-y-1/2">
                <Skeleton className="h-16 w-2/3 mx-auto" />
                <Skeleton className="h-6 w-1/2 mx-auto mt-4" />
                <Skeleton className="h-10 w-full max-w-3xl mx-auto mt-6" />
            </div>
        </div>
        
        {[...Array(2)].map((_, index) => {
            const isEven = index % 2 === 0;
            return (
                <div key={index} className={cn("py-16", !isEven && "bg-secondary/30")}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div className={cn(isEven ? 'md:order-1' : 'md:order-2')}>
                                <Skeleton className="h-12 w-3/4 mb-4" />
                                <Skeleton className="h-6 w-full mb-2" />
                                <Skeleton className="h-6 w-full mb-6" />
                                <div className="space-y-4">
                                    <Skeleton className="h-8 w-full" />
                                    <Skeleton className="h-8 w-full" />
                                    <Skeleton className="h-8 w-full" />
                                </div>
                            </div>
                            <div className={cn(isEven ? 'md:order-2' : 'md:order-1')}>
                                <Skeleton className="h-[400px] w-full max-w-sm mx-auto rounded-lg" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}

        <section className="py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-16">
                    <Skeleton className="h-12 w-1/2 mx-auto" />
                    <Skeleton className="h-6 w-2/3 mx-auto mt-4" />
                </div>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[...Array(3)].map((_, index) => (
                        <Skeleton key={index} className="h-[320px] w-full rounded-lg" />
                    ))}
                </div>
            </div>
        </section>
    </div>
);


export default function Services() {
  const services = getServices();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time for the shimmer effect to be visible
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ServicesSkeleton />;
  }

  return (
    <section id="services" className="bg-background">
        <section className="py-20 lg:py-32 text-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <StandardizedHeading lines={["Our Services"]} />
                <ScrollFadeIn>
                    <p className="mt-6 text-lg text-foreground/70 max-w-3xl mx-auto">
                        At Cauders, we deliver future-ready digital solutions that combine innovation, performance, and scalability. Our expertise spans across multiple domains to help businesses thrive in the evolving tech landscape.
                    </p>
                </ScrollFadeIn>
            </div>
        </section>
        
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
