"use client";

import { useEffect, useState } from "react";
import { Heading, Hl } from "@/components/ui/Heading";
import { IconChevronRight } from "@/components/icons";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [perPage, setPerPage] = useState(2);
  const [page, setPage] = useState(0);

  // 1 card per page on mobile, 2 from md up.
  useEffect(() => {
    const apply = () => setPerPage(window.innerWidth >= 768 ? 2 : 1);
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  const pages = Math.ceil(testimonials.length / perPage);
  const current = Math.min(page, pages - 1);
  const visible = testimonials.slice(current * perPage, current * perPage + perPage);

  return (
    <section id="testimonials" className="py-14 sm:py-20">
      <div className="container-page">
        <Heading
          title={<>Testimonials from <Hl>Our Partners</Hl></>}
          subtitle={<>What <Hl>Our Clients</Hl> Are Saying</>}
        />

        <div className="relative mt-10 sm:mt-14">
          <div className="grid gap-6 md:grid-cols-2">
            {visible.map((t) => (
              <figure
                key={t.company}
                className="flex flex-col rounded-2xl border border-line bg-surface p-7 shadow-sm sm:p-8"
              >
                <span className="inline-flex h-11 items-center text-xl font-extrabold tracking-tight text-brand-600">
                  {t.company}
                </span>
                <blockquote className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </figure>
            ))}
          </div>

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

        <div className="mt-8 flex items-center justify-center gap-2.5 sm:mt-10">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to testimonial page ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                current === i ? "w-6 bg-brand-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
