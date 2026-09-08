"use client";

import { useEffect, useState } from "react";
import { CONTACTS } from "@/lib/constants";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 flex gap-px bg-line/80 transition-transform duration-300 ease-smooth lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={CONTACTS.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 bg-navy py-4 text-sm font-medium text-white"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.4 21 3 12.6 3 3c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z"
            fill="currentColor"
          />
        </svg>
        Позвонить
      </a>
      <a
        href={CONTACTS.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-cyan py-4 text-sm font-medium text-navy"
      >
        <svg
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="currentColor"
  aria-hidden="true"
  className="shrink-0"
>
  <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.55 0 .23 5.32.23 11.84c0 2.09.55 4.13 1.6 5.93L.13 24l6.37-1.67a11.84 11.84 0 0 0 5.58 1.42h.01c6.52 0 11.84-5.32 11.84-11.84 0-3.16-1.23-6.13-3.41-8.43ZM12.09 21.7h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.78.99 1.01-3.68-.23-.38a9.84 9.84 0 0 1-1.51-5.21C2.19 6.41 6.62 1.98 12.08 1.98c2.64 0 5.12 1.03 6.99 2.91a9.82 9.82 0 0 1 2.9 6.99c0 5.46-4.43 9.82-9.88 9.82Zm5.4-7.36c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
</svg>
        WhatsApp
      </a>
    </div>
  );
}
