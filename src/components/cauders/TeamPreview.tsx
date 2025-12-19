'use client';

import { teamMembers } from "@/lib/team-data";
import ArrowBadge from "./ArrowBadge";
import StandardizedHeading from "./StandardizedHeading";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import ScrollFadeIn from "./ScrollFadeIn";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import React, { useState, useEffect } from "react";
import { Github, Linkedin, Twitter } from 'lucide-react';
import { cn } from "@/lib/utils";


export default function TeamPreview() {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    );
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if (!api) {
          return
        }
    
        setCurrent(api.selectedScrollSnap())
    
        api.on("select", () => {
          setCurrent(api.selectedScrollSnap())
        })
    }, [api])


    return (
        <section className="py-16 md:py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
                <ScrollFadeIn className="text-center">
                    <ArrowBadge href="/team" text="Meet the Experts" variant="black" />
                    <StandardizedHeading lines={["The Minds Behind <span class='bg-gradient-text text-transparent bg-clip-text'>Our Success</span>"]} />
                </ScrollFadeIn>

                <ScrollFadeIn delay={200} className="mt-8 md:mt-12">
                     <Carousel
                        setApi={setApi}
                        plugins={[plugin.current]}
                        opts={{
                            align: "center",
                            loop: true,
                        }}
                        className="w-full"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                    >
                        <CarouselContent className="-ml-4 py-4">
                            {teamMembers.map((member, index) => (
                                <CarouselItem key={index} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 group">
                                    <div className="p-1 h-full">
                                        <Card className={cn(
                                            "relative h-64 md:h-80 w-full rounded-2xl overflow-hidden transition-all duration-500 ease-in-out",
                                            index === current ? "scale-100 md:scale-105" : "scale-90"
                                        )}>
                                            <Image
                                                src={member.imageUrl}
                                                alt={member.name}
                                                fill
                                                className="object-cover rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="absolute inset-0 flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="p-4 rounded-xl glass-effect border-none">
                                                    <h3 className="text-lg font-bold font-headline">{member.name}</h3>
                                                    <p className="text-primary text-xs font-medium">{member.role}</p>
                                                    <p className="text-xs text-white/90 mt-2 line-clamp-2">{member.bio}</p>
                                                    <div className="flex items-center gap-1 mt-3">
                                                        {member.socials.linkedin && (
                                                            <Button variant="ghost" size="icon" className="w-6 h-6" asChild>
                                                                <Link href={member.socials.linkedin} target="_blank" aria-label="LinkedIn">
                                                                    <Linkedin className="h-4 w-4 text-white/80 hover:text-primary" />
                                                                </Link>
                                                            </Button>
                                                        )}
                                                        {member.socials.github && (
                                                            <Button variant="ghost" size="icon" className="w-6 h-6" asChild>
                                                                <Link href={member.socials.github} target="_blank" aria-label="GitHub">
                                                                    <Github className="h-4 w-4 text-white/80 hover:text-primary" />
                                                                </Link>
                                                            </Button>
                                                        )}
                                                        {member.socials.twitter && (
                                                            <Button variant="ghost" size="icon" className="w-6 h-6" asChild>
                                                                <Link href={member.socials.twitter} target="_blank" aria-label="Twitter">
                                                                    <Twitter className="h-4 w-4 text-white/80 hover:text-primary" />
                                                                </Link>
                                                            </Button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden sm:flex" />
                        <CarouselNext className="hidden sm:flex" />
                    </Carousel>
                </ScrollFadeIn>

                <ScrollFadeIn delay={300} className="text-center max-w-2xl mx-auto mt-8 md:mt-12">
                    <p className="text-sm text-foreground/70">
                        Our diverse team of fintech engineers, financial analysts, and designers share one goal: to build a better future for your finances. With backgrounds from top institutions and startups alike, we blend precision with creativity in everything we do.
                    </p>
                    <Button asChild variant="zinc" size="lg" className="mt-8">
                        <Link href="/team">Meet The Entire Team</Link>
                    </Button>
                </ScrollFadeIn>
            </div>
        </section>
    );
}
