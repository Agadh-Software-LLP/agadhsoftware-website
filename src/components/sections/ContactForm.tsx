"use client";

import { useMemo, useState } from "react";

type FormState = {
  name: string;
  company: string;
  email: string;
  message: string;
};

const initial: FormState = {
  name: "",
  company: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [data, setData] = useState<FormState>(initial);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const canSubmit = useMemo(() => {
    return (
      data.name.trim().length > 0 &&
      data.email.trim().length > 0 &&
      data.message.trim().length > 0
    );
  }, [data]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit) return;

    try {
      setStatus("submitting");

      // Placeholder handler. Replace with API route / email integration later.
      await new Promise((r) => setTimeout(r, 700));

      setStatus("success");
      setData(initial);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          required
          value={data.name}
          onChange={(v) => setData((p) => ({ ...p, name: v }))}
          placeholder="Your name"
        />
        <Field
          label="Company"
          value={data.company}
          onChange={(v) => setData((p) => ({ ...p, company: v }))}
          placeholder="Company name"
        />
      </div>

      <Field
        label="Email"
        required
        type="email"
        value={data.email}
        onChange={(v) => setData((p) => ({ ...p, email: v }))}
        placeholder="name@company.com"
      />

      <TextArea
        label="Message"
        required
        value={data.message}
        onChange={(v) => setData((p) => ({ ...p, message: v }))}
        placeholder="Tell us about your project and timelines"
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={!canSubmit || status === "submitting"}
          className="inline-flex items-center justify-center rounded-md bg-blue-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-950 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>

        <div className="text-sm text-slate-600">
          {status === "success"
            ? "Thanks — we’ll respond shortly."
            : status === "error"
              ? "Something went wrong. Please try again."
              : "We typically respond within 1–2 business days."}
        </div>
      </div>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <div className="text-sm font-semibold text-slate-950">
        {label} {required ? <span className="text-slate-500">*</span> : null}
      </div>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900/15"
      />
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <div className="text-sm font-semibold text-slate-950">
        {label} {required ? <span className="text-slate-500">*</span> : null}
      </div>
      <textarea
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={6}
        className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900/15"
      />
    </label>
  );
}
