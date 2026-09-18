import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomeContent from "@/components/pages/HomeContent";
import AboutContent from "@/components/pages/AboutContent";
import ServicesListContent from "@/components/pages/ServicesListContent";
import ServiceDetailContent from "@/components/pages/ServiceDetailContent";
import MaterialsContent from "@/components/pages/MaterialsContent";
import ProductionContent from "@/components/pages/ProductionContent";
import ProjectsListContent from "@/components/pages/ProjectsListContent";
import ProjectDetailContent from "@/components/pages/ProjectDetailContent";
import ContactsContent from "@/components/pages/ContactsContent";
import { SERVICES, PROJECTS, getServiceBySlug, getProjectBySlug } from "@/lib/constants";
import { getServiceKk, getProjectKk } from "@/lib/i18n/content.kk";
import { pageMetadata } from "@/lib/seo";

type Params = { params: { slug?: string[] } };

const SERVICE_SLUGS = SERVICES.map((s) => s.slug);

export function generateStaticParams() {
  const paths: { slug: string[] }[] = [
    { slug: [] },
    { slug: ["about"] },
    { slug: ["services"] },
    { slug: ["materials"] },
    { slug: ["production"] },
    { slug: ["projects"] },
    { slug: ["contacts"] },
  ];
  for (const s of SERVICE_SLUGS) paths.push({ slug: ["services", s] });
  for (const p of PROJECTS) paths.push({ slug: ["projects", p.slug] });
  return paths;
}

export function generateMetadata({ params }: Params): Metadata {
  const slug = params.slug ?? [];

  if (slug.length === 0) {
    return pageMetadata({
      path: "/kz",
      title: "PROFF-TIME — Атыраудағы және Астанадағы әйнектеу мен алюминий конструкциялар",
      description:
        "PROFF-TIME — Атырау мен Астанадағы өндірістік-монтаждық компания. Меншікті өндіріс 350 м², тұрғын үй, коммерциялық және әкімшілік объектілер үшін әйнектеу, алюминий және ПВХ конструкциялар.",
      locale: "kk",
      hreflangRuPath: "/",
    });
  }

  if (slug.length === 1 && slug[0] === "about") {
    return pageMetadata({
      path: "/kz/about",
      title: "Компания туралы",
      description:
        "PROFF-TIME — Атыраудағы өндірістік-монтаждық компания. Меншікті өндіріс 350 м², мамандардың 15–20 жылдық тәжірибесі, дайындаудан монтажға дейінгі толық цикл.",
      locale: "kk",
      hreflangRuPath: "/about",
    });
  }

  if (slug.length === 1 && slug[0] === "materials") {
    return pageMetadata({
      path: "/kz/materials",
      title: "Материалдар мен жабдықтар",
      description:
        "PROFF-TIME KBE, Kömmerling, Funke профильдерімен, ALROKS, ТАТПРОФ, GOLD, Favori алюминий жүйелерімен және Winkhaus фурнитурасымен жұмыс істейді — «АКС» ЖШС ресми серіктесі.",
      locale: "kk",
      hreflangRuPath: "/materials",
    });
  }

  if (slug.length === 1 && slug[0] === "production") {
    return pageMetadata({
      path: "/kz/production",
      title: "Меншікті өндіріс | Атырау",
      description:
        "Алюминий конструкцияларын, витраждар мен әйнек пакеттерін дайындауға арналған заманауи жабдықпен жабдықталған 350 м² меншікті цех.",
      locale: "kk",
      hreflangRuPath: "/production",
    });
  }

  if (slug.length === 1 && slug[0] === "projects") {
    return pageMetadata({
      path: "/kz/projects",
      title: "Іске асырылған объектілер",
      description:
        "Х. Доспанова атындағы Атырау халықаралық әуежайы, теміржол вокзалы, Asyl Park және Caspian Park ТК және PROFF-TIME қатысуымен іске асырылған басқа да объектілер.",
      locale: "kk",
      hreflangRuPath: "/projects",
    });
  }

  if (slug.length === 1 && slug[0] === "contacts") {
    return pageMetadata({
      path: "/kz/contacts",
      title: "Байланыс | Атырау",
      description:
        "PROFF-TIME компаниясымен Атырауда немесе Астанада хабарласыңыз: мекенжай, телефон, WhatsApp, email және Instagram.",
      locale: "kk",
      hreflangRuPath: "/contacts",
    });
  }

  if (slug.length === 1 && slug[0] === "services") {
    return pageMetadata({
      path: "/kz/services",
      title: "Әйнектеу және конструкция өндірісі бойынша қызметтер",
      description:
        "ПВХ бұйымдары, алюминий конструкцияларын құрастыру, ПВХ ламинациясы, ұнтақты бояу және фасадты әйнектеу — Атыраудағы толық цикл.",
      locale: "kk",
      hreflangRuPath: "/services",
    });
  }

  if (slug.length === 2 && slug[0] === "services") {
    const service = getServiceBySlug(slug[1]);
    if (!service) return {};
    const kk = getServiceKk(service.id);
    return pageMetadata({
      path: `/kz/services/${service.slug}`,
      title: kk?.headline ?? service.headline,
      description: kk?.shortDescription ?? service.shortDescription,
      locale: "kk",
      hreflangRuPath: `/services/${service.slug}`,
    });
  }

  if (slug.length === 2 && slug[0] === "projects") {
    const project = getProjectBySlug(slug[1]);
    if (!project) return {};
    const kk = getProjectKk(project.id);
    const name = kk?.name ?? project.name;
    const category = kk?.category ?? project.category;
    const location = kk?.location ?? project.location;
    return pageMetadata({
      path: `/kz/projects/${project.slug}`,
      title: `${name} | Объектілер`,
      description: `${name} — ${category.toLowerCase()}, ${location}. PROFF-TIME іске асырған объект.`,
      locale: "kk",
      hreflangRuPath: `/projects/${project.slug}`,
    });
  }

  return {};
}

export default function KzPage({ params }: Params) {
  const slug = params.slug ?? [];

  if (slug.length === 0) {
    return <HomeContent locale="kk" />;
  }

  if (slug.length === 1) {
    switch (slug[0]) {
      case "about":
        return <AboutContent locale="kk" />;
      case "services":
        return <ServicesListContent locale="kk" />;
      case "materials":
        return <MaterialsContent locale="kk" />;
      case "production":
        return <ProductionContent locale="kk" />;
      case "projects":
        return <ProjectsListContent locale="kk" />;
      case "contacts":
        return <ContactsContent locale="kk" />;
      default:
        notFound();
    }
  }

  if (slug.length === 2 && slug[0] === "services" && SERVICE_SLUGS.includes(slug[1])) {
    return <ServiceDetailContent slug={slug[1]} locale="kk" />;
  }

  if (slug.length === 2 && slug[0] === "projects") {
    const project = getProjectBySlug(slug[1]);
    if (!project) notFound();
    return <ProjectDetailContent slug={slug[1]} locale="kk" />;
  }

  notFound();
}
