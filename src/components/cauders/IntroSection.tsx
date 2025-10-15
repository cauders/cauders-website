
'use client';

import ScrollFadeIn from "./ScrollFadeIn";
import StandardizedHeading from "./StandardizedHeading";
import { getServices } from "@/lib/data";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";


export default function IntroSection() {
    const services = getServices().slice(0, 4);

    return (
        <section className="relative z-10 -mt-[50vh] bg-background pt-[50vh]">
            <div className="bg-background rounded-t-[4rem] lg:rounded-t-[6rem] py-20 lg:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <StandardizedHeading lines={["What We Offer"]} />
                        <ScrollFadeIn>
                            <p className="mt-4 text-base md:text-xl text-foreground/70 max-w-3xl mx-auto">
                                Our expertise spans the entire development lifecycle, delivering excellence at every step. From strategy and design to development and support, we provide comprehensive solutions that drive results.
                            </p>
                        </ScrollFadeIn>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <ScrollFadeIn key={service.slug} style={{ animationDelay: `${index * 100}ms` }} className="h-full">
                                <Link href={`/services/${service.slug}`} className="block h-full">
                                    <div className="flip-card h-full min-h-[320px]">
                                        <div className="flip-card-inner relative w-full h-full">
                                            {/* Front of the card */}
                                            <div className="flip-card-front absolute w-full h-full">
                                                <Card className="h-full text-center flex flex-col justify-center items-center bg-card border group">
                                                    <CardHeader>
                                                        <CardTitle className="text-xl md:text-2xl text-foreground font-headline">{service.title}</CardTitle>
                                                    </CardHeader>
                                                </Card>
                                            </div>
                                            {/* Back of the card */}
                                            <div className="flip-card-back absolute w-full h-full">
                                                <Card className={cn("h-full flex flex-col justify-between animated-border-card bg-card border")}>
                                                    <CardHeader>
                                                        <CardTitle className="text-lg text-foreground font-headline">{service.title}</CardTitle>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <ul className="space-y-2 text-left text-xs">
                                                            {service.included.slice(0, 3).map((item, i) => (
                                                                <li key={i} className="flex items-start">
                                                                    <ArrowRight className="w-4 h-4 text-primary mr-2 mt-0.5 shrink-0" />
                                                                    <span className="text-foreground/80">{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </CardContent>
                                                    <div className="p-6 pt-0">
                                                        <Button asChild className="w-full">
                                                            <div>Learn More <ArrowRight className="ml-2 h-4 w-4" /></div>
                                                        </Button>
                                                    </div>
                                                </Card>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </ScrollFadeIn>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <Button size="lg" asChild>
                            <Link href="/services">
                                Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
