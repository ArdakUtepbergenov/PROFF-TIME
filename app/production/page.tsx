import type { Metadata } from "next";
import ProductionContent from "@/components/pages/ProductionContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/production",
  title: "Собственное производство | Атырау",
  description:
    "Собственный цех площадью 350 м², оснащённый современным оборудованием для изготовления алюминиевых конструкций, витражей и стеклопакетов.",
  hreflangKzPath: "/kz/production",
});

export default function ProductionPage() {
  return <ProductionContent />;
}
