
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
import { Quote } from "lucide-react";
import ScrollFadeIn from "./ScrollFadeIn";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import React from "react";
import StandardizedHeading from "./StandardizedHeading";

export default function Testimonials() {
  const testimonials = getProjects()
    .map(p => ({
        ...p.testimonial,
        projectTitle: p.title,
        projectSlug: p.slug
    }))
    .filter(t => t.author && t.text);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <StandardizedHeading lines={["What Our Clients Say"]} />
            </div>

            <ScrollFadeIn delay="delay-200">
                <Carousel
                    plugins={[plugin.current]}
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    className="w-full max-w-4xl mx-auto"
                >
                    <CarouselContent className="-ml-4">
                        {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                            <div className="p-1 h-full">
                                <div className="relative w-full h-[320px] bg-foreground/90 rounded-2xl overflow-hidden">
                                     <div className="absolute top-[-80px] left-[-80px] w-64 h-64 bg-primary/30 rounded-full blur-3xl opacity-80"></div>
                                     <div className="absolute bottom-[-80px] right-[-80px] w-64 h-64 bg-primary/30 rounded-full blur-3xl opacity-80"></div>
                                    <Card className="glass-effect w-full h-full rounded-2xl border-border/20">
                                        <CardContent className="relative z-10 flex flex-col items-center justify-center p-8 text-center h-full">
                                            <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/80" />
                                            <p className="text-sm font-medium text-white max-w-3xl line-clamp-5">
                                                "{testimonial!.text}"
                                            </p>
                                            <cite className="font-semibold text-xs text-background not-italic mt-4">— {testimonial!.author}</cite>
                                            <p className="text-xs text-background/60 mt-1">
                                                From the <Link href={`https://www.portfolio.cauders.com/${testimonial.projectSlug}`} className="text-primary/90 hover:underline">{testimonial.projectTitle}</Link> project
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-primary/80 text-primary-foreground border-0 hover:bg-primary" />
                    <CarouselNext className="bg-primary/80 text-primary-foreground border-0 hover:bg-primary" />
                </Carousel>
            </ScrollFadeIn>
        </div>
    </section>
  )
}
