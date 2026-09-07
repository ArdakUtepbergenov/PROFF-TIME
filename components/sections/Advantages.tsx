import { ADVANTAGES } from "@/lib/constants";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

type Props = {
  eyebrow?: string;
  heading?: string;
};

export default function Advantages({
  eyebrow = "Преимущества",
  heading = "Что стоит за каждым проектом",
}: Props) {
  return (
    <section className="bg-mist py-20 md:py-28">
      <div className="container-site">
        <RevealOnScroll className="max-w-xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-navy md:text-4xl">
            {heading}
          </h2>
        </RevealOnScroll>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGES.map((item, i) => (
            <RevealOnScroll key={item.label} delay={i * 60}>
              <div className="border-t border-navy/15 pt-5">
                <div className="font-display text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
                  {item.value}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate">{item.label}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
