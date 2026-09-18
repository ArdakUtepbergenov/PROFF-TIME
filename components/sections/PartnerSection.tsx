import PartnerBlock from "@/components/sections/PartnerBlock";
import type { Locale } from "@/lib/i18n/locale";

export default function PartnerSection({ locale = "ru" }: { locale?: Locale }) {
  return (
    <section className="bg-navy py-16 md:py-20">
      <div className="container-site">
        <PartnerBlock locale={locale} />
      </div>
    </section>
  );
}
