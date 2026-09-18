export type Locale = "ru" | "kk";

export const DEFAULT_LOCALE: Locale = "ru";

/** "/kz" URL-префикс используется для казахской версии, RU-маршруты остаются как есть. */
export function localeHref(path: string, locale: Locale): string {
  if (locale === "ru") return path;
  if (path === "/") return "/kz";
  return `/kz${path}`;
}

/** Определяет локаль по pathname (используется в клиентских компонентах через usePathname()). */
export function localeFromPathname(pathname: string): Locale {
  return pathname === "/kz" || pathname.startsWith("/kz/") ? "kk" : "ru";
}

/** Путь той же страницы на другом языке — используется языковым переключателем. */
export function otherLocalePath(pathname: string): string {
  if (pathname === "/kz" || pathname.startsWith("/kz/")) {
    const rest = pathname.slice(3);
    return rest === "" ? "/" : rest;
  }
  return pathname === "/" ? "/kz" : `/kz${pathname}`;
}
