import Image from "next/image";
import { Heading, Hl } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { courseSegments } from "@/lib/data";

export function CourseSegmentation() {
  return (
    <section className="bg-surface-2 py-14 sm:py-20">
      <div className="container-page">
        <Heading
          title={<>Tailored <Hl>Course Segmentation</Hl></>}
          subtitle={<>Explore <Hl>Custom-fit Courses</Hl> Designed to Address Every Professional Focus</>}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courseSegments.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-surface shadow-[0_8px_30px_-16px_rgba(16,24,40,0.25)]">
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-extrabold leading-snug text-brand-600">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
