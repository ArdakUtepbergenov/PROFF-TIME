import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { getServiceKk } from "@/lib/i18n/content.kk";
import { t } from "@/lib/i18n/dictionary";
import { localeHref, type Locale } from "@/lib/i18n/locale";
import MediaSlot from "@/components/ui/MediaSlot";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function ServicesPreview({ locale = "ru" }: { locale?: Locale }) {
  const dict = t(locale);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <RevealOnScroll className="max-w-xl">
            <p className="eyebrow">{dict.home.servicesEyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-navy md:text-4xl">
              {dict.home.servicesHeading}
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={80}>
            <Link
              href={localeHref("/services", locale)}
              className="inline-flex items-center gap-2 text-sm font-medium text-navy transition-colors hover:text-cyan-ink"
            >
              {dict.footer.allServices}
              <span aria-hidden="true">→</span>
            </Link>
          </RevealOnScroll>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const kk = getServiceKk(service.id);
            return (
              <RevealOnScroll key={service.id} delay={i * 60}>
                <Link
                  href={localeHref(`/services/${service.slug}`, locale)}
                  className="group block border border-line transition-colors hover:border-navy/30"
                >
                  <MediaSlot
                    src={service.imagePath}
                    alt={locale === "kk" ? kk?.imageLabel ?? service.imageLabel : service.imageLabel}
                    variant="light"
                    aspect="aspect-[4/3]"
                    fit="contain"
                  />
                  <div className="p-5">
                    <span className="font-display text-xs font-semibold text-cyan-ink">{service.index}</span>
                    <h3 className="mt-2 font-display text-lg font-bold tracking-tight text-navy transition-colors group-hover:text-cyan-ink">
                      {locale === "kk" ? kk?.headline ?? service.headline : service.headline}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">
                      {locale === "kk" ? kk?.shortDescription ?? service.shortDescription : service.shortDescription}
                    </p>
                  </div>
                </Link>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
