import { getProjects } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrollFadeIn from "./ScrollFadeIn";
import { ArrowRight } from "lucide-react";

export default function PortfolioPreview() {
  // Get first 3 projects for the preview
  const projects = getProjects().slice(0, 3);

  return (
    <section id="portfolio-preview" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Work</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            A glimpse into the innovative solutions we've crafted for our clients.
          </p>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollFadeIn key={project.slug} delay={`delay-${index * 100}`}>
              <Link href={`/portfolio/${project.slug}`} className="block group">
                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 bg-card border">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={project.aiHint}
                    />
                  </div>
                  <CardContent className="p-6">
                    <CardTitle className="mb-2 text-foreground">{project.title}</CardTitle>
                    <p className="text-sm text-foreground/80 line-clamp-2">{project.description}</p>
                  </CardContent>
                </Card>
              </Link>
            </ScrollFadeIn>
          ))}
        </div>

        <ScrollFadeIn className="text-center mt-16">
          <Button size="lg" asChild>
            <Link href="/portfolio">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
