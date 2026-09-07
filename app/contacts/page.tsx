import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Contacts from "@/components/sections/Contacts";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/contacts",
  title: "Контакты | Атырау",
  description:
    "Свяжитесь с PROFF-TIME: адрес, телефон, WhatsApp, email и Instagram. Отправьте заявку на замер или консультацию по остеклению и алюминиевым конструкциям.",
});

export default function ContactsPage() {
  return (
    <>
      <PageHero
        eyebrow="Контакты"
        title="Обсудим ваш объект."
        description="Оставьте заявку или свяжитесь напрямую — ответим и предложим решение с учётом задачи."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Контакты" }]}
        size="compact"
      />
      <Contacts showHeading={false} />
    </>
  );
}
