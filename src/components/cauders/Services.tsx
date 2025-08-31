

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import ScrollFadeIn from './ScrollFadeIn';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { getServices } from '@/lib/data';
import Link from 'next/link';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const whyChooseUs = [
  'Future-ready digital solutions',
  'Industry-focused expertise',
  'Secure, scalable, and user-driven approach'
];


export default function Services() {
  const services = getServices();

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn className="text-center mb-16 lg:mb-24">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground font-headline">Our Services</h1>
          <p className="mt-6 text-lg text-foreground/70 max-w-3xl mx-auto">
            At Cauders, we deliver future-ready digital solutions that combine innovation, performance, and scalability. Our expertise spans across multiple domains to help businesses thrive in the evolving tech landscape.
          </p>
        </ScrollFadeIn>
        
        <div className="flex flex-col gap-24 lg:gap-32">
          {services.map((service, index) => (
            <div key={service.slug} className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
                <ScrollFadeIn 
                    direction={index % 2 === 0 ? 'left' : 'right'}
                    className={cn("flex flex-col justify-center", index % 2 === 0 ? 'md:order-1' : 'md:order-2')}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-headline">{service.title}</h2>
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

                <ScrollFadeIn 
                    direction={index % 2 === 0 ? 'right' : 'left'}
                    className={cn("flex items-center justify-center", index % 2 === 0 ? 'md:order-2' : 'md:order-1')}
                >
                   <div className="flip-card h-[400px] w-full max-w-sm">
                      <div className="flip-card-inner relative w-full h-full">
                          {/* Front of the card */}
                          <div className="flip-card-front absolute w-full h-full">
                              <Card className="h-full text-center flex flex-col justify-center items-center bg-card border shadow-lg">
                                  <div className="bg-primary/10 rounded-full p-4 w-fit mb-4">
                                      <service.icon className="w-12 h-12 text-primary" />
                                  </div>
                                  <CardTitle className="text-foreground text-2xl">{service.title}</CardTitle>
                              </Card>
                          </div>
                          {/* Back of the card */}
                          <div className="flip-card-back absolute w-full h-full">
                              <Card className={cn("h-full flex flex-col justify-between animated-border-card bg-card border text-left p-6")}>
                                  <div>
                                    <CardTitle className="text-foreground mb-2">{service.title}</CardTitle>
                                    <p className="text-foreground/80 line-clamp-6">{service.details}</p>
                                  </div>
                                  <Button asChild>
                                    <Link href={`/services/${service.slug}`}>
                                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                  </Button>
                              </Card>
                          </div>
                      </div>
                  </div>
                </ScrollFadeIn>
            </div>
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
      </div>
    </section>
  );
}
