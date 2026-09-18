import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import Projects from "@/components/sections/Projects";
import ProjectSecondary from "@/components/sections/ProjectSecondary";
import OtherProjectsGallery from "@/components/sections/OtherProjectsGallery";
import CtaBand from "@/components/sections/CtaBand";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { getStandardProjects } from "@/lib/constants";
import { t } from "@/lib/i18n/dictionary";
import { localeHref, type Locale } from "@/lib/i18n/locale";

export default function ProjectsListContent({ locale = "ru" }: { locale?: Locale }) {
  const dict = t(locale);
  const standardProjects = getStandardProjects();

  return (
    <>
      <PageHero
        eyebrow={dict.home.projectsEyebrow}
        title={dict.projects.title}
        description={
          locale === "kk"
            ? "Атырау мен өңірдегі PROFF-TIME жобалары."
            : "Проекты PROFF-TIME в Атырау и регионе."
        }
        breadcrumbs={[{ label: dict.nav.home, href: localeHref("/", locale) }, { label: dict.nav.projects }]}
        breadcrumbsAriaLabel={dict.breadcrumbs.label}
      />

      <Projects eyebrow={dict.projects.portfolioEyebrow} heading={dict.projects.largeObjects} locale={locale} />

      {standardProjects.length > 0 && (
        <section className="bg-navy pb-20 md:pb-28">
          <div className="container-site">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {standardProjects.map((project, i) => (
                <RevealOnScroll key={project.id} delay={i * 60}>
                  <Link href={localeHref(`/projects/${project.slug}`, locale)}>
                    <ProjectSecondary project={project} locale={locale} />
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      <OtherProjectsGallery locale={locale} />

      <CtaBand
        heading={locale === "kk" ? "Жаңа объект жоспарлап жатырсыз ба?" : "Планируете новый объект?"}
        text={
          locale === "kk"
            ? "Тапсырма туралы айтыңыз — жобаңыз үшін өндірістік және монтаждық мүмкіндіктерді талқылаймыз."
            : "Расскажите о задаче — обсудим производственные и монтажные возможности для вашего проекта."
        }
        ctaHref={localeHref("/contacts", locale)}
        locale={locale}
      />
    </>
  );
}
