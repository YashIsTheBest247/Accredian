"use client";

import { useState } from "react";
import { Heading, Hl } from "@/components/ui/Heading";
import { EnquireButton } from "@/components/enquiry/EnquireButton";
import { IconChevronDown } from "@/components/icons";
import { faqCategories } from "@/lib/data";

export function Faqs() {
  const [activeCat, setActiveCat] = useState(0);
  const [openItem, setOpenItem] = useState<number | null>(0);

  const category = faqCategories[activeCat];

  return (
    <section id="faqs" className="bg-surface-2 py-14 sm:py-20">
      <div className="container-page">
        <Heading
          align="left"
          title={<>Frequently Asked <Hl>Questions</Hl></>}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_2fr]">
          {/* Category tabs */}
          <div className="flex flex-col gap-4">
            {faqCategories.map((cat, i) => (
              <button
                key={cat.key}
                onClick={() => {
                  setActiveCat(i);
                  setOpenItem(0);
                }}
                className={`rounded-2xl border px-6 py-5 text-center text-lg font-bold transition-all ${
                  activeCat === i
                    ? "border-brand-200 bg-surface text-brand-600 shadow-md"
                    : "border-line bg-surface/50 text-ink-soft hover:bg-surface"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="flex flex-col divide-y divide-line rounded-2xl bg-surface px-6 shadow-sm sm:px-8">
            {category.items.map((item, i) => {
              const isOpen = openItem === i;
              return (
                <div key={item.q}>
                  <button
                    onClick={() => setOpenItem(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-bold text-ink sm:text-lg">{item.q}</span>
                    <IconChevronDown
                      className={`h-5 w-5 shrink-0 text-ink-soft transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-brand-600" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="overflow-hidden text-ink-soft">{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <EnquireButton size="lg">Enquire Now</EnquireButton>
        </div>
      </div>
    </section>
  );
}
