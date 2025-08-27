"use client"
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import ScrollFadeIn from './ScrollFadeIn';
import IconCloud from './IconCloud';

export default function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-preview');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-background -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-secondary/20"></div>
        <IconCloud />
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            Innovative Digital Solutions
          </h1>
        </ScrollFadeIn>
        <ScrollFadeIn delay="delay-200">
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-foreground/80">
            We are Cauders. We build beautiful, functional, and scalable web applications that drive results.
          </p>
        </ScrollFadeIn>
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
