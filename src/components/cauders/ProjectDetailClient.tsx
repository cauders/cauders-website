
'use client';

import { type Project } from "@/lib/data";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import ScrollFadeIn from './ScrollFadeIn';
import { cn } from "@/lib/utils";

const GalleryItem = ({ item, index }: { item: Project['gallery'][0], index: number }) => {
    if (item.type === 'mobile') {
        return (
            <ScrollFadeIn key={index} style={{ animationDelay: `${index * 100}ms`}}>
                <div className={cn(
                    "mx-auto w-full max-w-[300px] rounded-3xl overflow-hidden shadow-2xl border-4 border-foreground",
                    index % 2 !== 0 && "lg:ml-auto lg:mr-0"
                )}>
                    <Image
                        src={item.url}
                        alt={item.alt}
                        width={400}
                        height={800}
                        className="w-full h-auto"
                        data-ai-hint={item.aiHint}
                    />
                </div>
            </ScrollFadeIn>
        );
    }

    if (item.type === 'web') {
        return (
             <ScrollFadeIn key={index} style={{ animationDelay: `${index * 100}ms`}}>
                <div className="my-16 lg:my-24 rounded-lg overflow-hidden shadow-lg border">
                    <Image
                        src={item.url}
                        alt={item.alt}
                        width={1200}
                        height={800}
                        className="w-full h-auto object-cover"
                        data-ai-hint={item.aiHint}
                    />
                </div>
            </ScrollFadeIn>
        );
    }
    
    return null;
}

export default function ProjectDetailClient({ project }: { project: Project }) {

  return (
     <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left side: Sticky text content */}
            <div className="lg:sticky top-32 h-fit">
                <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-6 font-headline">{project.title}</h1>
                <p className="text-lg text-foreground/70 mb-6">{project.description}</p>
                <div className="prose prose-lg dark:prose-invert text-foreground/80 max-w-none mb-8" dangerouslySetInnerHTML={{ __html: project.details }} />
                
                <h3 className="text-xl font-bold text-foreground mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                </div>

                {project.testimonial && (
                    <div>
                        <h3 className="text-xl font-bold text-foreground mb-4">Testimonial</h3>
                        <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80">
                            <p>"{project.testimonial.text}"</p>
                            <footer className="mt-2 not-italic font-semibold">- {project.testimonial.author}</footer>
                        </blockquote>
                    </div>
                )}
            </div>

            {/* Right side: Scrolling gallery */}
            <div className="relative">
                <div className="flex flex-col gap-16 lg:gap-8">
                     {(project.gallery ?? []).map((item, index) => (
                       <GalleryItem key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
}
