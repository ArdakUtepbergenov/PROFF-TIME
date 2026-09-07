// Реализованные объекты PROFF-TIME.
// Источник имён объектов: подтверждённые данные пользователя (сессия
// "FINAL PROJECTS & MEDIA INTEGRATION") + исходный бриф компании.
//
// tier управляет визуальной иерархией на /projects и в homepage-превью:
//  - "featured"  — главный, визуально доминирующий объект (1 шт.)
//  - "secondary" — крупные объекты второго уровня
//  - "standard"  — обычный уровень (может быть без фото — см. europharma)

export type ProjectTier = "featured" | "secondary" | "standard";

export type Project = {
  id: string;
  slug: string;
  name: string;
  category: string;
  location: string;
  tier: ProjectTier;
  description: string;
  imageLabel: string; // alt текста реального фото
  imagePath?: string; // не задан, если подтверждённого фото пока нет
};

export const PROJECTS: Project[] = [
  {
    id: "airport",
    slug: "airport-dospanov",
    name: "Международный аэропорт Атырау имени Х. Доспановой",
    category: "Инфраструктурный объект",
    location: "Атырау",
    tier: "featured",
    description: "Реализованный объект PROFF-TIME в Атырау.",
    imageLabel: "Международный аэропорт Атырау имени Х. Доспановой",
    imagePath: "/images/projects/airport.png",
  },
  {
    id: "railway-station",
    slug: "railway-station",
    name: "Железнодорожный вокзал",
    category: "Инфраструктурный объект",
    location: "Атырау",
    tier: "secondary",
    description: "Реализованный объект PROFF-TIME в Атырау.",
    imageLabel: "Железнодорожный вокзал",
    imagePath: "/images/projects/railway-station.png",
  },
  {
    id: "asyl-park",
    slug: "asyl-park",
    name: "ЖК Asyl Park",
    category: "Жилой комплекс",
    location: "Атырау",
    tier: "secondary",
    description: "Реализованный объект PROFF-TIME в Атырау.",
    imageLabel: "ЖК Asyl Park",
    imagePath: "/images/projects/asyl-park.png",
  },
  {
    id: "caspian-park",
    slug: "caspian-park",
    name: "ЖК CASPIAN PARK",
    category: "Жилой комплекс",
    location: "Атырау",
    tier: "secondary",
    description: "Реализованный объект PROFF-TIME в Атырау.",
    imageLabel: "ЖК CASPIAN PARK",
    imagePath: "/images/projects/caspian-park.png",
  },
  {
    id: "europharma",
    slug: "europharma",
    name: "Сеть аптек Europharma",
    category: "Коммерческая сеть",
    location: "Атырау и регион",
    tier: "standard",
    description: "Реализованный объект PROFF-TIME в Атырау и регионе.",
    imageLabel: "Фото объекта: аптека Europharma",
    // Подтверждённого фото пока нет — остаётся Placeholder (см. MediaSlot).
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getFeaturedProject(): Project {
  return PROJECTS.find((p) => p.tier === "featured") ?? PROJECTS[0];
}

export function getSecondaryProjects(): Project[] {
  return PROJECTS.filter((p) => p.tier === "secondary");
}

export function getStandardProjects(): Project[] {
  return PROJECTS.filter((p) => p.tier === "standard");
}

// «Другие реализованные объекты» — подтверждённые фотографии без точного
// названия или иной идентифицирующей информации. НЕ присваивать им имена
// конкретных объектов (аэропорт, Caspian, Asyl Park, Europharma, вокзал).
export type OtherProjectPhoto = {
  filename: string;
  path: string;
  alt: string;
};

export const OTHER_PROJECTS_GALLERY: OtherProjectPhoto[] = Array.from({ length: 8 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    filename: `project-${n}.png`,
    path: `/images/projects/project-${n}.png`,
    alt: "Реализованный объект PROFF-TIME",
  };
});
