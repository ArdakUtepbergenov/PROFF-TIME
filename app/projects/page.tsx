import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import Projects from "@/components/sections/Projects";
import ProjectSecondary from "@/components/sections/ProjectSecondary";
import OtherProjectsGallery from "@/components/sections/OtherProjectsGallery";
import CtaBand from "@/components/sections/CtaBand";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { getStandardProjects } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/projects",
  title: "Реализованные объекты",
  description:
    "Международный аэропорт Атырау им. Х. Доспановой, железнодорожный вокзал, ЖК Asyl Park, ЖК Caspian Park и другие объекты, реализованные с участием PROFF-TIME в Атырау и регионе.",
});

export default function ProjectsPage() {
  const standardProjects = getStandardProjects();

  return (
    <>
      <PageHero
        eyebrow="Объекты"
        title="Реализованные объекты"
        description="Проекты PROFF-TIME в Атырау и регионе."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Объекты" }]}
      />

      <Projects eyebrow="Портфолио" heading="Крупные объекты" />

      {standardProjects.length > 0 && (
        <section className="bg-navy pb-20 md:pb-28">
          <div className="container-site">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {standardProjects.map((project, i) => (
                <RevealOnScroll key={project.id} delay={i * 60}>
                  <Link href={`/projects/${project.slug}`}>
                    <ProjectSecondary project={project} />
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      <OtherProjectsGallery />

      <CtaBand
        heading="Планируете новый объект?"
        text="Расскажите о задаче — обсудим производственные и монтажные возможности для вашего проекта."
      />
    </>
  );
}
