'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollFadeIn from "./ScrollFadeIn";

interface OfferingCard {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  image: string;
}

const offerings: OfferingCard[] = [
  {
    title: "Build a Product",
    description:
      "Turn a product concept or business requirement into an application or platform designed to support real business needs.",
    ctaText: "Explore Product Engineering",
    ctaHref: "/services/software-solutions/custom-software-development",
    image: "https://res.cloudinary.com/cauders/image/upload/v1792672690/image_360_phcbg7.png",
  },
  {
    title: "Modernize & Connect Systems",
    description:
      "Improve existing applications, connect disconnected tools and bring business systems into a more coherent architecture.",
    ctaText: "Explore Platform Modernization",
    ctaHref: "/services/cloud-digital-transformation/cloud-transformation",
    image: "https://res.cloudinary.com/cauders/image/upload/v1792672689/image_357_mam96x.png",
  },
  {
    title: "Automate Workflows",
    description:
      "Connect processes and data to reduce repetitive manual work and create more efficient, consistent workflows.",
    ctaText: "Explore AI & Automation",
    ctaHref: "/ai/ai-product-engineering/custom-ai-development",
    image: "https://res.cloudinary.com/cauders/image/upload/v1792672689/image_358_tmavsd.png",
  },
];

export default function IntroSection() {
  return (
    <div className="relative z-10 pt-0 px-4 sm:px-6 lg:px-8 pb-0 md:pb-2">
      {/* Container with rounded top and seamless bottom fade */}
      <div className="rounded-t-[44px] md:rounded-t-[56px] bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-transparent relative pb-4 sm:pb-6 md:pb-8 pt-8 sm:pt-10 md:pt-12 px-4 sm:px-8 lg:px-12 max-w-[95rem] mx-auto">
        {/* Section Heading & Subheading using reusable SectionHeading */}
        <SectionHeading
          lines={[
            'Technology Aligned to <span class="text-cyan-gradient font-medium inline-block">Your Business Goals</span>'
          ]}
          subheading="Start with what you need to build, improve or automate. Explore the engineering approach that fits your business requirement."
          align="left"
          subheadingMaxWidth="max-w-5xl"
        />

        {/* 3 Offerings Cards Grid: Expanded max-w-[95rem] and generous gap so headings don't wrap to a second line */}
        <div className="mt-12 md:mt-16 w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          {offerings.map((card, idx) => (
            <ScrollFadeIn key={idx} delay={idx * 120} className="h-full">
              <div className="group rounded-3xl bg-[#F8F9FA] dark:bg-card/70 border-0 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden h-full min-h-[480px] sm:min-h-[520px] lg:min-h-[550px]">
                {/* Card Header Content with balanced top padding */}
                <div className="px-6 sm:px-8 lg:px-9 pt-9 sm:pt-11 lg:pt-12 pb-0">
                  <h3 className="text-lg sm:text-xl lg:text-[1.35rem] xl:text-2xl font-semibold text-foreground tracking-tight whitespace-nowrap">
                    {card.title}
                  </h3>
                  <p className="mt-3.5 text-sm sm:text-base text-muted-foreground leading-relaxed font-normal min-h-[4rem]">
                    {card.description}
                  </p>

                  {/* CTA Link */}
                  <div className="mt-5 sm:mt-6">
                    <Link
                      href={card.ctaHref}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-darkTeal hover:text-darkTeal/80 transition-colors group/link"
                    >
                      <span>{card.ctaText}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Card Illustration Image: Flush against the bottom without padding, scaled smoothly */}
                <div className="relative w-full aspect-[4/3] mt-6 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 450px"
                    className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
