import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { CONTACTS } from "@/lib/constants";

type Props = {
  heading: string;
  text?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function CtaBand({
  heading,
  text,
  ctaLabel = "Обсудить проект",
  ctaHref = "/contacts",
}: Props) {
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
            {ctaLabel}
          </Button>
          <Button href={CONTACTS.whatsappHref} variant="whatsapp" className="!text-white !border-cyan/60 hover:!bg-cyan-soft">
            Написать в WhatsApp
          </Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
