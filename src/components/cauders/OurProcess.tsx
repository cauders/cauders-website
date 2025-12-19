
'use client';

import ScrollFadeIn from './ScrollFadeIn';
import ArrowBadge from './ArrowBadge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import GradientContainer from './GradientContainer';
import StandardizedHeading from './StandardizedHeading';

const processSteps = [
  {
    title: 'Initial Consultation',
    description: 'We start with a deep dive into your business goals, challenges, and vision.',
  },
  {
    title: 'Needs Assessment',
    description: 'Our team analyzes your needs to identify key opportunities for growth.',
  },
  {
    title: 'Strategy Development',
    description: 'We craft a custom strategy based on data-driven insights and expertise.',
  },
  {
    title: 'Ongoing Support',
    description: 'Our partnership continues with dedicated support to ensure long-term success.',
  },
];

export default function OurProcess() {
  return (
    <section>
        <GradientContainer className="py-16 md:py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
                    {/* Left Column: Text */}
                    <div className="lg:pr-8">
                        <ScrollFadeIn>
                            <div className="flex flex-col items-start gap-4">
                                <ArrowBadge href="#" text="Our Process" />
                                <StandardizedHeading 
                                    lines={[{ text: "A Process Forged in Excellence" }]} 
                                    className="text-white text-3xl sm:text-4xl md:text-5xl"
                                />
                                <p className="text-sm md:text-base text-white/80 max-w-lg">
                                    Our process is built to deliver clarity, strategy, and long-term value. Through four essential steps, we ensure every solution is tailored, thoughtful, and built to scale.
                                </p>
                            </div>
                        </ScrollFadeIn>
                    </div>
                    {/* Right Column: Cards */}
                    <div>
                        <ScrollFadeIn delay={200}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                {processSteps.map((step, index) => (
                                    <Card key={index} className="bg-card border-0 p-4 md:p-6 rounded-2xl shadow-smooth-lift md:min-h-[200px] hover:-translate-y-1 transition-transform duration-300 flex flex-col">
                                        <CardHeader className="p-0 flex-grow">
                                            <CardTitle className="text-lg md:text-xl lg:text-2xl font-medium font-headline text-foreground">{step.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-0 mt-2">
                                            <p className="text-xs md:text-sm text-foreground/80">{step.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </ScrollFadeIn>
                    </div>
                </div>
            </div>
        </GradientContainer>
    </section>
  );
}
