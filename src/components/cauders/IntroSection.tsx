'use client';

import ScrollFadeIn from "./ScrollFadeIn";
import StandardizedHeading from "./StandardizedHeading";
import Image from "next/image";
import placeholderImages from "@/lib/placeholder-images.json";

export default function IntroSection() {
    const { intro: introImage } = placeholderImages;

    return (
        <section className="relative z-10 bg-background pt-8 -mt-24 rounded-t-3xl">
            <div className="py-20 lg:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollFadeIn>
                        <div className="bg-card rounded-2xl shadow-xl overflow-hidden">
                            <div className="text-center pt-16 pb-12">
                                <StandardizedHeading 
                                    lines={[
                                        { text: "Lorem Ipsum Dolor" },
                                        { text: "Sit Amet, Consectetur", className: "text-primary"},
                                        { text: "Adipiscing"}
                                    ]} 
                                    className="text-4xl md:text-6xl"
                                />
                            </div>

                            <div className="relative aspect-[16/9] w-full">
                               <Image 
                                    src={introImage.imageUrl}
                                    alt="Intro section placeholder"
                                    fill
                                    className="object-cover"
                                    data-ai-hint={introImage.aiHint}
                               />
                            </div>
                        </div>
                    </ScrollFadeIn>
                </div>
            </div>
        </section>
    );
}
