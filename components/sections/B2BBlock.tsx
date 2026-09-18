"use client";

import { B2B } from "@/lib/constants";
import { B2B_KK, B2B_VAT_KK } from "@/lib/i18n/content.kk";
import { B2B_VAT } from "@/lib/constants";
import { t } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locale";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { useBranch } from "@/components/providers/BranchProvider";
import { buildWhatsAppMessage, buildWhatsAppHref } from "@/lib/i18n/whatsapp";

export default function B2BBlock({ locale = "ru" }: { locale?: Locale }) {
  const dict = t(locale);
  const { branch } = useBranch();
  const content = locale === "kk" ? B2B_KK : B2B;
  const vat = locale === "kk" ? B2B_VAT_KK : B2B_VAT;
  const b2bHref = buildWhatsAppHref(branch, buildWhatsAppMessage("b2b", locale, branch));
  const mailtoHref = `mailto:vipoknaatyrau@gmail.com?subject=${encodeURIComponent(
    locale === "kk" ? "Техникалық тапсырма" : "Техническое задание"
  )}`;

  return (
    <section className="bg-graphite py-20 md:py-28">
      <div className="container-site grid gap-10 md:grid-cols-12 md:gap-8">
        <RevealOnScroll className="md:col-span-6">
          <p className="eyebrow">{locale === "kk" ? "Құрылысшылар мен мердігерлерге" : "Для застройщиков и подрядчиков"}</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-white md:text-4xl">
            {content.heading}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cloud">{content.text}</p>
          <p className="mt-3 text-sm font-medium text-cyan">{vat.label}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={b2bHref} variant="primary">
              {vat.cta}
            </Button>
            <Button href={mailtoHref} variant="secondary">
              {content.ctaSecondary}
            </Button>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={120} className="md:col-span-5 md:col-start-8">
          <ul className="space-y-0">
            {content.points.map((point, i) => (
              <li
                key={point}
                className="flex items-center gap-4 border-t border-white/10 py-5 last:border-b"
              >
                <span className="font-display text-sm text-cyan">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm text-white/90 md:text-base">{point}</span>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}
