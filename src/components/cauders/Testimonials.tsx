
'use client';

import { getProjects } from "@/lib/data";
import {
 Carousel,
 CarouselContent,
 CarouselItem,
 CarouselNext,
 CarouselPrevious,
 type CarouselApi,
} from "@/components/ui/carousel"
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import ScrollFadeIn from "./ScrollFadeIn";
import Autoplay from "embla-carousel-autoplay";
import React, { useState, useEffect, useCallback } from "react";
import StandardizedHeading from "./StandardizedHeading";
import { typography } from "@/lib/typography";
import { Skeleton } from "../ui/skeleton";
import ArrowBadge from "./ArrowBadge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { ArrowUpRight, Quote } from "lucide-react";
import Link from "next/link";


export default function Testimonials() {
 const [testimonials, setTestimonials] = useState<any[]>([]);
 const [loading, setLoading] = useState(true);
 const [api, setApi] = useState<CarouselApi>();
 const [current, setCurrent] = useState(0);

 const plugin = React.useRef(
 Autoplay({ delay: 5000, stopOnInteraction: true })
 );

 useEffect(() => {
 const loadedTestimonials = getProjects()
 .map((p, index) => ({
 ...p.testimonial,
 projectTitle: p.title,
 projectSlug: p.slug,
 imageUrl: `https://picsum.photos/seed/person${index}/100/100` // Placeholder for author
 }))
 .filter(t => t.author && t.text);
 
 setTestimonials(loadedTestimonials);
 setLoading(false);
 }, []);
 
 useEffect(() => {
 if (!api) {
 return;
 }

 setCurrent(api.selectedScrollSnap());

 const handleSelect = () => {
 setCurrent(api.selectedScrollSnap());
 };

 api.on("select", handleSelect);

 return () => {
 api.off("select", handleSelect);
 };
 }, [api]);

 if (testimonials.length === 0 && !loading) {
 return null;
 }

 return (
 <section className="py-16 md:py-20 overflow-hidden">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
 <div className="flex flex-col items-start justify-center gap-2">
 <ScrollFadeIn>
 <ArrowBadge href="#" text="Testimonial" variant="black" />
 </ScrollFadeIn>
 <StandardizedHeading 
 lines={[
 { text: "Trusted by Leaders Across Industries" }
 ]}
 />
 <ScrollFadeIn delay={100}>
 <p className={`mt-2 md:mt-4 ${typography.bodyBase} font-normal text-foreground max-w-2xl`}>
 Our commitment to excellence has earned the trust of industry leaders who rely on us to deliver innovative, high-performance digital solutions.
 </p>
 </ScrollFadeIn>
 </div>
 </div>

 <ScrollFadeIn delay="delay-200" className="w-full">
 <Carousel
 setApi={setApi}
 plugins={[plugin.current]}
 opts={{
 align: "center",
 loop: true,
 watchDrag: false,
 }}
 className="w-full"
 >
 <CarouselContent className="-ml-4 py-8 mb-4 md:mb-8">
 {loading ? (
 Array.from({ length: 3 }).map((_, index) => (
 <CarouselItem key={index} className="sm:basis-1/2 lg:basis-[40%] xl:basis-1/3 pl-4 md:pl-8">
 <div className="p-1 h-full">
 <Skeleton className="w-full h-[200px] lg:h-[280px] rounded-2xl" />
 </div>
 </CarouselItem>
 ))
 ) : (
 testimonials.map((testimonial, index) => {
 const authorParts = testimonial.author.split(',');
 const authorName = authorParts[0].trim();
 let authorPosition = authorParts.length > 1 ? authorParts.slice(1).join(',').trim() : "Client";
 
 // Intelligently strip the project title (and words like 'of'/'at') from the position to avoid redundancy
 // e.g. "CEO of Wokine" + "Wokine" -> "CEO"
 const regex = new RegExp(`\\s*(of|at|-|,)?\\s*${testimonial.projectTitle}\\s*`, "i");
 authorPosition = authorPosition.replace(regex, "").trim();

 if (!authorPosition || authorPosition.toLowerCase() === "client") {
 authorPosition = "Client";
 }

 return (
 <CarouselItem key={index} className="sm:basis-1/2 lg:basis-[40%] xl:basis-1/3 pl-4 md:pl-8">
 <div className={cn("p-1 h-full transition-transform duration-500 ease-out", index === current ? "scale-100 md:scale-105" : "scale-90 opacity-100")}>
 <Link href={`/work/${testimonial.projectSlug}`} className="block h-full group cursor-pointer">
 <Card className="bg-white w-full h-full min-h-[260px] md:min-h-[300px] rounded-[16px] md:rounded-[20px] shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] border border-border/40 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_-5px_rgba(13,148,136,0.2)] transition-all duration-500 flex flex-col justify-between overflow-hidden relative">
 <Quote className="absolute top-6 right-6 w-16 h-16 md:w-24 md:h-24 text-primary/[0.03] rotate-12 -z-0 pointer-events-none" />
 
 <CardContent className="p-6 md:p-8 flex flex-col flex-grow relative z-10 h-full">
 <div>
 <span className="text-muted-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest">
 {testimonial.projectTitle}
 </span>
 </div>
 
 <div className="flex flex-col justify-center flex-grow py-4">
 <p className="text-body-base font-medium text-foreground line-clamp-5">
 "{testimonial!.text}"
 </p>
 </div>
 
 <div className="flex items-center justify-between pt-5 mt-auto border-t border-border/50 w-full">
 <div className="flex items-center gap-3 md:gap-4">
 <Avatar className="w-10 h-10 md:w-12 md:h-12 border border-border/50">
 <AvatarImage src={testimonial.imageUrl} alt={authorName} className="object-cover" />
 <AvatarFallback className="bg-primary/10 text-primary font-bold">{authorName.charAt(0)}</AvatarFallback>
 </Avatar>
 <div className="flex flex-col gap-1">
 <p className="text-body-base font-bold text-foreground leading-none">
 {authorName}
 </p>
 <p className="text-[10px] md:text-xs text-muted-foreground font-medium tracking-wide uppercase line-clamp-1">
 {authorPosition}
 </p>
 </div>
 </div>
 
 <ArrowUpRight className="w-5 h-5 text- transition-all duration-300 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1" />
 </div>
 </CardContent>
 </Card>
 </Link>
 </div>
 </CarouselItem>
 );
 })
 )}
 </CarouselContent>
 <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:mt-8 flex justify-center">
 <CarouselPrevious className="static -translate-x-1 bg-card border-border text-foreground hover:bg-muted" />
 <CarouselNext className="static translate-x-1 bg-card border-border text-foreground hover:bg-muted" />
 </div>
 </Carousel>
 </ScrollFadeIn>
 </section>
 )
}
