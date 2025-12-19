
'use client';

import { getServices } from "@/lib/data";
import ScrollFadeIn from "./ScrollFadeIn";
import StandardizedHeading from "./StandardizedHeading";
import ArrowBadge from "./ArrowBadge";
import GradientContainer from "./GradientContainer";
import ServiceCard from "./ServiceCard";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";


export default function ServicesPreview() {
  const services = getServices().slice(0, 4);

  return (
    <section id="services-preview">
      <GradientContainer className="py-16 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <ScrollFadeIn>
                  <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
                    <ArrowBadge href="/services" text="Our Services" />
                    <StandardizedHeading lines={["What We Do Best"]} className="text-background" />
                  </div>
              </ScrollFadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ScrollFadeIn key={service.slug} delay={index * 100}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  ctaText="Learn More"
                />
              </ScrollFadeIn>
            ))}
          </div>

          <div className="text-center mt-12 md:mt-16">
            <Button variant="outline" asChild className={cn("bg-transparent text-white hover:bg-black", "border-white hover:border-black")}>
                <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </GradientContainer>
    </section>
  );
}
