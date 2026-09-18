import { OFFERS } from "@/lib/constants";
import { OFFERS_KK } from "@/lib/i18n/content.kk";
import { t } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locale";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function OffersSection({ locale = "ru" }: { locale?: Locale }) {
  const dict = t(locale);
  const offers = locale === "kk" ? OFFERS_KK : OFFERS;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-site">
        <RevealOnScroll className="max-w-xl">
          <p className="eyebrow">{dict.home.offersEyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-navy md:text-4xl">
            {dict.home.offersHeading}
          </h2>
        </RevealOnScroll>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {offers.map((offer, i) => (
            <RevealOnScroll key={offer.id} delay={i * 60}>
              <div className="border-t border-navy/15 pt-5">
                <span className="font-display text-xs font-semibold text-cyan-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-navy md:text-2xl">
                  {offer.title}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate">{offer.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
