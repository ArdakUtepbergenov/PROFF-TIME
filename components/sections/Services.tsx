import { SERVICES } from "@/lib/constants";
import ServiceItem from "@/components/sections/ServiceItem";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="container-site">
        <RevealOnScroll className="max-w-xl">
          <p className="eyebrow">Услуги</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-navy md:text-4xl">
            Что мы производим и выполняем
          </h2>
        </RevealOnScroll>

        <div className="mt-10">
          {SERVICES.map((service, i) => (
            <ServiceItem key={service.id} service={service} index={i} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
