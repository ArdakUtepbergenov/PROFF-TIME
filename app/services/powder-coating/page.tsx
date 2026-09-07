import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ServiceDetail from "@/components/sections/ServiceDetail";
import { getServiceBySlug } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

const service = getServiceBySlug("powder-coating")!;

export const metadata: Metadata = pageMetadata({
  path: `/services/${service.slug}`,
  title: "Порошковая покраска в Атырау",
  description: service.shortDescription,
});

export default function PowderCoatingPage() {
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
