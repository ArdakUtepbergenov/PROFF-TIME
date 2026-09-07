import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/layout/PageHero";
import MediaSlot from "@/components/ui/MediaSlot";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import CtaBand from "@/components/sections/CtaBand";
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
  });
}

export default function ProjectDetailPage({ params }: Params) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const otherProjects = PROJECTS.filter((p) => p.id !== project.id);

  return (
    <>
      <PageHero
        eyebrow={project.category}
        title={project.name}
        description={project.location}
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Объекты", href: "/projects" },
          { label: project.name },
        ]}
        size="compact"
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container-site">
          <RevealOnScroll>
            <MediaSlot
              src={project.imagePath}
              alt={project.imageLabel}
              variant="light"
              aspect="aspect-[16/9]"
              fit="cover"
              priority
            />
          </RevealOnScroll>

          <RevealOnScroll delay={100} className="mt-10 max-w-2xl">
            <dl className="grid grid-cols-2 gap-6 border-t border-line pt-6 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-medium tracking-wide2 text-cyan-ink">Категория</dt>
                <dd className="mt-1 text-sm text-navy">{project.category}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium tracking-wide2 text-cyan-ink">Город</dt>
                <dd className="mt-1 text-sm text-navy">{project.location}</dd>
              </div>
            </dl>
            <p className="mt-6 text-base leading-relaxed text-slate">{project.description}</p>
          </RevealOnScroll>
        </div>
      </section>

      {otherProjects.length > 0 && (
        <section className="bg-mist py-16 md:py-20">
          <div className="container-site">
            <h2 className="eyebrow mb-6">Другие объекты</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {otherProjects.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.slug}`}
                  className="group block border border-line bg-white transition-colors hover:border-navy/30"
                >
                  <MediaSlot src={p.imagePath} alt={p.imageLabel} variant="light" aspect="aspect-[16/9]" fit="cover" />
                  <div className="flex items-center justify-between gap-3 p-5">
                    <div>
                      <p className="text-xs text-cyan-ink">{p.category}</p>
                      <p className="mt-1 font-display text-base font-semibold text-navy transition-colors group-hover:text-cyan-ink">
                        {p.name}
                      </p>
                    </div>
                    <span className="text-cyan-ink transition-colors group-hover:text-cyan" aria-hidden="true">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        heading="Работаете над похожим объектом?"
        text="Расскажите о задаче — обсудим, как реализовать её с учётом наших производственных возможностей."
      />
    </>
  );
}
