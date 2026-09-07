import Link from "next/link";
import { Service } from "@/lib/constants";
import MediaSlot from "@/components/ui/MediaSlot";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

type Props = {
  service: Service;
  index: number;
  reversed: boolean;
};

export default function ServiceItem({ service, index, reversed }: Props) {
  const num = String(index + 1).padStart(2, "0");
  const href = `/services/${service.slug}`;

  return (
    <div className="grid gap-8 border-t border-line py-14 md:grid-cols-12 md:gap-8 md:py-16">
      <RevealOnScroll className={`md:col-span-6 ${reversed ? "md:order-2" : ""}`}>
        <Link href={href} className="block">
          <MediaSlot src={service.imagePath} alt={service.imageLabel} variant="light" aspect="aspect-[4/3]" fit="contain" />
        </Link>
      </RevealOnScroll>

      <RevealOnScroll delay={100} className={`flex flex-col justify-center md:col-span-6 ${reversed ? "md:order-1" : ""}`}>
        <span className="font-display text-sm font-semibold text-cyan">{num}</span>
        <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-navy md:text-3xl">
          <Link href={href} className="transition-colors hover:text-cyan-ink">
            {service.headline}
          </Link>
        </h3>
        <p className="mt-4 text-base leading-relaxed text-slate">{service.description}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate/80">{service.detail}</p>
        <Link
          href={href}
          className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-medium text-navy transition-colors hover:text-cyan-ink"
        >
          Подробнее об услуге
          <span aria-hidden="true">→</span>
        </Link>
      </RevealOnScroll>
    </div>
  );
}
