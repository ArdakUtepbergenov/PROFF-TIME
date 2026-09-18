import PageHero from "@/components/layout/PageHero";
import Contacts from "@/components/sections/Contacts";
import { t } from "@/lib/i18n/dictionary";
import { localeHref, type Locale } from "@/lib/i18n/locale";

export default function ContactsContent({ locale = "ru" }: { locale?: Locale }) {
  const dict = t(locale);

  return (
    <>
      <PageHero
        eyebrow={dict.nav.contacts}
        title={dict.contacts.title}
        description={dict.contacts.subtitle}
        breadcrumbs={[{ label: dict.nav.home, href: localeHref("/", locale) }, { label: dict.nav.contacts }]}
        breadcrumbsAriaLabel={dict.breadcrumbs.label}
        size="compact"
      />
      <Contacts showHeading={false} locale={locale} />
    </>
  );
}
