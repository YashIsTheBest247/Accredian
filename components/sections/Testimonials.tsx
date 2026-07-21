"use client";

import { useState } from "react";
import { Heading, Hl } from "@/components/ui/Heading";
import { IconChevronRight } from "@/components/icons";
import { testimonials } from "@/lib/data";

const PER_PAGE = 2;

export function Testimonials() {
  const pages = Math.ceil(testimonials.length / PER_PAGE);
  const [page, setPage] = useState(0);

  const visible = testimonials.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section id="testimonials" className="py-14 sm:py-20">
      <div className="container-page">
        <Heading
          title={<>Testimonials from <Hl>Our Partners</Hl></>}
          subtitle={<>What <Hl>Our Clients</Hl> Are Saying</>}
        />

        <div className="relative mt-14">
          <div className="grid gap-6 md:grid-cols-2">
            {visible.map((t) => (
              <figure
                key={t.company}
                className="flex flex-col rounded-2xl border border-line bg-surface p-8 shadow-sm"
              >
                <span className="inline-flex h-11 items-center text-xl font-extrabold tracking-tight text-brand-600">
                  {t.company}
                </span>
                <blockquote className="mt-5 text-lg leading-relaxed text-ink-soft">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </figure>
            ))}
          </div>

          {/* Arrow controls */}
          <button
            onClick={() => setPage((p) => (p - 1 + pages) % pages)}
            aria-label="Previous testimonials"
            className="absolute -left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-surface text-ink shadow-md transition-colors hover:bg-brand-50 hover:text-brand-600 lg:grid"
          >
            <IconChevronRight className="h-5 w-5 rotate-180" />
          </button>
          <button
            onClick={() => setPage((p) => (p + 1) % pages)}
            aria-label="Next testimonials"
            className="absolute -right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-surface text-ink shadow-md transition-colors hover:bg-brand-50 hover:text-brand-600 lg:grid"
          >
            <IconChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-10 flex items-center justify-center gap-2.5">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to testimonial page ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                page === i ? "w-6 bg-brand-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
