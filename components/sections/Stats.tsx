import { Heading, Hl } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section id="stats" className="py-14 sm:py-20">
      <div className="container-page">
        <Heading
          title={<>Our <Hl>Track Record</Hl></>}
          subtitle={<>The Numbers Behind <Hl>Our Success</Hl></>}
        />

        {/* Mobile: pill-left rows separated by dividers. Desktop: 3 centered columns. */}
        <div className="mt-10 flex flex-col divide-y divide-line sm:mt-12 sm:grid sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="flex items-center gap-5 py-7 sm:flex-col sm:justify-center sm:px-6 sm:py-0 sm:text-center">
                <span className="grid min-w-[5.5rem] shrink-0 place-items-center rounded-full bg-brand-50 px-5 py-3 text-2xl font-extrabold text-brand-600 sm:min-w-[7rem] sm:text-3xl lg:text-4xl">
                  {s.value}
                </span>
                <p className="text-lg font-medium leading-snug text-ink sm:mt-5 sm:max-w-xs">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
