
"use client";

import GradientContainer from "./GradientContainer";
import ArrowBadge from "./ArrowBadge";
import StandardizedHeading from "./StandardizedHeading";
import PortfolioPreview from "./PortfolioPreview";
import ScrollFadeIn from "./ScrollFadeIn";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PortfolioSection() {
  return (
    <section id="portfolio-preview">
      <GradientContainer className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="flex flex-col items-center justify-center gap-4">
              <ArrowBadge href="https://www.portfolio.cauders.com/" text="Our Portfolio" />
              <StandardizedHeading lines={["Explore Our Work"]} className="font-medium text-3xl sm:text-4xl md:text-5xl text-background" />
            </div>
          </ScrollFadeIn>
          
          <div className="mt-12">
            <PortfolioPreview />
          </div>

          <div className="text-center mt-16 max-w-xl mx-auto">
            <p className="text-background text-base">
              Each project is a testament to our commitment to quality, innovation, and client satisfaction. We blend cutting-edge technology with creative design to deliver solutions that exceed expectations.
            </p>
            <Button asChild variant="outline" className="mt-8 bg-transparent border-2 border-white text-white hover:bg-white hover:text-foreground px-8">
              <Link href="https://www.portfolio.cauders.com/">
                See All
              </Link>
            </Button>
          </div>
        </div>
      </GradientContainer>
    </section>
  );
}
