import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import About from "@/components/sections/About";
import Advantages from "@/components/sections/Advantages";
import ProductionPreview from "@/components/sections/ProductionPreview";
import PartnerSection from "@/components/sections/PartnerSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import CtaBand from "@/components/sections/CtaBand";
import { ABOUT } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/about",
  title: "О компании",
  description:
    "PROFF-TIME — производственно-монтажная компания в Атырау. Собственное производство 350 м², опыт специалистов 15–20 лет, полный цикл от изготовления до монтажа.",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="О компании"
        title={ABOUT.heading}
        description={ABOUT.text}
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "О компании" }]}
      />
      <About showHeading={false} showExtendedText />
      <Advantages
        eyebrow="Преимущества"
        heading="Что стоит за каждым проектом"
      />
      <ProductionPreview />
      <PartnerSection />
      <CertificatesSection />
      <CtaBand
        heading="Готовы обсудить ваш объект?"
        text="Расскажите о задаче — предложим решение с учётом производственных возможностей и сроков."
      />
    </>
  );
}
