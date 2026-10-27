'use client';

import React from 'react';
import ScrollFadeIn from './ScrollFadeIn';
import ArrowBadge from './ArrowBadge';
import SectionHeading from './SectionHeading';
import { Target, Cpu, Eye, RefreshCw } from 'lucide-react';

interface StandardItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const standardsData: StandardItem[] = [
  {
    title: 'Business-First Thinking',
    description:
      'Every project starts with the business objective, the people who will use the system, and the constraints it has to work within.',
    icon: <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[2]" />,
  },
  {
    title: 'Purposeful Engineering',
    description:
      'We choose approaches that fit the problem. AI and automation are applied where they add measurable value, with oversight.',
    icon: <Cpu className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[2]" />,
  },
  {
    title: 'Clarity & Transparency',
    description:
      'Scope, responsibilities, progress, constraints, and decisions are communicated directly and kept visible.',
    icon: <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[2]" />,
  },
  {
    title: 'Built to Evolve',
    description:
      'Maintainability and changing requirements are part of every technical decision, so the system can change as the business does.',
    icon: <RefreshCw className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[2]" />,
  },
];

export default function StandardsSection() {
  return (
    <section className="relative z-20 w-full py-16 sm:py-20 md:py-28 bg-zinc-gradient text-white overflow-hidden">

      {/* Background Graphic on the Left Side behind content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 top-0 left-0 w-full lg:w-[55%] z-0 overflow-hidden flex items-end justify-start select-none"
      >
        <img
          src="https://res.cloudinary.com/cauders/image/upload/v1792833068/image_371_r0rqrq.png"
          alt=""
          className="h-full w-auto max-w-none object-contain object-left-bottom opacity-90 select-none pointer-events-none origin-bottom-left scale-[0.85]"
        loading="lazy" decoding="async" />
      </div>

      <div className="relative z-10 max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-14 xl:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="relative z-10 lg:col-span-5 xl:col-span-5 flex flex-col items-start text-left pt-1">
            <ScrollFadeIn>
              <ArrowBadge
                href="#our-standards"
                text="Our Standards"
                variant="white"
                className="mb-4 sm:mb-6"
              />
            </ScrollFadeIn>

            <SectionHeading
              lines={[
                'The Standards Behind Our Decisions'
              ]}
              align="left"
              headingClassName="!text-white font-medium max-w-xl !leading-[1.12]"
              className="mb-0 w-full"
            />
          </div>

          {/* Right Column: 2x2 Grid of Process/Engineering style Cards */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 items-stretch">
              {standardsData.map((item, index) => (
                <ScrollFadeIn key={item.title} delay={index * 100} className="h-full">
                  <div className="group relative rounded-3xl bg-white text-zinc-900 border-0 flex flex-col justify-between p-6 sm:p-7 md:p-8 min-h-[230px] sm:min-h-[250px] shadow-[0_10px_35px_rgba(0,0,0,0.12)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
                    {/* Top Row: Circular Dark Teal Icon Container */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-darkTeal flex items-center justify-center shadow-md flex-shrink-0 mb-5 sm:mb-6 transition-transform duration-300 group-hover:scale-105">
                      {item.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-start">
                      <h3 className="text-xl sm:text-2xl font-headline font-semibold text-zinc-900 tracking-tight mb-2 sm:mb-2.5">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
