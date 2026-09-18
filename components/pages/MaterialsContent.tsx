import PageHero from "@/components/layout/PageHero";
import Materials from "@/components/sections/Materials";
import CtaBand from "@/components/sections/CtaBand";
import { t } from "@/lib/i18n/dictionary";
import { localeHref, type Locale } from "@/lib/i18n/locale";

export default function MaterialsContent({ locale = "ru" }: { locale?: Locale }) {
  const dict = t(locale);

  return (
    <>
      <PageHero
        eyebrow={dict.home.materialsEyebrow}
        title={dict.materials.title}
        description={
          locale === "kk"
            ? "Сенімді брендтердің профильдері мен фурнитурасымен жұмыс істейміз — KBE, Kömmerling, Funke, Winkhaus және басқалары, «АКС» ЖШС ресми серіктесі жеткізеді."
            : "Работаем с профилями и фурнитурой проверенных брендов — KBE, Kömmerling, Funke, Winkhaus и другими, поставляемыми официальным партнёром ТОО «АКС»."
        }
        breadcrumbs={[{ label: dict.nav.home, href: localeHref("/", locale) }, { label: dict.nav.materials }]}
        breadcrumbsAriaLabel={dict.breadcrumbs.label}
      />
      <Materials locale={locale} />
      <CtaBand
        heading={
          locale === "kk"
            ? "Материалдар туралы көбірек білгіңіз келе ме?"
            : "Хотите узнать больше о материалах для вашего объекта?"
        }
        ctaLabel={dict.common.getConsultation}
        ctaHref={localeHref("/contacts", locale)}
        locale={locale}
      />
    </>
  );
}
