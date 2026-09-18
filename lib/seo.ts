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
 * @param hreflangKzPath — путь казахской версии этой же страницы (например "/kz/services/pvh"),
 *   если она существует. Добавляет hreflang="kk" + x-default на RU-версию.
 * @param hreflangRuPath — путь русской версии (используется при вызове с казахской страницы).
 * @param locale — язык самой страницы ("ru" по умолчанию), влияет на openGraph.locale.
 */
export function pageMetadata({
  path,
  title,
  description: pageDescription,
  hreflangKzPath,
  hreflangRuPath,
  locale = "ru",
}: {
  path: string;
  title: string;
  description: string;
  hreflangKzPath?: string;
  hreflangRuPath?: string;
  locale?: "ru" | "kk";
}): Metadata {
  const url = `${SITE.url}${path}`;

  const languages: Record<string, string> = {};
  if (locale === "ru") {
    languages["ru"] = url;
    if (hreflangKzPath) {
      languages["kk"] = `${SITE.url}${hreflangKzPath}`;
      languages["x-default"] = url;
    }
  } else {
    languages["kk"] = url;
    if (hreflangRuPath) {
      languages["ru"] = `${SITE.url}${hreflangRuPath}`;
      languages["x-default"] = `${SITE.url}${hreflangRuPath}`;
    }
  }

  return {
    title,
    description: pageDescription,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      url,
      title: `${title} — ${SITE.name}`,
      description: pageDescription,
      locale: locale === "kk" ? "kk_KZ" : "ru_RU",
    },
    twitter: {
      title: `${title} — ${SITE.name}`,
      description: pageDescription,
    },
  };
}

