'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GlassBadge from './GlassBadge';
import IntroSection from './IntroSection';
import { typography } from '@/lib/typography';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
      "We design, build, and modernize digital systems that help businesses overcome operational bottlenecks, connect fragmented operations, and automate manual work. Every solution is engineered around your business needs and built to scale reliably.",
    ctaText: "Let's Talk Business",
    ctaHref: "/contact",
    image: "https://res.cloudinary.com/cauders/image/upload/v1786997811/ChatGPT_Image_Aug_18_2026_12_40_23_AM_yjtkon.png",
  },
  {
    id: 2,
    badge: "AI-POWERED BUSINESS TRANSFORMATION",
    line1: "Turn Intelligence",
    line2: "Into Action,",
    accent: "With Applied AI Systems.",
    description:
      "Turn intelligence into action with AI-powered business applications that streamline operations, accelerate decisions, and unlock new opportunities for growth engineered directly into active workflows.",
    ctaText: "Explore AI Solutions",
    ctaHref: "/ai/ai-product-engineering/custom-ai-development",
    image: "https://globallawexperts.com/wp-content/uploads/2025/01/ai-generated-8540913_1280.jpg",
  },
  {
    id: 3,
    badge: "COMPOSABLE COMMERCE & ECOSYSTEMS",
    line1: "AI-Enabled Ecosystems",
    line2: "That Make Commerce",
    accent: "Transparent & Composable.",
    description:
      "We remove complexity from the asset lifecycle with a composable platform that connects fragmented operations, accelerates transactions, and scales reliably.",
    ctaText: "Discover Enterprise Solutions",
    ctaHref: "/services/cloud-digital-transformation/business-applications",
    image: "/images/join.png",
  },
  {
    id: 4,
    badge: "CUSTOM SOFTWARE & SAAS ENGINEERING",
    line1: "Engineering Platforms",
    line2: "Built to Scale,",
    accent: "From Architecture to Impact.",
    description:
      "High-concurrency web applications, multi-tenant SaaS products, and enterprise portals engineered for performance, security boundaries, and sustainable long-term maintainability.",
    ctaText: "Explore Custom Software",
    ctaHref: "/services/software-solutions/custom-software-development",
    image: "https://www.centralsquare.com/_next/image?url=https%3A%2F%2Fmedia.centralsquare.com%2Fwp-content%2Fuploads%2FCloud-Tech-Concept.jpg&w=3840&q=75",
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
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
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
                    <span className="text-primary block leading-tight md:leading-tight lg:leading-tight">
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
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-[#003B38] text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-none"
                  >
                    {slide.ctaText}
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slider Navigation Controls - Bottom Right */}
        <div 
          className="absolute bottom-8 sm:bottom-12 right-4 sm:right-8 lg:right-12 z-20 flex items-center gap-3 bg-black/25 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-all hover:border-white/40 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-all hover:border-white/40 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Slide Indicator Dots (without numbers) */}
          <div className="flex items-center gap-2 ml-1">
            {heroSlides.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentSlide ? "w-8 bg-primary" : "w-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <IntroSection />
    </section>
  );
}
