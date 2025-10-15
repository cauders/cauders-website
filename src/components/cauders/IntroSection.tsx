'use client';

import ScrollFadeIn from "./ScrollFadeIn";
import StandardizedHeading from "./StandardizedHeading";
import Image from "next/image";
import placeholderImages from "@/lib/placeholder-images.json";

export default function IntroSection() {
    const { intro: introImage } = placeholderImages;

    return (
        <section className="relative z-10 -mt-[50vh] bg-background pt-[50vh]">
            <div className="bg-background rounded-t-[4rem] lg:rounded-t-[6rem] py-20 lg:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                         <StandardizedHeading 
                            lines={[
                                { text: "Lorem Ipsum Dolor" },
                                { text: "Sit Amet, Consectetur", className: "text-primary"},
                                { text: "Adipiscing"}
                            ]} 
                            className="text-4xl md:text-6xl"
                        />
                    </div>

                    <ScrollFadeIn>
                        <div className="relative aspect-[16/9] w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-lg">
                           <Image 
                                src={introImage.imageUrl}
                                alt="Intro section placeholder"
                                fill
                                className="object-cover"
                                data-ai-hint={introImage.aiHint}
                           />
                        </div>
                    </ScrollFadeIn>
                </div>
            </div>
        </section>
    );
}
