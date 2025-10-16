
'use client';

import { getProjects } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import ScrollFadeIn from "./ScrollFadeIn";
import Autoplay from "embla-carousel-autoplay";
import React, { useState, useEffect, useCallback } from "react";
import StandardizedHeading from "./StandardizedHeading";
import { Skeleton } from "../ui/skeleton";
import ArrowBadge from "./ArrowBadge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";


export default function Testimonials() {
    const [testimonials, setTestimonials] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

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
    
    useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap());

        const handleSelect = () => {
            setCurrent(api.selectedScrollSnap());
        };

        api.on("select", handleSelect);

        return () => {
            api.off("select", handleSelect);
        };
    }, [api]);

  if (testimonials.length === 0 && !loading) {
    return null;
  }

  return (
    <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <ScrollFadeIn>
                <div className="flex flex-col items-start gap-2">
                    <ArrowBadge href="#" text="Testimonial" variant="black" />
                    <StandardizedHeading 
                        lines={[
                            { text: "Trusted by Leaders Across Industries" }
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
                setApi={setApi}
                plugins={[plugin.current]}
                opts={{
                    align: "center",
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
                            <div className={cn("p-1 h-full transition-transform duration-500 ease-out", index === current ? "scale-105" : "scale-90 opacity-80")}>
                                <Card className="bg-card w-full h-[220px] lg:h-[280px] rounded-2xl shadow-lg flex flex-col justify-between overflow-hidden">
                                    <CardContent className="p-6 flex-grow">
                                        <p className="text-xl font-semibold text-black line-clamp-5">
                                            "{testimonial!.text}"
                                        </p>
                                    </CardContent>
                                    <CardFooter className="bg-muted p-4">
                                        <div className="flex items-center gap-4">
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
                                    </CardFooter>
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
