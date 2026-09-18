import type { Metadata } from "next";
import ProjectsListContent from "@/components/pages/ProjectsListContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/projects",
  title: "Реализованные объекты",
  description:
    "Международный аэропорт Атырау им. Х. Доспановой, железнодорожный вокзал, ЖК Asyl Park, ЖК Caspian Park и другие объекты, реализованные с участием PROFF-TIME в Атырау и регионе.",
  hreflangKzPath: "/kz/projects",
});

export default function ProjectsPage() {
  return <ProjectsListContent />;
}
