import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import ScrollFadeIn from './ScrollFadeIn';
import { getServices } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

export default function Services() {
  const services = getServices();

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">What We Offer</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Our expertise spans the entire development lifecycle, delivering excellence at every step.
          </p>
        </ScrollFadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ScrollFadeIn key={service.title} delay={`delay-${index * 100}`} className="h-full">
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
                        <CardDescription className="pt-2 text-foreground/80">{service.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>

                  {/* Back of the card */}
                  <div className="flip-card-back absolute w-full h-full">
                    <Card className={cn("h-full bg-card flex flex-col animated-border-card")}>
                      <CardHeader>
                          <CardTitle className="text-foreground">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                          <ul className="space-y-2 text-left">
                          {service.included.slice(0, 3).map((item, i) => (
                              <li key={i} className="flex items-start text-sm">
                              <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 shrink-0" />
                              <span className="text-foreground/80">{item}</span>
                              </li>
                          ))}
                          </ul>
                      </CardContent>
                      <div className="p-6 pt-0 mt-auto">
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
      </div>
    </section>
  );
}
