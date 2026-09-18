import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { SERVICES } from "@/data/services";
import { PROJECTS } from "@/data/projects";

const BASE_PATHS = [
  { path: "", priority: 1, freq: "monthly" as const },
  { path: "/about", priority: 0.8, freq: "monthly" as const },
  { path: "/services", priority: 0.9, freq: "monthly" as const },
  { path: "/materials", priority: 0.7, freq: "monthly" as const },
  { path: "/production", priority: 0.7, freq: "monthly" as const },
  { path: "/projects", priority: 0.8, freq: "monthly" as const },
  { path: "/contacts", priority: 0.6, freq: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [];

  for (const prefix of ["", "/kz"]) {
    for (const { path, priority, freq } of BASE_PATHS) {
      const url = path === "" ? `${SITE.url}${prefix === "" ? "" : prefix}` : `${SITE.url}${prefix}${path}`;
      routes.push({ url: url || SITE.url, lastModified: now, changeFrequency: freq, priority });
    }
    for (const service of SERVICES) {
      routes.push({
        url: `${SITE.url}${prefix}/services/${service.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
    for (const project of PROJECTS) {
      routes.push({
        url: `${SITE.url}${prefix}/projects/${project.slug}`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.6,
      });
    }
  }

  return routes;
}
