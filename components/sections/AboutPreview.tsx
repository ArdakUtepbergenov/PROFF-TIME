import Link from "next/link";
import { ABOUT } from "@/lib/constants";
import { ABOUT_KK, ADVANTAGES_KK } from "@/lib/i18n/content.kk";
import { t } from "@/lib/i18n/dictionary";
import { localeHref, type Locale } from "@/lib/i18n/locale";
import MediaSlot from "@/components/ui/MediaSlot";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const QUICK_STATS_RU = [
  { value: "350 м²", label: "Собственное производство" },
  { value: "15–20 лет", label: "Опыт специалистов" },
  { value: "Полный цикл", label: "Производство и монтаж" },
];

const QUICK_STATS_KK = [
  { value: "350 м²", label: "Меншікті өндіріс" },
  { value: "15–20 жыл", label: "Мамандардың тәжірибесі" },
  { value: "Толық цикл", label: ADVANTAGES_KK[2].label },
];

export default function AboutPreview({ locale = "ru" }: { locale?: Locale }) {
  const dict = t(locale);
  const content = locale === "kk" ? ABOUT_KK : ABOUT;
  const stats = locale === "kk" ? QUICK_STATS_KK : QUICK_STATS_RU;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-site grid gap-12 md:grid-cols-12 md:gap-8">
        <RevealOnScroll className="md:col-span-6">
          <MediaSlot src={ABOUT.imagePath} alt={ABOUT.imageAlt} variant="light" aspect="aspect-[5/4]" />
        </RevealOnScroll>

        <RevealOnScroll delay={120} className="flex flex-col justify-center md:col-span-6">
          <p className="eyebrow">{dict.about.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-navy md:text-4xl">
            {content.heading}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-slate">{content.text}</p>

          <div className="mt-9 grid grid-cols-3 gap-4 border-t border-line pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-xl font-extrabold tracking-tight text-navy md:text-2xl">
                  {stat.value}
                </div>
                <p className="mt-1 text-xs leading-snug text-slate">{stat.label}</p>
              </div>
            ))}
          </div>

          <Link
            href={localeHref("/about", locale)}
            className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-navy transition-colors hover:text-cyan-ink"
          >
            {dict.home.aboutCta}
            <span aria-hidden="true">→</span>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
