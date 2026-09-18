import type { Metadata } from "next";
import ContactsContent from "@/components/pages/ContactsContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/contacts",
  title: "Контакты | Атырау",
  description:
    "Свяжитесь с PROFF-TIME в Атырау или Астане: адрес, телефон, WhatsApp, email и Instagram. Отправьте заявку на замер или консультацию.",
  hreflangKzPath: "/kz/contacts",
});

export default function ContactsPage() {
  return <ContactsContent />;
}
