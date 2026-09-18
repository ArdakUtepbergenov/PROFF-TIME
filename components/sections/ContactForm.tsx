"use client";

import { useState, type FormEvent } from "react";
import { PROPERTY_TYPES } from "@/lib/constants";
import { PROPERTY_TYPES_KK } from "@/lib/i18n/content.kk";
import { t } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locale";
import Button from "@/components/ui/Button";
import { submitLead, type LeadPayload } from "@/lib/submitLead";
import { useBranch } from "@/components/providers/BranchProvider";

type Status = "idle" | "submitting" | "success" | "not_configured" | "error";

const EMPTY_ERRORS = { name: "", phone: "", propertyType: "" };

export default function ContactForm({ locale = "ru" }: { locale?: Locale }) {
  const dict = t(locale);
  const { branch } = useBranch();
  const propertyTypes = locale === "kk" ? PROPERTY_TYPES_KK : PROPERTY_TYPES;

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState(EMPTY_ERRORS);

  function validate(payload: LeadPayload) {
    const errors = { ...EMPTY_ERRORS };
    if (!payload.name.trim()) errors.name = dict.form.errNameRequired;
    const digits = payload.phone.replace(/\D/g, "");
    if (!payload.phone.trim() || digits.length < 7) errors.phone = dict.form.errPhoneRequired;
    if (!payload.propertyType) errors.propertyType = dict.form.errPropertyTypeRequired;
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
        <p className="font-display text-xl font-bold text-navy">{dict.form.successTitle}</p>
        <p className="mt-2 text-sm text-slate">{dict.form.successText}</p>
      </div>
    );
  }

  if (status === "not_configured") {
    return (
      <div className="border border-line bg-mist p-8" role="status">
        <p className="font-display text-lg font-bold text-navy">{dict.form.notConfiguredTitle}</p>
        <p className="mt-2 text-sm text-slate">{dict.form.notConfiguredText}</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button href={branch.phoneHref} variant="ghost" className="flex-1">
            {dict.common.call}
          </Button>
          <Button href={branch.whatsappHref} variant="whatsapp" className="flex-1">
            {dict.common.whatsapp}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
          {dict.form.name}
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
          {dict.form.phone}
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
          {dict.form.propertyType}
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
            {dict.form.propertyTypePlaceholder}
          </option>
          {propertyTypes.map((type) => (
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
          {dict.form.comment}
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
        {status === "submitting" ? dict.form.submitting : dict.form.submit}
      </Button>
    </form>
  );
}
