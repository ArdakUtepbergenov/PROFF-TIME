import { CONTACTS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function ContactChannels() {
  return (
    <div>
      <ul className="space-y-4 text-sm">
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

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Button href={CONTACTS.phoneHref} variant="ghost" className="flex-1">
          Позвонить
        </Button>
        <Button href={CONTACTS.whatsappHref} variant="whatsapp" className="flex-1">
          Написать в WhatsApp
        </Button>
      </div>
    </div>
  );
}
