'use client';

import { Award, BrainCircuit, ShieldCheck, Star } from "lucide-react";
import { Card } from "../ui/card";
import ScrollFadeIn from "./ScrollFadeIn";
import StandardizedHeading from "./StandardizedHeading";

const features = [
    {
        icon: Star,
        text: "We deliver tailored solutions that align with your unique goals and drive measurable results."
    },
    {
        icon: BrainCircuit,
        text: "Our team leverages cutting-edge technology to build innovative and future-proof digital products."
    },
    {
        icon: Award,
        text: "With a focus on quality and performance, we ensure every project meets the highest standards of excellence."
    },
    {
        icon: ShieldCheck,
        text: "Your success is our priority. We build lasting partnerships based on trust, transparency, and collaboration."
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
                    <StandardizedHeading lines={["Why People", { text: "Choose Cauders", className: "bg-gradient-text text-transparent bg-clip-text" }]} />
                    <ScrollFadeIn>
                        <p className="mt-4 text-base text-foreground/70 max-w-2xl mx-auto">
                            We're more than just a digital agency. We're a partner in innovation, committed to delivering excellence and driving measurable results for our clients.
                        </p>
                    </ScrollFadeIn>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-20">
                    {features.map((feature, index) => (
                        <ScrollFadeIn key={index} style={{ animationDelay: `${index * 100}ms` }}>
                            <div className="text-center">
                                <div className="inline-block bg-primary/10 rounded-full p-3 mb-4 border border-primary/20">
                                    <feature.icon className="w-6 h-6 text-primary" />
                                </div>
                                <p className="text-sm text-foreground/80">{feature.text}</p>
                            </div>
                        </ScrollFadeIn>
                    ))}
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {stats.map((stat, index) => (
                        <ScrollFadeIn key={index} style={{ animationDelay: `${(index + 4) * 100}ms` }} className="h-full">
                            <Card className="text-center p-6 md:p-8 bg-primary/20 border-primary/30 h-full flex flex-col justify-center items-center hover:-translate-y-2 transition-transform duration-300">
                                <p className="text-4xl md:text-5xl font-bold text-foreground font-headline">{stat.value}</p>
                                <p className="text-sm md:text-base text-foreground/80 mt-2">{stat.label}</p>
                            </Card>
                        </ScrollFadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}