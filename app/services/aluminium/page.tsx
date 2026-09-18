import type { Metadata } from "next";
import ServiceDetailContent from "@/components/pages/ServiceDetailContent";
import { getServiceBySlug } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

const service = getServiceBySlug("aluminium")!;

export const metadata: Metadata = pageMetadata({
  path: `/services/${service.slug}`,
  title: "Алюминиевые конструкции в Атырау",
  description: service.shortDescription,
  hreflangKzPath: `/kz/services/${service.slug}`,
});

export default function AluminiumPage() {
  return <ServiceDetailContent slug="aluminium" />;
}
