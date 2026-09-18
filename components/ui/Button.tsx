import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "whatsapp" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-medium font-body transition-colors duration-200 ease-smooth focus-visible:outline-cyan whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-cyan text-navy hover:bg-cyan-dim",
  secondary:
    "border border-white/30 text-white hover:bg-white hover:text-navy",
  ghost:
    "border border-navy/15 text-navy hover:border-navy hover:bg-navy hover:text-white",
  whatsapp:
    "border border-cyan/50 text-navy hover:border-cyan hover:bg-cyan-soft",
};

type CommonProps = {
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
};

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export default function Button(props: LinkProps | ButtonProps) {
  const { variant = "primary", icon, className = "", children, ...rest } =
    props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const href = props.href as string;
    const { href: _href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    const isInternalRoute = href.startsWith("/") && !href.startsWith("//");
    if (isInternalRoute) {
      return (
        <Link href={href} className={classes} {...anchorRest}>
          {icon}
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...anchorRest}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {icon}
      {children}
    </button>
  );
}
