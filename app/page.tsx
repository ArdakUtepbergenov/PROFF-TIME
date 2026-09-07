import Hero from "@/components/sections/Hero";
import PositioningStrip from "@/components/sections/PositioningStrip";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesPreview from "@/components/sections/ServicesPreview";
import MaterialsPreview from "@/components/sections/MaterialsPreview";
import ProductionPreview from "@/components/sections/ProductionPreview";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import B2BBlock from "@/components/sections/B2BBlock";
import ContactsPreview from "@/components/sections/ContactsPreview";
import { PROJECTS } from "@/lib/constants";

// Курированная подборка для главной: Airport (featured) + Caspian + Asyl Park.
// Полный список объектов — на /projects.
const HOMEPAGE_PROJECT_IDS = ["airport", "caspian-park", "asyl-park"];
const homepageProjects = HOMEPAGE_PROJECT_IDS.map((id) => PROJECTS.find((p) => p.id === id)).filter(
  (p): p is (typeof PROJECTS)[number] => Boolean(p)
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <PositioningStrip />
      <AboutPreview />
      <ServicesPreview />
      <MaterialsPreview />
      <ProductionPreview />
      <Process />
      <Projects showCta projects={homepageProjects} />
      <B2BBlock />
      <ContactsPreview />
    </>
  );
}
