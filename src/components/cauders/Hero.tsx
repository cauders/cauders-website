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
    <section className="relative w-full h-screen flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Text Content */}
          <div className="relative z-10 text-left">
            <p className="text-lg md:text-xl text-foreground/80 animate-fade-in-up">
              Unconventional thinking
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mt-2 inline-block hover:scale-105 transition-transform duration-300 pb-2">
                <span className="animated-gradient-text">Cauders.</span>
                <br />
                <span className="animated-gradient-text" style={{ animationDelay: '0.2s' }}>Innovative Digital Solutions</span>
            </h1>
            <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <button 
                onClick={scrollToServices} 
                className="explore-button"
                aria-label="Explore our services"
              >
                Explore
              </button>
            </div>
          </div>

          {/* Right Side: Graphic */}
          <div className="relative z-0 h-full w-full hidden md:flex items-center justify-center">
             <div className="w-full h-full absolute -right-1/4">
                <Suspense fallback={<Skeleton className="w-full h-full" />}>
                  <Hero3D />
                </Suspense>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom and Right Elements */}
      <div className="absolute bottom-8 left-8 z-10">
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
