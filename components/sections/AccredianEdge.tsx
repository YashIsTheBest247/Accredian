import { Heading, Hl } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { edgeItems } from "@/lib/data";

const shades = [
  "from-sky-400 to-sky-500",
  "from-brand-500 to-brand-700",
  "from-brand-600 to-brand-800",
  "from-brand-700 to-brand-900",
  "from-brand-500 to-brand-700",
  "from-brand-700 to-brand-900",
  "from-brand-600 to-brand-800",
];

export function AccredianEdge() {
  return (
    <section id="edge" className="bg-white py-20 sm:py-24">
      <div className="container-page">
        <Heading
          title={<>The <Hl>Accredian Edge</Hl></>}
          subtitle={<>Key Aspects of <Hl>Our Strategic Training</Hl></>}
        />

        {/* Desktop: zigzag timeline on a shared baseline */}
        <div className="relative mt-20 hidden lg:block">
          <div className="relative h-[26rem]">
            {/* dashed baseline */}
            <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-slate-300" />

            <div className="relative grid h-full grid-cols-7">
              {edgeItems.map((item, i) => {
                const up = i % 2 === 0;
                return (
                  <Reveal key={item.title} delay={i * 70}>
                    <div className="relative flex h-full items-center justify-center">
                      {/* text */}
                      <div
                        className={`absolute left-1/2 w-44 -translate-x-1/2 text-center ${
                          up ? "bottom-1/2 mb-[104px]" : "top-1/2 mt-[104px]"
                        }`}
                      >
                        <h3 className="text-sm font-bold text-ink">{item.title}</h3>
                        <p className="mt-1 text-xs leading-snug text-ink-soft">
                          {item.description}
                        </p>
                      </div>

                      {/* connector line + dot */}
                      <span
                        className={`absolute left-1/2 h-11 w-px -translate-x-1/2 bg-brand-400 ${
                          up ? "bottom-1/2 mb-[44px]" : "top-1/2 mt-[44px]"
                        }`}
                      />
                      <span
                        className={`absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-brand-500 ${
                          up ? "bottom-1/2 mb-[94px]" : "top-1/2 mt-[94px]"
                        }`}
                      />

                      {/* double-ring badge */}
                      <span className="relative z-10 rounded-full bg-white p-1.5 shadow-[0_10px_25px_-8px_rgba(16,24,40,0.35)] ring-1 ring-slate-100">
                        <span
                          className={`grid h-[4.5rem] w-[4.5rem] place-items-center rounded-full bg-gradient-to-br text-white ${shades[i]}`}
                        >
                          <item.icon className="h-8 w-8" />
                        </span>
                      </span>

                      {/* chevron connector */}
                      {i < edgeItems.length - 1 && (
                        <span className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-slate-300">
                          ›
                        </span>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="mt-12 flex flex-col gap-5 lg:hidden">
          {edgeItems.map((item, i) => (
            <div key={item.title} className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
              <span className="rounded-full bg-white p-1 shadow-sm">
                <span className={`grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br text-white ${shades[i]}`}>
                  <item.icon className="h-6 w-6" />
                </span>
              </span>
              <div>
                <h3 className="font-bold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
