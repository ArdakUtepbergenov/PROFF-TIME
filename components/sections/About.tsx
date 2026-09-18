import { ABOUT } from "@/lib/constants";
import { ABOUT_KK } from "@/lib/i18n/content.kk";
import { t } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locale";
import MediaSlot from "@/components/ui/MediaSlot";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

type Props = {
  showHeading?: boolean;
  showExtendedText?: boolean;
  locale?: Locale;
};

export default function About({ showHeading = true, showExtendedText = false, locale = "ru" }: Props) {
  const dict = t(locale);
  const content = locale === "kk" ? ABOUT_KK : ABOUT;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-site grid gap-12 md:grid-cols-12 md:gap-8">
        <RevealOnScroll className="md:col-span-7">
          <MediaSlot src={ABOUT.imagePath} alt={ABOUT.imageAlt} variant="light" aspect="aspect-[5/4]" />
        </RevealOnScroll>

        <RevealOnScroll delay={120} className="flex flex-col justify-center md:col-span-5">
          {showHeading && (
            <>
              <p className="eyebrow">{dict.about.eyebrow}</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-navy md:text-4xl">
                {content.heading}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate">{content.text}</p>
            </>
          )}
          {showExtendedText && (
            <p className={`${showHeading ? "mt-4" : ""} text-base leading-relaxed text-slate`}>
              {content.extendedText}
            </p>
          )}

          <div className="mt-10 border-t border-line pt-6">
            <div className="font-display text-5xl font-extrabold tracking-tight text-navy">
              {ABOUT.statValue}
            </div>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate">{content.statLabel}</p>
          </div>

          <ul className="mt-6 space-y-2">
            {content.supportingFacts.map((fact) => (
              <li key={fact} className="flex items-start gap-2 text-sm text-slate">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                {fact}
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}
