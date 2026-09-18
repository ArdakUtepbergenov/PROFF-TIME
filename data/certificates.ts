// Документы и сертификаты компании.
// Источник: анализ архива "Сертификаты.zip" (см. предыдущий анализ в диалоге).
// Физические файлы размещены пользователем в /public/images/certificates/
// под именами 1.png … 7.png (порядок соответствует исходному архиву).
//
// КРИТИЧНО: срок действия отражён честно. Документы с истёкшим сроком
// НЕ описываются как «действующий сертификат» или «официальный партнёр».
// Документ 7 (qualification-private) содержит персональные данные
// сотрудника и намеренно НЕ включён в публичный список ниже.

export type CertificateStatus = "archive" | "reference";

export type Certificate = {
  filename: string;
  path: string;
  title: string;
  description: string;
  status: CertificateStatus;
  statusLabel: string;
  alt: string;
};

export const CERTIFICATES: Certificate[] = [
  {
    filename: "1.png",
    path: "/images/certificates/1.png",
    title: "Партнёрский документ KBE",
    description:
      "Документ о партнёрстве с KBE со сроком действия, указанным до 31.12.2025. Приводится как архивный материал, не как подтверждение текущего партнёрства.",
    status: "archive",
    statusLabel: "Архивный документ",
    alt: "Архивный партнёрский документ KBE",
  },
  {
    filename: "2.png",
    path: "/images/certificates/2.png",
    title: "Партнёрский документ Kömmerling",
    description:
      "Документ о партнёрстве с Kömmerling со сроком действия, указанным до 31.12.2025. Приводится как архивный материал, не как подтверждение текущего партнёрства.",
    status: "archive",
    statusLabel: "Архивный документ",
    alt: "Архивный партнёрский документ Kömmerling",
  },
  {
    filename: "3.png",
    path: "/images/certificates/3.png",
    title: "Документ по материалам",
    description: "Документ, связанный с продукцией/материалами компании.",
    status: "reference",
    statusLabel: "Документ",
    alt: "Документ, связанный с материалами продукции",
  },
  {
    filename: "4.png",
    path: "/images/certificates/4.png",
    title: "Благодарственное письмо от ТОО «АКС»",
    description: "Благодарственное письмо от ТОО «АКС».",
    status: "reference",
    statusLabel: "Благодарственное письмо",
    alt: "Благодарственное письмо от ТОО «АКС»",
  },
  {
    filename: "5.png",
    path: "/images/certificates/5.png",
    title: "Документ от ТОО «KEMEL TADE» (2026)",
    description: "Документ от ТОО «KEMEL TADE», датированный 2026 годом.",
    status: "reference",
    statusLabel: "Документ",
    alt: "Документ от ТОО «KEMEL TADE», 2026 год",
  },
  {
    filename: "6.png",
    path: "/images/certificates/6.png",
    title: "Документ о соответствии (архив)",
    description:
      "Документ о соответствии со сроком действия 25.05.2017–24.05.2020. Приводится как архивный материал, срок действия истёк.",
    status: "archive",
    statusLabel: "Архивный документ · срок истёк",
    alt: "Архивный документ о соответствии, срок действия истёк",
  },
];
