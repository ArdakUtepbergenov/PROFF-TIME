// Барrel-реэкспорт данных из /data — сохраняет обратную совместимость
// существующих импортов "@/lib/constants" при переходе на multi-page структуру.
// Новый код предпочтительно импортирует напрямую из /data/*.

export * from "@/data/company";
export * from "@/data/services";
export * from "@/data/projects";
export * from "@/data/materials";
export * from "@/data/catalog";
export * from "@/data/offers";
export * from "@/data/branches";
