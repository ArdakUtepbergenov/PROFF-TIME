type Props = {
  eyebrow?: string;
  heading: string;
  variant?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  heading,
  variant = "light",
  align = "left",
  className = "",
}: Props) {
  const headingColor = variant === "dark" ? "text-white" : "text-navy";
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2
        className={`font-display font-bold leading-[1.15] tracking-tight text-3xl md:text-4xl lg:text-[2.75rem] ${headingColor}`}
      >
        {heading}
      </h2>
    </div>
  );
}
