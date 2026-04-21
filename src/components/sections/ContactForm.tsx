"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

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

const intentPresets = {
  demo: {
    label: "Demo request detected",
    message:
      "Hi Agadh team, I would like a live demo of AgadhEducare for our school. Please share available time slots this week.",
  },
  proposal: {
    label: "Proposal request detected",
    message:
      "Hi Agadh team, please share a proposal for AgadhEducare based on our school size, required modules, and implementation timeline.",
  },
  architect: {
    label: "Architecture review request detected",
    message:
      "Hi Agadh team, we want to discuss architecture, integration approach, and rollout strategy for AgadhEducare.",
  },
} as const;

type ContactIntent = keyof typeof intentPresets;

function resolveIntent(value: string | null): ContactIntent | null {
  if (!value) return null;
  const normalized = value.toLowerCase();

  if (normalized === "demo" || normalized === "proposal" || normalized === "architect") {
    return normalized;
  }

  return null;
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const intent = useMemo(
    () => resolveIntent(searchParams.get("intent")),
    [searchParams]
  );
  const preset = intent ? intentPresets[intent] : null;

  const [data, setData] = useState<FormState>(initial);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  useEffect(() => {
    if (!preset) return;

    setData((prev) => {
      const untouched =
        prev.name.trim().length === 0 &&
        prev.company.trim().length === 0 &&
        prev.email.trim().length === 0 &&
        prev.message.trim().length === 0;

      if (!untouched) return prev;

      return {
        ...prev,
        message: preset.message,
      };
    });
  }, [preset]);

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

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("send_failed");

      setStatus("success");
      setData(preset ? { ...initial, message: preset.message } : initial);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {preset ? (
        <div className="rounded-md border border-blue-200 bg-blue-50 px-4 py-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-900">
            {preset.label}
          </div>
          <p className="mt-1 text-sm text-slate-700">
            We prefilled your message to speed up this request.
          </p>
        </div>
      ) : null}

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
