import { Heading, Hl } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { domains } from "@/lib/data";

export function DomainExpertise() {
  return (
    <section className="py-14 sm:py-20">
      <div className="container-page">
        <Heading
          title={<>Our <Hl>Domain Expertise</Hl></>}
          subtitle={<><Hl>Specialized Programs</Hl> Designed to Fuel Innovation</>}
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((d, i) => (
            <Reveal key={d.title} delay={i * 60}>
              <div className="group flex flex-col items-center gap-4 rounded-2xl border border-line bg-surface p-8 text-center shadow-[0_8px_30px_-16px_rgba(16,24,40,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(26,115,232,0.35)]">
                <span className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <d.icon className="h-8 w-8" />
                </span>
                <h3 className="text-lg font-bold text-ink">{d.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
