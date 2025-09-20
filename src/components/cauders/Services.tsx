
'use client';

import { getServices } from '@/lib/data';
import Link from 'next/link';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight, Award, CheckCircle, Rocket, ShieldCheck } from 'lucide-react';
import ScrollFadeIn from './ScrollFadeIn';
import { Card, CardTitle, CardContent, CardHeader } from '../ui/card';
import Image from 'next/image';
import StandardizedHeading from './StandardizedHeading';
import React from 'react';
import { Separator } from '../ui/separator';

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


export default function Services() {
  const services = getServices();

  return (
    <section id="services" className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="text-center mb-12 lg:mb-16">
                <StandardizedHeading lines={["Our Services"]} />
                <ScrollFadeIn>
                    <p className="mt-6 text-sm lg:text-base text-foreground/70 max-w-3xl mx-auto">
                        At Cauders, we deliver future-ready digital solutions that combine innovation, performance, and scalability. Our expertise spans across multiple domains to help businesses thrive in the evolving tech landscape.
                    </p>
                </ScrollFadeIn>
            </div>

            <div className="space-y-16 lg:space-y-0">
                {services.map((service, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <React.Fragment key={service.slug}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
                                <div className={cn("text-left", isEven ? 'md:order-1' : 'md:order-2')}>
                                    <ScrollFadeIn direction={isEven ? 'left' : 'right'}>
                                        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 font-headline">{service.title}</h2>
                                        <p className="text-sm lg:text-base text-foreground/80 mb-6">{service.description}</p>
                                        <ul className="space-y-3 text-sm">
                                            {service.included.slice(0, 3).map((item) => (
                                                <li key={item} className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                                                    <span className="text-foreground/80">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Button asChild variant="link" className="px-0 mt-4 text-sm lg:text-base">
                                            <Link href={`/services/${service.slug}`}>
                                                Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </ScrollFadeIn>
                                </div>
                                <div className={cn("flex items-center justify-center", isEven ? 'md:order-2' : 'md:order-1')}>
                                    <ScrollFadeIn direction={isEven ? 'right' : 'left'}>
                                        <Link href={`/services/${service.slug}`}>
                                            <Card className="overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 bg-card border text-left">
                                                {service.caseStudy?.imageUrl && (
                                                    <div className="aspect-video overflow-hidden">
                                                        <Image
                                                            src={service.caseStudy.imageUrl}
                                                            alt={service.caseStudy.title}
                                                            width={800}
                                                            height={450}
                                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                            data-ai-hint={service.caseStudy.title}
                                                        />
                                                    </div>
                                                )}
                                                <CardHeader className="p-4 lg:p-6">
                                                    <CardTitle className="mb-1 text-base lg:text-lg text-foreground font-headline">{service.caseStudy?.title}</CardTitle>
                                                    <p className="text-xs lg:text-sm text-foreground/70 line-clamp-2">{service.caseStudy?.description}</p>
                                                </CardHeader>
                                            </Card>
                                        </Link>
                                    </ScrollFadeIn>
                                </div>
                            </div>
                            {index < services.length - 1 && <div className="py-16 lg:py-24"><Separator /></div>}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>

        <section className="py-20 lg:py-32 bg-secondary/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollFadeIn className="text-center mb-12 lg:mb-16">
                    <h2 className="text-2xl md:text-4xl font-bold text-foreground font-headline">Why Choose Cauders?</h2>
                     <p className="mt-4 text-sm lg:text-base text-foreground/70 max-w-2xl mx-auto">
                        Our commitment to excellence is reflected in every project we undertake. We don't just build products; we build partnerships.
                    </p>
                </ScrollFadeIn>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {whyChooseUs.map((reason, index) => (
                        <ScrollFadeIn key={reason.title} style={{ animationDelay: `${index * 150}ms`}} className="h-full">
                             <Card className="h-full text-center bg-card border hover:border-primary hover:-translate-y-2 transition-transform duration-300 group flex flex-col min-h-[240px] lg:min-h-[300px]">
                                <CardHeader className="flex-grow flex flex-col items-center justify-center">
                                    <div className="mx-auto bg-primary/10 rounded-full p-3 lg:p-4 w-fit mb-4 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                                        <reason.icon className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
                                    </div>
                                    <CardTitle className="text-lg lg:text-xl font-headline text-foreground">{reason.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="px-4 pb-6 lg:px-6 lg:pb-8">
                                    <p className="text-xs lg:text-sm text-foreground/80">{reason.description}</p>
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
