"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { Button } from "@/components/ui/Button";
import { IconClose, IconCheckCircle, IconArrowRight } from "@/components/icons";

type EnquiryContextValue = { open: () => void; close: () => void };

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error("useEnquiry must be used within EnquiryProvider");
  return ctx;
}

type Status = "idle" | "loading" | "success" | "error";

const initialForm = {
  name: "",
  email: "",
  company: "",
  teamSize: "1-50",
  interest: "Data Science & AI",
  message: "",
};

const teamSizes = ["1-50", "51-200", "201-1000", "1000+"];
const interests = [
  "Data Science & AI",
  "Generative AI",
  "Product Management",
  "Leadership & Strategy",
];

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false); // intent to be open
  const [render, setRender] = useState(false); // kept mounted through exit animation
  const [show, setShow] = useState(false); // drives enter/exit transition classes
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  // Mount → next frame animate in; on close, animate out then unmount.
  useEffect(() => {
    if (isOpen) {
      setRender(true);
      const raf = requestAnimationFrame(() =>
        requestAnimationFrame(() => setShow(true))
      );
      return () => cancelAnimationFrame(raf);
    }
    setShow(false);
    const t = setTimeout(() => setRender(false), 300);
    return () => clearTimeout(t);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = render ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [render]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong");
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  function handleClose() {
    close();
    setTimeout(() => setStatus("idle"), 200);
  }

  return (
    <EnquiryContext.Provider value={{ open, close }}>
      {children}

      {render && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4">
          <div
            className={`absolute inset-0 bg-ink/50 backdrop-blur-sm transition-opacity duration-300 ease-out ${
              show ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleClose}
            aria-hidden
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Enquiry form"
            className={`relative flex max-h-[92dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl bg-surface shadow-2xl ring-1 ring-line transition-all duration-300 ease-out sm:max-h-[90dvh] sm:rounded-2xl ${
              show
                ? "translate-y-0 opacity-100 sm:scale-100"
                : "translate-y-full opacity-0 sm:translate-y-0 sm:scale-95"
            }`}
          >
            <div className="flex shrink-0 items-center justify-between bg-brand-600 px-6 py-4 text-white">
              <div>
                <h3 className="text-lg font-bold">Enquire Now</h3>
                <p className="text-xs text-blue-100">Speak with our advisor</p>
              </div>
              <button
                onClick={handleClose}
                aria-label="Close"
                className="grid h-9 w-9 place-items-center rounded-lg text-white/90 hover:bg-white/15"
              >
                <IconClose className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-y-auto">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
                <IconCheckCircle className="h-14 w-14 text-green-500" />
                <h4 className="mt-4 text-xl font-bold text-ink">Thank you!</h4>
                <p className="mt-2 max-w-xs text-sm text-ink-soft">
                  Your enquiry is in. A learning strategist will reach out within one
                  business day.
                </p>
                <Button variant="secondary" className="mt-6" onClick={handleClose}>
                  Done
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-4 px-6 py-6" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" id="e-name">
                    <input id="e-name" required value={form.name} onChange={update("name")} placeholder="Jane Doe" className={inputClass} />
                  </Field>
                  <Field label="Work email" id="e-email">
                    <input id="e-email" type="email" required value={form.email} onChange={update("email")} placeholder="jane@company.com" className={inputClass} />
                  </Field>
                </div>
                <Field label="Company" id="e-company">
                  <input id="e-company" required value={form.company} onChange={update("company")} placeholder="Company Inc." className={inputClass} />
                </Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Team size" id="e-team">
                    <select id="e-team" value={form.teamSize} onChange={update("teamSize")} className={inputClass}>
                      {teamSizes.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </Field>
                  <Field label="Interested in" id="e-interest">
                    <select id="e-interest" value={form.interest} onChange={update("interest")} className={inputClass}>
                      {interests.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </Field>
                </div>
                <Field label="Message" id="e-message" optional>
                  <textarea id="e-message" rows={2} value={form.message} onChange={update("message")} placeholder="Tell us about your goals..." className={`${inputClass} resize-none`} />
                </Field>

                {status === "error" && (
                  <p className="rounded-lg bg-red-50 px-4 py-2.5 text-sm font-medium text-red-700">{error}</p>
                )}

                <Button type="submit" className="w-full" disabled={status === "loading"}>
                  {status === "loading" ? "Submitting..." : "Submit enquiry"}
                  {status !== "loading" && <IconArrowRight className="h-4 w-4" />}
                </Button>
              </form>
            )}
            </div>
          </div>
        </div>
      )}
    </EnquiryContext.Provider>
  );
}

const inputClass =
  "w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20";

function Field({
  label,
  id,
  optional,
  children,
}: {
  label: string;
  id: string;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <label htmlFor={id} className="flex flex-col gap-1.5">
      <span className="text-sm font-semibold text-ink">
        {label}
        {optional && <span className="ml-1 font-normal text-ink-soft">(optional)</span>}
      </span>
      {children}
    </label>
  );
}
