import { SERVICES } from "@/lib/constants";
import { t } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locale";
import ServiceItem from "@/components/sections/ServiceItem";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Services({ locale = "ru" }: { locale?: Locale }) {
  const dict = t(locale);
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="container-site">
        <RevealOnScroll className="max-w-xl">
          <p className="eyebrow">{dict.home.servicesEyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-navy md:text-4xl">
            {dict.services.listHeading}
          </h2>
        </RevealOnScroll>

        <div className="mt-10">
          {SERVICES.map((service, i) => (
            <ServiceItem key={service.id} service={service} index={i} reversed={i % 2 === 1} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
