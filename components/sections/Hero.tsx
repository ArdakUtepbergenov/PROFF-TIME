import { HOME_HERO as HERO } from "@/lib/constants";
import Button from "@/components/ui/Button";
import HeroMedia from "@/components/sections/HeroMedia";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-navy">
      <HeroMedia />

      <div className="container-site relative z-10 pb-16 pt-44 md:pb-20 md:pt-48">
        <h1 className="max-w-3xl font-display text-[2.25rem] font-extrabold leading-[1.08] tracking-tight text-white md:text-6xl lg:text-[4.25rem]">
          {HERO.headline.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-cloud md:text-lg">
          {HERO.subtitle}
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/contacts" variant="primary">
            {HERO.ctaPrimary}
          </Button>
          <Button href="/production" variant="secondary">
            {HERO.ctaSecondary}
          </Button>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10">
        <div className="container-site flex flex-wrap gap-x-10 gap-y-6 py-8">
          {HERO.stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-2xl font-bold text-cyan md:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs text-cloud md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
