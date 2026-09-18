"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { t } from "@/lib/i18n/dictionary";
import { localeHref, type Locale } from "@/lib/i18n/locale";
import { useBranch } from "@/components/providers/BranchProvider";

export default function ContactsPreview({ locale = "ru" }: { locale?: Locale }) {
  const dict = t(locale);
  const { branch } = useBranch();
  const address = locale === "kk" ? branch.addressKk : branch.address;

  return (
    <section id="contacts" className="bg-white py-20 md:py-28">
      <div className="container-site grid gap-10 md:grid-cols-12 md:items-center md:gap-8">
        <RevealOnScroll className="md:col-span-6">
          <p className="eyebrow">{dict.nav.contacts}</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-navy md:text-4xl">
            {dict.contacts.formHeading}
          </h2>

          <ul className="mt-7 space-y-3 text-sm">
            <li>
              <span className="block text-slate">{dict.contacts.address}</span>
              <span className="font-medium text-navy">{address}</span>
            </li>
            <li>
              <span className="block text-slate">{dict.contacts.phone}</span>
              <a href={branch.phoneHref} className="font-medium text-navy hover:text-cyan-ink">
                {branch.phone}
              </a>
            </li>
            {branch.email && (
              <li>
                <span className="block text-slate">{dict.contacts.email}</span>
                <a href={branch.emailHref} className="font-medium text-navy hover:text-cyan-ink">
                  {branch.email}
                </a>
              </li>
            )}
            {branch.instagramHandle && (
              <li>
                <span className="block text-slate">{dict.contacts.instagram}</span>
                <a
                  href={branch.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-navy hover:text-cyan-ink"
                >
                  {branch.instagramHandle}
                </a>
              </li>
            )}
          </ul>
        </RevealOnScroll>

        <RevealOnScroll delay={100} className="md:col-span-5 md:col-start-8">
          <div className="flex flex-col gap-3">
            <Button href={localeHref("/contacts", locale)} variant="primary">
              {dict.form.submit}
            </Button>
            <div className="flex gap-3">
              <Button href={branch.phoneHref} variant="ghost" className="flex-1">
                {dict.common.call}
              </Button>
              <Button href={branch.whatsappHref} variant="whatsapp" className="flex-1">
                {dict.common.whatsapp}
              </Button>
            </div>
            <Link
              href={localeHref("/contacts", locale)}
              className="mt-2 text-center text-sm font-medium text-navy transition-colors hover:text-cyan-ink"
            >
              {dict.contacts.fullContactsAndMap} →
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
