import Image from "next/image";
import Link from "next/link";
import { CONTACTS, FOOTER, SITE } from "@/lib/constants";
import { SERVICES } from "@/data/services";

const FOOTER_NAV = [
  { label: "О компании", href: "/about" },
  { label: "Материалы", href: "/materials" },
  { label: "Производство", href: "/production" },
  { label: "Объекты", href: "/projects" },
  { label: "Контакты", href: "/contacts" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cloud">
      <div className="container-site grid gap-10 py-16 md:grid-cols-[1.1fr_0.9fr_1fr_1fr] md:gap-8 md:py-20">
        <div>
          <Link href="/" className="inline-flex items-center px-2.5 py-1.5">
            <Image
              src="/images/logo.png"
              alt="PROFF-TIME"
              width={132}
              height={124}
              className="h-11 w-auto"
            />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cloud/80">{FOOTER.text}</p>
        </div>

        <div>
          <p className="eyebrow mb-4">Навигация</p>
          <ul className="space-y-3">
            {FOOTER_NAV.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-cloud/85 transition-colors hover:text-cyan">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Услуги</p>
          <ul className="space-y-3">
            <li>
              <Link href="/services" className="text-sm text-cloud/85 transition-colors hover:text-cyan">
                Все услуги
              </Link>
            </li>
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm text-cloud/85 transition-colors hover:text-cyan"
                >
                  {service.headline}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Контакты</p>
          <ul className="space-y-3 text-sm text-cloud/85">
            <li>
              <a href={CONTACTS.phoneHref} className="transition-colors hover:text-cyan">
                {CONTACTS.phone}
              </a>
            </li>
            <li>
              <a href={CONTACTS.emailHref} className="transition-colors hover:text-cyan">
                {CONTACTS.email}
              </a>
            </li>
            <li>{CONTACTS.address}</li>
            <li>
              <a
                href={CONTACTS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-cyan"
              >
                {CONTACTS.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-cloud/60 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} {SITE.legalName}
          </span>
          <span>{SITE.slogan}</span>
        </div>
      </div>
    </footer>
  );
}
