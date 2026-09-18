import type { Branch } from "@/data/branches";
import { t } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locale";
import Button from "@/components/ui/Button";
import MapEmbed from "@/components/sections/MapEmbed";

type Props = {
  branch: Branch;
  cityLabel: string;
  locale?: Locale;
};

export default function BranchContactCard({ branch, cityLabel, locale = "ru" }: Props) {
  const dict = t(locale);
  const address = locale === "kk" ? branch.addressKk : branch.address;
  const mapQuery = locale === "kk" ? branch.addressKk : branch.address;

  return (
    <div>
      <p className="eyebrow mb-3">{cityLabel}</p>
      <MapEmbed query={mapQuery} />

      <ul className="mt-5 space-y-3 text-sm">
        <li>
          <span className="block text-slate">{dict.contacts.address}</span>
          <span className="font-medium text-navy">{address}</span>
        </li>
        <li>
          <span className="block text-slate">{dict.contacts.phone}</span>
          <a href={branch.phoneHref} className="font-medium text-navy hover:text-cyan-ink">
            {branch.phone}
          </a>
        </li>
        {branch.email && (
          <li>
            <span className="block text-slate">{dict.contacts.email}</span>
            <a href={branch.emailHref} className="font-medium text-navy hover:text-cyan-ink">
              {branch.email}
            </a>
          </li>
        )}
        {branch.instagramHandle && (
          <li>
            <span className="block text-slate">{dict.contacts.instagram}</span>
            <a
              href={branch.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-navy hover:text-cyan-ink"
            >
              {branch.instagramHandle}
            </a>
          </li>
        )}
      </ul>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Button href={branch.phoneHref} variant="ghost" className="flex-1">
          {dict.common.call}
        </Button>
        <Button href={branch.whatsappHref} variant="whatsapp" className="flex-1">
          {dict.common.whatsapp}
        </Button>
      </div>
    </div>
  );
}
