import { B2B } from "@/lib/constants";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function B2BBlock() {
  return (
    <section className="bg-graphite py-20 md:py-28">
      <div className="container-site grid gap-10 md:grid-cols-12 md:gap-8">
        <RevealOnScroll className="md:col-span-6">
          <p className="eyebrow">Для застройщиков и подрядчиков</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-white md:text-4xl">
            {B2B.heading}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cloud">{B2B.text}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contacts" variant="primary">
              {B2B.ctaPrimary}
            </Button>
            <Button href={`mailto:vipoknaatyrau@gmail.com?subject=${encodeURIComponent("Техническое задание")}`} variant="secondary">
              {B2B.ctaSecondary}
            </Button>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={120} className="md:col-span-5 md:col-start-8">
          <ul className="space-y-0">
            {B2B.points.map((point, i) => (
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
