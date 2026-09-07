import Image from "next/image";
import Placeholder from "@/components/ui/Placeholder";
import { HOME_HERO } from "@/lib/constants";

/**
 * Абстракция над медиа в hero. Рендерит реальное фото (production-01.jpg
 * согласно PROFF-TIME_IMAGE_MAP_FINAL.md), если путь задан в данных, иначе
 * плейсхолдер. В будущем можно расширить `videoSrc`, не трогая Hero.tsx.
 */
export default function HeroMedia() {
  return (
    <div className="absolute inset-0">
      {HOME_HERO.imagePath ? (
        <Image
          src={HOME_HERO.imagePath}
          alt={HOME_HERO.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      ) : (
        <Placeholder
          label="Фото / видео: производство, фасад или реализованный объект"
          variant="dark"
          aspect="aspect-auto"
          className="h-full w-full"
          labelPosition="corner"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/40 to-transparent" />
    </div>
  );
}
