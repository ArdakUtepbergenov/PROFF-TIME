import { CONTACTS } from "@/lib/constants";

export default function MapEmbed() {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(CONTACTS.mapEmbedQuery)}&output=embed`;

  return (
    <div className="aspect-[4/3] w-full overflow-hidden border border-line md:aspect-auto md:h-full">
      <iframe
        src={src}
        title="Карта — адрес PROFF-TIME"
        className="h-full w-full grayscale-[15%]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
