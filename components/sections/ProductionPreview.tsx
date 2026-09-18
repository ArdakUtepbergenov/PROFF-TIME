import Link from "next/link";
import { PRODUCTION } from "@/lib/constants";
import { PRODUCTION_KK } from "@/lib/i18n/content.kk";
import { t } from "@/lib/i18n/dictionary";
import { localeHref, type Locale } from "@/lib/i18n/locale";
import MediaSlot from "@/components/ui/MediaSlot";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function ProductionPreview({ locale = "ru" }: { locale?: Locale }) {
  const dict = t(locale);
  const featured = PRODUCTION.gallery.find((item) => item.imagePath.includes("production-04")) ?? PRODUCTION.gallery[0];
  const alt = locale === "kk" ? PRODUCTION_KK.galleryAlts[featured.imagePath.split("/").pop() ?? ""] ?? featured.alt : featured.alt;
  const content = locale === "kk" ? PRODUCTION_KK : PRODUCTION;

  return (
    <section className="bg-mist py-20 md:py-28">
      <div className="container-site grid gap-10 md:grid-cols-12 md:items-center md:gap-8">
        <RevealOnScroll className="md:col-span-7">
          <MediaSlot src={featured.imagePath} alt={alt} variant="light" aspect="aspect-[16/10]" />
        </RevealOnScroll>

        <RevealOnScroll delay={100} className="md:col-span-5">
          <p className="eyebrow">{dict.home.productionEyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-navy md:text-4xl">
            {content.heading}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate">{content.text}</p>
          <Link
            href={localeHref("/production", locale)}
            className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-medium text-navy transition-colors hover:text-cyan-ink"
          >
            {dict.nav.production}
            <span aria-hidden="true">→</span>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
