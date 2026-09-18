"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import MobileMenu from "@/components/layout/MobileMenu";
import { getNavLinks } from "@/lib/i18n/nav";
import { t } from "@/lib/i18n/dictionary";
import { localeFromPathname, otherLocalePath, localeHref } from "@/lib/i18n/locale";
import { useBranch } from "@/components/providers/BranchProvider";
import type { BranchId } from "@/data/branches";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [branchMenuOpen, setBranchMenuOpen] = useState(false);

  const pathname = usePathname() ?? "/";
  const locale = localeFromPathname(pathname);
  const dict = t(locale);
  const navLinks = getNavLinks(locale);
  const { branchId, branch, setBranchId } = useBranch();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const branchOptions: { id: BranchId; label: string }[] = [
    { id: "atyrau", label: dict.branchSwitch.atyrau },
    { id: "astana", label: dict.branchSwitch.astana },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ease-smooth ${
          scrolled ? "bg-navy/95 backdrop-blur-sm shadow-[0_1px_0_rgba(255,255,255,0.08)]" : "bg-transparent"
        }`}
      >
        <div className="container-site flex h-24 items-center justify-between">
          <Link
            href={localeHref("/", locale)}
            className="flex items-center gap-2 px-2.5 py-1.5 shadow-sm"
            aria-label="PROFF-TIME"
          >
            <Image
              src="/images/logo.png"
              alt="PROFF-TIME"
              width={132}
              height={124}
              priority
              className="h-11 w-auto md:h-12"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label={dict.header.mainNav}>
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-sm font-medium text-white/85 transition-colors hover:text-cyan"
                  >
                    {link.label}
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </Link>

                  {servicesOpen && (
                    <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3">
                      <div className="rounded-md border border-white/10 bg-navy-light py-2 shadow-lg">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-2.5 text-sm text-white/85 transition-colors hover:bg-white/5 hover:text-cyan"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white/85 transition-colors hover:text-cyan"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            {/* Переключатель филиала */}
            <div
              className="relative"
              onMouseEnter={() => setBranchMenuOpen(true)}
              onMouseLeave={() => setBranchMenuOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-white/85 transition-colors hover:text-cyan"
                aria-label={dict.branchSwitch.label}
                aria-expanded={branchMenuOpen}
              >
                {branchId === "atyrau" ? dict.branchSwitch.atyrau : dict.branchSwitch.astana}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </button>
              {branchMenuOpen && (
                <div className="absolute right-0 top-full w-40 pt-3">
                  <div className="rounded-md border border-white/10 bg-navy-light py-2 shadow-lg">
                    {branchOptions.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setBranchId(opt.id)}
                        className={`block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-white/5 hover:text-cyan ${
                          branchId === opt.id ? "text-cyan" : "text-white/85"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href={branch.phoneHref}
              className="text-sm font-medium text-white/85 transition-colors hover:text-cyan"
            >
              {branch.phone}
            </a>

            {/* Языковой переключатель */}
            <div className="flex items-center gap-1 text-sm font-medium text-white/60">
              <Link
                href={locale === "ru" ? pathname : otherLocalePath(pathname)}
                className={locale === "ru" ? "text-white" : "transition-colors hover:text-cyan"}
              >
                {dict.languageSwitch.ru}
              </Link>
              <span aria-hidden="true">|</span>
              <Link
                href={locale === "kk" ? pathname : otherLocalePath(pathname)}
                className={locale === "kk" ? "text-white" : "transition-colors hover:text-cyan"}
              >
                {dict.languageSwitch.kk}
              </Link>
            </div>

            <Button href={localeHref("/contacts", locale)} variant="primary" className="!py-2.5">
              {dict.header.discussProject}
            </Button>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded text-white lg:hidden"
            aria-label={dict.header.openMenu}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 6H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M3 12H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M3 18H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} locale={locale} pathname={pathname} />
    </>
  );
}
