export type LeadPayload = {
  name: string;
  phone: string;
  propertyType: string;
  comment: string;
};

export type SubmitLeadResult =
  | { ok: true }
  | { ok: false; reason: "not_configured" | "invalid" | "network_error"; message: string };

/**
 * Отправляет заявку на /api/lead и возвращает честный результат.
 *
 * Важно: эта функция НЕ гарантирует, что заявка "отправлена" в смысле
 * "менеджер её увидел". Она лишь сообщает, был ли запрос успешно обработан
 * сервером. Реальная доставка (email/CRM) зависит от того, настроен ли
 * провайдер на сервере — см. app/api/lead/route.ts.
 */
export async function submitLead(payload: LeadPayload): Promise<SubmitLeadResult> {
  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.status === 501) {
      return {
        ok: false,
        reason: "not_configured",
        message: "Онлайн-отправка формы пока не подключена к почте компании.",
      };
    }

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      return {
        ok: false,
        reason: "invalid",
        message: data?.message ?? "Не удалось отправить заявку. Проверьте заполненные поля.",
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      reason: "network_error",
      message: "Не удалось связаться с сервером. Проверьте подключение к интернету.",
    };
  }
}
