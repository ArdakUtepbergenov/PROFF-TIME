"use client";

import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { t } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locale";
import { useBranch } from "@/components/providers/BranchProvider";
import { buildWhatsAppMessage, buildWhatsAppHref } from "@/lib/i18n/whatsapp";

type Props = {
  heading: string;
  text?: string;
  ctaLabel?: string;
  ctaHref?: string;
  locale?: Locale;
};

export default function CtaBand({
  heading,
  text,
  ctaLabel,
  ctaHref = "/contacts",
  locale = "ru",
}: Props) {
  const dict = t(locale);
  const { branch } = useBranch();
  const whatsappHref = buildWhatsAppHref(branch, buildWhatsAppMessage("project", locale, branch));

  return (
    <section className="bg-navy py-16 md:py-20">
      <div className="container-site flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <RevealOnScroll className="max-w-lg">
          <h2 className="font-display text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl">
            {heading}
          </h2>
          {text && <p className="mt-3 text-sm leading-relaxed text-cloud md:text-base">{text}</p>}
        </RevealOnScroll>
        <RevealOnScroll delay={100} className="flex flex-wrap gap-3">
          <Button href={ctaHref} variant="primary">
            {ctaLabel ?? dict.common.discussProject}
          </Button>
          <Button href={whatsappHref} variant="whatsapp" className="!text-white !border-cyan/60 hover:!bg-cyan-soft">
            {dict.common.whatsapp}
          </Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
