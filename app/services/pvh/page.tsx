import type { Metadata } from "next";
import ServiceDetailContent from "@/components/pages/ServiceDetailContent";
import { getServiceBySlug } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

const service = getServiceBySlug("pvh")!;

export const metadata: Metadata = pageMetadata({
  path: `/services/${service.slug}`,
  title: "ПВХ окна и двери в Атырау",
  description: service.shortDescription,
  hreflangKzPath: `/kz/services/${service.slug}`,
});

export default function PvhPage() {
  return <ServiceDetailContent slug="pvh" />;
}
