import { Heading, Hl } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section id="stats" className="py-20 sm:py-24">
      <div className="container-page">
        <Heading
          title={<>Our <Hl>Track Record</Hl></>}
          subtitle={<>The Numbers Behind <Hl>Our Success</Hl></>}
        />

        <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-slate-200">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="flex flex-col items-center px-6 text-center">
                <span className="grid min-w-[7rem] place-items-center rounded-full bg-brand-50 px-6 py-3 text-3xl font-extrabold text-brand-600 sm:text-4xl">
                  {s.value}
                </span>
                <p className="mt-5 max-w-xs text-lg font-medium text-ink">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
