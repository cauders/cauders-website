
'use client';

import { Bot, Brush, Code, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import StandardizedHeading from './StandardizedHeading';
import ScrollFadeIn from './ScrollFadeIn';
import ArrowBadge from './ArrowBadge';
import { cn } from '@/lib/utils';
import GradientContainer from './GradientContainer';

const competencies = [
    {
        icon: TrendingUp,
        title: 'Strategy',
        description: 'We define a clear roadmap to success, aligning business goals with digital solutions for maximum impact.',
    },
    {
        icon: Brush,
        title: 'Design',
        description: 'Our team crafts intuitive, engaging, and visually stunning interfaces that elevate user satisfaction.',
    },
    {
        icon: Code,
        title: 'Development',
        description: 'We build high-performance, secure, and scalable applications using cutting-edge technologies.',
    },
    {
        icon: Bot,
        title: 'AI Integration',
        description: 'We bring automation, personalization, and predictive analytics to your digital products.',
    }
];

export default function CoreCompetencies() {
    return (
        <section className="py-16 md:py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollFadeIn className="text-center mb-12">
                    <ArrowBadge href="/services" text="Our Capabilities" variant="black" />
                    <StandardizedHeading lines={["Our Core Capabilities"]} />
                </ScrollFadeIn>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {competencies.map((item, index) => (
                        <ScrollFadeIn key={index} delay={index * 100}>
                            <Card className={cn(
                                "h-full bg-card rounded-2xl shadow-smooth-lift border-0 transition-all duration-300"
                            )}>
                                <CardContent className="p-8 relative flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className={cn(
                                            "rounded-full w-12 h-12 flex items-center justify-center bg-zinc text-white"
                                        )}>
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <p className="text-4xl font-normal text-foreground/10">0{index + 1}</p>
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-semibold font-headline text-foreground mb-2">{item.title}</h3>
                                        <p className="text-sm text-foreground/80">{item.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollFadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
