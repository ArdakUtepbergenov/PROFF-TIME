type Props = {
  value: string;
  label: string;
  variant?: "dark" | "light";
  size?: "md" | "lg";
};

export default function StatNumber({ value, label, variant = "dark", size = "md" }: Props) {
  const valueColor = variant === "dark" ? "text-white" : "text-navy";
  const labelColor = variant === "dark" ? "text-cloud" : "text-slate";
  const valueSize = size === "lg" ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl";

  return (
    <div>
      <div className={`font-display font-extrabold tracking-tight ${valueSize} ${valueColor}`}>
        {value}
      </div>
      <div className={`mt-1 max-w-[16rem] text-sm ${labelColor}`}>{label}</div>
    </div>
  );
}
