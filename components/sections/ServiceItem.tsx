import Link from "next/link";
import { Service } from "@/lib/constants";
import { getServiceKk } from "@/lib/i18n/content.kk";
import { t } from "@/lib/i18n/dictionary";
import { localeHref, type Locale } from "@/lib/i18n/locale";
import MediaSlot from "@/components/ui/MediaSlot";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

type Props = {
  service: Service;
  index: number;
  reversed: boolean;
  locale?: Locale;
};

export default function ServiceItem({ service, index, reversed, locale = "ru" }: Props) {
  const dict = t(locale);
  const num = String(index + 1).padStart(2, "0");
  const href = localeHref(`/services/${service.slug}`, locale);
  const hasImage = Boolean(service.imagePath);
  const kk = locale === "kk" ? getServiceKk(service.id) : undefined;

  const headline = kk?.headline ?? service.headline;
  const description = kk?.description ?? service.description;
  const detail = kk?.detail ?? service.detail;
  const imageLabel = kk?.imageLabel ?? service.imageLabel;

  const textContent = (
    <>
      <span className="font-display text-sm font-semibold text-cyan">{num}</span>
      <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-navy md:text-3xl">
        <Link href={href} className="transition-colors hover:text-cyan-ink">
          {headline}
        </Link>
      </h3>
      <p className="mt-4 text-base leading-relaxed text-slate">{description}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate/80">{detail}</p>
      <Link
        href={href}
        className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-medium text-navy transition-colors hover:text-cyan-ink"
      >
        {dict.common.readMore}
        <span aria-hidden="true">→</span>
      </Link>
    </>
  );

  if (!hasImage) {
    return (
      <div className="border-t border-line py-14 md:py-16">
        <RevealOnScroll className="max-w-2xl">{textContent}</RevealOnScroll>
      </div>
    );
  }

  return (
    <div className="grid gap-8 border-t border-line py-14 md:grid-cols-12 md:gap-8 md:py-16">
      <RevealOnScroll className={`md:col-span-6 ${reversed ? "md:order-2" : ""}`}>
        <Link href={href} className="block">
          <MediaSlot src={service.imagePath} alt={imageLabel} variant="light" aspect="aspect-[4/3]" fit="contain" />
        </Link>
      </RevealOnScroll>

      <RevealOnScroll delay={100} className={`flex flex-col justify-center md:col-span-6 ${reversed ? "md:order-1" : ""}`}>
        {textContent}
      </RevealOnScroll>
    </div>
  );
}
