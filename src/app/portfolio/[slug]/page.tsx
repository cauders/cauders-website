
import { getProjectBySlug, getProjects } from "@/lib/data";
import { notFound } from "next/navigation";
import ProjectDetailClient from "@/components/cauders/ProjectDetailClient";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ScrollFadeIn from "@/components/cauders/ScrollFadeIn";

type ProjectPageParams = {
  params: {
    slug: string;
  };
};

export const dynamic = 'force-static';

// Generate static paths for all projects
export function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageParams) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const projects = getProjects();
  const currentIndex = projects.findIndex(p => p.slug === params.slug);
  const nextProject = currentIndex !== -1 && currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
     <div className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
            <Button asChild variant="ghost" className="mb-8">
                <Link href="https://www.portfolio.cauders.com/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Portfolio
                </Link>
            </Button>
        </div>

        <ProjectDetailClient project={project} />

        {nextProject && (
            <div className="mt-24 pt-16 border-t">
                <ScrollFadeIn className="text-center">
                    <h3 className="text-lg text-foreground/70 mb-2">Next Project</h3>
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground font-headline mb-8">
                        {nextProject.title}
                    </h2>
                    <Button asChild size="lg">
                        <Link href={`https://www.portfolio.cauders.com/${nextProject.slug}`}>
                            View Project <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                </ScrollFadeIn>
            </div>
        )}
      </div>
    </div>
  );
}
