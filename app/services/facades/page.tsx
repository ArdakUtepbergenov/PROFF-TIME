import type { Metadata } from "next";
import ServiceDetailContent from "@/components/pages/ServiceDetailContent";
import { getServiceBySlug } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

const service = getServiceBySlug("facades")!;

export const metadata: Metadata = pageMetadata({
  path: `/services/${service.slug}`,
  title: "Фасадное остекление в Атырау",
  description: service.shortDescription,
  hreflangKzPath: `/kz/services/${service.slug}`,
});

export default function FacadesPage() {
  return <ServiceDetailContent slug="facades" />;
}
