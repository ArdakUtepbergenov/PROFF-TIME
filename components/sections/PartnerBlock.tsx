import { PARTNER } from "@/lib/constants";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function PartnerBlock() {
  return (
    <RevealOnScroll>
      <div className="border border-white/15 bg-navy-light px-8 py-12 md:px-14 md:py-16">
        <p className="eyebrow">Партнёрство</p>
        <h2 className="mt-3 max-w-2xl font-display text-2xl font-bold leading-snug tracking-tight text-white md:text-3xl">
          {PARTNER.heading}
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-cloud md:text-base">
          {PARTNER.text}
        </p>
      </div>
    </RevealOnScroll>
  );
}
