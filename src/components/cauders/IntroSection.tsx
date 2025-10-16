'use client';

import StandardizedHeading from "./StandardizedHeading";
import Image from "next/image";
import placeholderImages from "@/lib/placeholder-images.json";
import BlurCircle from "./BlurCircle";

export default function IntroSection() {
    const { intro: introImage } = placeholderImages;

    return (
        <div className="relative z-10 pt-8 px-4 sm:px-6 lg:px-8 pb-16">
            <div className="rounded-2xl shadow-xl overflow-hidden bg-card relative">
                <BlurCircle className="w-96 h-96 top-1/2 -translate-y-1/2 right-0" />
                <div className="text-center py-32 relative z-10">
                    <StandardizedHeading 
                        lines={[
                            { text: "Transforming Visionary" },
                            { text: "Ideas Into Powerful & Creative" },
                            { text: "Digital Experiences"}
                        ]} 
                        className="text-4xl md:text-6xl text-foreground"
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
        </div>
    );
}
