import { Heading, Hl } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { IconBulb, IconGear, IconChip } from "@/components/icons";
import { catSteps } from "@/lib/data";

const icons = [IconBulb, IconChip, IconGear];

export function CatFramework() {
  return (
    <section id="cat" className="bg-gradient-to-b from-brand-50/70 to-white py-20 sm:py-24">
      <div className="container-page">
        <Heading
          title={<>The <Hl>CAT Framework</Hl></>}
          subtitle={<>Our Proven Approach to <Hl>Learning Excellence</Hl></>}
        />

        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* weaving S-curve (desktop) */}
          <svg
            className="absolute inset-0 hidden h-full w-full text-brand-500 lg:block"
            viewBox="0 0 1000 320"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M60 160 C 60 40, 320 40, 320 160 S 500 280, 500 160 S 680 40, 680 160 S 940 280, 940 160"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative grid gap-14 sm:grid-cols-3">
            {catSteps.map((step, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={step.title} delay={i * 120}>
                  <div className="mx-auto flex aspect-square w-full max-w-[15rem] flex-col items-center justify-center rounded-full border-2 border-brand-400 bg-white/90 px-8 text-center shadow-[0_16px_40px_-20px_rgba(26,115,232,0.5)] backdrop-blur">
                    <Icon className="h-9 w-9 text-brand-600" />
                    <h3 className="mt-3 text-2xl font-extrabold text-ink">{step.title}</h3>
                    <p className="mt-2 text-sm leading-snug text-ink-soft">{step.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
