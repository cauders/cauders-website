
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

export default function Testimonials() {
  const testimonials = getProjects()
    .map(p => p.testimonial)
    .filter(t => t !== null);

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
                            <div className="p-1">
                                <Card className="bg-card border-none shadow-none">
                                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                                        <Quote className="w-12 h-12 text-primary mb-6" />
                                        <p className="text-xl md:text-2xl font-medium text-foreground/90 max-w-3xl mb-4">
                                            "{testimonial!.text}"
                                        </p>
                                        <cite className="font-semibold text-foreground not-italic">— {testimonial!.author}</cite>
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
