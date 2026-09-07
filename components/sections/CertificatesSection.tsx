"use client";

import { useEffect, useState } from "react";
import { CERTIFICATES } from "@/data/certificates";
import MediaSlot from "@/components/ui/MediaSlot";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function CertificatesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  const active = openIndex !== null ? CERTIFICATES[openIndex] : null;

  return (
    <section className="bg-mist py-20 md:py-28">
      <div className="container-site">
        <RevealOnScroll className="max-w-xl">
          <p className="eyebrow">Документы</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-navy md:text-4xl">
            Сертификаты и документы
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            Ниже — документы компании с указанием их статуса. Архивные документы приведены как
            история сотрудничества, а не как подтверждение текущего партнёрства.
          </p>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 md:gap-4">
          {CERTIFICATES.map((cert, i) => (
            <RevealOnScroll key={cert.filename} delay={i * 50}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`Открыть документ крупно: ${cert.title}`}
                className="group block w-full text-left"
              >
                <MediaSlot src={cert.path} alt={cert.alt} variant="light" aspect="aspect-[3/4]" fit="contain" />
                <p className="mt-2 text-xs font-medium leading-snug text-navy">{cert.title}</p>
                <p
                  className={`mt-0.5 text-xs ${
                    cert.status === "archive" ? "text-slate" : "text-cyan-ink"
                  }`}
                >
                  {cert.statusLabel}
                </p>
              </button>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Закрыть просмотр документа"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded text-white md:right-8 md:top-8"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>

          <div
            className="max-h-full max-w-2xl overflow-auto bg-white p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <MediaSlot src={active.path} alt={active.alt} variant="light" aspect="aspect-[3/4]" fit="contain" className="max-h-[75vh]" />
            <div className="p-3">
              <p className="font-display text-base font-bold text-navy">{active.title}</p>
              <p
                className={`mt-1 text-sm font-medium ${
                  active.status === "archive" ? "text-slate" : "text-cyan-ink"
                }`}
              >
                {active.statusLabel}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate">{active.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
