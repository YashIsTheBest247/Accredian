"use client";

import Image from "next/image";
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
import { IconClose, IconCheckCircle, IconArrowRight, IconChevronDown } from "@/components/icons";

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
  countryCode: "+91",
  phone: "",
  company: "",
  domain: "",
  candidates: "",
  mode: "",
};

const countryCodes = [
  { code: "+91", flag: "🇮🇳" },
  { code: "+1", flag: "🇺🇸" },
  { code: "+44", flag: "🇬🇧" },
  { code: "+971", flag: "🇦🇪" },
  { code: "+61", flag: "🇦🇺" },
  { code: "+65", flag: "🇸🇬" },
];

const domains = [
  "Data Science & AI",
  "Generative AI",
  "Product Management",
  "Leadership & Strategy",
  "Digital Transformation",
  "Other",
];

const modes = ["Online", "Offline / On-site", "Hybrid"];

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
    setTimeout(() => setStatus("idle"), 250);
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
            aria-label="Enquire Now"
            className={`relative flex max-h-[92dvh] w-full max-w-3xl overflow-hidden rounded-t-2xl bg-surface shadow-2xl ring-1 ring-line transition-all duration-300 ease-out sm:max-h-[88dvh] sm:rounded-2xl ${
              show
                ? "translate-y-0 opacity-100 sm:scale-100"
                : "translate-y-full opacity-0 sm:translate-y-0 sm:scale-95"
            }`}
          >
            {/* Left image (desktop only) */}
            <div className="relative hidden w-[42%] shrink-0 sm:block">
              <Image
                src="/images/join-people.jpg"
                alt="Enterprise professionals meeting"
                fill
                sizes="(max-width: 640px) 0px, 320px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 to-transparent" />
            </div>

            {/* Right form column */}
            <div className="flex min-w-0 flex-1 flex-col">
              <div className="flex shrink-0 items-center justify-between border-b border-line px-6 py-4">
                <h3 className="text-2xl font-extrabold text-ink">Enquire Now</h3>
                <button
                  onClick={handleClose}
                  aria-label="Close"
                  className="grid h-9 w-9 place-items-center rounded-lg text-ink-soft transition-colors hover:bg-surface-2 hover:text-ink"
                >
                  <IconClose className="h-5 w-5" />
                </button>
              </div>

              <div className="overflow-y-auto px-6 py-6">
                {status === "success" ? (
                  <div className="flex min-h-[20rem] flex-col items-center justify-center text-center">
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
                  <form onSubmit={onSubmit} className="flex flex-col gap-6" noValidate>
                    <input
                      aria-label="Name"
                      required
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Enter Name"
                      className={underline}
                    />
                    <input
                      aria-label="Email"
                      type="email"
                      required
                      value={form.email}
                      onChange={update("email")}
                      placeholder="Enter Email"
                      className={underline}
                    />

                    {/* Phone with country code */}
                    <div className="flex items-center gap-3 border-b border-line focus-within:border-brand-500">
                      <select
                        aria-label="Country code"
                        value={form.countryCode}
                        onChange={update("countryCode")}
                        className="shrink-0 bg-transparent py-3 text-sm text-ink outline-none"
                      >
                        {countryCodes.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.flag} {c.code}
                          </option>
                        ))}
                      </select>
                      <input
                        aria-label="Phone number"
                        type="tel"
                        inputMode="numeric"
                        value={form.phone}
                        onChange={update("phone")}
                        placeholder="Enter phone number"
                        className="min-w-0 flex-1 border-0 bg-transparent py-3 text-sm text-ink outline-none placeholder:text-ink-soft/70"
                      />
                    </div>

                    <input
                      aria-label="Company name"
                      required
                      value={form.company}
                      onChange={update("company")}
                      placeholder="Enter company name"
                      className={underline}
                    />

                    <SelectField
                      aria-label="Domain"
                      value={form.domain}
                      onChange={update("domain")}
                      placeholder="Select Domain"
                      options={domains}
                    />

                    <input
                      aria-label="Number of candidates"
                      type="number"
                      min={1}
                      value={form.candidates}
                      onChange={update("candidates")}
                      placeholder="Enter No. of candidates"
                      className={underline}
                    />

                    <SelectField
                      aria-label="Mode of Delivery"
                      value={form.mode}
                      onChange={update("mode")}
                      placeholder="Select Mode of Delivery *"
                      options={modes}
                    />

                    {status === "error" && (
                      <p className="rounded-lg bg-red-50 px-4 py-2.5 text-sm font-medium text-red-700">
                        {error}
                      </p>
                    )}

                    <Button type="submit" className="mt-1 w-full" disabled={status === "loading"}>
                      {status === "loading" ? "Submitting..." : "Submit"}
                      {status !== "loading" && <IconArrowRight className="h-4 w-4" />}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </EnquiryContext.Provider>
  );
}

const underline =
  "w-full border-0 border-b border-line bg-transparent px-0 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/70 focus:border-brand-500";

function SelectField({
  value,
  onChange,
  placeholder,
  options,
  "aria-label": ariaLabel,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
  options: string[];
  "aria-label": string;
}) {
  return (
    <div className="relative border-b border-line focus-within:border-brand-500">
      <select
        aria-label={ariaLabel}
        value={value}
        onChange={onChange}
        className={`w-full appearance-none bg-transparent py-3 pr-8 text-sm outline-none ${
          value ? "text-ink" : "text-ink-soft/70"
        }`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="text-ink">
            {o}
          </option>
        ))}
      </select>
      <IconChevronDown className="pointer-events-none absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
    </div>
  );
}
