'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import ScrollFadeIn from '@/components/cauders/ScrollFadeIn';
import ArrowBadge from '@/components/cauders/ArrowBadge';
import SectionHeading from '@/components/cauders/SectionHeading';
import DarkTealButton from '@/components/cauders/DarkTealButton';
import StandardsSection from '@/components/cauders/StandardsSection';
import WhoWeAreSection from '@/components/cauders/WhoWeAreSection';
import WhyCaudersPartnership from '@/components/cauders/WhyCaudersPartnership';
import FAQPreview, { FAQ } from './FAQPreview';
import GetAQuote from './GetAQuote';

const aboutFaqs: FAQ[] = [
  {
    question: "What kind of company is Cauders?",
    answer:
      "Cauders is an engineering-first software development company based in Lahore, Pakistan. We design, build, and maintain custom software applications, modern platforms, applied AI integrations, and automated operational workflows for growing companies and enterprise teams.",
  },
  {
    question: "How does Cauders work with partner companies and founders?",
    answer:
      "We engage as long-term engineering partners, dedicated technical pods, or on fixed-scope projects. We work directly with founders, CTOs, product managers, and internal engineering teams to solve complex architectural challenges and deliver production-ready software.",
  },
  {
    question: "Do we need a full technical specification before reaching out?",
    answer:
      "No. A clear overview of your business goal, current challenges, and the systems involved is enough to start. Our leadership team helps clarify requirements, assess technical constraints, and outline a practical roadmap.",
  },
  {
    question: "What engineering standards and practices do you follow?",
    answer:
      "Every project is guided by our four core standards: business-first thinking, purposeful engineering, complete transparency, and built to evolve. We prioritize maintainable codebases, rigorous code reviews, automated testing, and secure-by-design architectures.",
  },
  {
    question: "Can Cauders modernize or scale our existing systems?",
    answer:
      "Yes. We specialize in analyzing legacy infrastructure, refactoring fragile codebases, breaking down monoliths into modern services, and introducing AI or workflow automation without disrupting ongoing business operations.",
  },
];

export default function AboutPageContent() {
  return (
    <div className="relative w-full bg-gradient-to-b from-white via-white to-transparent text-foreground">
      {/* Hero section */}
      <section className="relative w-full min-h-[620px] sm:min-h-[680px] lg:min-h-[760px] xl:min-h-[820px] bg-transparent flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
        {/* Background 3D glass illustration aligned to right - perfectly flush to bottom */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[68%] xl:w-[64%] flex items-end justify-end overflow-hidden pointer-events-none select-none z-0">
          <img
            src="https://res.cloudinary.com/cauders/image/upload/v1792827587/Gemini_Generated_Image_4u4g1b4u4g1b4u4g_cihgix.jpg"
            alt="About Cauders - Who You Build With Shapes What Gets Delivered"
            className="w-full h-full object-cover object-bottom lg:object-contain lg:object-bottom-right max-w-none opacity-90 lg:opacity-100 scale-100 lg:scale-[0.98] origin-bottom-right translate-y-[2px]"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 10%, rgba(0,0,0,1) 28%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 10%, rgba(0,0,0,1) 28%)',
            }}
          loading="lazy" decoding="async" />
        </div>

        {/* Content on the left side of the hero */}
        <div className="relative z-10 w-full">
          <div className="max-w-[95rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl lg:max-w-2xl text-left">
              {/* ArrowBadge: > About Cauders < */}
              <ScrollFadeIn>
                <ArrowBadge
                  href="#about-content"
                  text="About Cauders"
                  variant="black"
                  className="mb-3 sm:mb-5"
                />
              </ScrollFadeIn>

              {/* Standardized SectionHeading */}
              <SectionHeading
                as="h1"
                lines={[
                  'Who You Build With Shapes',
                  'What <span class="text-cyan-gradient font-medium inline-block">Gets Delivered</span>'
                ]}
                subheading="We bring software engineering, AI, and automation together to help businesses build products, connect systems, improve operations, and address technical challenges."
                align="left"
                subheadingMaxWidth="max-w-xl"
                subheadingClassName="text-xs sm:text-sm md:text-base lg:text-lg text-foreground/80 dark:text-zinc-300 leading-relaxed font-normal mb-6 sm:mb-8"
                className="mb-0"
              />

              {/* CTA Button */}
              <ScrollFadeIn delay={250}>
                <div className="pt-1">
                  <DarkTealButton href="/contact" size="md">
                    Start A Conversation
                  </DarkTealButton>
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </div>

        {/* Full-width Vibrant Cyan Gradient Divider directly attached to bottom of Hero */}
        <div
          aria-hidden="true"
          className="w-full absolute bottom-0 inset-x-0 z-30 pointer-events-none"
        >
          <div className="w-full h-[8px] sm:h-[10px] bg-gradient-to-r from-[#8CEAE5] via-[#00645F] to-[#003B38]" />
        </div>
      </section>

      {/* Main content under hero */}
      <div id="about-content" className="relative w-full">
        {/* Who We Are & Founders Section */}
        <WhoWeAreSection />

        {/* The Standards Behind Our Decisions Section */}
        <StandardsSection />

        {/* Why Cauders - A Partnership Built on Clarity (Moved under Our Standards) */}
        <WhyCaudersPartnership />

        {/* Subsequent sections */}
        <FAQPreview
          faqs={aboutFaqs}
          badgeText="About FAQs"
          badgeHref="#about-faq"
        />

        <GetAQuote
          title="Now That You Know Us, Let's See If We're the Right Fit"
          description="Tell us about your business, your plans, or the kind of engineering relationship you're looking for."
          subheadingMaxWidth="max-w-lg"
          ctaText="Start a Conversation"
          ctaHref="/contact"
        />
      </div>
    </div>
  );
}
