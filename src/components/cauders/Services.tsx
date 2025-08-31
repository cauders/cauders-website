

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import ScrollFadeIn from './ScrollFadeIn';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { getServices } from '@/lib/data';
import Link from 'next/link';
import { Button } from '../ui/button';

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
        <ScrollFadeIn className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground font-headline">Our Services</h1>
          <p className="mt-6 text-lg text-foreground/70 max-w-3xl mx-auto">
            At Cauders, we deliver future-ready digital solutions that combine innovation, performance, and scalability. Our expertise spans across multiple domains to help businesses thrive in the evolving tech landscape.
          </p>
        </ScrollFadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollFadeIn key={service.title} delay={`delay-${index * 100}`}>
              <Link href={`/services/${service.slug}`} className="h-full block group">
                <Card className="h-full bg-card border shadow-sm text-left flex flex-col transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
                    <CardHeader>
                        <div className="flex items-center gap-4 mb-2">
                            <div className="bg-primary/10 rounded-full p-3">
                                <service.icon className="w-6 h-6 text-primary" />
                            </div>
                            <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-foreground/80">{service.description}</p>
                    </CardContent>
                    <CardFooter>
                       <div className="text-primary font-semibold flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-2">
                         Learn More <ArrowRight className="h-4 w-4" />
                       </div>
                    </CardFooter>
                </Card>
              </Link>
            </ScrollFadeIn>
          ))}
        </div>

        <section className="py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollFadeIn className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Choose Cauders?</h2>
                </ScrollFadeIn>
                <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    {whyChooseUs.map((reason, index) => (
                        <ScrollFadeIn key={reason}>
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
