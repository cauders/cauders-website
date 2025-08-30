
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

  const headingLine1 = "Cauders.";
  const headingLine2 = "Innovative Digital Solutions";
  const words1 = headingLine1.split(" ");
  const words2 = headingLine2.split(" ");

  return (
    <section className="relative w-full h-screen mt-[-6rem] overflow-hidden">
      {/* 3D Animation Background */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0">
        <Suspense fallback={<Skeleton className="w-full h-full" />}>
          <Hero3D />
        </Suspense>
      </div> 

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="relative z-10 flex items-center h-full">
          {/* Left Side: Content */}
          <div className="w-full md:w-1/2 text-left">
            <div className="max-w-xl">
                <p className="text-lg md:text-xl text-foreground/80 animate-fade-in-down">
                  Unconventional thinking
                </p>
                <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-foreground mt-4 font-headline">
                  <div>
                    {words1.map((word, wordIndex) => (
                      <div key={wordIndex} className="overflow-hidden inline-block">
                        <span 
                          className="inline-block animated-gradient-text animate-fade-in-up" 
                          style={{ animationDelay: `${400 + wordIndex * 50}ms` }}
                        >
                          {word}&nbsp;
                        </span>
                      </div>
                    ))}
                  </div>
                   <div>
                    {words2.map((word, wordIndex) => (
                       <div key={wordIndex} className="overflow-hidden inline-block">
                          <span 
                            className="inline-block animated-gradient-text animate-fade-in-up" 
                            style={{ animationDelay: `${400 + (wordIndex + words1.length) * 50}ms` }}
                          >
                            {word}&nbsp;
                          </span>
                       </div>
                    ))}
                  </div>
                </h1>
                <div className="mt-8 animate-fade-in-down flex justify-start" style={{ animationDelay: '1s' }}>
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
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/contact" className="text-sm font-medium tracking-widest uppercase hover:text-primary transition-colors">
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
