
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
    <section id="portfolio-preview" className="py-20 lg:py-32 bg-[#0d091a] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <ScrollFadeIn>
          <h2 className="text-2xl md:text-3xl font-normal text-white">
            Enjoy some of our best work in <span className="text-[#a394f8]">immersive web,</span> <span className="text-[#a394f8]">augmented reality</span> and <span className="text-[#a394f8]">virtual reality experiences</span>
          </h2>
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
                  "basis-[90%] md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4 carousel-item-3d",
                  index === current ? "is-active" : "",
                  index === (current - 1 + projects.length) % projects.length ? "is-prev" : "",
                  index === (current + 1) % projects.length ? "is-next" : ""
                )}
              >
                <div className="h-full w-full">
                  <Link href={`/portfolio/${project.slug}`} className="block group">
                    <Card className="overflow-hidden h-full transition-all duration-500 bg-card rounded-2xl shadow-lg relative border-none">
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
                        <div className="absolute bottom-0 left-0 p-6 z-10">
                          <p className="text-white text-base opacity-70 mb-1">{project.description}</p>
                          <h3 className="font-bold text-xl text-white">{project.title}</h3>
                        </div>
                        {/* Drag or click overlay */}
                        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                          <div className="w-24 h-24 rounded-full bg-[#a394f8] flex items-center justify-center text-white text-sm font-semibold">
                            Drag or click
                          </div>
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-left md:text-left">
        <ScrollFadeIn>
          <Button
            size="lg"
            asChild
            className="rounded-full px-8 py-6 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-colors"
          >
            <Link href="/portfolio">
              Discover more of our work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
