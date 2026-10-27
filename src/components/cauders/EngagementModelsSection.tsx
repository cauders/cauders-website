'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import ArrowBadge from "./ArrowBadge";
import StandardizedHeading from "./StandardizedHeading";
import ScrollFadeIn from "./ScrollFadeIn";
import ZincGradientContainer from "./ZincGradientContainer";
import WhiteButton from "./WhiteButton";

interface EngagementModel {
  number: string;
  image: string;
  title: string;
  subhead: string;
  description: string;
  promptQuestion: string;
  items: string[];
  ctaText: string;
  ctaHref: string;
}

const engagementModels: EngagementModel[] = [
  {
    number: "01",
    image: "https://res.cloudinary.com/cauders/image/upload/v1792712759/image-Photoroom1_1_hecjtb.png",
    title: "Project-Based Delivery",
    subhead: "Ideal for defined products, platforms, and initiatives.",
    description:
      "Build a new application, improve an existing platform, or implement an AI and automation solution around an agreed scope, priorities, and requirements.",
    promptQuestion: "What do you need us to build or improve?",
    items: [
      "Product development",
      "Platform modernization",
      "AI & automation",
      "Other",
    ],
    ctaText: "Explore Our Services",
    ctaHref: "/services",
  },
  {
    number: "02",
    image: "https://res.cloudinary.com/cauders/image/upload/v1792712760/image-Photoroom3_1_swfron.png",
    title: "Dedicated Teams",
    subhead: "Extend your engineering capacity with a dedicated team.",
    description:
      "Build a team around your product roadmap, with the skills and responsibilities aligned to your technical requirements and delivery priorities.",
    promptQuestion: "What team structure do you need?",
    items: [
      "Software Engineering",
      "Engineering & QA",
      "Cross-functional team",
      "Not sure yet",
    ],
    ctaText: "Explore Dedicated Teams",
    ctaHref: "/services/staff-augmentation/staff-augmentation-offshoring",
  },
  {
    number: "03",
    image: "https://res.cloudinary.com/cauders/image/upload/v1792712759/image-Photoroom4_1_dvnidv.png",
    title: "Strategic Partnerships",
    subhead: "Extend your services and delivery capabilities.",
    description:
      "Work with Cauders to deliver client projects, expand your service offering, or access additional engineering expertise and delivery support.",
    promptQuestion: "What type of partnership fits your business?",
    items: [
      "White-Label Delivery",
      "Referral Partnership",
      "Reseller Partnership",
      "Technology Partner",
    ],
    ctaText: "Explore Partnership Models",
    ctaHref: "/partners",
  },
];

export default function EngagementModelsSection() {
  return (
    <ZincGradientContainer className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[95rem] mx-auto">
        {/* Section Header: ArrowBadge + StandardizedHeading (tightened bottom margin) */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-7 sm:mb-9">
          <ScrollFadeIn>
            <ArrowBadge
              href="/services"
              text="Engagement Models"
              variant="white"
              className="mb-2 md:mb-3"
            />
          </ScrollFadeIn>
          <StandardizedHeading
            lines={['Ways to Work With Cauders']}
            className="text-center font-medium !text-white"
          />
        </div>

        {/* 3 Column Cards Grid with Figma Glassmorphism: Fill 11% Black, 0.5px Primary Stroke, 23px Background Blur */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {engagementModels.map((model, idx) => (
            <ScrollFadeIn key={model.number} delay={idx * 120} className="h-full">
              <div className="group relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full bg-black/[0.11] border-[0.5px] border-primary/40 hover:border-primary/90 hover:bg-black/[0.16] backdrop-blur-[20px] transform-gpu transition-all duration-300 shadow-none hover:-translate-y-1 overflow-hidden">
                
                {/* Top Content */}
                <div>
                  {/* Top Row: Larger 3D Glass Icon + Larger Medium Weight Number */}
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={model.image}
                        alt={model.title}
                        fill
                        sizes="(max-width: 768px) 112px, 128px"
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <span className="font-headline font-medium text-4xl sm:text-5xl lg:text-6xl text-white/40 select-none tracking-tight">
                      {model.number}
                    </span>
                  </div>

                  {/* Title & Subhead - Pure solid white */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
                    {model.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white leading-relaxed font-normal mb-3">
                    {model.subhead}
                  </p>

                  {/* Body description - Pure solid white */}
                  <p className="text-xs sm:text-[0.825rem] text-white leading-relaxed font-normal mb-6">
                    {model.description}
                  </p>

                  {/* Questionnaire Prompt & Bullet Points with Chevrons - Pure solid white */}
                  <div className="pt-3.5 border-t border-white/20">
                    <p className="text-xs sm:text-[0.825rem] font-medium text-white mb-3">
                      {model.promptQuestion}
                    </p>
                    <ul className="space-y-1.5 text-xs sm:text-[0.825rem] text-white">
                      {model.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-2">
                          <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0 stroke-[2.5]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Link with Lucide Arrow Icon - Pure solid white */}
                <div className="pt-6 mt-6 border-t border-white/20">
                  <Link
                    href={model.ctaHref}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white hover:text-primary transition-colors group/cta"
                  >
                    <span>{model.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-1" />
                  </Link>
                </div>

              </div>
            </ScrollFadeIn>
          ))}
        </div>

        {/* Bottom Banner: Note styled consistently with SectionHeading subheadings + Discuss Your Requirements CTA */}
        <ScrollFadeIn delay={300}>
          <div className="mt-9 sm:mt-11 md:mt-12 max-w-5xl mx-auto flex flex-col items-center text-center">
            <p className="mt-2 md:mt-3 text-xs sm:text-sm md:text-base text-white/85 font-normal leading-relaxed text-center mx-auto max-w-4xl mb-5 sm:mb-6">
              Not sure which engagement model fits? Tell us what you&apos;re looking to build, improve, or scale. We can use the initial discussion to understand your requirements and identify an appropriate way to work together.
            </p>
            <WhiteButton href="/contact">
              Discuss Your Requirements
            </WhiteButton>
          </div>
        </ScrollFadeIn>

      </div>
    </ZincGradientContainer>
  );
}
