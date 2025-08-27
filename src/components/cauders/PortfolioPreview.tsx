
"use client"

import { getProjects } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrollFadeIn from "./ScrollFadeIn";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { ArrowRight } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";


export default function PortfolioPreview() {
  const projects = getProjects().slice(0, 5); 
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
 
  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCurrent(api.selectedScrollSnap())
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section id="portfolio-preview" className="py-20 lg:py-32 bg-secondary/30 relative overflow-hidden backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <ScrollFadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Work</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl">
            A glimpse into the innovative solutions we've crafted for our clients.
          </p>
        </ScrollFadeIn>
      </div>

      <div className="w-full mt-16 perspective-carousel">
        <Carousel 
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem 
                key={project.slug} 
                className={cn(
                    "md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4 carousel-item-3d",
                    index === current ? "is-active" : "",
                    index === (current - 1 + projects.length) % projects.length ? "is-prev" : "",
                    index === (current + 1) % projects.length ? "is-next" : ""
                )}
              >
                <div className="h-full w-full">
                  <Link href={`/portfolio/${project.slug}`} className="block group">
                    <Card className="overflow-hidden h-full transition-all duration-500 bg-card border rounded-lg shadow-lg relative">
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          width={600}
                          height={450}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          data-ai-hint={project.aiHint}
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                         <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="font-bold text-xl text-white">{project.title}</h3>
                         </div>
                      </div>
                    </Card>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <ScrollFadeIn>
          <Button size="lg" asChild>
            <Link href="/portfolio">
              Discover more of our work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </ScrollFadeIn>
      </div>

    </section>
  );
}
