'use client';

import { Workflow, BrainCircuit, Layers, SearchCheck } from "lucide-react";
import ScrollFadeIn from "./ScrollFadeIn";
import InfoCard from "./InfoCard";
import StandardizedHeading from "./StandardizedHeading";
import { typography } from "@/lib/typography";

const features = [
  {
    icon: Workflow,
    title: "Built Around Your Workflow",
    description: "Engineered around your operational processes, daily priorities, and long-term business scale."
  },
  {
    icon: BrainCircuit,
    title: "Applied AI With Purpose",
    description: "Practical machine intelligence focused on operational efficiency, measurable ROI, and business impact."
  },
  {
    icon: Layers,
    title: "End-To-End Architecture",
    description: "Scalable, resilient platforms engineered for high-availability reliability, security, and sustained growth."
  },
  {
    icon: SearchCheck,
    title: "Transparent Delivery Model",
    description: "Complete visibility, milestone accountability, and dedicated engineering partnership at every step."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 md:py-20 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <StandardizedHeading lines={[ "Why People Choose Cauders" ]} />
          <ScrollFadeIn>
            <p className={`mt-2 md:mt-4 ${typography.bodyBase} font-normal text-foreground max-w-2xl mx-auto`}>
              We design the architecture, workflows, and governance for long-term growth.
            </p>
          </ScrollFadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <ScrollFadeIn key={feature.title} delay={index * 100} className="h-full">
              <InfoCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                headingPosition="top"
                lineClamp="none"
                className="p-6 md:p-8"
                titleClassName="min-h-[3.5rem] flex items-start"
              />
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
