export type BrandGroup = {
  category: string;
  brands: string[];
  note?: string;
};

export const BRAND_GROUPS: BrandGroup[] = [
  {
    category: "ПВХ-профили",
    brands: ["KBE", "Kömmerling", "Funke"],
    note: "Поставляются официальным партнёром ТОО «АКС».",
  },
  {
    category: "Алюминиевые системы",
    brands: ["ALROKS", "ТАТПРОФ", "GOLD", "Favori"],
  },
  {
    category: "Фурнитура",
    brands: ["Winkhaus"],
    note: "Поставляется официальным партнёром ТОО «АКС».",
  },
  {
    category: "Материалы для ламинации",
    brands: ["Hyundai", "LG"],
  },
];
