import Link from "next/link";
import { BRAND_GROUPS, PARTNER } from "@/lib/constants";
import { PARTNER_KK } from "@/lib/i18n/content.kk";
import { t } from "@/lib/i18n/dictionary";
import { localeHref, type Locale } from "@/lib/i18n/locale";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function MaterialsPreview({ locale = "ru" }: { locale?: Locale }) {
  const dict = t(locale);
  const partner = locale === "kk" ? PARTNER_KK : PARTNER;
  const allBrands = BRAND_GROUPS.flatMap((g) => g.brands);

  return (
    <section className="bg-navy py-20 md:py-28">
      <div className="container-site">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <RevealOnScroll className="md:col-span-6">
            <p className="eyebrow">{dict.home.materialsEyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-white md:text-4xl">
              {partner.heading}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cloud">{partner.text}</p>
            <Link
              href={localeHref("/materials", locale)}
              className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-medium text-white transition-colors hover:text-cyan"
            >
              {dict.common.allMaterials}
              <span aria-hidden="true">→</span>
            </Link>
          </RevealOnScroll>

          <RevealOnScroll delay={120} className="md:col-span-5 md:col-start-8">
            <div className="flex flex-wrap gap-x-6 gap-y-4 border-t border-white/10 pt-6">
              {allBrands.map((brand) => (
                <span key={brand} className="font-display text-lg font-semibold text-white/90 md:text-xl">
                  {brand}
                </span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
