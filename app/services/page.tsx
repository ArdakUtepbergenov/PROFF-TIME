import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Services from "@/components/sections/Services";
import PartnerSection from "@/components/sections/PartnerSection";
import CtaBand from "@/components/sections/CtaBand";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/services",
  title: "Услуги по остеклению и производству конструкций",
  description:
    "ПВХ изделия, сборка алюминиевых конструкций, ламинация ПВХ профилей, порошковая покраска и остекление фасадных систем — полный цикл в Атырау.",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Услуги"
        title="Производство и монтаж конструкций для реальных объектов."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Услуги" }]}
      />
      <Services />
      <PartnerSection />
      <CtaBand
        heading="Не нашли нужное направление?"
        text="Расскажите о задаче — подскажем, какое решение подойдёт для вашего объекта."
      />
    </>
  );
}
