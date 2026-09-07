import { POSITIONING_STATEMENT } from "@/lib/constants";

const SENTENCES = POSITIONING_STATEMENT.split(". ").map((s) => s.replace(/\.$/, ""));

export default function PositioningStrip() {
  return (
    <section className="bg-navy py-8 md:py-10" aria-label="Позиционирование компании">
      <div className="container-site">
        <p className="flex flex-wrap gap-x-3 font-display text-lg font-semibold text-white/90 md:text-xl">
          {SENTENCES.map((s, i) => (
            <span key={i} className="flex items-center gap-3">
              {s}.
              {i < SENTENCES.length - 1 && <span className="h-1 w-1 rounded-full bg-cyan/60" />}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
