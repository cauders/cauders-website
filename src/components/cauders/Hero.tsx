"use client"
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import ScrollFadeIn from './ScrollFadeIn';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-background">
      <div className="absolute w-full h-full -z-10 opacity-50">
        <div 
          className="absolute top-[10%] left-[15%] h-[200px] w-[200px] rounded-full bg-primary/30 blur-2xl animate-float"
          style={{ animationDuration: '10s' }}
        />
        <div 
          className="absolute top-[20%] right-[10%] h-[250px] w-[250px] rounded-full bg-primary/20 blur-3xl animate-float"
          style={{ animationDuration: '12s', animationDelay: '2s' }}
        />
        <div 
          className="absolute bottom-[15%] left-[25%] h-[180px] w-[180px] rounded-2xl bg-primary/20 blur-2xl animate-float"
          style={{ animationDuration: '15s', animationDelay: '1s' }}
        />
         <div 
          className="absolute bottom-[25%] right-[20%] h-[220px] w-[220px] rounded-full bg-primary/20 blur-3xl animate-float"
          style={{ animationDuration: '13s', animationDelay: '3s' }}
        />
      </div>
    </div>
  )
}

export default function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-preview');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <AnimatedBackground />
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
