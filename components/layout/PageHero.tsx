import type { ReactNode } from "react";
import Placeholder from "@/components/ui/Placeholder";
import Breadcrumbs, { type Crumb } from "@/components/ui/Breadcrumbs";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string; // label for placeholder background; omit for a plain navy hero
  breadcrumbs?: Crumb[];
  theme?: "dark" | "light";
  children?: ReactNode; // CTA row / extra content
  size?: "default" | "compact";
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  breadcrumbs,
  theme = "dark",
  children,
  size = "default",
}: Props) {
  const isDark = theme === "dark";
  const paddingY = size === "compact" ? "pb-14 pt-40 md:pb-16 md:pt-44" : "pb-16 pt-44 md:pb-20 md:pt-48";

  return (
    <section
      className={`relative overflow-hidden ${isDark ? "bg-navy" : "bg-mist"}`}
    >
      {image && (
        <div className="absolute inset-0">
          <Placeholder
            label={image}
            variant="dark"
            aspect="aspect-auto"
            className="h-full w-full"
            labelPosition="corner"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/75 to-navy/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/50 to-transparent" />
        </div>
      )}

      <div className={`container-site relative z-10 ${paddingY}`}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}

        {eyebrow && (
          <p className={`eyebrow mb-3 ${!isDark ? "text-cyan-ink" : ""}`}>{eyebrow}</p>
        )}

        <h1
          className={`max-w-3xl font-display font-extrabold leading-[1.08] tracking-tight ${
            size === "compact" ? "text-3xl md:text-5xl" : "text-[2.25rem] md:text-6xl lg:text-[4.25rem]"
          } ${isDark ? "text-white" : "text-navy"}`}
        >
          {title}
        </h1>

        {description && (
          <p
            className={`mt-6 max-w-xl text-base leading-relaxed md:text-lg ${
              isDark ? "text-cloud" : "text-slate"
            }`}
          >
            {description}
          </p>
        )}

        {children && <div className="mt-9">{children}</div>}
      </div>
    </section>
  );
}
