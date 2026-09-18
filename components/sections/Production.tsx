import { PRODUCTION } from "@/lib/constants";
import { PRODUCTION_KK } from "@/lib/i18n/content.kk";
import { t } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locale";
import MediaSlot from "@/components/ui/MediaSlot";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

type Props = {
  showHeading?: boolean;
  locale?: Locale;
};

export default function Production({ showHeading = true, locale = "ru" }: Props) {
  const dict = t(locale);
  const content = locale === "kk" ? PRODUCTION_KK : PRODUCTION;
  const [main, secondary1, secondary2, ...supporting] = PRODUCTION.gallery;

  const altFor = (item: (typeof PRODUCTION.gallery)[number]) =>
    locale === "kk" ? PRODUCTION_KK.galleryAlts[item.imagePath.split("/").pop() ?? ""] ?? item.alt : item.alt;

  return (
    <section id="production" className="bg-mist py-20 md:py-28">
      <div className="container-site">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <RevealOnScroll className="md:col-span-7">
            {showHeading ? (
              <>
                <p className="eyebrow">{dict.home.productionEyebrow}</p>
                <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-navy md:text-4xl">
                  {content.heading}
                </h2>
              </>
            ) : (
              <p className="eyebrow">{dict.production.gallery}</p>
            )}
          </RevealOnScroll>
          <RevealOnScroll delay={100} className="md:col-span-5">
            <p className="text-base leading-relaxed text-slate">{content.text}</p>
          </RevealOnScroll>
        </div>

        {/* Editorial-композиция: 1 главный кадр + 2 вторичных сверху, 4
            дополнительных снизу — намеренно не равномерная сетка. */}
        <div className="mt-12 grid gap-3 md:grid-cols-3 md:gap-4">
          <RevealOnScroll className="md:col-span-2">
            <MediaSlot
              src={main.imagePath}
              alt={altFor(main)}
              variant="light"
              aspect="aspect-[16/11]"
              className="h-full"
            />
          </RevealOnScroll>

          <RevealOnScroll delay={60} className="grid grid-cols-2 gap-3 md:grid-cols-1 md:gap-4">
            {[secondary1, secondary2].map((item) => (
              <MediaSlot
                key={item.imagePath}
                src={item.imagePath}
                alt={altFor(item)}
                variant="light"
                aspect="aspect-[4/3] md:aspect-[16/9]"
              />
            ))}
          </RevealOnScroll>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3 md:mt-4 md:grid-cols-4 md:gap-4">
          {supporting.map((item, i) => (
            <RevealOnScroll key={item.imagePath} delay={(i + 1) * 60}>
              <MediaSlot src={item.imagePath} alt={altFor(item)} variant="light" aspect="aspect-square" />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
