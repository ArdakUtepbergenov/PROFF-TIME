import { BRAND_GROUPS } from "@/lib/constants";
import { BRAND_GROUPS_KK } from "@/lib/i18n/content.kk";
import { t } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locale";
import PartnerBlock from "@/components/sections/PartnerBlock";
import BrandCard from "@/components/sections/BrandCard";
import CatalogShowcase from "@/components/sections/CatalogShowcase";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Materials({ locale = "ru" }: { locale?: Locale }) {
  const dict = t(locale);

  return (
    <>
      <section className="bg-navy py-20 md:py-28">
        <div className="container-site">
          <RevealOnScroll className="max-w-xl">
            <p className="eyebrow">{dict.home.materialsEyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-white md:text-4xl">
              {dict.materials.brandsHeading}
            </h2>
          </RevealOnScroll>

          <div className="mt-10">
            <PartnerBlock locale={locale} />
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BRAND_GROUPS.map((group, i) => (
              <BrandCard
                key={group.category}
                group={group}
                categoryLabel={locale === "kk" ? BRAND_GROUPS_KK[i]?.category : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-site">
          <RevealOnScroll className="max-w-xl">
            <p className="eyebrow">{dict.materials.catalogEyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-navy md:text-4xl">
              {dict.materials.catalogHeading}
            </h2>
          </RevealOnScroll>

          <div className="mt-12">
            <CatalogShowcase locale={locale} />
          </div>
        </div>
      </section>
    </>
  );
}
