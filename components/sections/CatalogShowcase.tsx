import { CATALOG_CATEGORIES } from "@/data/catalog";
import { CATALOG_LABELS_KK } from "@/lib/i18n/content.kk";
import type { Locale } from "@/lib/i18n/locale";
import MediaSlot from "@/components/ui/MediaSlot";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

// "Образцы материалов" (LOW priority, карта: "только если нужно") — намеренно
// не выводятся по умолчанию, чтобы не перегружать страницу слабыми кадрами.
const VISIBLE_CATEGORY_IDS = ["windows-doors", "finishes", "hardware", "screens"];

export default function CatalogShowcase({ locale = "ru" }: { locale?: Locale }) {
  const categories = CATALOG_CATEGORIES.filter((c) => VISIBLE_CATEGORY_IDS.includes(c.id));

  const label = (id: string, fallback: string) =>
    locale === "kk" ? CATALOG_LABELS_KK[id]?.label ?? fallback : fallback;
  const alt = (id: string, fallback: string) =>
    locale === "kk" ? CATALOG_LABELS_KK[id]?.altFallback ?? fallback : fallback;

  return (
    <div className="space-y-16 md:space-y-20">
      {categories.map((category) => {
        const [featured, ...rest] = category.images;
        return (
          <div key={category.id}>
            <RevealOnScroll>
              <p className="eyebrow">{label(category.id, category.label)}</p>
            </RevealOnScroll>

            <div className="mt-6 grid gap-3 md:grid-cols-3 md:gap-4">
              <RevealOnScroll className="md:col-span-2">
                <MediaSlot
                  src={featured.path}
                  alt={alt(category.id, featured.alt)}
                  variant="light"
                  aspect="aspect-[16/11]"
                  fit="contain"
                />
              </RevealOnScroll>

              {rest.length > 0 && (
                <RevealOnScroll delay={60} className="grid grid-cols-2 gap-3 md:grid-cols-1 md:gap-4">
                  {rest.slice(0, 2).map((img) => (
                    <MediaSlot
                      key={img.path}
                      src={img.path}
                      alt={alt(category.id, img.alt)}
                      variant="light"
                      aspect="aspect-[4/3] md:aspect-[16/9]"
                      fit="contain"
                    />
                  ))}
                </RevealOnScroll>
              )}
            </div>

            {rest.length > 2 && (
              <div className="mt-3 grid grid-cols-2 gap-3 md:mt-4 md:grid-cols-4 md:gap-4">
                {rest.slice(2).map((img) => (
                  <RevealOnScroll key={img.path}>
                    <MediaSlot src={img.path} alt={alt(category.id, img.alt)} variant="light" aspect="aspect-square" fit="contain" />
                  </RevealOnScroll>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
