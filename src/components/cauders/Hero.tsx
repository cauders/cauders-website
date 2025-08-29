
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

  const renderAnimatedText = (text: string, delayStart: number) => {
    return text.split(' ').map((word, wordIndex) => (
      <div key={wordIndex} className="inline-block mr-4">
        {word.split('').map((char, charIndex) => {
          const totalDelay = delayStart + (wordIndex * 0.1) + (charIndex * 0.03);
          return (
            <span
              key={charIndex}
              className="animate-char-in inline-block"
              style={{ animationDelay: `${totalDelay}s` }}
            >
              {char}
            </span>
          );
        })}
      </div>
    ));
  };


  return (
    <section className="relative w-full h-[calc(110vh-6rem)] mt-[-6rem] overflow-hidden">
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
                <p className="text-lg md:text-xl text-foreground/80 animate-fade-in-up">
                  Unconventional thinking
                </p>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mt-2 block pb-2 leading-tight">
                  <div className="h-[1.2em] overflow-hidden">
                    <span className="inline-block">{renderAnimatedText(headingLine1, 0.1)}</span>
                  </div>
                  <div className="h-[1.2em] overflow-hidden">
                    <span className="inline-block">{renderAnimatedText(headingLine2, 0.4)}</span>
                  </div>
                </h1>
                <div className="mt-8 animate-fade-in-up flex justify-start" style={{ animationDelay: '1s' }}>
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
