
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
import { cn } from "@/lib/utils";

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
                                <div className="relative w-full h-full bg-foreground/90 rounded-2xl overflow-hidden p-2">
                                     <div className="absolute top-[-80px] left-[-80px] w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-80"></div>
                                     <div className="absolute bottom-[-80px] right-[-80px] w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-80"></div>
                                    <Card className="glass-effect w-full h-full rounded-xl border-border/20">
                                        <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                                            <p className="text-lg font-medium text-background/90 max-w-3xl mb-4 z-10">
                                                "{testimonial!.text}"
                                            </p>
                                            <cite className="font-semibold text-background not-italic z-10">— {testimonial!.author}</cite>
                                            <p className="text-sm text-background/60 mt-1 z-10">
                                                From the <Link href={`/portfolio/${testimonial.projectSlug}`} className="text-primary/90 hover:underline">{testimonial.projectTitle}</Link> project
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
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
