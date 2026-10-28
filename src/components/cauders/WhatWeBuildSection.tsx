'use client';

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ArrowBadge from "./ArrowBadge";
import StandardizedHeading from "./StandardizedHeading";
import ScrollFadeIn from "./ScrollFadeIn";
import DarkTealButton from "./DarkTealButton";

export default function WhatWeBuildSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Pause video rendering when out of viewport to eliminate scroll lag & save GPU cycles
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoEl.play().catch(() => {});
          } else {
            videoEl.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(videoEl);
    return () => observer.disconnect();
  }, []);
  return (
    <section className="relative z-10 pt-4 md:pt-6 pb-20 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-[95rem] mx-auto">
        {/* Section Header: ArrowBadge + StandardizedHeading */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-8 md:mb-12">
          <ScrollFadeIn>
            <ArrowBadge href="/services" text="Services" variant="black" className="mb-3 md:mb-4" />
          </ScrollFadeIn>
          <StandardizedHeading
            lines={[
              'What We Build, <span class="text-cyan-gradient font-medium inline-block">Connect & Improve</span>'
            ]}
            className="text-center font-medium"
          />
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 items-stretch">
          
          {/* ================= COLUMN 1 (Left): 2 stacked cards ================= */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:gap-7">
            
            {/* Card 1: Digital Product Engineering (Compact gradient card) */}
            <ScrollFadeIn delay={100}>
              <div className="group relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between text-white overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 min-h-[230px] sm:min-h-[250px]">
                {/* Background Full Image */}
                <Image
                  src="https://res.cloudinary.com/cauders/image/upload/v1792678283/Group_4659_fphz2w.png"
                  alt="Digital Product Engineering"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 450px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />

                {/* Content */}
                <div className="relative z-10 max-w-[85%]">
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-2">
                    Digital Product Engineering
                  </h3>
                  <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-normal">
                    Custom applications, web and mobile products, and SaaS platforms engineered around business requirements, user needs and long-term maintainability.
                  </p>
                </div>

                {/* Bottom CTA Row */}
                <div className="relative z-10 mt-4 flex items-center justify-between">
                  <Link
                    href="/services#software-solutions"
                    className="text-xs sm:text-sm font-medium text-white/95 hover:text-white transition-colors"
                  >
                    Explore Product Engineering
                  </Link>
                  <Link
                    href="/services#software-solutions"
                    aria-label="Explore Product Engineering"
                    className="w-9 h-9 rounded-full bg-white text-[#09555A] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-md"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Card 2: Dedicated Teams (Light card with reduced subtle shadow) */}
            <ScrollFadeIn delay={200} className="flex-1 h-full">
              <div className="group relative rounded-3xl bg-white dark:bg-card border-0 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden min-h-[360px] sm:min-h-[390px] h-full shadow-[0_6px_20px_rgba(0,49,46,0.06)]">
                {/* Top Illustration: Scaled at top flush to borders with no outer padding */}
                <div className="relative w-full h-52 sm:h-56 md:h-60 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/cauders/image/upload/v1792678284/image_368_wpp2wf.png"
                    alt="Dedicated Teams"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 450px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                </div>

                {/* Bottom Content with padding */}
                <div className="p-7 sm:p-8 pt-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight mb-2.5">
                    Dedicated Teams
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal mb-4">
                    Engineering capacity to your existing product or development team, with roles and responsibilities shaped around your delivery needs.
                  </p>
                  <Link
                    href="/services/staff-augmentation/staff-augmentation-offshoring"
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-darkTeal hover:text-darkTeal/80 transition-colors"
                  >
                    <span>Explore Dedicated Teams</span>
                    <span className="text-base leading-none">→</span>
                  </Link>
                </div>
              </div>
            </ScrollFadeIn>

          </div>

          {/* ================= COLUMN 2 (Center): Tall Hero Card with Video (No shadow) ================= */}
          <div className="lg:col-span-4 flex flex-col">
            <ScrollFadeIn delay={150} className="h-full">
              <div className="group relative rounded-3xl overflow-hidden shadow-none transition-all duration-300 hover:-translate-y-1 min-h-[580px] lg:h-full flex flex-col justify-end bg-[#02181b]">
                {/* Looping Video Background without any dark shadow or gradient overlays in front */}
                <div className="absolute inset-0 w-full h-full bg-[#02181b] overflow-hidden">
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    disablePictureInPicture
                    className="w-full h-full object-cover object-center transform-gpu will-change-transform pointer-events-none"
                  >
                    {/* Cloudinary WebM (VP9/AV1) - lighter and best for Chrome, Firefox, Edge, Android */}
                    <source
                      src="https://res.cloudinary.com/cauders/video/upload/f_webm,q_auto:eco,vc_vp9,w_900/v1792679951/ai-home_oury68.webm"
                      type="video/webm"
                    />
                    {/* Cloudinary MP4 (H.264/AAC) - best for Safari, iOS, and older engines */}
                    <source
                      src="https://res.cloudinary.com/cauders/video/upload/f_mp4,q_auto:eco,vc_h264,w_900/v1792679951/ai-home_oury68.mp4"
                      type="video/mp4"
                    />
                    {/* Fallback to original MP4 if transformations are pending */}
                    <source
                      src="https://res.cloudinary.com/cauders/video/upload/v1792679951/ai-home_oury68.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>

                {/* Floating Glassmorphic Info Card at Bottom */}
                <div className="relative z-10 m-5 sm:m-6 p-6 sm:p-7 rounded-2xl bg-white/95 dark:bg-[#02181b]/95 border border-white/20 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight mb-2">
                    AI & Automation
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/80 dark:text-white/80 leading-relaxed font-normal mb-4">
                    Generative AI, intelligent agents, machine learning and workflow automation for defined business needs.
                  </p>
                  <div className="flex items-center justify-between">
                    <Link
                      href="/services#ai-automation"
                      className="text-xs sm:text-sm font-medium text-foreground hover:text-darkTeal transition-colors"
                    >
                      Explore AI & Automation
                    </Link>
                    <Link
                      href="/services#ai-automation"
                      aria-label="Explore AI & Automation"
                      className="w-10 h-10 rounded-full bg-darkTeal text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-md"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          </div>

          {/* ================= COLUMN 3 (Right): 2 stacked cards ================= */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:gap-7">
            
            {/* Card 4: SaaS Development (Light card with reduced subtle shadow) */}
            <ScrollFadeIn delay={150} className="flex-1 h-full">
              <div className="group relative rounded-3xl bg-white dark:bg-card border-0 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden min-h-[360px] sm:min-h-[390px] h-full shadow-[0_6px_20px_rgba(0,49,46,0.06)]">
                {/* Top Illustration: Scaled at top flush to borders with no outer padding */}
                <div className="relative w-full h-52 sm:h-56 md:h-60 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/cauders/image/upload/v1792678283/image_364_v4bj47.png"
                    alt="SaaS Development"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 450px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                </div>

                {/* Bottom Content with padding */}
                <div className="p-7 sm:p-8 pt-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight mb-2.5">
                    SaaS Development
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal mb-4">
                    Design and develop SaaS products with the functionality, architecture, and integrations needed to support your product model and evolving requirements.
                  </p>
                  <Link
                    href="/services/software-solutions/saas-development"
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-darkTeal hover:text-darkTeal/80 transition-colors"
                  >
                    <span>Explore SaaS Development</span>
                    <span className="text-base leading-none">→</span>
                  </Link>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Card 5: Platform Modernization (Compact gradient card) */}
            <ScrollFadeIn delay={250}>
              <div className="group relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between text-white overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 min-h-[230px] sm:min-h-[250px]">
                {/* Background Full Image */}
                <Image
                  src="https://res.cloudinary.com/cauders/image/upload/v1792678283/Group_4660_cqgiz6.png"
                  alt="Platform Modernization"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 450px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />

                {/* Content */}
                <div className="relative z-10 max-w-[85%]">
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-2">
                    Platform Modernization
                  </h3>
                  <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-normal">
                    Refine system architecture, modernize existing applications, and connect business platforms to support evolving technical and operational requirements.
                  </p>
                </div>

                {/* Bottom CTA Row */}
                <div className="relative z-10 mt-4 flex items-center justify-between">
                  <Link
                    href="/services/cloud-digital-transformation/cloud-transformation"
                    className="text-xs sm:text-sm font-medium text-white/95 hover:text-white transition-colors"
                  >
                    Explore Platform Modernization
                  </Link>
                  <Link
                    href="/services/cloud-digital-transformation/cloud-transformation"
                    aria-label="Explore Platform Modernization"
                    className="w-9 h-9 rounded-full bg-white text-[#09555A] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-md"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollFadeIn>

          </div>

        </div>

        {/* Bottom CTA Button: Explore All Services */}
        <div className="mt-14 sm:mt-16 text-center">
          <DarkTealButton href="/services">
            Explore All Services
          </DarkTealButton>
        </div>

      </div>
    </section>
  );
}
