'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GlassBadge from './GlassBadge';
import IntroSection from './IntroSection';
import { typography } from '@/lib/typography';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroSlide {
  id: number;
  badge: string;
  line1: string;
  line2: string;
  accent: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  image: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    badge: "AI, AUTOMATION & SOFTWARE SOLUTIONS",
    line1: "Where Technology",
    line2: "Meets Vision,",
    accent: "And Ideas Become Impact.",
    description:
      "We design, build, and modernize digital systems that streamline operations, connect workflows, and support business growth.",
    ctaText: "Discuss a Project",
    ctaHref: "/contact",
    image: "https://res.cloudinary.com/cauders/image/upload/v1792672841/cauders_dark_teal_hero_background_n7pfpw.png",
  },
  {
    id: 2,
    badge: "AI-POWERED BUSINESS TRANSFORMATION",
    line1: "Turn Intelligence",
    line2: "Into Action,",
    accent: "With Applied AI Systems.",
    description:
      "Turn intelligence into action with AI-powered business applications that streamline operations, accelerate decisions, and unlock new opportunities for growth engineered directly into active workflows.",
    ctaText: "Explore AI and Automation",
    ctaHref: "/services#ai-automation",
    image: "https://globallawexperts.com/wp-content/uploads/2025/01/ai-generated-8540913_1280.jpg",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlideIndex, setPrevSlideIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const slideCount = heroSlides.length;

  const goToSlide = useCallback((nextIndex: number) => {
    setCurrentSlide((curr) => {
      if (curr === nextIndex) return curr;
      setPrevSlideIndex(curr);
      return nextIndex;
    });
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slideCount);
  }, [currentSlide, goToSlide, slideCount]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slideCount) % slideCount);
  }, [currentSlide, goToSlide, slideCount]);

  useEffect(() => {
    if (prevSlideIndex === null) return;
    const timer = setTimeout(() => {
      setPrevSlideIndex(null);
    }, 1100);
    return () => clearTimeout(timer);
  }, [prevSlideIndex, currentSlide]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative w-full h-auto overflow-hidden">
      {/* Background Image Slider with dissolve fade and extended 120vh overlay height */}
      <div className="absolute inset-0 z-0 w-full h-[120vh] overflow-hidden rounded-b-3xl bg-[#011417]">
        {heroSlides.map((s, idx) => {
          const isCurrent = idx === currentSlide;
          const isPrev = idx === prevSlideIndex;

          return (
            <div
              key={s.id}
              aria-hidden={!isCurrent}
              className={`absolute inset-0 w-full h-full transform-gpu will-change-transform transition-opacity duration-1000 ease-in-out ${
                isCurrent
                  ? "opacity-100 z-20"
                  : isPrev
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={s.image}
                alt={s.badge}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover"
              />
              {/* Gradient overlays to maintain high text contrast and Cauders brand tone */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#011417]/95 via-[#011417]/70 to-[#011417]/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#011417] via-transparent to-[#011417]/50" />
            </div>
          );
        })}
      </div>

      <div className="relative z-10 flex flex-col md:flex-row h-screen max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full pt-24 md:pt-0">
          <div 
            className="w-full md:w-3/5 lg:w-[60%] text-left min-h-[480px] md:min-h-[520px] flex flex-col justify-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
              >
                <div className="mb-6 md:mb-10">
                  <GlassBadge text={slide.badge} />
                </div>

                <h1 className="tracking-tight text-white mt-4 font-headline lg:leading-[1.1]">
                  <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] md:leading-[1.1] lg:leading-[1.1]">
                    {slide.line1}
                  </span>
                  <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] md:leading-[1.1] lg:leading-[1.1]">
                    {slide.line2}
                  </span>
                  <span className={`block mt-2 md:mt-4 ${typography.headingMain}`}>
                    <span className="text-cyan-radial bg-clip-text text-transparent block leading-tight md:leading-tight lg:leading-tight drop-shadow-sm">
                      {slide.accent}
                    </span>
                  </span>
                </h1>

                <p className={`mt-6 md:mt-8 ${typography.bodyLarge} text-white w-[95%] max-w-[40rem] font-light leading-relaxed`}>
                  {slide.description}
                </p>

                <div className="mt-8 md:mt-12 flex items-center">
                  <Link
                    href={slide.ctaHref}
                    className="px-8 py-3 rounded-full bg-zinc-gradient text-white text-sm font-medium hover:opacity-95 transition-all shadow-md hover:shadow-lg"
                  >
                    {slide.ctaText}
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slider Navigation Indicators - Bottom Right */}
        <div 
          className="absolute bottom-8 sm:bottom-12 right-4 sm:right-8 lg:right-12 z-20 flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-4 py-3 rounded-full border border-white/10 shadow-lg"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {heroSlides.map((s, idx) => {
            const isActive = idx === currentSlide;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`group relative p-1 cursor-pointer focus:outline-none transition-all`}
              >
                <span
                  className={`block h-2 rounded-full transition-all duration-300 ${
                    isActive 
                      ? "w-9 bg-primary shadow-[0_0_12px_rgba(140,234,229,0.6)]" 
                      : "w-2.5 bg-white/40 group-hover:bg-white/80 group-hover:w-3.5"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
      <IntroSection />
    </section>
  );
}
