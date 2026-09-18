import { CONTACTS } from "@/lib/constants";

type Props = {
  query?: string;
  title?: string;
};

export default function MapEmbed({ query, title = "Карта" }: Props) {
  const resolvedQuery = query ?? CONTACTS.mapEmbedQuery;
  const src = `https://www.google.com/maps?q=${encodeURIComponent(resolvedQuery)}&output=embed`;

  return (
    <div className="aspect-[4/3] w-full overflow-hidden border border-line">
      <iframe
        src={src}
        title={title}
        className="h-full w-full grayscale-[15%]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
