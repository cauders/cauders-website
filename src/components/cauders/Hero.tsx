"use client"
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import ScrollFadeIn from './ScrollFadeIn';
import { cn } from '@/lib/utils';

export default function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-preview');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={cn(
              "text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-snug",
              "animated-gradient-text inline-block transition-transform duration-300 ease-out hover:scale-105"
            )}>
            Innovative Digital Solutions
          </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            We are Cauders. We build beautiful, functional, and scalable web applications that drive results.
        </p>
        <ScrollFadeIn delay="delay-400" className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/portfolio">View Our Work</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </ScrollFadeIn>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
         <button onClick={scrollToServices} aria-label="Scroll down">
          <ArrowDown className="w-8 h-8 text-primary" />
         </button>
      </div>
    </section>
  );
}
