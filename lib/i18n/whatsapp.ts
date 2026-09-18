import type { Locale } from "@/lib/i18n/locale";
import type { Branch } from "@/data/branches";

export type WhatsAppAction = "price" | "project" | "b2b";

const ACTION_TEXT: Record<Locale, Record<WhatsAppAction, string>> = {
  ru: {
    price: "рассчитать стоимость окон",
    project: "обсудить проект",
    b2b: "получить расчёт для компании",
  },
  kk: {
    price: "терезелердің құнын есептеу",
    project: "жобаны талқылау",
    b2b: "компания үшін есеп алу",
  },
};

export function buildWhatsAppMessage(action: WhatsAppAction, locale: Locale, branch: Branch): string {
  const city = locale === "kk" ? branch.cityKk : branch.city;
  if (locale === "kk") {
    return `Сәлеметсіз бе! Мен ${city} қаласында ${ACTION_TEXT.kk[action]} қалаймын.`;
  }
  return `Здравствуйте! Я хочу ${ACTION_TEXT.ru[action]} в ${city}.`;
}

export const VISUALIZATION_MESSAGE: Record<Locale, string> = {
  ru: "Здравствуйте! Хочу отправить фото дома для бесплатной 3D-визуализации окон.",
  kk: "Сәлеметсіз бе! Терезелердің тегін 3D-визуализациясы үшін үй фотосуретін жібергім келеді.",
};

export function buildWhatsAppHref(branch: Branch, message: string): string {
  return `${branch.whatsappHref}?text=${encodeURIComponent(message)}`;
}
