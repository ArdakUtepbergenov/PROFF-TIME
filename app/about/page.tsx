import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/about",
  title: "О компании",
  description:
    "PROFF-TIME — производственно-монтажная компания в Атырау. Собственное производство 350 м², опыт специалистов 15–20 лет, полный цикл от изготовления до монтажа.",
  hreflangKzPath: "/kz/about",
});

export default function AboutPage() {
  return <AboutContent />;
}
