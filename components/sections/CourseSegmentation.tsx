"use client";

import Image from "next/image";
import { useState } from "react";
import { Heading, Hl } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { courseSegments } from "@/lib/data";

export function CourseSegmentation() {
  const [page, setPage] = useState(0);

  return (
    <section className="bg-surface-2 py-14 sm:py-20">
      <div className="container-page">
        <Heading
          title={<>Tailored <Hl>Course Segmentation</Hl></>}
          subtitle={<>Explore <Hl>Custom-fit Courses</Hl> Designed to Address Every Professional Focus</>}
        />

        {/* Mobile: one-card carousel */}
        <div className="mt-10 sm:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {courseSegments.map((c) => (
                <div key={c.title} className="w-full shrink-0 px-1">
                  <Card course={c} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2.5">
            {courseSegments.map((c, i) => (
              <button
                key={c.title}
                onClick={() => setPage(i)}
                aria-label={`Show ${c.title}`}
                className={`h-2.5 rounded-full transition-all ${
                  page === i ? "w-6 bg-brand-600" : "w-2.5 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: 4-up grid */}
        <div className="mt-14 hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {courseSegments.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <Card course={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ course }: { course: (typeof courseSegments)[number] }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-surface shadow-[0_8px_30px_-16px_rgba(16,24,40,0.25)]">
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 text-center sm:text-left">
        <h3 className="text-xl font-extrabold leading-snug text-brand-600">{course.title}</h3>
        <p className="mt-3 hidden text-sm leading-relaxed text-ink-soft sm:block">
          {course.description}
        </p>
      </div>
    </article>
  );
}
