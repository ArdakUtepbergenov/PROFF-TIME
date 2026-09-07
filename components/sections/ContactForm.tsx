"use client";

import { useState, type FormEvent } from "react";
import { PROPERTY_TYPES, CONTACTS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { submitLead, type LeadPayload } from "@/lib/submitLead";

type Status = "idle" | "submitting" | "success" | "not_configured" | "error";

const EMPTY_ERRORS = { name: "", phone: "", propertyType: "" };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState(EMPTY_ERRORS);

  function validate(payload: LeadPayload) {
    const errors = { ...EMPTY_ERRORS };
    if (!payload.name.trim()) errors.name = "Укажите имя.";
    const digits = payload.phone.replace(/\D/g, "");
    if (!payload.phone.trim() || digits.length < 7) errors.phone = "Укажите корректный телефон.";
    if (!payload.propertyType) errors.propertyType = "Выберите тип объекта.";
    return errors;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload: LeadPayload = {
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      propertyType: String(formData.get("propertyType") ?? ""),
      comment: String(formData.get("comment") ?? "").trim(),
    };

    const errors = validate(payload);
    setFieldErrors(errors);
    if (errors.name || errors.phone || errors.propertyType) {
      return;
    }

    setStatus("submitting");
    const result = await submitLead(payload);

    if (result.ok) {
      setStatus("success");
      return;
    }

    if (result.reason === "not_configured") {
      setStatus("not_configured");
      setErrorMessage(result.message);
      return;
    }

    setStatus("error");
    setErrorMessage(result.message);
  }

  if (status === "success") {
    return (
      <div className="border border-line bg-mist p-8 text-center" role="status">
        <p className="font-display text-xl font-bold text-navy">Заявка отправлена</p>
        <p className="mt-2 text-sm text-slate">
          Мы получили ваше сообщение и свяжемся с вами в ближайшее время.
        </p>
      </div>
    );
  }

  if (status === "not_configured") {
    return (
      <div className="border border-line bg-mist p-8" role="status">
        <p className="font-display text-lg font-bold text-navy">
          Онлайн-отправка формы пока недоступна
        </p>
        <p className="mt-2 text-sm text-slate">
          Мы получаем это сообщение честно: форма ещё не подключена к почте компании. Пожалуйста,
          свяжитесь с нами напрямую — так вы точно получите ответ быстрее.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button href={CONTACTS.phoneHref} variant="ghost" className="flex-1">
            Позвонить
          </Button>
          <Button href={CONTACTS.whatsappHref} variant="whatsapp" className="flex-1">
            Написать в WhatsApp
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
          Имя
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          aria-invalid={Boolean(fieldErrors.name)}
          aria-describedby={fieldErrors.name ? "name-error" : undefined}
          className={`w-full rounded border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-cyan ${
            fieldErrors.name ? "border-red-400" : "border-line"
          }`}
        />
        {fieldErrors.name && (
          <p id="name-error" className="mt-1.5 text-xs text-red-500">
            {fieldErrors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy">
          Телефон
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="+7 7__ ___ __ __"
          aria-invalid={Boolean(fieldErrors.phone)}
          aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
          className={`w-full rounded border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-cyan ${
            fieldErrors.phone ? "border-red-400" : "border-line"
          }`}
        />
        {fieldErrors.phone && (
          <p id="phone-error" className="mt-1.5 text-xs text-red-500">
            {fieldErrors.phone}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="propertyType" className="mb-1.5 block text-sm font-medium text-navy">
          Тип объекта
        </label>
        <select
          id="propertyType"
          name="propertyType"
          required
          defaultValue=""
          aria-invalid={Boolean(fieldErrors.propertyType)}
          aria-describedby={fieldErrors.propertyType ? "propertyType-error" : undefined}
          className={`w-full rounded border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-cyan ${
            fieldErrors.propertyType ? "border-red-400" : "border-line"
          }`}
        >
          <option value="" disabled>
            Выберите тип объекта
          </option>
          {PROPERTY_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {fieldErrors.propertyType && (
          <p id="propertyType-error" className="mt-1.5 text-xs text-red-500">
            {fieldErrors.propertyType}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="comment" className="mb-1.5 block text-sm font-medium text-navy">
          Комментарий
        </label>
        <textarea
          id="comment"
          name="comment"
          rows={4}
          className="w-full resize-none rounded border border-line bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-cyan"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-500">
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        className="w-full"
        aria-disabled={status === "submitting"}
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Отправка…" : "Отправить заявку"}
      </Button>
    </form>
  );
}
