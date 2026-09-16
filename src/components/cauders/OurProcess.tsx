
'use client';

import ScrollFadeIn from './ScrollFadeIn';
import ArrowBadge from './ArrowBadge';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ContainerCard from './ContainerCard';
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
 <GradientContainer className="py-16 md:py-20 lg:py-20">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
 {/* Left Column: Text */}
 <div className="lg:pr-8">
 <div className="flex flex-col items-start gap-4">
 <ScrollFadeIn>
 <ArrowBadge href="#" text="Our Process" />
 </ScrollFadeIn>
 <StandardizedHeading 
 lines={[{ text: "A Process Forged in Excellence" }]} 
 className="text-white text-3xl sm:text-4xl md:text-5xl"
 />
 <ScrollFadeIn delay={100}>
 <p className="text-body-base text- max-w-lg">
 Our process is built to deliver clarity, strategy, and long-term value. Through four essential steps, we ensure every solution is tailored, thoughtful, and built to scale.
 </p>
 </ScrollFadeIn>
 </div>
 </div>
 {/* Right Column: Cards */}
 <div>
 <ScrollFadeIn delay={200}>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
 {processSteps.map((step, index) => (
 <ContainerCard key={index} hoverEffect className="p-4 md:p-6 md:min-h-[200px] flex flex-col">
 <CardHeader className="p-0 flex-grow">
 <CardTitle className="text-body-large lg:text-2xl font-medium font-headline text-foreground">{step.title}</CardTitle>
 </CardHeader>
 <CardContent className="p-0 mt-2">
 <p className="text-body-base text-foreground">{step.description}</p>
 </CardContent>
 </ContainerCard>
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
