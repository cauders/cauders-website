import { getProjectBySlug, getProjects } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{project.title}</h1>
          <p className="text-lg text-foreground/70 mb-8">{project.description}</p>
          
          <div className="mb-8">
            <Image
              src={project.imageUrl}
              alt={`Cover image for ${project.title}`}
              width={1200}
              height={675}
              className="rounded-lg shadow-lg border"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-4">About the Project</h2>
              <div className="prose prose-lg dark:prose-invert text-foreground/80 max-w-none" dangerouslySetInnerHTML={{ __html: project.details }} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              {project.testimonial && (
                 <div className="mt-8">
                    <h3 className="text-xl font-bold text-foreground mb-4">Testimonial</h3>
                    <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80">
                        <p>"{project.testimonial.text}"</p>
                        <footer className="mt-2 not-italic font-semibold">- {project.testimonial.author}</footer>
                    </blockquote>
                </div>
              )}
            </div>
          </div>

           {project.gallery && project.gallery.length > 0 && (
            <div>
                <h2 className="text-3xl font-bold text-center text-foreground mb-8">Project Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((image, index) => (
                    <div key={index}>
                    <Image
                        src={image.url}
                        alt={image.alt}
                        width={800}
                        height={600}
                        className="rounded-lg shadow-md border"
                    />
                    </div>
                ))}
                </div>
            </div>
            )}
        </div>
      </div>
    </div>
  );
}
