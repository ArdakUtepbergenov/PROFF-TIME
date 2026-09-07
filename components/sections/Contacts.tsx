import MapEmbed from "@/components/sections/MapEmbed";
import ContactChannels from "@/components/sections/ContactChannels";
import ContactForm from "@/components/sections/ContactForm";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

type Props = {
  showHeading?: boolean;
};

export default function Contacts({ showHeading = true }: Props) {
  return (
    <section id="contacts" className="bg-white py-20 md:py-28">
      <div className="container-site">
        {showHeading && (
          <RevealOnScroll className="max-w-xl">
            <p className="eyebrow">Контакты</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-navy md:text-4xl">
              Ваш объект. Наш опыт.
            </h2>
          </RevealOnScroll>
        )}

        <div className={`grid gap-10 md:grid-cols-12 md:gap-8 ${showHeading ? "mt-12" : ""}`}>
          <RevealOnScroll className="md:col-span-4">
            <MapEmbed />
            <div className="mt-8">
              <ContactChannels />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={120} className="md:col-span-6 md:col-start-7">
            <div className="border border-line p-6 md:p-8">
              <ContactForm />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
