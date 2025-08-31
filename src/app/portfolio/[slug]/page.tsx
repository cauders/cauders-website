import { getProjectBySlug, getProjects } from "@/lib/data";
import { notFound } from "next/navigation";
import ProjectDetailClient from "@/components/cauders/ProjectDetailClient";

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

  return <ProjectDetailClient project={project} nextProject={nextProject} />;
}