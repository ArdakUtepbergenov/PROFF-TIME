"use client";

import { HOME_HERO as HERO } from "@/lib/constants";
import Button from "@/components/ui/Button";
import HeroMedia from "@/components/sections/HeroMedia";
import { t } from "@/lib/i18n/dictionary";
import { HOME_HERO_KK, PRICING_KK, INSTALL_KK } from "@/lib/i18n/content.kk";
import { localeHref, type Locale } from "@/lib/i18n/locale";
import { useBranch } from "@/components/providers/BranchProvider";
import { buildWhatsAppMessage, buildWhatsAppHref } from "@/lib/i18n/whatsapp";
import { PRICING, INSTALL } from "@/lib/constants";

export default function Hero({ locale = "ru" }: { locale?: Locale }) {
  const dict = t(locale);
  const { branch } = useBranch();

  const headline = locale === "kk" ? HOME_HERO_KK.headline : HERO.headline;
  const subtitle = locale === "kk" ? HOME_HERO_KK.subtitle : HERO.subtitle;
  const priceLine = locale === "kk" ? PRICING_KK.heroLine : PRICING.heroLine;
  const installNote = locale === "kk" ? INSTALL_KK.note : INSTALL.note;
  const stats = locale === "kk" ? HOME_HERO_KK.stats : HERO.stats;

  const priceHref = buildWhatsAppHref(branch, buildWhatsAppMessage("price", locale, branch));

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-navy">
      <HeroMedia locale={locale} />

      <div className="container-site relative z-10 pb-16 pt-44 md:pb-20 md:pt-48">
        <h1 className="max-w-3xl font-display text-[2.25rem] font-extrabold leading-[1.08] tracking-tight text-white md:text-6xl lg:text-[4.25rem]">
          {headline.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-cloud md:text-lg">{subtitle}</p>

        <p className="mt-4 font-display text-lg font-bold text-cyan md:text-xl">{priceLine}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={priceHref} variant="primary">
            {dict.common.calculateCost}
          </Button>
          <Button href={localeHref("/contacts", locale)} variant="secondary">
            {dict.common.discussProject}
          </Button>
        </div>

        <p className="mt-4 text-xs font-medium tracking-wide2 text-cloud/80 md:text-sm">{installNote}</p>
      </div>

      <div className="relative z-10 border-t border-white/10">
        <div className="container-site flex flex-wrap gap-x-10 gap-y-6 py-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-2xl font-bold text-cyan md:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs text-cloud md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
