"use client";

import GradientContainer from "./GradientContainer";
import ArrowBadge from "./ArrowBadge";
import StandardizedHeading from "./StandardizedHeading";
import PortfolioPreview from "./PortfolioPreview";
import ScrollFadeIn from "./ScrollFadeIn";
import { Button } from "../ui/button";
import Link from "next/link";
import { typography } from "@/lib/typography";

export default function PortfolioSection() {
  return (
    <section id="portfolio-preview">
      <GradientContainer className="py-20 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <ScrollFadeIn>
              <ArrowBadge href="#portfolio-preview" text="Selected Work" />
            </ScrollFadeIn>
            <StandardizedHeading lines={["Explore Our Work"]} className="text-background" />
          </div>
        </div>
        
        <div className="mt-2 md:mt-4 w-full overflow-hidden">
          <PortfolioPreview />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mt-12 md:mt-16 max-w-xl mx-auto">
            <p className={`text-background ${typography.bodyBase} font-normal max-w-2xl mx-auto`}>
              Each project is a testament to our commitment to quality, innovation, and client satisfaction. We blend cutting-edge technology with creative design to deliver solutions that exceed expectations.
            </p>
            <Button asChild variant="outline" className="mt-8 px-12">
              <Link href="/contact">
                Start a Project
              </Link>
            </Button>
          </div>
        </div>
      </GradientContainer>
    </section>
  );
}
