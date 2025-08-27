
"use client"
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import Hero3D from './Hero3D';
import { Suspense } from 'react';
import { Skeleton } from '../ui/skeleton';

export default function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-preview');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 3D Animation Background */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0">
        <Suspense fallback={<Skeleton className="w-full h-full" />}>
          <Hero3D />
        </Suspense>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="relative z-10 flex items-center h-full -mt-24 md:-mt-48">
          {/* Left Side: Content */}
          <div className="w-full md:w-1/2 text-left">
            <div className="max-w-xl">
                <p className="text-lg md:text-xl text-foreground/80 animate-fade-in-up">
                  Unconventional thinking
                </p>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mt-2 inline-block hover:scale-105 transition-transform duration-300 pb-2">
                    <span className="animated-gradient-text">Cauders.</span>
                    <br />
                    <span className="animated-gradient-text" style={{ animationDelay: '0.2s' }}>Innovative Digital Solutions</span>
                </h1>
                <div className="mt-8 animate-fade-in-up flex justify-start" style={{ animationDelay: '0.4s' }}>
                  <button 
                    onClick={scrollToServices} 
                    className="explore-button"
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 z-10">
        <Link href="/contact" className="text-sm font-medium tracking-widest uppercase hover:text-primary transition-colors">
            Contact Us
        </Link>
      </div>

      <div className="absolute bottom-8 right-8 z-10">
         <button onClick={scrollToServices} aria-label="Scroll down" className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-foreground" />
         </button>
      </div>
    </section>
  );
}
