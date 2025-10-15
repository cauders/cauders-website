
'use client';

import ScrollFadeIn from "./ScrollFadeIn";
import StandardizedHeading from "./StandardizedHeading";
import { getProjects } from "@/lib/data";
import ChromaGrid from "./ChromaGrid";

export default function IntroSection() {
    const projects = getProjects().slice(0, 6);

    const gridItems = projects.map(p => ({
        id: p.id,
        title: p.title,
        subtitle: p.category,
        image: p.imageUrl,
        url: `https://www.portfolio.cauders.com/${p.slug}`,
        gradient: 'linear-gradient(to bottom right, hsl(var(--primary) / 0.1), transparent, hsl(var(--primary) / 0.1))',
    }));

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
                        <ChromaGrid items={gridItems} columns={3} rows={2} />
                    </ScrollFadeIn>
                </div>
            </div>
        </section>
    );
}
