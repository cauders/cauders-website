'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { optimizeCloudinaryUrl } from '@/lib/seo';

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
  image: string;
  establishes?: string;
  meansForYou?: string;
}

interface ApproachAccordionProps {
  steps: ApproachStep[];
  takeawayLabel?: string;
}

export default function ApproachAccordion({
  steps,
  takeawayLabel = 'What this establishes:',
}: ApproachAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      {steps.map((step, idx) => {
        const isExpanded = activeIndex === idx;
        const takeaway = step.establishes ?? step.meansForYou ?? '';
        const expandedImg = optimizeCloudinaryUrl(step.image, 900);
        const collapsedImg = optimizeCloudinaryUrl(step.image, 400);

        return (
          <div
            key={step.number}
            onMouseEnter={() => setActiveIndex(idx)}
            onClick={() => setActiveIndex(idx)}
            className={cn(
              'w-full rounded-2xl sm:rounded-3xl bg-white text-zinc-900 cursor-pointer overflow-hidden shadow-[0_12px_45px_rgba(0,35,30,0.14)] transition-shadow duration-500 ease-out',
              isExpanded
                ? 'shadow-[0_20px_50px_rgba(0,35,30,0.22)]'
                : 'hover:shadow-2xl'
            )}
          >
            {isExpanded ? (
              <div className="relative min-h-[350px] sm:min-h-[380px] lg:min-h-[400px] flex flex-col justify-between overflow-hidden">
                <div className="pt-8 px-8 sm:pt-10 sm:px-10 lg:pt-11 lg:px-12 pb-6 max-w-xl sm:max-w-2xl lg:max-w-[46rem] z-20">
                  <span className="font-headline font-medium text-4xl sm:text-5xl lg:text-6xl text-zinc-300 mb-5 sm:mb-6 lg:mb-7 block select-none tracking-tight">
                    {step.number}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-semibold font-headline text-black tracking-tight mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-700 font-normal leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {takeaway && (
                  <div className="w-full bg-[#F8F8F8] px-8 py-5 sm:px-10 sm:py-6 lg:px-12 lg:py-6 z-10">
                    <div className="max-w-xl sm:max-w-2xl lg:max-w-[46rem]">
                      <span className="block text-xs sm:text-sm font-semibold text-[#09555A] mb-1 tracking-tight">
                        {takeawayLabel}
                      </span>
                      <p className="text-xs sm:text-sm text-zinc-700 font-normal leading-relaxed">
                        {takeaway}
                      </p>
                    </div>
                  </div>
                )}

                <div
                  className="absolute top-0 right-0 bottom-0 w-[54%] sm:w-[56%] lg:w-[52%] flex items-center justify-end overflow-hidden pointer-events-none select-none z-20"
                  style={{
                    WebkitMaskImage:
                      'linear-gradient(to right, transparent 0%, transparent 12%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.4) 42%, rgba(0,0,0,0.85) 58%, #000 68%)',
                    maskImage:
                      'linear-gradient(to right, transparent 0%, transparent 12%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.4) 42%, rgba(0,0,0,0.85) 58%, #000 68%)',
                  }}
                >
                  <img
                    src={expandedImg}
                    alt={step.title}
                    className="w-full h-full object-contain object-right select-none pointer-events-none scale-105 sm:scale-100"
                    style={{
                      WebkitMaskImage:
                        'linear-gradient(to right, transparent 0%, transparent 12%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.4) 42%, rgba(0,0,0,0.85) 58%, #000 68%)',
                      maskImage:
                        'linear-gradient(to right, transparent 0%, transparent 12%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.4) 42%, rgba(0,0,0,0.85) 58%, #000 68%)',
                    }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            ) : (
              <button
                type="button"
                aria-expanded={false}
                onFocus={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                className="w-full text-left relative h-24 sm:h-28 lg:h-32 flex items-center justify-between pr-8 sm:pr-10 lg:pr-12 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#09555A] focus-visible:ring-inset"
              >
                <div className="flex items-center gap-6 sm:gap-8 lg:gap-12 h-full min-w-0">
                  <div
                    className="h-full w-36 sm:w-44 lg:w-52 flex-shrink-0 flex items-center justify-start overflow-hidden"
                    style={{
                      WebkitMaskImage:
                        'linear-gradient(to right, #000 60%, rgba(0,0,0,0.6) 80%, transparent 100%)',
                      maskImage:
                        'linear-gradient(to right, #000 60%, rgba(0,0,0,0.6) 80%, transparent 100%)',
                    }}
                  >
                    <img
                      src={collapsedImg}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-cover object-left select-none pointer-events-none scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span className="font-headline font-medium text-4xl sm:text-5xl lg:text-6xl text-zinc-300 select-none tracking-tight">
                    {step.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-semibold font-headline text-black tracking-tight truncate">
                    {step.title}
                  </h3>
                </div>

                <span className="sr-only">
                  {step.description} {takeaway ? `${takeawayLabel} ${takeaway}` : ''}
                </span>

                <div className="flex-shrink-0 text-zinc-300" aria-hidden="true">
                  <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.75] transition-transform duration-300" />
                </div>
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
