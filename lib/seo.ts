import type { Metadata } from "next";
import { SITE, CONTACTS } from "./constants";

const description =
  "PROFF-TIME — производственно-монтажная компания в Атырау. Собственное производство 350 м², остекление, алюминиевые конструкции и ПВХ-изделия для жилых, коммерческих и административных объектов.";

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "PROFF-TIME — остекление и алюминиевые конструкции в Атырау",
    template: "%s — PROFF-TIME",
  },
  description,
  keywords: [
    "остекление Атырау",
    "алюминиевые конструкции Атырау",
    "пластиковые окна Атырау",
    "ПВХ окна Атырау",
    "фасадное остекление Атырау",
    "алюминиевые двери Атырау",
    "порошковая покраска Атырау",
    "ламинация ПВХ Атырау",
    "производство окон Атырау",
  ],
  authors: [{ name: SITE.legalName }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE.url,
    siteName: SITE.name,
    title: "PROFF-TIME — остекление и алюминиевые конструкции в Атырау",
    description,
    images: [
      {
        url: "/images/hero/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "PROFF-TIME — производственно-монтажная компания",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PROFF-TIME — остекление и алюминиевые конструкции в Атырау",
    description,
  },
  alternates: {
    canonical: SITE.url,
  },
  other: {
    "contact:phone_number": CONTACTS.phone,
    "contact:email": CONTACTS.email,
  },
};

/**
 * Строит metadata для внутренней страницы с корректным per-page canonical
 * и OpenGraph URL. Next.js НЕ подставляет canonical/OG url автоматически
 * по текущему маршруту — без явного указания все страницы наследуют
 * значения из baseMetadata (т.е. canonical всегда указывал бы на "/").
 *
 * @param path — путь без домена, начинающийся с "/", например "/services/pvh"
 */
export function pageMetadata({
  path,
  title,
  description: pageDescription,
}: {
  path: string;
  title: string;
  description: string;
}): Metadata {
  const url = `${SITE.url}${path}`;
  return {
    title,
    description: pageDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      url,
      title: `${title} — ${SITE.name}`,
      description: pageDescription,
    },
    twitter: {
      title: `${title} — ${SITE.name}`,
      description: pageDescription,
    },
  };
}

