"use client";

import { PVH_OFFER } from "@/lib/constants";
import { PVH_OFFER_KK } from "@/lib/i18n/content.kk";
import type { Locale } from "@/lib/i18n/locale";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { useBranch } from "@/components/providers/BranchProvider";
import { buildWhatsAppMessage, buildWhatsAppHref } from "@/lib/i18n/whatsapp";

export default function PvhCommercialBlock({ locale = "ru" }: { locale?: Locale }) {
  const { branch } = useBranch();
  const content = locale === "kk" ? PVH_OFFER_KK : PVH_OFFER;
  const priceHref = buildWhatsAppHref(branch, buildWhatsAppMessage("price", locale, branch));

  return (
    <section className="bg-mist py-16 md:py-20">
      <div className="container-site">
        <RevealOnScroll className="max-w-2xl">
          <p className="font-display text-2xl font-bold tracking-tight text-navy md:text-3xl">
            {content.priceLine}
          </p>

          <ul className="mt-7 space-y-3 border-t border-line pt-6">
            <li className="flex items-start gap-3 text-sm text-navy md:text-base">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan" />
              {content.giftsLine}
            </li>
            <li className="flex items-start gap-3 text-sm text-navy md:text-base">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan" />
              {content.discountLine}
            </li>
            <li className="flex items-start gap-3 text-sm text-navy md:text-base">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan" />
              {content.brandGiftsLine}
            </li>
          </ul>

          <Button href={priceHref} variant="primary" className="mt-8">
            {content.cta}
          </Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
