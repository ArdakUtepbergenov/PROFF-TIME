"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CONTACTS, NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  const [servicesExpanded, setServicesExpanded] = useState(false);

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

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-navy lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Мобильное меню"
    >
      <div className="container-site flex h-24 items-center justify-between">
        <span className="inline-flex items-center rounded-md bg-white/95 px-2.5 py-1.5">
          <Image src="/images/logo.png" alt="PROFF-TIME" width={132} height={124} className="h-11 w-auto" />
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть меню"
          className="flex h-11 w-11 items-center justify-center rounded text-white"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <nav className="container-site mt-2 flex flex-1 flex-col justify-center gap-1 pb-10" aria-label="Мобильная навигация">
        <Link
          href="/"
          onClick={onClose}
          className="border-b border-white/10 py-4 font-display text-2xl font-bold text-white transition-colors hover:text-cyan"
        >
          Главная
        </Link>

        {NAV_LINKS.map((link) =>
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
                  aria-label={servicesExpanded ? "Свернуть список услуг" : "Развернуть список услуг"}
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
          <Button href={CONTACTS.phoneHref} variant="secondary" className="flex-1">
            Позвонить
          </Button>
          <Button href={CONTACTS.whatsappHref} variant="whatsapp" className="flex-1 !text-white !border-cyan">
            WhatsApp
          </Button>
        </div>
        <a
          href={CONTACTS.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-sm text-cloud"
        >
          {CONTACTS.instagramHandle}
        </a>
      </div>
    </div>
  );
}
