import { Heading, Hl } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { howItWorksSteps } from "@/lib/data";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-14 sm:py-20">
      <div className="container-page">
        <Heading
          title={<>How We <Hl>Deliver Results</Hl> That Matter?</>}
          subtitle={<>A Structured Three-Step Approach to <Hl>Skill Development</Hl></>}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {howItWorksSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <article className="relative flex h-full flex-col items-center rounded-3xl border-l-4 border-r-4 border-brand-500/70 bg-brand-50/60 px-7 py-10 text-center">
                <span className="absolute left-5 top-5 grid h-8 w-8 place-items-center rounded-full border border-brand-300 bg-surface text-sm font-bold text-ink">
                  {i + 1}
                </span>
                <span className="grid h-20 w-20 place-items-center rounded-full bg-brand-600 text-white shadow-lg shadow-brand-600/30">
                  <step.icon className="h-9 w-9" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-3 text-ink-soft">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
