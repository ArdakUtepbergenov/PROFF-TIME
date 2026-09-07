import Link from "next/link";
import { Project, getFeaturedProject, getSecondaryProjects } from "@/lib/constants";
import ProjectFeatured from "@/components/sections/ProjectFeatured";
import ProjectSecondary from "@/components/sections/ProjectSecondary";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

type Props = {
  eyebrow?: string;
  heading?: string;
  showCta?: boolean;
  sectionId?: string;
  /**
   * Явный курированный список объектов: первый элемент рендерится как
   * главный (featured), остальные — как secondary-сетка. Если не задан,
   * используется featured/secondary tier из data/projects.ts (полная
   * страница /projects). Homepage передаёт свою короткую подборку.
   */
  projects?: Project[];
};

export default function Projects({
  eyebrow = "Объекты",
  heading = "Объекты, которые говорят за нас",
  showCta = false,
  sectionId,
  projects,
}: Props) {
  const list = projects ?? [getFeaturedProject(), ...getSecondaryProjects()];
  const [featured, ...secondary] = list;

  if (!featured) return null;

  return (
    <section id={sectionId} className="bg-navy py-20 md:py-28">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <RevealOnScroll className="max-w-xl">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-white md:text-4xl">
              {heading}
            </h2>
          </RevealOnScroll>
          {showCta && (
            <RevealOnScroll delay={80}>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-cyan"
              >
                Все объекты
                <span aria-hidden="true">→</span>
              </Link>
            </RevealOnScroll>
          )}
        </div>

        <div className="mt-12 grid gap-4">
          <RevealOnScroll>
            <Link href={`/projects/${featured.slug}`}>
              <ProjectFeatured project={featured} />
            </Link>
          </RevealOnScroll>
          {secondary.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2">
              {secondary.map((project, i) => (
                <RevealOnScroll key={project.id} delay={(i + 1) * 80}>
                  <Link href={`/projects/${project.slug}`}>
                    <ProjectSecondary project={project} />
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
