
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
} from "@/components/ui/carousel"
import { ArrowRight } from "lucide-react";


export default function PortfolioPreview() {
  const projects = getProjects().slice(0, 5); 

  return (
    <section id="portfolio-preview" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <ScrollFadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Work</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl">
            A glimpse into the innovative solutions we've crafted for our clients.
          </p>
        </ScrollFadeIn>
      </div>

      <div className="pl-4 sm:pl-6 lg:pl-8 xl:pl-16 mt-16">
        <Carousel 
          opts={{
            align: "start",
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={project.slug} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4">
                 <ScrollFadeIn style={{ animationDelay: `${index * 150}ms` }}>
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
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                        <div className="drag-overlay">
                          <div className="text-center text-sm">Drag or click</div>
                        </div>
                      </div>
                       <div className="p-4">
                        <h3 className="font-bold text-xl text-foreground">{project.title}</h3>
                        <p className="text-sm text-foreground/70 mt-1">{project.description}</p>
                      </div>
                    </Card>
                  </Link>
                </ScrollFadeIn>
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
