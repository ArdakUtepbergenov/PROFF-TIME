import { PROCESS_STEPS } from "@/lib/constants";
import { PROCESS_STEPS_KK } from "@/lib/i18n/content.kk";
import { t } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locale";
import TimelineStep from "@/components/sections/TimelineStep";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Process({ locale = "ru" }: { locale?: Locale }) {
  const dict = t(locale);
  const steps = locale === "kk" ? PROCESS_STEPS_KK : PROCESS_STEPS;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-site">
        <RevealOnScroll className="max-w-xl">
          <p className="eyebrow">{dict.home.processEyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-navy md:text-4xl">
            {dict.home.processHeading}
          </h2>
        </RevealOnScroll>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <RevealOnScroll key={step.index} delay={i * 50}>
              <TimelineStep step={step} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
