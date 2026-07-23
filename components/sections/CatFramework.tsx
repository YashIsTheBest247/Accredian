import { Heading, Hl } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { IconBulb, IconGear, IconChip } from "@/components/icons";
import { catSteps } from "@/lib/data";

const icons = [IconBulb, IconChip, IconGear];

export function CatFramework() {
  return (
    <section id="cat" className="bg-gradient-to-b from-brand-50/70 to-surface py-14 sm:py-20">
      <div className="container-page">
        <Heading
          title={<>The <Hl>CAT Framework</Hl></>}
          subtitle={<>Our Proven Approach to <Hl>Learning Excellence</Hl></>}
        />

        <div className="relative mx-auto mt-10 max-w-5xl sm:mt-16">
          {/* Weaving S-curve — shown on all sizes */}
          <svg
            className="absolute inset-0 h-full w-full text-brand-500"
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
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="relative grid grid-cols-3 gap-1 sm:gap-14">
            {catSteps.map((step, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={step.title} delay={i * 120}>
                  <div className="mx-auto flex aspect-square w-full max-w-[15rem] flex-col items-center justify-center rounded-full border-2 border-brand-400 bg-surface/90 px-2 text-center shadow-[0_16px_40px_-20px_rgba(26,115,232,0.5)] backdrop-blur sm:px-8">
                    <Icon className="h-5 w-5 text-brand-600 sm:h-9 sm:w-9" />
                    <h3 className="mt-1.5 text-[0.8rem] font-extrabold text-ink sm:mt-3 sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-[0.55rem] leading-snug text-ink-soft sm:mt-2 sm:text-sm">
                      {step.description}
                    </p>
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
