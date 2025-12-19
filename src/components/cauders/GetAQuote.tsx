'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ScrollFadeIn from './ScrollFadeIn';
import GradientContainer from './GradientContainer';
import SplitButton from './SplitButton';

export default function GetAQuote() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/contact?email=${encodeURIComponent(email)}`);
  };

  return (
    <section className="pt-0 pb-16 md:pb-20 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <GradientContainer 
            className="rounded-3xl py-16 md:py-32 px-6 md:px-12 text-center relative overflow-hidden"
            imageSrc="/images/background/overlay-bg-1.svg"
          >
            <div className="relative z-10">
                <h2 className="font-headline text-2xl sm:text-4xl md:text-6xl text-foreground leading-tight font-medium text-white">
                    Have a project in mind? <br className="hidden sm:block"/> Let's Get to Work
                </h2>
                <p className="mt-4 md:mt-8 text-xs md:text-base text-white max-w-2xl mx-auto">
                    We're here to help you turn your vision into reality. Whether you have a detailed plan or just a spark of an idea, our team is ready to listen and collaborate with you.
                </p>
                <form onSubmit={handleSubmit} className="mt-8 md:mt-16 max-w-sm md:max-w-md mx-auto">
                    <SplitButton 
                      emailValue={email}
                      onEmailChange={(e) => setEmail(e.target.value)}
                    />
                </form>
            </div>
          </GradientContainer>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
