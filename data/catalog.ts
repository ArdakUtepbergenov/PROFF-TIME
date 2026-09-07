// Каталожные изображения продукции/образцов (не бренды!).
// Источник: PROFF-TIME_IMAGE_MAP_FINAL.md, раздел 3.
// Это фотографии образцов продукции и материалов — НЕ фотографии
// реализованных объектов PROFF-TIME (см. data/projects.ts для объектов).
//
// Намеренно отделено от data/materials.ts (BRAND_GROUPS), который описывает
// названия брендов профилей/фурнитуры — разные сущности с разным назначением.

export type CatalogImage = {
  filename: string;
  path: string;
  alt: string;
  priority: "high" | "medium" | "low";
};

export type CatalogCategory = {
  id: string;
  label: string;
  images: CatalogImage[];
};

export const CATALOG_CATEGORIES: CatalogCategory[] = [
  {
    id: "windows-doors",
    label: "Окна и двери",
    images: [
      { filename: "pvh-01.png", path: "/images/catalog/pvh-01.png", alt: "Образец ПВХ оконной конструкции", priority: "high" },
      { filename: "pvh-02.png", path: "/images/catalog/pvh-02.png", alt: "Образец ПВХ оконной конструкции", priority: "high" },
      { filename: "pvh-03.png", path: "/images/catalog/pvh-03.png", alt: "Образец ПВХ оконной конструкции", priority: "high" },
      { filename: "pvh-04.png", path: "/images/catalog/pvh-04.png", alt: "Образец ПВХ оконного профиля", priority: "high" },
      { filename: "pvh-05.png", path: "/images/catalog/pvh-05.png", alt: "Образец ПВХ профильной системы", priority: "medium" },
      { filename: "pvh-06.png", path: "/images/catalog/pvh-06.png", alt: "Тёмная оконная конструкция", priority: "high" },
      { filename: "window-01.png", path: "/images/catalog/window-01.png", alt: "Двустворчатая оконная конструкция", priority: "high" },
      { filename: "window-02.png", path: "/images/catalog/window-02.png", alt: "Белая двустворчатая оконная конструкция", priority: "high" },
      { filename: "door-01.png", path: "/images/catalog/door-01.png", alt: "Тёмная дверная конструкция", priority: "high" },
      { filename: "door-02.png", path: "/images/catalog/door-02.png", alt: "Коричневая оконно-дверная конструкция", priority: "high" },
    ],
  },
  {
    id: "screens",
    label: "Москитные сетки",
    images: [
      { filename: "screens-01.png", path: "/images/catalog/screens-01.png", alt: "Москитная сетка в рамке", priority: "medium" },
      { filename: "screens-02.png", path: "/images/catalog/screens-02.png", alt: "Москитная сетка в рамке", priority: "medium" },
      { filename: "screens-03.png", path: "/images/catalog/screens-03.png", alt: "Москитная сетка в рамке", priority: "medium" },
    ],
  },
  {
    id: "hardware",
    label: "Фурнитура",
    images: [
      { filename: "hardware-display-01.png", path: "/images/catalog/hardware-display-01.png", alt: "Образцы дверной фурнитуры", priority: "high" },
      { filename: "door-closer-01.png", path: "/images/catalog/door-closer-01.png", alt: "Дверной доводчик", priority: "high" },
      { filename: "door-closer-02.png", path: "/images/catalog/door-closer-02.png", alt: "Дверной доводчик", priority: "high" },
      { filename: "door-closer-03.png", path: "/images/catalog/door-closer-03.png", alt: "Дверной доводчик", priority: "high" },
    ],
  },
  {
    id: "finishes",
    label: "Отделка и цвета",
    images: [
      { filename: "finish-01.png", path: "/images/catalog/finish-01.png", alt: "Образцы цветов и покрытий", priority: "high" },
      { filename: "finish-02.png", path: "/images/catalog/finish-02.png", alt: "Образцы отделки и цветов", priority: "medium" },
      { filename: "finish-03.png", path: "/images/catalog/finish-03.png", alt: "Образцы цветов и отделки", priority: "high" },
      { filename: "finish-04.png", path: "/images/catalog/finish-04.png", alt: "Образец цвета покрытия", priority: "medium" },
      { filename: "finish-05.png", path: "/images/catalog/finish-05.png", alt: "Образец цвета покрытия", priority: "medium" },
      { filename: "finish-06.png", path: "/images/catalog/finish-06.png", alt: "Образец цвета покрытия", priority: "medium" },
    ],
  },
  {
    id: "samples",
    label: "Образцы материалов",
    images: [
      { filename: "material-sample-01.jpg", path: "/images/catalog/material-sample-01.jpg", alt: "Образец материала", priority: "low" },
      { filename: "material-sample-02.jpg", path: "/images/catalog/material-sample-02.jpg", alt: "Образец материала", priority: "low" },
      { filename: "material-sample-03.jpg", path: "/images/catalog/material-sample-03.jpg", alt: "Образец материала", priority: "low" },
    ],
  },
];
