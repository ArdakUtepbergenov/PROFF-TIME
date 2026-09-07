import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ServiceDetail from "@/components/sections/ServiceDetail";
import { getServiceBySlug } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

const service = getServiceBySlug("pvh")!;

export const metadata: Metadata = pageMetadata({
  path: `/services/${service.slug}`,
  title: "ПВХ окна и двери в Атырау",
  description: service.shortDescription,
});

export default function PvhPage() {
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
