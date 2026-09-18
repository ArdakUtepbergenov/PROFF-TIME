import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import MediaSlot from "@/components/ui/MediaSlot";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import CtaBand from "@/components/sections/CtaBand";
import { PROJECTS, getProjectBySlug } from "@/lib/constants";
import { getProjectKk } from "@/lib/i18n/content.kk";
import { t } from "@/lib/i18n/dictionary";
import { localeHref, type Locale } from "@/lib/i18n/locale";

export default function ProjectDetailContent({ slug, locale = "ru" }: { slug: string; locale?: Locale }) {
  const project = getProjectBySlug(slug);
  if (!project) return null;

  const dict = t(locale);
  const kk = locale === "kk" ? getProjectKk(project.id) : undefined;
  const name = kk?.name ?? project.name;
  const category = kk?.category ?? project.category;
  const location = kk?.location ?? project.location;
  const description = kk?.description ?? project.description;

  const otherProjects = PROJECTS.filter((p) => p.id !== project.id);

  return (
    <>
      <PageHero
        eyebrow={category}
        title={name}
        description={location}
        breadcrumbs={[
          { label: dict.nav.home, href: localeHref("/", locale) },
          { label: dict.nav.projects, href: localeHref("/projects", locale) },
          { label: name },
        ]}
        breadcrumbsAriaLabel={dict.breadcrumbs.label}
        size="compact"
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container-site">
          {project.imagePath && (
            <RevealOnScroll>
              <MediaSlot
                src={project.imagePath}
                alt={name}
                variant="light"
                aspect="aspect-[16/9]"
                fit="cover"
                priority
              />
            </RevealOnScroll>
          )}

          <RevealOnScroll delay={100} className={`max-w-2xl ${project.imagePath ? "mt-10" : ""}`}>
            <dl className="grid grid-cols-2 gap-6 border-t border-line pt-6 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-medium tracking-wide2 text-cyan-ink">{dict.projects.category}</dt>
                <dd className="mt-1 text-sm text-navy">{category}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium tracking-wide2 text-cyan-ink">{dict.projects.city}</dt>
                <dd className="mt-1 text-sm text-navy">{location}</dd>
              </div>
            </dl>
            <p className="mt-6 text-base leading-relaxed text-slate">{description}</p>
          </RevealOnScroll>
        </div>
      </section>

      {otherProjects.length > 0 && (
        <section className="bg-mist py-16 md:py-20">
          <div className="container-site">
            <h2 className="eyebrow mb-6">{dict.projects.otherObjectsOnDetail}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {otherProjects.map((p) => {
                const pKk = locale === "kk" ? getProjectKk(p.id) : undefined;
                const pName = pKk?.name ?? p.name;
                const pCategory = pKk?.category ?? p.category;
                return (
                  <Link
                    key={p.id}
                    href={localeHref(`/projects/${p.slug}`, locale)}
                    className="group block border border-line bg-white transition-colors hover:border-navy/30"
                  >
                    <MediaSlot src={p.imagePath} alt={pName} variant="light" aspect="aspect-[16/9]" fit="cover" />
                    <div className="flex items-center justify-between gap-3 p-5">
                      <div>
                        <p className="text-xs text-cyan-ink">{pCategory}</p>
                        <p className="mt-1 font-display text-base font-semibold text-navy transition-colors group-hover:text-cyan-ink">
                          {pName}
                        </p>
                      </div>
                      <span className="text-cyan-ink transition-colors group-hover:text-cyan" aria-hidden="true">
                        →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        heading={locale === "kk" ? "Осындай объект бойынша жұмыс істеп жатырсыз ба?" : "Работаете над похожим объектом?"}
        text={
          locale === "kk"
            ? "Тапсырма туралы айтыңыз — оны біздің өндірістік мүмкіндіктерге сай іске асыруды талқылаймыз."
            : "Расскажите о задаче — обсудим, как реализовать её с учётом наших производственных возможностей."
        }
        ctaHref={localeHref("/contacts", locale)}
        locale={locale}
      />
    </>
  );
}
