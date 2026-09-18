import Hero from "@/components/sections/Hero";
import PositioningStrip from "@/components/sections/PositioningStrip";
import OffersSection from "@/components/sections/OffersSection";
import Advantages from "@/components/sections/Advantages";
import VisualizationCta from "@/components/sections/VisualizationCta";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesPreview from "@/components/sections/ServicesPreview";
import MaterialsPreview from "@/components/sections/MaterialsPreview";
import ProductionPreview from "@/components/sections/ProductionPreview";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import B2BBlock from "@/components/sections/B2BBlock";
import ContactsPreview from "@/components/sections/ContactsPreview";
import { PROJECTS, COMMERCIAL_HIGHLIGHTS } from "@/lib/constants";
import { COMMERCIAL_HIGHLIGHTS_KK } from "@/lib/i18n/content.kk";
import { t } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locale";

// Курированная подборка для главной: Airport (featured) + Caspian + Asyl Park.
// Полный список объектов — на /projects.
const HOMEPAGE_PROJECT_IDS = ["airport", "caspian-park", "asyl-park"];
const homepageProjects = HOMEPAGE_PROJECT_IDS.map((id) => PROJECTS.find((p) => p.id === id)).filter(
  (p): p is (typeof PROJECTS)[number] => Boolean(p)
);

export default function HomeContent({ locale = "ru" }: { locale?: Locale }) {
  const dict = t(locale);
  const highlights = locale === "kk" ? COMMERCIAL_HIGHLIGHTS_KK : COMMERCIAL_HIGHLIGHTS;

  return (
    <>
      <Hero locale={locale} />
      <PositioningStrip locale={locale} />
      <OffersSection locale={locale} />
      <Advantages
        eyebrow={dict.home.advantagesEyebrow}
        heading={dict.home.advantagesHeading}
        items={highlights}
        locale={locale}
      />
      <VisualizationCta locale={locale} />
      <AboutPreview locale={locale} />
      <ServicesPreview locale={locale} />
      <MaterialsPreview locale={locale} />
      <ProductionPreview locale={locale} />
      <Process locale={locale} />
      <Projects showCta projects={homepageProjects} locale={locale} />
      <B2BBlock locale={locale} />
      <ContactsPreview locale={locale} />
    </>
  );
}
