import PageHero from "@/components/layout/PageHero";
import Services from "@/components/sections/Services";
import PartnerSection from "@/components/sections/PartnerSection";
import CtaBand from "@/components/sections/CtaBand";
import { t } from "@/lib/i18n/dictionary";
import { localeHref, type Locale } from "@/lib/i18n/locale";

export default function ServicesListContent({ locale = "ru" }: { locale?: Locale }) {
  const dict = t(locale);

  return (
    <>
      <PageHero
        eyebrow={dict.home.servicesEyebrow}
        title={dict.services.pageHeading}
        breadcrumbs={[{ label: dict.nav.home, href: localeHref("/", locale) }, { label: dict.nav.services }]}
        breadcrumbsAriaLabel={dict.breadcrumbs.label}
      />
      <Services locale={locale} />
      <PartnerSection locale={locale} />
      <CtaBand
        heading={
          locale === "kk"
            ? "Керекті бағытты таппадыңыз ба?"
            : "Не нашли нужное направление?"
        }
        text={
          locale === "kk"
            ? "Тапсырма туралы айтыңыз — объектіңізге қандай шешім сай келетінін ұсынамыз."
            : "Расскажите о задаче — подскажем, какое решение подойдёт для вашего объекта."
        }
        ctaHref={localeHref("/contacts", locale)}
        locale={locale}
      />
    </>
  );
}
