type Props = {
  variant?: "solid" | "dotted";
  tone?: "dark" | "light";
  className?: string;
};

export default function Divider({ variant = "solid", tone = "light", className = "" }: Props) {
  if (variant === "dotted") {
    const color = tone === "dark" ? "#2FD1D9" : "#0B1E33";
    return (
      <div
        className={`h-[2px] w-full ${className}`}
        style={{
          backgroundImage: `radial-gradient(circle, ${color} 1.5px, transparent 1.5px)`,
          backgroundSize: "8px 2px",
          backgroundRepeat: "repeat-x",
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className={`h-px w-full ${tone === "dark" ? "bg-white/10" : "bg-line"} ${className}`}
      aria-hidden="true"
    />
  );
}
