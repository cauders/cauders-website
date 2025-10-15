
"use client";

import { getServices } from "@/lib/data";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import ScrollFadeIn from "./ScrollFadeIn";
import StandardizedHeading from "./StandardizedHeading";
import ArrowBadge from "./ArrowBadge";

export default function ServicesPreview() {
  const services = getServices().slice(0, 4);

  return (
    <section id="services-preview" className="py-20 lg:py-32 bg-gradient-container">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
            <ScrollFadeIn>
                <ArrowBadge href="/services" text="Discover Our Offerings" className="mb-4" />
                <StandardizedHeading lines={["What We Do Best"]} className="font-medium text-3xl sm:text-4xl md:text-5xl text-background" />
                <p className="mt-4 text-sm text-white/80 max-w-2xl mx-auto">
                    At Cauders, we deliver future-ready digital solutions that combine innovation, performance, and scalability. Our expertise spans across multiple domains to help businesses thrive in the evolving tech landscape.
                </p>
            </ScrollFadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ScrollFadeIn key={service.slug} style={{ animationDelay: `${index * 100}ms` }} className="h-full">
                <Card className="h-full bg-card border flex flex-col hover:border-primary hover:-translate-y-2 transition-transform duration-300 group p-6 text-left">
                    <CardHeader className="p-0 flex-row justify-start">
                        <div className="flex-shrink-0 bg-zinc rounded-full p-3 border border-primary/20 group-hover:bg-zinc/90 transition-colors w-fit">
                            <service.icon className="w-6 h-6 text-white" />
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow p-0 mt-4">
                        <CardTitle className="text-xl font-headline text-foreground">{service.title}</CardTitle>
                        <p className="text-sm text-foreground/80 mt-2 line-clamp-2">{service.description}</p>
                    </CardContent>
                    <CardFooter className="p-0 mt-6 justify-start">
                         <Button asChild className="bg-zinc text-white font-normal">
                            <Link href={`/services/${service.slug}`}>
                                Learn More
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
