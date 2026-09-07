import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ServiceDetail from "@/components/sections/ServiceDetail";
import { getServiceBySlug } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

const service = getServiceBySlug("aluminium")!;

export const metadata: Metadata = pageMetadata({
  path: `/services/${service.slug}`,
  title: "Алюминиевые конструкции в Атырау",
  description: service.shortDescription,
});

export default function AluminiumPage() {
  return (
    <>
      <PageHero
        eyebrow={`${service.index} · Услуги`}
        title={service.headline}
        description={service.shortDescription}
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Услуги", href: "/services" },
          { label: service.headline },
        ]}
      />
      <ServiceDetail service={service} />
    </>
  );
}
