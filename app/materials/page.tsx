import type { Metadata } from "next";
import MaterialsContent from "@/components/pages/MaterialsContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/materials",
  title: "Материалы и комплектующие",
  description:
    "PROFF-TIME работает с профилями KBE, Kömmerling, Funke, алюминиевыми системами ALROKS, ТАТПРОФ, GOLD, Favori и фурнитурой Winkhaus — официальный партнёр ТОО «АКС».",
  hreflangKzPath: "/kz/materials",
});

export default function MaterialsPage() {
  return <MaterialsContent />;
}
