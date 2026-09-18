import { NextResponse } from "next/server";
import { CONTACTS } from "@/lib/constants";

export const runtime = "nodejs";

type LeadBody = {
  name?: unknown;
  phone?: unknown;
  propertyType?: unknown;
  comment?: unknown;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

// Простая проверка телефона: допускает +, цифры, пробелы, скобки, дефисы, минимум 7 цифр.
function isPlausiblePhone(v: string): boolean {
  const digits = v.replace(/\D/g, "");
  return digits.length >= 7 && /^[+\d\s()-]+$/.test(v);
}

export async function POST(request: Request) {
  let body: LeadBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Некорректный формат данных." }, { status: 400 });
  }

  const { name, phone, propertyType, comment } = body;

  if (!isNonEmptyString(name)) {
    return NextResponse.json({ message: "Укажите имя." }, { status: 400 });
  }
  if (!isNonEmptyString(phone) || !isPlausiblePhone(phone)) {
    return NextResponse.json({ message: "Укажите корректный телефон." }, { status: 400 });
  }
  if (!isNonEmptyString(propertyType)) {
    return NextResponse.json({ message: "Выберите тип объекта." }, { status: 400 });
  }

  // --- Реальная доставка письма ---
  // Требует переменную окружения RESEND_API_KEY (https://resend.com) — ключ должен
  // предоставить владелец компании / разработчик при деплое. Без него честно
  // сообщаем, что онлайн-отправка не настроена, вместо того чтобы притворяться,
  // что заявка кому-то ушла.
  const apiKey = process.env.RESEND_API_KEY;
  const fromAddress = process.env.LEAD_FROM_EMAIL;

  if (!apiKey || !fromAddress) {
    return NextResponse.json(
      {
        message:
          "Онлайн-отправка формы пока не подключена к почте компании. Пожалуйста, свяжитесь по телефону или WhatsApp.",
      },
      { status: 501 }
    );
  }

  try {
    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: CONTACTS.email,
        subject: `Новая заявка с сайта — ${name}`,
        text: [
          `Имя: ${name}`,
          `Телефон: ${phone}`,
          `Тип объекта: ${propertyType}`,
          `Комментарий: ${isNonEmptyString(comment) ? comment : "—"}`,
        ].join("\n"),
      }),
    });

    if (!emailRes.ok) {
      return NextResponse.json(
        { message: "Не удалось отправить письмо. Попробуйте позвонить или написать в WhatsApp." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Не удалось отправить письмо. Попробуйте позвонить или написать в WhatsApp." },
      { status: 502 }
    );
  }
}
