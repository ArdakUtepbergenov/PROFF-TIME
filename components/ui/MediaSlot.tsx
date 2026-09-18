import Image from "next/image";
import Placeholder from "@/components/ui/Placeholder";

type Props = {
  src?: string;
  alt: string;
  aspect?: string;
  variant?: "dark" | "light";
  labelPosition?: "center" | "corner";
  className?: string;
  priority?: boolean;
  sizes?: string;
  /**
   * "cover" — фото заполняет рамку, обрезаясь по краям. Подходит для
   * атмосферных фото производства/цеха, где важна композиция кадра, а не
   * весь объект целиком.
   *
   * "contain" — фото вписывается целиком без обрезки, с нейтральной
   * подложкой по краям. Обязательно для каталожных фото продукции/образцов
   * (окна, двери, фурнитура, отделка, документы) — там нельзя обрезать сам
   * товар или документ.
   */
  fit?: "cover" | "contain";
};

/**
 * Единая точка решения "реальное фото или плейсхолдер".
 *
 * Если `src` передан — рендерит настоящий next/image с заданным `fit`.
 * Если `src` не передан — рендерит текущий Placeholder (инженерная заглушка).
 */
export default function MediaSlot({
  src,
  alt,
  aspect = "aspect-[4/3]",
  variant = "light",
  labelPosition = "corner",
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  fit = "cover",
}: Props) {
  if (!src) {
    return (
      <Placeholder
        label={alt}
        variant={variant}
        aspect={aspect}
        labelPosition={labelPosition}
        className={className}
      />
    );
  }

  const isContain = fit === "contain";

  return (
    <div
      className={`relative overflow-hidden ${aspect} ${className} ${
        isContain ? (variant === "dark" ? "bg-navy-light" : "bg-mist") : ""
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={isContain ? "object-contain p-4" : "object-cover"}
      />
    </div>
  );
}
