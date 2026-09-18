type Variant = "dark" | "light";

type Props = {
  label: string;
  variant?: Variant;
  className?: string;
  aspect?: string; // tailwind aspect-* class
  labelPosition?: "center" | "corner";
};

/**
 * Стилизованная заглушка вместо реальной фотографии.
 * Явно помечена как placeholder (не выдаётся за реальный кадр объекта),
 * оформлена в духе инженерного чертежа — соответствует айдентике сайта.
 * Заменяется на <Image src={imagePath} /> без изменения layout.
 */
export default function Placeholder({
  label,
  variant = "dark",
  className = "",
  aspect = "aspect-[4/3]",
  labelPosition = "center",
}: Props) {
  const isDark = variant === "dark";
  return (
    <div
      className={`relative overflow-hidden ${aspect} ${className} ${
        isDark ? "bg-navy-light" : "bg-mist"
      }`}
      role="img"
      aria-label={label}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.35]"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id={`grid-${label.length}-${aspect.length}`}
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 28 0 L 0 0 0 28"
              fill="none"
              stroke={isDark ? "rgba(255,255,255,0.08)" : "rgba(11,30,51,0.08)"}
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${label.length}-${aspect.length})`} />
      </svg>

      {/* угловые метки в духе чертежа */}
      {["top-4 left-4", "top-4 right-4 rotate-90", "bottom-4 left-4 -rotate-90", "bottom-4 right-4 rotate-180"].map(
        (pos) => (
          <span
            key={pos}
            className={`absolute h-3 w-3 border-l border-t ${
              isDark ? "border-cyan/50" : "border-navy/30"
            } ${pos}`}
          />
        )
      )}

      {labelPosition === "center" ? (
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <span
            className={`text-center text-xs font-medium tracking-wide2 ${
              isDark ? "text-cloud" : "text-slate"
            }`}
          >
            {label}
          </span>
        </div>
      ) : (
        <div className="absolute bottom-8 right-8 max-w-[14rem] text-right">
          <span
            className={`text-xs font-medium tracking-wide2 ${
              isDark ? "text-cloud/70" : "text-slate/70"
            }`}
          >
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
