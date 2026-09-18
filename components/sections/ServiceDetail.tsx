import Link from "next/link";
import type { Service } from "@/lib/constants";
import { SERVICES } from "@/lib/constants";
import { getServiceKk } from "@/lib/i18n/content.kk";
import { t } from "@/lib/i18n/dictionary";
import { localeHref, type Locale } from "@/lib/i18n/locale";
import MediaSlot from "@/components/ui/MediaSlot";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import PartnerSection from "@/components/sections/PartnerSection";
import CtaBand from "@/components/sections/CtaBand";

export default function ServiceDetail({ service, locale = "ru" }: { service: Service; locale?: Locale }) {
  const dict = t(locale);
  const otherServices = SERVICES.filter((s) => s.id !== service.id);
  const hasImage = Boolean(service.heroImagePath);
  const kk = locale === "kk" ? getServiceKk(service.id) : undefined;

  const description = kk?.description ?? service.description;
  const detail = kk?.detail ?? service.detail;
  const heroImageLabel = kk?.heroImageLabel ?? service.heroImageLabel;
  const ctaLabel = kk?.ctaLabel ?? service.ctaLabel;
  const headline = kk?.headline ?? service.headline;

  const textContent = (
    <>
      <p className="text-base leading-relaxed text-slate">{description}</p>
      <p className="mt-4 text-base leading-relaxed text-slate">{detail}</p>

      <ul className="mt-8 space-y-3 border-t border-line pt-6">
        {(kk?.features ?? service.features).map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-navy">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan" />
            {feature}
          </li>
        ))}
      </ul>

      {service.brands && service.brands.length > 0 && (
        <div className="mt-8 border-t border-line pt-6">
          <p className="eyebrow mb-3">{dict.services.materialsAndBrands}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {service.brands.map((brand) => (
              <span key={brand} className="font-display text-base font-semibold text-navy">
                {brand}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );

  return (
    <>
      <section className="bg-white py-20 md:py-28">
        <div className="container-site">
          {hasImage ? (
            <div className="grid gap-12 md:grid-cols-12 md:gap-8">
              <RevealOnScroll className="md:col-span-7">
                <MediaSlot
                  src={service.heroImagePath}
                  alt={heroImageLabel}
                  variant="light"
                  aspect="aspect-[4/3]"
                  fit="contain"
                />
              </RevealOnScroll>

              <RevealOnScroll delay={100} className="flex flex-col justify-center md:col-span-5">
                {textContent}
              </RevealOnScroll>
            </div>
          ) : (
            <RevealOnScroll className="max-w-2xl">{textContent}</RevealOnScroll>
          )}
        </div>
      </section>

      {service.showPartnerBlock && <PartnerSection locale={locale} />}

      <section className="bg-mist py-16 md:py-20">
        <div className="container-site">
          <h2 className="eyebrow mb-6">{dict.services.otherServices}</h2>
          <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((s) => {
              const sKk = locale === "kk" ? getServiceKk(s.id) : undefined;
              return (
                <Link
                  key={s.id}
                  href={localeHref(`/services/${s.slug}`, locale)}
                  className="group flex items-center justify-between gap-3 bg-white p-5 transition-colors hover:bg-navy"
                >
                  <span className="font-display text-sm font-semibold text-navy transition-colors group-hover:text-white">
                    {sKk?.headline ?? s.headline}
                  </span>
                  <span className="text-cyan-ink transition-colors group-hover:text-cyan" aria-hidden="true">
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        heading={
          locale === "kk"
            ? `«${headline}» бағыты бойынша талқылайық па?`
            : `Обсудим проект по направлению «${headline}»?`
        }
        ctaLabel={ctaLabel}
        ctaHref={localeHref("/contacts", locale)}
        locale={locale}
      />
    </>
  );
}
