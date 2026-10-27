'use client';

import ScrollFadeIn from './ScrollFadeIn';
import ZincGradientContainer from './ZincGradientContainer';
import WhiteButton from './WhiteButton';
import SectionHeading from './SectionHeading';
import { cn } from '@/lib/utils';

interface GetAQuoteProps {
  title?: string;
  lines?: string[];
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  containerMaxWidth?: string;
  contentMaxWidth?: string;
  headingMaxWidth?: string;
  subheadingMaxWidth?: string;
}

export default function GetAQuote({
  title = "Let's Discuss What You're Looking To Build",
  lines,
  description = "Tell us about the business goal, the challenge you're addressing and the systems involved.",
  ctaText = "Start A Discussion",
  ctaHref = "/contact",
  containerMaxWidth = "max-w-[95rem]",
  contentMaxWidth = "max-w-4xl",
  headingMaxWidth,
  subheadingMaxWidth = "max-w-2xl",
}: GetAQuoteProps) {
  const headingLines = lines || (title ? [title] : [
    "Let's Discuss What You're",
    "Looking To Build"
  ]);

  return (
    <section className="pt-8 sm:pt-10 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className={cn(containerMaxWidth, "mx-auto")}>
        <ScrollFadeIn>
          <ZincGradientContainer
            withRadialGlow={true}
            className="rounded-[2.5rem] p-0 text-center relative overflow-hidden shadow-[0_12px_40px_rgba(0,49,46,0.12)] border-[0.5px] border-primary/20"
          >
            {/*
              The card fits the image completely:
              The image renders with w-full h-auto at its natural aspect ratio,
              fitting the width of the section and placed at the bottom without ANY cropping.
            */}
            <div className="relative w-full min-h-[350px] sm:min-h-[395px] md:min-h-[440px] lg:min-h-[490px] flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/cauders/image/upload/v1792733523/image_370_hjhqlr.png"
                alt=""
                className="w-full h-auto block select-none pointer-events-none absolute bottom-0 inset-x-0"
              loading="lazy" decoding="async" />

              {/* Content overlay using SectionHeading centered directly on top with vertical room */}
              <div className={cn("relative z-10 flex flex-col items-center justify-center mx-auto px-6 sm:px-10 lg:px-16 py-10 sm:py-14 md:py-16", contentMaxWidth)}>
                <SectionHeading
                  lines={headingLines}
                  subheading={description}
                  align="center"
                  headingClassName={cn("!text-white font-medium", headingMaxWidth && `mx-auto ${headingMaxWidth}`)}
                  subheadingClassName={cn("!text-white/80 mx-auto mb-6 sm:mb-8 text-sm sm:text-base md:text-lg font-light leading-relaxed tracking-normal", subheadingMaxWidth)}
                  subheadingMaxWidth={subheadingMaxWidth}
                  className="mb-0"
                />

                <div>
                  <WhiteButton href={ctaHref} size="md">
                    {ctaText}
                  </WhiteButton>
                </div>
              </div>
            </div>
          </ZincGradientContainer>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
