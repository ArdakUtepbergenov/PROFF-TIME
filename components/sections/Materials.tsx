import { BRAND_GROUPS } from "@/lib/constants";
import PartnerBlock from "@/components/sections/PartnerBlock";
import BrandCard from "@/components/sections/BrandCard";
import CatalogShowcase from "@/components/sections/CatalogShowcase";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Materials() {
  return (
    <>
      <section className="bg-navy py-20 md:py-28">
        <div className="container-site">
          <RevealOnScroll className="max-w-xl">
            <p className="eyebrow">Материалы</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-white md:text-4xl">
              Работаем с проверенными брендами
            </h2>
          </RevealOnScroll>

          <div className="mt-10">
            <PartnerBlock />
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BRAND_GROUPS.map((group) => (
              <BrandCard key={group.category} group={group} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-site">
          <RevealOnScroll className="max-w-xl">
            <p className="eyebrow">Каталог</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-navy md:text-4xl">
              Образцы продукции и комплектующих
            </h2>
          </RevealOnScroll>

          <div className="mt-12">
            <CatalogShowcase />
          </div>
        </div>
      </section>
    </>
  );
}
