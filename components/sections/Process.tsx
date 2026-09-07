import { PROCESS_STEPS } from "@/lib/constants";
import TimelineStep from "@/components/sections/TimelineStep";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Process() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-site">
        <RevealOnScroll className="max-w-xl">
          <p className="eyebrow">Этапы работы</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-navy md:text-4xl">
            От заявки до сдачи объекта
          </h2>
        </RevealOnScroll>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <RevealOnScroll key={step.index} delay={i * 50}>
              <TimelineStep step={step} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
