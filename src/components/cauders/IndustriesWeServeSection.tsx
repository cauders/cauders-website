'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import DarkTealButton from './DarkTealButton';
import SectionHeading from './SectionHeading';
import ScrollFadeIn from './ScrollFadeIn';

interface IndustryItem {
  id: string;
  name: string;
  icon: string;
  slug: string;
}

const industriesList: IndustryItem[] = [
  {
    id: 'banking',
    name: 'Banking & Financial Services',
    icon: 'https://res.cloudinary.com/cauders/image/upload/v1792719649/bank--institution-saving-bank-payment-finance_igfnyc.png',
    slug: '/industries#banking-financial-services',
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    icon: 'https://res.cloudinary.com/cauders/image/upload/v1792719652/stethoscope--instrument-health-medical-stethoscope_gje2rz.png',
    slug: '/industries#healthcare',
  },
  {
    id: 'ecommerce',
    name: 'Retail & E-Commerce',
    icon: 'https://res.cloudinary.com/cauders/image/upload/v1792719647/shopping-cart-3--shopping-cart-checkout_hhirfb.png',
    slug: '/industries#retail-ecommerce',
  },
  {
    id: 'technology',
    name: 'Technology & Software',
    icon: 'https://res.cloudinary.com/cauders/image/upload/v1792719650/computer-chip-1--computer-device-chip-electronics-cpu-microprocessor_zxy6d4.png',
    slug: '/industries#technology-software',
  },
  {
    id: 'real-estate',
    name: 'Real Estate & PropTech',
    icon: 'https://res.cloudinary.com/cauders/image/upload/v1792719643/Office-Building-Double_Streamline_Ultimate_ztv8r0.png',
    slug: '/industries#real-estate',
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    icon: 'https://res.cloudinary.com/cauders/image/upload/v1792719642/Truck_Streamline_Iconoir_ytiyrj.png',
    slug: '/industries#logistics-supply-chain',
  },
];

export default function IndustriesWeServeSection() {
  const [activeIndex, setActiveIndex] = useState(1); // default active: Banking & Financial Services
  const [isPaused, setIsPaused] = useState(false);
  const dragStartY = useRef<number | null>(null);
  const total = industriesList.length;

  const nextIndustry = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevIndustry = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto rotation timer (rotates every 3 seconds unless hovered/dragged)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextIndustry();
    }, 3200);
    return () => clearInterval(timer);
  }, [isPaused, nextIndustry]);

  // Handle drag gesture (mouse / touch)
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    dragStartY.current = clientY;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent | React.MouseEvent) => {
    if (dragStartY.current === null) return;
    const clientY = 'changedTouches' in e ? e.changedTouches[0].clientY : e.clientY;
    const deltaY = clientY - dragStartY.current;
    
    // Swipe threshold of 25px
    if (deltaY < -25) {
      nextIndustry();
    } else if (deltaY > 25) {
      prevIndustry();
    }
    dragStartY.current = null;
    setIsPaused(false);
  };

  // Wheel listener for smooth trackpad / mouse scroll rotation
  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaY) > 20) {
      if (e.deltaY > 0) {
        nextIndustry();
      } else {
        prevIndustry();
      }
    }
  };

  // Compute 3 visible slots: prev, current, next
  const prevIdx = (activeIndex - 1 + total) % total;
  const nextIdx = (activeIndex + 1) % total;

  const currentItem = industriesList[activeIndex];
  const prevItem = industriesList[prevIdx];
  const nextItem = industriesList[nextIdx];

  return (
    <section className="relative z-10 py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      <div className="max-w-[95rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ================= LEFT COLUMN: Heading, Subheading, Interactive Dial/List, CTA ================= */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Section Heading & Subheading using reusable SectionHeading */}
            <SectionHeading
              lines={[
                'Industries We <span class="text-cyan-gradient font-medium inline-block">Serve</span>'
              ]}
              subheading="Explore how software, integrations, AI, and automation support the workflows, systems, and operational requirements of different sectors."
              align="left"
              subheadingMaxWidth="max-w-lg"
              className="mb-6 sm:mb-8"
            />

            {/* Interactive Rotating Wheel Container (Click, drag, or auto-rotate without hijacking page wheel scroll) */}
            <div
              className="relative my-4 sm:my-6 select-none cursor-grab active:cursor-grabbing touch-pan-y"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onMouseDown={handleTouchStart}
              onMouseUp={handleTouchEnd}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              role="region"
              aria-label="Industries rotation dial"
            >
              <div className="flex items-center gap-6 sm:gap-7">
                
                {/* Dynamically Changing Active Icon (Centered vertically with the active row) */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 flex items-center justify-center self-center relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentItem.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
                    >
                      <Image
                        src={currentItem.icon}
                        alt={currentItem.name}
                        fill
                        sizes="56px"
                        className="object-contain"
                        unoptimized
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* 3-Row Rotating Wheel with Shorter Divider Lines */}
                <div className="flex flex-col justify-center max-w-[340px] sm:max-w-[380px] w-full">
                  
                  {/* Previous Industry (Clickable / Faded) */}
                  <button
                    type="button"
                    onClick={prevIndustry}
                    className="text-left py-2 text-base sm:text-lg font-headline font-normal text-[#9ca3af] hover:text-[#4b5563] transition-colors duration-200 cursor-pointer"
                  >
                    <span className="truncate block">{prevItem.name}</span>
                  </button>

                  {/* Active Industry with Shorter Subtle Divider Lines */}
                  <div className="relative py-3 sm:py-3.5 border-y border-[#003431]/15 w-full">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentItem.id}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                      >
                        <Link
                          href={currentItem.slug}
                          className="block text-xl sm:text-2xl font-headline font-semibold text-foreground tracking-tight hover:text-darkTeal transition-colors"
                        >
                          {currentItem.name}
                        </Link>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Next Industry (Clickable / Faded) */}
                  <button
                    type="button"
                    onClick={nextIndustry}
                    className="text-left py-2 text-base sm:text-lg font-headline font-normal text-[#9ca3af] hover:text-[#4b5563] transition-colors duration-200 cursor-pointer"
                  >
                    <span className="truncate block">{nextItem.name}</span>
                  </button>

                </div>
              </div>
            </div>

            {/* CTA Button: Explore Industries */}
            <div className="mt-8 sm:mt-10">
              <DarkTealButton href="/industries">
                Explore Industries
              </DarkTealButton>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: Hero Architecture Image with Smooth Rounded Corners ================= */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <ScrollFadeIn delay={150} className="w-full h-full">
              <div className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] lg:h-[580px] rounded-[36px] sm:rounded-[44px] overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,40,36,0.25)] group">
                <Image
                  src="https://res.cloudinary.com/cauders/image/upload/v1792719663/Rectangle_219_rvczyb.png"
                  alt="Modern architectural towers representing diverse enterprise industries"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                  unoptimized
                />
              </div>
            </ScrollFadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
