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
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M8.5 8.7c.2-.5.5-.5.8-.5h.6c.2 0 .5 0 .7.5.3.6.9 2 1 2.1.1.2.1.4 0 .6-.1.2-.2.3-.4.5-.2.2-.4.4-.2.7.2.4 1 1.5 2.1 2.4 1.4 1.2 2 1.3 2.3 1.1.3-.2.6-.7.9-1 .2-.3.4-.2.7-.1.3.1 1.9.9 2.2 1.1.3.2.5.2.6.4.1.2.1.9-.2 1.7-.3.8-1.7 1.6-2.3 1.6-.6 0-1.4.1-4.5-1.7-3.1-1.8-4.9-5-5.1-5.3-.1-.2-1-1.3-1-2.5 0-1.2.6-1.8.9-2.1z"
            fill="currentColor"
          />
        </svg>
        WhatsApp
      </a>
    </div>
  );
}
