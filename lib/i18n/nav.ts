import type { Locale } from "@/lib/i18n/locale";
import { localeHref } from "@/lib/i18n/locale";
import { t } from "@/lib/i18n/dictionary";

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export function getNavLinks(locale: Locale): NavItem[] {
  const dict = t(locale);
  const h = (path: string) => localeHref(path, locale);

  return [
    { label: dict.nav.about, href: h("/about") },
    {
      label: dict.nav.services,
      href: h("/services"),
      children: [
        { label: dict.nav.servicePvh, href: h("/services/pvh") },
        { label: dict.nav.serviceAluminium, href: h("/services/aluminium") },
        { label: dict.nav.serviceLamination, href: h("/services/lamination") },
        { label: dict.nav.servicePowderCoating, href: h("/services/powder-coating") },
        { label: dict.nav.serviceFacades, href: h("/services/facades") },
      ],
    },
    { label: dict.nav.materials, href: h("/materials") },
    { label: dict.nav.production, href: h("/production") },
    { label: dict.nav.projects, href: h("/projects") },
    { label: dict.nav.contacts, href: h("/contacts") },
  ];
}
