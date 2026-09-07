import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Materials from "@/components/sections/Materials";
import CtaBand from "@/components/sections/CtaBand";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/materials",
  title: "Материалы и комплектующие",
  description:
    "PROFF-TIME работает с профилями KBE, Kömmerling, Funke, алюминиевыми системами ALROKS, ТАТПРОФ, GOLD, Favori и фурнитурой Winkhaus — официальный партнёр ТОО «АКС».",
});

export default function MaterialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Материалы"
        title="Материалы и комплектующие"
        description="Работаем с профилями и фурнитурой проверенных брендов — KBE, Kömmerling, Funke, Winkhaus и другими, поставляемыми официальным партнёром ТОО «АКС»."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Материалы" }]}
      />
      <Materials />
      <CtaBand
        heading="Хотите узнать больше о материалах для вашего объекта?"
        ctaLabel="Получить консультацию"
      />
    </>
  );
}
