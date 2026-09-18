import ContactForm from "@/components/sections/ContactForm";
import BranchContactCard from "@/components/sections/BranchContactCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { BRANCHES } from "@/data/branches";
import { t } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locale";

type Props = {
  showHeading?: boolean;
  locale?: Locale;
};

export default function Contacts({ showHeading = true, locale = "ru" }: Props) {
  const dict = t(locale);

  return (
    <section id="contacts" className="bg-white py-20 md:py-28">
      <div className="container-site">
        {showHeading && (
          <RevealOnScroll className="max-w-xl">
            <p className="eyebrow">{dict.nav.contacts}</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-navy md:text-4xl">
              {dict.contacts.title}
            </h2>
          </RevealOnScroll>
        )}

        <div className={`grid gap-10 md:grid-cols-12 md:items-start md:gap-8 ${showHeading ? "mt-12" : ""}`}>
          <RevealOnScroll className="md:col-span-4 space-y-10">
            <BranchContactCard branch={BRANCHES.atyrau} cityLabel={dict.branchSwitch.atyrau} locale={locale} />
            <BranchContactCard branch={BRANCHES.astana} cityLabel={dict.branchSwitch.astana} locale={locale} />
          </RevealOnScroll>

          <RevealOnScroll delay={120} className="md:col-span-6 md:col-start-7">
            <div className="border border-line p-6 md:p-8">
              <ContactForm locale={locale} />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
