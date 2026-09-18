import type { Metadata } from "next";
import ServiceDetailContent from "@/components/pages/ServiceDetailContent";
import { getServiceBySlug } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

const service = getServiceBySlug("lamination")!;

export const metadata: Metadata = pageMetadata({
  path: `/services/${service.slug}`,
  title: "Ламинация ПВХ профилей в Атырау",
  description: service.shortDescription,
  hreflangKzPath: `/kz/services/${service.slug}`,
});

export default function LaminationPage() {
  return <ServiceDetailContent slug="lamination" />;
}
