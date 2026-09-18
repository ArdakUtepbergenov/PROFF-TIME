import { OTHER_PROJECTS_GALLERY } from "@/lib/constants";
import { OTHER_PROJECTS_ALT_KK } from "@/lib/i18n/content.kk";
import { t } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locale";
import MediaSlot from "@/components/ui/MediaSlot";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

/**
 * Фотографии реализованных объектов без подтверждённого названия/адреса.
 * Намеренно НЕ ссылаются на detail-страницы — для них нет ни slug, ни
 * названия, ни описания, которые можно было бы честно показать.
 */
export default function OtherProjectsGallery({ locale = "ru" }: { locale?: Locale }) {
  const dict = t(locale);

  return (
    <section className="bg-mist py-20 md:py-28">
      <div className="container-site">
        <RevealOnScroll className="max-w-xl">
          <p className="eyebrow">{dict.projects.portfolioEyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-navy md:text-4xl">
            {dict.projects.otherObjects}
          </h2>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {OTHER_PROJECTS_GALLERY.map((photo, i) => (
            <RevealOnScroll key={photo.filename} delay={i * 40}>
              <MediaSlot
                src={photo.path}
                alt={locale === "kk" ? OTHER_PROJECTS_ALT_KK : photo.alt}
                variant="light"
                aspect="aspect-[4/3]"
                fit="cover"
              />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
