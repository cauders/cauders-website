
"use client";

import { getServices } from "@/lib/data";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import ScrollFadeIn from "./ScrollFadeIn";
import StandardizedHeading from "./StandardizedHeading";

export default function ServicesPreview() {
  const services = getServices().slice(0, 4);

  return (
    <section id="services-preview" className="py-20 lg:py-32 bg-gradient-container">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
            <ScrollFadeIn>
                <div className="flex items-center justify-center gap-2 text-sm text-background/80 mb-4">
                  <ChevronLeft className="w-4 h-4" />
                  <p>Discover Our Offerings</p>
                  <ChevronRight className="w-4 h-4" />
                </div>
                <StandardizedHeading lines={["What We Do Best"]} className="text-background" />
            </ScrollFadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ScrollFadeIn key={service.slug} style={{ animationDelay: `${index * 100}ms` }} className="h-full">
                <Card className="h-full bg-card border flex flex-col hover:border-primary hover:-translate-y-2 transition-transform duration-300 group p-6">
                    <CardHeader className="flex-row items-center gap-4 p-0">
                        <div className="flex-shrink-0 bg-primary/10 rounded-full p-3 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                            <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <CardTitle className="text-xl font-headline text-foreground">{service.title}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow p-0 mt-4">
                        <p className="text-sm text-foreground/80">{service.description}</p>
                    </CardContent>
                    <CardFooter className="p-0 mt-4">
                         <Button asChild variant="link" className="px-0 text-primary">
                            <Link href={`/services/${service.slug}`}>
                                Learn More <ArrowRight className="ml-2" />
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
