// Барrel-реэкспорт данных из /data — сохраняет обратную совместимость
// существующих импортов "@/lib/constants" при переходе на multi-page структуру.
// Новый код предпочтительно импортирует напрямую из /data/*.

export * from "@/data/company";
export * from "@/data/services";
export * from "@/data/projects";
export * from "@/data/materials";
export * from "@/data/catalog";

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const NAV_LINKS: NavItem[] = [
  { label: "О компании", href: "/about" },
  {
    label: "Услуги",
    href: "/services",
    children: [
      { label: "ПВХ изделия", href: "/services/pvh" },
      { label: "Алюминиевые конструкции", href: "/services/aluminium" },
      { label: "Ламинация ПВХ", href: "/services/lamination" },
      { label: "Порошковая покраска", href: "/services/powder-coating" },
      { label: "Фасадное остекление", href: "/services/facades" },
    ],
  },
  { label: "Материалы", href: "/materials" },
  { label: "Производство", href: "/production" },
  { label: "Объекты", href: "/projects" },
  { label: "Контакты", href: "/contacts" },
];
