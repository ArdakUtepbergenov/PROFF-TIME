import Image from "next/image";
import Link from "next/link";
import { FOOTER, SITE } from "@/lib/constants";
import { BRANCHES } from "@/data/branches";
import { SERVICES } from "@/data/services";
import { t } from "@/lib/i18n/dictionary";
import { getServiceKk, FOOTER_KK } from "@/lib/i18n/content.kk";
import { localeHref, type Locale } from "@/lib/i18n/locale";

export default function Footer({ locale }: { locale: Locale }) {
  const dict = t(locale);
  const branch = BRANCHES.atyrau;
  const h = (path: string) => localeHref(path, locale);

  const footerNav = [
    { label: dict.nav.about, href: h("/about") },
    { label: dict.nav.materials, href: h("/materials") },
    { label: dict.nav.production, href: h("/production") },
    { label: dict.nav.projects, href: h("/projects") },
    { label: dict.nav.contacts, href: h("/contacts") },
  ];

  return (
    <footer className="bg-ink text-cloud">
      <div className="container-site grid gap-10 py-16 md:grid-cols-[1.1fr_0.9fr_1fr_1fr] md:gap-8 md:py-20">
        <div>
          <Link href={h("/")} className="inline-flex items-center rounded-md bg-white/95 px-2.5 py-1.5">
            <Image
              src="/images/logo.png"
              alt="PROFF-TIME"
              width={132}
              height={124}
              className="h-11 w-auto"
            />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cloud/80">
            {locale === "kk" ? FOOTER_KK.text : FOOTER.text}
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">{dict.footer.navigation}</p>
          <ul className="space-y-3">
            {footerNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-cloud/85 transition-colors hover:text-cyan">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">{dict.footer.services}</p>
          <ul className="space-y-3">
            <li>
              <Link href={h("/services")} className="text-sm text-cloud/85 transition-colors hover:text-cyan">
                {dict.footer.allServices}
              </Link>
            </li>
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link
                  href={h(`/services/${service.slug}`)}
                  className="text-sm text-cloud/85 transition-colors hover:text-cyan"
                >
                  {locale === "kk" ? getServiceKk(service.id)?.headline ?? service.headline : service.headline}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">{dict.footer.contacts}</p>
          <ul className="space-y-3 text-sm text-cloud/85">
            <li>
              <a href={branch.phoneHref} className="transition-colors hover:text-cyan">
                {branch.phone}
              </a>
            </li>
            <li>
              <a href={branch.emailHref} className="transition-colors hover:text-cyan">
                {branch.email}
              </a>
            </li>
            <li>{locale === "kk" ? branch.addressKk : branch.address}</li>
            <li>
              <a
                href={branch.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-cyan"
              >
                {branch.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-cloud/60 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} {SITE.legalName}
          </span>
          <span>{SITE.slogan}</span>
        </div>
      </div>
    </footer>
  );
}
