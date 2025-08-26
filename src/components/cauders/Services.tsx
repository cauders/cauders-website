import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import ScrollFadeIn from './ScrollFadeIn';
import { getServices } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
            <ScrollFadeIn key={service.title} delay={`delay-${index * 100}`}>
              <Link href={`/services/${service.slug}`} className="block h-full">
                <Card className="h-full text-center border-2 border-transparent hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 bg-card group">
                  <CardHeader className="p-8">
                    <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4 transition-colors duration-300 group-hover:bg-primary/20">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-foreground">{service.title}</CardTitle>
                    <CardDescription className="pt-2 text-foreground/80">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
