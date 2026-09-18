"use client";

import { VISUALIZATION } from "@/lib/constants";
import { VISUALIZATION_KK } from "@/lib/i18n/content.kk";
import { VISUALIZATION_MESSAGE, buildWhatsAppHref } from "@/lib/i18n/whatsapp";
import type { Locale } from "@/lib/i18n/locale";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { useBranch } from "@/components/providers/BranchProvider";

export default function VisualizationCta({ locale = "ru" }: { locale?: Locale }) {
  const { branch } = useBranch();
  const content = locale === "kk" ? VISUALIZATION_KK : VISUALIZATION;
  const whatsappHref = buildWhatsAppHref(branch, VISUALIZATION_MESSAGE[locale]);

  return (
    <section className="bg-navy py-20 md:py-28">
      <div className="container-site flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <RevealOnScroll className="max-w-lg">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-white md:text-4xl">
            {content.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cloud">{content.text}</p>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <Button href={whatsappHref} variant="primary">
            {content.cta}
          </Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
