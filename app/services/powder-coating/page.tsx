import type { Metadata } from "next";
import ServiceDetailContent from "@/components/pages/ServiceDetailContent";
import { getServiceBySlug } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

const service = getServiceBySlug("powder-coating")!;

export const metadata: Metadata = pageMetadata({
  path: `/services/${service.slug}`,
  title: "Порошковая покраска в Атырау",
  description: service.shortDescription,
  hreflangKzPath: `/kz/services/${service.slug}`,
});

export default function PowderCoatingPage() {
  return <ServiceDetailContent slug="powder-coating" />;
}
