import PageHero from "@/components/layout/PageHero";
import About from "@/components/sections/About";
import Advantages from "@/components/sections/Advantages";
import ProductionPreview from "@/components/sections/ProductionPreview";
import PartnerSection from "@/components/sections/PartnerSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import CtaBand from "@/components/sections/CtaBand";
import { ABOUT } from "@/lib/constants";
import { ABOUT_KK } from "@/lib/i18n/content.kk";
import { t } from "@/lib/i18n/dictionary";
import { localeHref, type Locale } from "@/lib/i18n/locale";

export default function AboutContent({ locale = "ru" }: { locale?: Locale }) {
  const dict = t(locale);
  const content = locale === "kk" ? ABOUT_KK : ABOUT;

  return (
    <>
      <PageHero
        eyebrow={dict.about.eyebrow}
        title={content.heading}
        description={content.text}
        breadcrumbs={[{ label: dict.nav.home, href: localeHref("/", locale) }, { label: dict.about.eyebrow }]}
        breadcrumbsAriaLabel={dict.breadcrumbs.label}
      />
      <About showHeading={false} showExtendedText locale={locale} />
      <Advantages eyebrow={dict.about.eyebrow} heading={dict.about.advantagesHeading} locale={locale} />
      <ProductionPreview locale={locale} />
      <PartnerSection locale={locale} />
      <CertificatesSection locale={locale} />
      <CtaBand
        heading={
          locale === "kk" ? "Объектіңізді талқылауға дайынсыз ба?" : "Готовы обсудить ваш объект?"
        }
        text={
          locale === "kk"
            ? "Тапсырма туралы айтыңыз — өндірістік мүмкіндіктер мен мерзімдерге сай шешім ұсынамыз."
            : "Расскажите о задаче — предложим решение с учётом производственных возможностей и сроков."
        }
        ctaHref={localeHref("/contacts", locale)}
        locale={locale}
      />
    </>
  );
}
