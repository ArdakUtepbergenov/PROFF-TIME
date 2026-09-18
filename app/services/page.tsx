import type { Metadata } from "next";
import ServicesListContent from "@/components/pages/ServicesListContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/services",
  title: "Услуги по остеклению и производству конструкций",
  description:
    "ПВХ изделия, сборка алюминиевых конструкций, ламинация ПВХ профилей, порошковая покраска и остекление фасадных систем — полный цикл в Атырау.",
  hreflangKzPath: "/kz/services",
});

export default function ServicesPage() {
  return <ServicesListContent />;
}
