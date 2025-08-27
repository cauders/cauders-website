"use client"
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import ScrollFadeIn from './ScrollFadeIn';
import { cn } from '@/lib/utils';
import HeroLottieBackground from './HeroLottieBackground';

export default function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-preview');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                     <h1 className={cn(
                        "text-4xl md:text-6xl font-extrabold tracking-tight text-foreground pb-2",
                        "animated-gradient-text inline-block transition-transform duration-300 ease-out hover:scale-105"
                        )}>
                        Innovative Digital Solutions
                    </h1>
                    <p className="mt-4 max-w-xl text-lg md:text-xl text-foreground/80 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                        We are Cauders. We build beautiful, functional, and scalable web applications that drive results.
                    </p>
                    <ScrollFadeIn delay="delay-400" className="mt-8 flex flex-col sm:flex-row items-start gap-4">
                      <Button size="lg" asChild>
                        <Link href="/portfolio">View Our Work</Link>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <Link href="/contact">Get a Quote</Link>
                      </Button>
                    </ScrollFadeIn>
                </div>
                 <div className="relative w-full h-full min-h-[300px] md:min-h-[500px]">
                  <HeroLottieBackground />
                </div>
            </div>
        </div>
    </section>
  );
}
