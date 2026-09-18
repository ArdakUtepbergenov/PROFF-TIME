"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { getNavLinks } from "@/lib/i18n/nav";
import { t } from "@/lib/i18n/dictionary";
import { localeHref, otherLocalePath, type Locale } from "@/lib/i18n/locale";
import { useBranch } from "@/components/providers/BranchProvider";
import type { BranchId } from "@/data/branches";

type Props = {
  open: boolean;
  onClose: () => void;
  locale: Locale;
  pathname: string;
};

export default function MobileMenu({ open, onClose, locale, pathname }: Props) {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const dict = t(locale);
  const navLinks = getNavLinks(locale);
  const { branchId, branch, setBranchId } = useBranch();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const branchOptions: { id: BranchId; label: string }[] = [
    { id: "atyrau", label: dict.branchSwitch.atyrau },
    { id: "astana", label: dict.branchSwitch.astana },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-navy lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label={dict.header.mobileMenuLabel}
    >
      <div className="container-site flex h-24 items-center justify-between">
        <span className="inline-flex items-center rounded-md bg-white/95 px-2.5 py-1.5">
          <Image src="/images/logo.png" alt="PROFF-TIME" width={132} height={124} className="h-11 w-auto" />
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label={dict.header.closeMenu}
          className="flex h-11 w-11 items-center justify-center rounded text-white"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Переключатели языка и филиала */}
      <div className="container-site flex items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="flex gap-1 rounded-md border border-white/15 p-1">
          {branchOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setBranchId(opt.id)}
              className={`rounded px-3 py-1.5 text-xs font-medium transition-colors ${
                branchId === opt.id ? "bg-cyan text-navy" : "text-white/70"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm font-medium">
          <Link href={locale === "ru" ? pathname : otherLocalePath(pathname)} onClick={onClose} className={locale === "ru" ? "text-white" : "text-white/50"}>
            {dict.languageSwitch.ru}
          </Link>
          <span className="text-white/30" aria-hidden="true">|</span>
          <Link href={locale === "kk" ? pathname : otherLocalePath(pathname)} onClick={onClose} className={locale === "kk" ? "text-white" : "text-white/50"}>
            {dict.languageSwitch.kk}
          </Link>
        </div>
      </div>

      <nav className="container-site mt-2 flex flex-1 flex-col justify-center gap-1 pb-10" aria-label={dict.header.mobileNav}>
        <Link
          href={localeHref("/", locale)}
          onClick={onClose}
          className="border-b border-white/10 py-4 font-display text-2xl font-bold text-white transition-colors hover:text-cyan"
        >
          {dict.nav.home}
        </Link>

        {navLinks.map((link) =>
          link.children ? (
            <div key={link.href} className="border-b border-white/10">
              <div className="flex items-center justify-between py-4">
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="font-display text-2xl font-bold text-white transition-colors hover:text-cyan"
                >
                  {link.label}
                </Link>
                <button
                  type="button"
                  aria-label={servicesExpanded ? dict.header.collapseServices : dict.header.expandServices}
                  aria-expanded={servicesExpanded}
                  onClick={() => setServicesExpanded((v) => !v)}
                  className="flex h-9 w-9 items-center justify-center text-white/70"
                >
                  <svg
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    className={`transition-transform duration-200 ${servicesExpanded ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  >
                    <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              {servicesExpanded && (
                <ul className="pb-4 pl-1">
                  {link.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        onClick={onClose}
                        className="block py-2.5 text-base text-cloud transition-colors hover:text-cyan"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="border-b border-white/10 py-4 font-display text-2xl font-bold text-white transition-colors hover:text-cyan"
            >
              {link.label}
            </Link>
          )
        )}
      </nav>

      <div className="container-site mb-10 flex flex-col gap-4">
        <div className="flex gap-3">
          <Button href={branch.phoneHref} variant="secondary" className="flex-1">
            {dict.common.call}
          </Button>
          <Button href={branch.whatsappHref} variant="whatsapp" className="flex-1 !text-white !border-cyan">
            {dict.common.whatsapp}
          </Button>
        </div>
        {branch.instagramUrl && (
          <a
            href={branch.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-sm text-cloud"
          >
            {branch.instagramHandle}
          </a>
        )}
      </div>
    </div>
  );
}
