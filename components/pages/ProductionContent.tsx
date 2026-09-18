import PageHero from "@/components/layout/PageHero";
import Production from "@/components/sections/Production";
import CtaBand from "@/components/sections/CtaBand";
import { PRODUCTION } from "@/lib/constants";
import { PRODUCTION_KK } from "@/lib/i18n/content.kk";
import { t } from "@/lib/i18n/dictionary";
import { localeHref, type Locale } from "@/lib/i18n/locale";

export default function ProductionContent({ locale = "ru" }: { locale?: Locale }) {
  const dict = t(locale);
  const content = locale === "kk" ? PRODUCTION_KK : PRODUCTION;

  return (
    <>
      <PageHero
        eyebrow={dict.home.productionEyebrow}
        title={content.heroHeading}
        description={
          locale === "kk"
            ? "350 м² меншікті өндіріс — дәл кесу мен құрастырудан ламинация мен ұнтақты бояуға дейін."
            : "350 м² собственного производства — от точной резки и сборки до ламинации и порошковой покраски."
        }
        breadcrumbs={[{ label: dict.nav.home, href: localeHref("/", locale) }, { label: dict.nav.production }]}
        breadcrumbsAriaLabel={dict.breadcrumbs.label}
      />
      <Production showHeading={false} locale={locale} />
      <CtaBand
        heading={
          locale === "kk"
            ? "Жобаңызбен қалай жұмыс істейтінімізді көргіңіз келе ме?"
            : "Хотите увидеть, как мы работаем с вашим проектом?"
        }
        text={
          locale === "kk"
            ? "Тапсырма туралы айтыңыз — объектіңізге қандай өндірістік мүмкіндіктер сай келетінін ұсынамыз."
            : "Расскажите о задаче — подскажем, какие производственные возможности подойдут для вашего объекта."
        }
        ctaHref={localeHref("/contacts", locale)}
        locale={locale}
      />
    </>
  );
}
