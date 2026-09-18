import { POSITIONING_STATEMENT } from "@/lib/constants";
import { HOME_HERO_KK } from "@/lib/i18n/content.kk";
import type { Locale } from "@/lib/i18n/locale";

export default function PositioningStrip({ locale = "ru" }: { locale?: Locale }) {
  const sentences =
    locale === "kk"
      ? HOME_HERO_KK.positioning.map((s) => s.replace(/\.$/, ""))
      : POSITIONING_STATEMENT.split(". ").map((s) => s.replace(/\.$/, ""));

  return (
    <section className="bg-navy py-8 md:py-10" aria-label="Позиционирование компании">
      <div className="container-site">
        <p className="flex flex-wrap gap-x-3 font-display text-lg font-semibold text-white/90 md:text-xl">
          {sentences.map((s, i) => (
            <span key={i} className="flex items-center gap-3">
              {s}.
              {i < sentences.length - 1 && <span className="h-1 w-1 rounded-full bg-cyan/60" />}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
