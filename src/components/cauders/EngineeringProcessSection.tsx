'use client';

import Image from "next/image";
import ArrowBadge from "./ArrowBadge";
import SectionHeading from "./SectionHeading";
import ScrollFadeIn from "./ScrollFadeIn";
import WhiteButton from "./WhiteButton";
import ZincGradientContainer from "./ZincGradientContainer";

interface ProcessStep {
  number: string;
  icon: string;
  title: string;
  description: string;
  meansForYou: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    icon: "https://res.cloudinary.com/cauders/image/upload/v1792728804/Target_Streamline_Core_zi3exq.png",
    title: "Discover & Align",
    description:
      "We learn about your objectives, who the solution is for, the systems involved, and the constraints that need to be considered.",
    meansForYou:
      "A shared understanding of the goals and requirements the solution needs to address.",
  },
  {
    number: "02",
    icon: "https://res.cloudinary.com/cauders/image/upload/v1792728810/Graph-Document-Infected-Report_Streamline_Covid_hf4rd5.png",
    title: "Plan & Design",
    description:
      "We define the scope, map key workflows, establish the technical approach, and identify the criteria used to evaluate the solution.",
    meansForYou:
      "Clarity on what is being built, how it will work, and the direction guiding delivery.",
  },
  {
    number: "03",
    icon: "https://res.cloudinary.com/cauders/image/upload/v1792728803/Desktop-Code_Streamline_Core_sps9gq.png",
    title: "Build & Integrate",
    description:
      "We develop the agreed functionality and integrations, and work through technical challenges as the solution takes shape.",
    meansForYou:
      "Working functionality aligned with the agreed scope and requirements.",
  },
  {
    number: "04",
    icon: "https://res.cloudinary.com/cauders/image/upload/v1792728812/Shield-Check_Streamline_Core_daxhoa.png",
    title: "Validate & Handover",
    description:
      "We validate critical workflows, address identified issues, and document the delivered solution.",
    meansForYou:
      "Clear understanding of what has been delivered, how it works, and what comes next.",
  },
];

export default function EngineeringProcessSection() {
  return (
    <ZincGradientContainer className="py-16 sm:py-20 md:py-24 px-0">
      {/* Background geometry graphic from image_371: fully covers width and height without top/bottom cropping */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden w-full h-full"
      >
        <img
          src="https://res.cloudinary.com/cauders/image/upload/v1792728816/image_371_lklhny.png"
          alt=""
          className="w-full h-full object-fill select-none pointer-events-none"
        loading="lazy" decoding="async" />
      </div>

      <div className="relative z-10 max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: ArrowBadge + SectionHeading + Subheading */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <ScrollFadeIn>
            <ArrowBadge
              href="/process"
              text="Engineering Process"
              variant="white"
              className="mb-3 md:mb-4"
            />
          </ScrollFadeIn>
          <SectionHeading
            lines={["From Discovery To Delivery"]}
            subheading="Here's what to expect when you work with Cauders, from understanding what needs to be built to delivering and handing over a solution aligned with your goals."
            align="center"
            headingClassName="!text-white font-medium"
            subheadingClassName="!text-white/80 max-w-2xl mx-auto"
            subheadingMaxWidth="max-w-2xl"
          />
        </div>

        {/* 2x2 Grid of Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {processSteps.map((step, idx) => (
            <ScrollFadeIn key={step.number} delay={idx * 100} className="h-full">
              <div className="group relative rounded-3xl bg-white text-zinc-900 border-0 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.12)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
                {/* Top Section */}
                <div className="p-6 sm:p-7 pb-4 sm:pb-5">
                  {/* Icon + Number Row */}
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    {/* Circular Dark Teal Icon Container */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-darkTeal flex items-center justify-center shadow-md flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={step.icon}
                        alt={step.title}
                        width={26}
                        height={26}
                        className="w-6 h-6 sm:w-7 sm:h-7 object-contain brightness-0 invert"
                        unoptimized
                      />
                    </div>

                    {/* Step Number in Montserrat Medium */}
                    <span className="font-headline font-medium text-4xl sm:text-5xl lg:text-6xl text-zinc-300 select-none tracking-tight">
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-headline font-semibold text-black !text-black tracking-tight mb-2 sm:mb-2.5">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Sub-card / Callout: "What this means for you:" */}
                <div className="bg-[#F8FAF9] border-t border-zinc-100 px-6 sm:px-7 py-4 sm:py-5">
                  <h4 className="text-xs font-headline font-semibold text-darkTeal mb-1 tracking-wide">
                    What this means for you:
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                    {step.meansForYou}
                  </p>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        {/* Bottom CTA: Start A Project Discussion */}
        <ScrollFadeIn delay={400}>
          <div className="mt-12 sm:mt-16 flex justify-center">
            <WhiteButton href="/contact" size="md">
              Start A Project Discussion
            </WhiteButton>
          </div>
        </ScrollFadeIn>
      </div>
    </ZincGradientContainer>
  );
}
