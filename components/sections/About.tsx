import { ABOUT } from "@/lib/constants";
import MediaSlot from "@/components/ui/MediaSlot";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

type Props = {
  showHeading?: boolean;
  showExtendedText?: boolean;
};

export default function About({ showHeading = true, showExtendedText = false }: Props) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-site grid gap-12 md:grid-cols-12 md:gap-8">
        <RevealOnScroll className="md:col-span-7">
          <MediaSlot src={ABOUT.imagePath} alt={ABOUT.imageAlt} variant="light" aspect="aspect-[5/4]" />
        </RevealOnScroll>

        <RevealOnScroll delay={120} className="flex flex-col justify-center md:col-span-5">
          {showHeading && (
            <>
              <p className="eyebrow">{ABOUT.eyebrow}</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-navy md:text-4xl">
                {ABOUT.heading}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate">{ABOUT.text}</p>
            </>
          )}
          {showExtendedText && (
            <p className={`${showHeading ? "mt-4" : ""} text-base leading-relaxed text-slate`}>
              {ABOUT.extendedText}
            </p>
          )}

          <div className="mt-10 border-t border-line pt-6">
            <div className="font-display text-5xl font-extrabold tracking-tight text-navy">
              {ABOUT.statValue}
            </div>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate">{ABOUT.statLabel}</p>
          </div>

          <ul className="mt-6 space-y-2">
            {ABOUT.supportingFacts.map((fact) => (
              <li key={fact} className="flex items-start gap-2 text-sm text-slate">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                {fact}
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}
