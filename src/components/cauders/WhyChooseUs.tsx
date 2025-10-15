'use client';

import { Award, BrainCircuit, ShieldCheck, Star } from "lucide-react";
import { Card } from "../ui/card";
import ScrollFadeIn from "./ScrollFadeIn";
import StandardizedHeading from "./StandardizedHeading";

const features = [
    {
        icon: Star,
        text: "Tailored solutions that align with your unique business goals."
    },
    {
        icon: BrainCircuit,
        text: "Innovative, future-proof products built with cutting-edge technology."
    },
    {
        icon: Award,
        text: "A focus on quality and performance to meet the highest standards."
    },
    {
        icon: ShieldCheck,
        text: "Lasting partnerships built on trust, transparency, and collaboration."
    }
];

const stats = [
    {
        value: "10+",
        label: "Years of Experience"
    },
    {
        value: "50+",
        label: "Projects Completed"
    },
    {
        value: "98%",
        label: "Client Satisfaction"
    },
    {
        value: "15+",
        label: "Team Experts"
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-20 lg:py-32 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 lg:mb-20">
                    <StandardizedHeading lines={[ "Why People Choose Cauders" ]} className="font-medium text-3xl sm:text-4xl md:text-5xl" />
                    <ScrollFadeIn>
                        <p className="mt-4 text-base text-foreground/70 max-w-2xl mx-auto">
                            We're more than an agency; we are your partners in innovation and excellence.
                        </p>
                    </ScrollFadeIn>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">
                    {features.map((feature, index) => (
                        <ScrollFadeIn key={index} style={{ animationDelay: `${index * 100}ms` }}>
                            <div className="flex flex-col items-start gap-4">
                                <div className="flex-shrink-0 bg-primary/10 rounded-full p-3 border border-primary/20">
                                    <feature.icon className="w-6 h-6 text-foreground" />
                                </div>
                                <p className="text-sm text-foreground/80 font-medium">{feature.text}</p>
                            </div>
                        </ScrollFadeIn>
                    ))}
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {stats.map((stat, index) => (
                        <ScrollFadeIn key={index} style={{ animationDelay: `${(index + 4) * 100}ms` }} className="h-full">
                            <Card className="text-center py-8 md:py-10 px-6 bg-primary/20 border-primary/30 h-full flex flex-col justify-center items-center hover:-translate-y-2 transition-transform duration-300">
                                <p className="text-4xl md:text-5xl font-semibold text-foreground font-headline">{stat.value}</p>
                                <p className="text-sm md:text-base text-foreground/80 mt-2">{stat.label}</p>
                            </Card>
                        </ScrollFadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
