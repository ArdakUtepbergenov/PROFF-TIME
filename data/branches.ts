// Филиалы компании. Атырау — основной (существующие данные, без изменений).
// Астана — новый филиал, только подтверждённые поля (адрес и телефон).
// НЕ добавлять сюда часы работы, email, доп. услуги — этого нет в исходных данных.

export type BranchId = "atyrau" | "astana";

export type Branch = {
  id: BranchId;
  city: string;
  cityKk: string;
  address: string;
  addressKk: string;
  phone: string;
  phoneHref: string;
  whatsappHref: string;
  email?: string;
  emailHref?: string;
  instagramHandle?: string;
  instagramUrl?: string;
  mapEmbedQuery?: string;
};

export const BRANCHES: Record<BranchId, Branch> = {
  atyrau: {
    id: "atyrau",
    city: "Атырау",
    cityKk: "Атырау",
    address: "Атырау, мкр. Привокзальный 3а, 15",
    addressKk: "Атырау, Привокзальный ықшамауданы, 3а, 15",
    phone: "+7 775 735 18 99",
    phoneHref: "tel:+77757351899",
    whatsappHref: "https://wa.me/77757351899",
    email: "vipoknaatyrau@gmail.com",
    emailHref: "mailto:vipoknaatyrau@gmail.com",
    instagramHandle: "@profftime_atyrau",
    instagramUrl: "https://www.instagram.com/profftime_atyrau/",
    mapEmbedQuery: "Атырау, мкр. Привокзальный 3а, 15",
  },
  astana: {
    id: "astana",
    city: "Астана",
    cityKk: "Астана",
    address: "Астана, ул. Ермек Серкебаева, 4/1, ТЦ Megapolis",
    addressKk: "Астана, Ермек Серкебаев көшесі, 4/1, Megapolis СО",
    phone: "+7 775 350 5503",
    phoneHref: "tel:+77753505503",
    whatsappHref: "https://wa.me/77753505503",
    // email/Instagram/координаты карты для Астаны не подтверждены — не выдумываем.
  },
};

export const DEFAULT_BRANCH: BranchId = "atyrau";

export function getBranch(id: BranchId): Branch {
  return BRANCHES[id];
}
