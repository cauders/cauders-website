'use client';

import { getProjects } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Quote } from "lucide-react";
import ScrollFadeIn from "./ScrollFadeIn";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import StandardizedHeading from "./StandardizedHeading";
import Image from "next/image";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import ArrowBadge from "./ArrowBadge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";


export default function Testimonials() {
    const [testimonials, setTestimonials] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

    useEffect(() => {
        const loadedTestimonials = getProjects()
            .map((p, index) => ({
                ...p.testimonial,
                projectTitle: p.title,
                projectSlug: p.slug,
                imageUrl: `https://picsum.photos/seed/person${index}/100/100` // Placeholder for author
            }))
            .filter(t => t.author && t.text);
        
        setTestimonials(loadedTestimonials);
        setLoading(false);
    }, []);

  if (testimonials.length === 0 && !loading) {
    return null;
  }

  return (
    <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollFadeIn>
                <div className="flex flex-col items-start gap-2">
                    <ArrowBadge href="#" text="Testimonial" variant="black" />
                    <StandardizedHeading 
                        lines={[
                            { text: "Trusted by Leaders Across Industries", className: "text-primary" }
                        ]}
                        className="font-medium text-3xl sm:text-4xl md:text-5xl text-left"
                    />
                    <p className="mt-2 text-sm text-foreground/70 max-w-xl">
                        Our commitment to excellence has earned the trust of industry leaders who rely on us to deliver innovative, high-performance digital solutions.
                    </p>
                </div>
            </ScrollFadeIn>
        </div>

        <ScrollFadeIn delay={0.2} className="mt-12">
            <Carousel
                plugins={[plugin.current]}
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-4">
                    {loading ? (
                        Array.from({ length: 3 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-[40%] xl:basis-1/3 pl-8">
                                <div className="p-1 h-full">
                                    <Skeleton className="w-full h-[220px] lg:h-[280px] rounded-2xl" />
                                </div>
                            </CarouselItem>
                        ))
                    ) : (
                        testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-[40%] xl:basis-1/3 pl-8">
                            <div className="p-1 h-full">
                                <Card className="bg-card w-full h-[220px] lg:h-[280px] rounded-2xl shadow-lg flex flex-col justify-between p-6">
                                    <CardContent className="p-0">
                                        <p className="text-base font-semibold text-black line-clamp-5">
                                            "{testimonial!.text}"
                                        </p>
                                    </CardContent>
                                    <div className="flex items-center gap-4 mt-4">
                                        <Avatar>
                                            <AvatarImage src={testimonial.imageUrl} alt={testimonial.author} />
                                            <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <cite className="font-semibold text-sm text-foreground not-italic">{testimonial!.author}</cite>
                                            <p className="text-xs text-foreground/60 mt-0">
                                                Regional Director
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                        ))
                    )}
                </CarouselContent>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex justify-center">
                    <CarouselPrevious className="static -translate-x-1 bg-card border-border text-foreground hover:bg-muted" />
                    <CarouselNext className="static translate-x-1 bg-card border-border text-foreground hover:bg-muted" />
                </div>
            </Carousel>
        </ScrollFadeIn>
    </section>
  )
}
