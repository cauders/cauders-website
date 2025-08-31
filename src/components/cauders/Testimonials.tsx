
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

export default function Testimonials() {
  const testimonials = getProjects()
    .map(p => ({
        ...p.testimonial,
        projectTitle: p.title,
        projectSlug: p.slug
    }))
    .filter(t => t.author && t.text);

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollFadeIn className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">What Our Clients Say</h2>
                <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
                    We're proud to have partnered with amazing companies.
                </p>
            </ScrollFadeIn>

            <ScrollFadeIn delay="delay-200">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                          delay: 5000,
                          stopOnInteraction: true,
                        }),
                    ]}
                    className="w-full max-w-4xl mx-auto"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1 h-[320px]">
                                <Card className="bg-card border-none shadow-none h-full">
                                    <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full relative">
                                        <Quote className="absolute top-6 left-6 w-16 h-16 text-primary/10 -z-0" strokeWidth={1}/>
                                        <Quote className="absolute bottom-6 right-6 w-16 h-16 text-primary/10 -z-0 transform -scale-x-100 -scale-y-100" strokeWidth={1}/>
                                        <p className="text-lg font-medium text-foreground/90 max-w-3xl mb-4 z-10">
                                            "{testimonial!.text}"
                                        </p>
                                        <cite className="font-semibold text-foreground not-italic z-10">— {testimonial!.author}</cite>
                                        <p className="text-sm text-foreground/60 mt-1 z-10">
                                            From the <Link href={`/portfolio/${testimonial.projectSlug}`} className="text-primary hover:underline">{testimonial.projectTitle}</Link> project
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </ScrollFadeIn>
        </div>
    </section>
  )
}
