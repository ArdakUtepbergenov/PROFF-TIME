import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Production from "@/components/sections/Production";
import CtaBand from "@/components/sections/CtaBand";
import { PRODUCTION } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/production",
  title: "Собственное производство | Атырау",
  description:
    "Собственный цех площадью 350 м², оснащённый современным оборудованием для изготовления алюминиевых конструкций, витражей и стеклопакетов.",
});

export default function ProductionPage() {
  return (
    <>
      <PageHero
        eyebrow="Производство"
        title={PRODUCTION.heroHeading}
        description="350 м² собственного производства — от точной резки и сборки до ламинации и порошковой покраски."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Производство" }]}
      />
      <Production showHeading={false} />
      <CtaBand
        heading="Хотите увидеть, как мы работаем с вашим проектом?"
        text="Расскажите о задаче — подскажем, какие производственные возможности подойдут для вашего объекта."
      />
    </>
  );
}
