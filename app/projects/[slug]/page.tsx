import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailContent from "@/components/pages/ProjectDetailContent";
import { PROJECTS, getProjectBySlug } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return pageMetadata({
    path: `/projects/${project.slug}`,
    title: `${project.name} | Объекты`,
    description: `${project.name} — ${project.category.toLowerCase()}, ${project.location}. Реализованный объект PROFF-TIME.`,
    hreflangKzPath: `/kz/projects/${project.slug}`,
  });
}

export default function ProjectDetailPage({ params }: Params) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();
  return <ProjectDetailContent slug={params.slug} />;
}
