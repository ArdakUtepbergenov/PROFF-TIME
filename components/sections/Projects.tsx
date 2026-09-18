import Link from "next/link";
import { Project, getFeaturedProject, getSecondaryProjects } from "@/lib/constants";
import { t } from "@/lib/i18n/dictionary";
import { localeHref, type Locale } from "@/lib/i18n/locale";
import ProjectFeatured from "@/components/sections/ProjectFeatured";
import ProjectSecondary from "@/components/sections/ProjectSecondary";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

type Props = {
  eyebrow?: string;
  heading?: string;
  showCta?: boolean;
  sectionId?: string;
  projects?: Project[];
  locale?: Locale;
};

export default function Projects({
  eyebrow,
  heading,
  showCta = false,
  sectionId,
  projects,
  locale = "ru",
}: Props) {
  const dict = t(locale);
  const resolvedEyebrow = eyebrow ?? dict.home.projectsEyebrow;
  const resolvedHeading = heading ?? dict.home.projectsHeading;
  const list = projects ?? [getFeaturedProject(), ...getSecondaryProjects()];
  const [featured, ...secondary] = list;

  if (!featured) return null;

  return (
    <section id={sectionId} className="bg-navy py-20 md:py-28">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <RevealOnScroll className="max-w-xl">
            <p className="eyebrow">{resolvedEyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-white md:text-4xl">
              {resolvedHeading}
            </h2>
          </RevealOnScroll>
          {showCta && (
            <RevealOnScroll delay={80}>
              <Link
                href={localeHref("/projects", locale)}
                className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-cyan"
              >
                {dict.common.allProjects}
                <span aria-hidden="true">→</span>
              </Link>
            </RevealOnScroll>
          )}
        </div>

        <div className="mt-12 grid gap-4">
          <RevealOnScroll>
            <Link href={localeHref(`/projects/${featured.slug}`, locale)}>
              <ProjectFeatured project={featured} locale={locale} />
            </Link>
          </RevealOnScroll>
          {secondary.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2">
              {secondary.map((project, i) => (
                <RevealOnScroll key={project.id} delay={(i + 1) * 80}>
                  <Link href={localeHref(`/projects/${project.slug}`, locale)}>
                    <ProjectSecondary project={project} locale={locale} />
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
