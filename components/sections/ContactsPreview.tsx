import Link from "next/link";
import { CONTACTS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function ContactsPreview() {
  return (
    <section id="contacts" className="bg-white py-20 md:py-28">
      <div className="container-site grid gap-10 md:grid-cols-12 md:items-center md:gap-8">
        <RevealOnScroll className="md:col-span-6">
          <p className="eyebrow">Контакты</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-navy md:text-4xl">
            Ваш объект. Наш опыт.
          </h2>

          <ul className="mt-7 space-y-3 text-sm">
            <li>
              <span className="block text-slate">Адрес</span>
              <span className="font-medium text-navy">{CONTACTS.address}</span>
            </li>
            <li>
              <span className="block text-slate">Телефон</span>
              <a href={CONTACTS.phoneHref} className="font-medium text-navy hover:text-cyan-ink">
                {CONTACTS.phone}
              </a>
            </li>
            <li>
              <span className="block text-slate">Email</span>
              <a href={CONTACTS.emailHref} className="font-medium text-navy hover:text-cyan-ink">
                {CONTACTS.email}
              </a>
            </li>
            <li>
              <span className="block text-slate">Instagram</span>
              <a
                href={CONTACTS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-navy hover:text-cyan-ink"
              >
                {CONTACTS.instagramHandle}
              </a>
            </li>
          </ul>
        </RevealOnScroll>

        <RevealOnScroll delay={100} className="md:col-span-5 md:col-start-8">
          <div className="flex flex-col gap-3">
            <Button href="/contacts" variant="primary">
              Отправить заявку
            </Button>
            <div className="flex gap-3">
              <Button href={CONTACTS.phoneHref} variant="ghost" className="flex-1">
                Позвонить
              </Button>
              <Button href={CONTACTS.whatsappHref} variant="whatsapp" className="flex-1">
                WhatsApp
              </Button>
            </div>
            <Link
              href="/contacts"
              className="mt-2 text-center text-sm font-medium text-navy transition-colors hover:text-cyan-ink"
            >
              Полные контакты и карта →
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
