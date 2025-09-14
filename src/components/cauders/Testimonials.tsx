
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
import Image from "next/image";


export default function Testimonials() {
  const testimonials = getProjects()
    .map(p => ({
        ...p.testimonial,
        projectTitle: p.title,
        projectSlug: p.slug,
        imageUrl: p.imageUrl
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
        </div>

        <ScrollFadeIn delay={0.2}>
            <Carousel
                plugins={[plugin.current]}
                opts={{
                    align: "center",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-4">
                    {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-8">
                        <div className="p-1 h-full">
                            <div className="relative w-full h-[320px] rounded-2xl overflow-hidden">
                                <Image
                                    src={testimonial.imageUrl}
                                    alt={testimonial.projectTitle}
                                    fill
                                    className="object-cover"
                                />
                                 <div className="absolute inset-0 bg-black/50"></div>
                                <Card className="glass-effect w-full h-full rounded-2xl border-border/20 bg-transparent">
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
                <CarouselPrevious className="bg-primary/80 text-primary-foreground border-0 hover:bg-primary left-8" />
                <CarouselNext className="bg-primary/80 text-primary-foreground border-0 hover:bg-primary right-8" />
            </Carousel>
        </ScrollFadeIn>
    </section>
  )
}
