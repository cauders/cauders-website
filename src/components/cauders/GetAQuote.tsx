
'use client';

import ScrollFadeIn from './ScrollFadeIn';
import GradientContainer from './GradientContainer';
import SplitButton from './SplitButton';

export default function GetAQuote() {
  return (
    <section className="pt-0 pb-20 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <GradientContainer 
            className="rounded-3xl py-24 md:py-32 px-12 text-center relative overflow-hidden"
            imageSrc="/images/background/overlay-bg-1.svg"
          >
            <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-medium text-white">
                    Have a project in mind? <br/> Let's Get to Work
                </h2>
                <p className="mt-8 text-sm md:text-base text-white max-w-2xl mx-auto">
                    We're here to help you turn your vision into reality. Whether you have a detailed plan or just a spark of an idea, our team is ready to listen and collaborate with you.
                </p>
                <form className="mt-16 max-w-md mx-auto">
                    <SplitButton />
                </form>
            </div>
          </GradientContainer>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
