
"use client"

import { getProjects } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrollFadeIn from "./ScrollFadeIn";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils";
import React from "react";

export default function PortfolioPreview() {
  const projects = getProjects().slice(0, 5); // Get first 5 for the carousel
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
 
  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section id="portfolio-preview" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-0"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollFadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Work</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            A glimpse into the innovative solutions we've crafted for our clients.
          </p>
        </ScrollFadeIn>

        <Carousel 
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto mt-16 perspective-carousel"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={project.slug} className={cn(
                "md:basis-1/2 lg:basis-2/5 carousel-item-3d",
                {"is-active": current === index + 1},
                {"is-prev": current === index + 2 || (current === 1 && index === projects.length - 1)},
                {"is-next": current === index || (current === projects.length && index === 0)}
              )}>
                <div className="p-1">
                   <Link href={`/portfolio/${project.slug}`} className="block group">
                    <Card className="overflow-hidden h-full transition-all duration-500 bg-card border-none shadow-2xl shadow-black/30 group-hover:shadow-primary/30">
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          width={600}
                          height={450}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          data-ai-hint={project.aiHint}
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                         <div className="absolute bottom-0 left-0 p-6 text-left">
                            <p className="text-sm text-white/80">{project.description}</p>
                            <CardTitle className="mb-2 text-white text-2xl mt-1">{project.title}</CardTitle>
                         </div>
                      </div>
                    </Card>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <ScrollFadeIn className="text-center mt-20">
          <Button size="lg" variant="outline" asChild>
            <Link href="/portfolio">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
