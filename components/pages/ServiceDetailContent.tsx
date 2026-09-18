import PageHero from "@/components/layout/PageHero";
import ServiceDetail from "@/components/sections/ServiceDetail";
import PvhCommercialBlock from "@/components/sections/PvhCommercialBlock";
import { getServiceBySlug } from "@/lib/constants";
import { getServiceKk } from "@/lib/i18n/content.kk";
import { t } from "@/lib/i18n/dictionary";
import { localeHref, type Locale } from "@/lib/i18n/locale";

export default function ServiceDetailContent({ slug, locale = "ru" }: { slug: string; locale?: Locale }) {
  const service = getServiceBySlug(slug);
  if (!service) return null;

  const dict = t(locale);
  const kk = locale === "kk" ? getServiceKk(service.id) : undefined;
  const headline = kk?.headline ?? service.headline;
  const shortDescription = kk?.shortDescription ?? service.shortDescription;

  return (
    <>
      <PageHero
        eyebrow={`${service.index} · ${dict.nav.services}`}
        title={headline}
        description={shortDescription}
        breadcrumbs={[
          { label: dict.nav.home, href: localeHref("/", locale) },
          { label: dict.nav.services, href: localeHref("/services", locale) },
          { label: headline },
        ]}
        breadcrumbsAriaLabel={dict.breadcrumbs.label}
      />
      {service.id === "pvh" && <PvhCommercialBlock locale={locale} />}
      <ServiceDetail service={service} locale={locale} />
    </>
  );
}
