'use client';

import Image from "next/image";
import Link from "next/link";
import ArrowBadge from "./ArrowBadge";
import SectionHeading from "./SectionHeading";
import ScrollFadeIn from "./ScrollFadeIn";
import DarkTealButton from "./DarkTealButton";

interface WorkflowStep {
  title: string;
  description: string;
  image: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    title: "Business Inputs",
    description: "Bring together the information needed to start a process.",
    image: "https://res.cloudinary.com/cauders/image/upload/v1792721345/Gemini_Generated_Image_kmkiuukmkiuukmki_1_ruh7zx.png",
  },
  {
    title: "Connected Workflow",
    description: "Connect systems, data, and actions into a structured workflow.",
    image: "https://res.cloudinary.com/cauders/image/upload/v1792721346/Gemini_Generated_Image_kmkiuukmkiuukmki_4_aoy0gb.png",
  },
  {
    title: "Validation & Review",
    description: "Ensure information is accurate and ready before it moves forward.",
    image: "https://res.cloudinary.com/cauders/image/upload/v1792721347/Gemini_Generated_Image_kmkiuukmkiuukmki_3_chvoka.png",
  },
  {
    title: "Business Systems",
    description: "Deliver approved outcomes and maintain visibility.",
    image: "https://res.cloudinary.com/cauders/image/upload/v1792721343/Gemini_Generated_Image_kmkiuukmkiuukmki_4-1_ynhffl.png",
  },
];

interface ReliabilityPrinciple {
  icon: string;
  title: string;
  description: string;
}

const reliabilityPrinciples: ReliabilityPrinciple[] = [
  {
    icon: "https://res.cloudinary.com/cauders/image/upload/v1792721330/Database-Check_Streamline_Core_dugrpv.png",
    title: "Data Ownership",
    description:
      "Know where critical information comes from, which systems own each record, and how updates are tracked across your operations.",
  },
  {
    icon: "https://res.cloudinary.com/cauders/image/upload/v1792721261/Magnifer-Bug_Streamline_Solar-Broken_wxicvg.png",
    title: "Exception Handling",
    description:
      "When information is missing or an integration fails, your team has a clear path to review the issue and keep work moving.",
  },
  {
    icon: "https://res.cloudinary.com/cauders/image/upload/v1792721333/Shield-Check-Light_Streamline_Phosphor_yy2zr6.png",
    title: "Reliable Outcomes",
    description:
      "Validate information and apply defined business rules before automated changes reach the systems your teams depend on.",
  },
];

export default function ReliableWorkflowsSection() {
  return (
    <section className="relative z-10 py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      <div className="max-w-[95rem] mx-auto">
        
        {/* Section Header: ArrowBadge + SectionHeading */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <ScrollFadeIn>
            <ArrowBadge
              href="/services"
              text="Engineering in Practice"
              variant="black"
              className="mb-3 md:mb-4"
            />
          </ScrollFadeIn>
          <SectionHeading
            lines={[
              'Designing <span class="text-cyan-gradient font-medium inline-block">Reliable Workflows</span>',
              'Across Systems'
            ]}
            align="center"
            className="text-center"
          />
        </div>

        {/* 4 Connected Pipeline Flow Cards: Card fits the image dimensions directly without cropping */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 items-start">
          {workflowSteps.map((step, idx) => (
            <ScrollFadeIn key={idx} delay={idx * 100} className="w-full">
              <div className="group relative rounded-3xl bg-white dark:bg-card border-0 shadow-[0_6px_25px_rgba(0,49,46,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden w-full">
                
                {/* 
                  The card fits the image: The image renders with w-full h-auto at its natural aspect ratio, 
                  forming the visual foundation of the card, while the text overlays cleanly on top.
                */}
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-auto block transition-transform duration-500 ease-out group-hover:scale-105 pointer-events-none"
                  loading={idx === 0 ? "eager" : "lazy"}
                />

                {/* Top Card Text rendered directly on top of the image */}
                <div className="absolute top-0 inset-x-0 z-10 p-6 sm:p-7 pb-4">
                  <h3 className="text-xl sm:text-2xl font-headline font-semibold text-foreground tracking-tight mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

              </div>
            </ScrollFadeIn>
          ))}
        </div>

        {/* 3 Pillars / Reliability Principles with thin vertical dividers on desktop with expanded width */}
        <ScrollFadeIn delay={250}>
          <div className="mt-16 sm:mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
            {reliabilityPrinciples.map((principle, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center text-center px-2 sm:px-6 ${
                  idx > 0 ? "md:border-l md:border-[#003431]/10" : ""
                }`}
              >
                {/* 2D Outline Icon with circle border matching the reference */}
                <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                  <Image
                    src={principle.icon}
                    alt={principle.title}
                    width={40}
                    height={40}
                    className="object-contain"
                    unoptimized
                  />
                </div>

                {/* Principle Title */}
                <h4 className="text-xl sm:text-2xl font-headline font-bold text-black tracking-tight mb-3 leading-snug">
                  {principle.title}
                </h4>

                {/* Principle Description */}
                <p className="text-sm sm:text-base text-black/70 leading-relaxed font-normal max-w-md">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollFadeIn>

        {/* Bottom Banner: Note styled consistently with SectionHeading subheadings + Discuss Your Workflow CTA */}
        <ScrollFadeIn delay={350}>
          <div className="mt-14 sm:mt-16 md:mt-20 max-w-3xl mx-auto flex flex-col items-center text-center">
            <p className="mt-2 md:mt-3 text-xs sm:text-sm md:text-base text-muted-foreground font-normal leading-relaxed text-center mx-auto mb-6 sm:mb-7">
              Need to streamline existing processes? Let&apos;s discuss your workflow.
            </p>
            <DarkTealButton href="/contact">
              Discuss Your Workflow
            </DarkTealButton>
          </div>
        </ScrollFadeIn>

      </div>
    </section>
  );
}
