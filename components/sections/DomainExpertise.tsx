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

        {/* Mobile: 2-col compact cards (icon left). Desktop: 3-col stacked cards. */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 sm:mt-14 sm:gap-6 lg:grid-cols-3">
          {domains.map((d, i) => (
            <Reveal
              key={d.title}
              delay={i * 60}
              className={i === domains.length - 1 ? "col-span-2 mx-auto w-1/2 lg:col-span-1 lg:w-auto" : ""}
            >
              <div className="group flex h-full items-center gap-3 rounded-xl border border-line bg-surface p-3 shadow-[0_8px_30px_-16px_rgba(16,24,40,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(26,115,232,0.35)] sm:rounded-2xl lg:flex-col lg:justify-center lg:gap-4 lg:p-8 lg:text-center">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-brand-600 transition-colors sm:h-10 sm:w-10 lg:h-16 lg:w-16 lg:rounded-2xl lg:bg-brand-50 lg:group-hover:bg-brand-600 lg:group-hover:text-white">
                  <d.icon className="h-6 w-6 lg:h-8 lg:w-8" />
                </span>
                <h3 className="text-[0.82rem] font-bold leading-tight text-ink sm:text-sm lg:text-lg">
                  {d.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
