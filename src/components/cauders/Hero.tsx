"use client"
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';
import { Skeleton } from '../ui/skeleton';
import { cn } from '@/lib/utils';
import HeroBackground from './HeroBackground';

export default function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-preview');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const headingLine1 = "Where Technology Meets Vision";
  const headingLine2 = "and Ideas Become Impact";
  const words1 = headingLine1.split(" ");
  const words2 = headingLine2.split(" ");

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Lottie Animation Background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<Skeleton className="w-full h-full" />}>
          <HeroBackground />
        </Suspense>
      </div> 

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="relative z-10 flex items-center h-full">
          <div className="w-full text-left">
            <div className="max-w-4xl">
                <h1 className="font-extrabold tracking-tight text-foreground mt-2 leading-snug font-headline">
                  <div className="text-6xl md:text-8xl">
                    {words1.map((word, wordIndex) => (
                      <span key={wordIndex} className="animated-gradient-text">
                        {word}{' '}
                      </span>
                    ))}
                  </div>
                   <div className="text-4xl md:text-5xl text-foreground/80 mt-4">
                    {words2.map((word, wordIndex) => (
                       <span key={wordIndex} className="animated-gradient-text">
                          {word}{' '}
                       </span>
                    ))}
                  </div>
                </h1>
                <div className="mt-8 animate-fade-in-down flex justify-start" style={{ animationDelay: '1s' }}>
                  <button 
                    onClick={scrollToServices} 
                    className="explore-button text-xs"
                    aria-label="Explore our services"
                  >
                    Explore
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Elements */}
      <div 
        className="absolute bottom-8 left-0 right-0 z-10 animate-fade-in-up"
        style={{ animationDelay: '1s' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/contact" className="text-xs font-medium tracking-widest uppercase hover:text-primary transition-colors">
              Contact Us
          </Link>
          <button onClick={scrollToServices} aria-label="Scroll down" className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
}
