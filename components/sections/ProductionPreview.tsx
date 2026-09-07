import Link from "next/link";
import { PRODUCTION } from "@/lib/constants";
import MediaSlot from "@/components/ui/MediaSlot";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function ProductionPreview() {
  const featured = PRODUCTION.gallery.find((item) => item.imagePath.includes("production-04")) ?? PRODUCTION.gallery[0];

  return (
    <section className="bg-mist py-20 md:py-28">
      <div className="container-site grid gap-10 md:grid-cols-12 md:items-center md:gap-8">
        <RevealOnScroll className="md:col-span-7">
          <MediaSlot src={featured.imagePath} alt={featured.alt} variant="light" aspect="aspect-[16/10]" />
        </RevealOnScroll>

        <RevealOnScroll delay={100} className="md:col-span-5">
          <p className="eyebrow">{PRODUCTION.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-navy md:text-4xl">
            {PRODUCTION.heading}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate">{PRODUCTION.text}</p>
          <Link
            href="/production"
            className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-medium text-navy transition-colors hover:text-cyan-ink"
          >
            Производство
            <span aria-hidden="true">→</span>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
