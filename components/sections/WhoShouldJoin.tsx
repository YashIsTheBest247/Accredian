import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { audiences } from "@/lib/data";

export function WhoShouldJoin() {
  return (
    <section className="py-10 sm:py-16 lg:py-20">
      {/* Mobile: full-bleed blue band. Desktop: rounded card inside the container. */}
      <div className="lg:container-page">
        <div className="relative overflow-hidden bg-brand-600 px-5 py-12 text-white sm:px-8 lg:rounded-3xl lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            {/* Heading (+ photo on desktop) */}
            <div>
              <p className="text-lg font-medium text-blue-100">Who Should Join?</p>
              <h2 className="mt-2 text-[1.85rem] font-extrabold leading-tight sm:text-4xl">
                Strategic Skill Enhancement
              </h2>
              <p className="mt-4 hidden max-w-sm text-blue-100 lg:block">
                Programs designed to elevate every professional — whatever their role,
                function, or career stage.
              </p>
              <div className="relative mt-8 hidden aspect-[5/3] w-full max-w-sm overflow-hidden rounded-2xl ring-1 ring-white/20 lg:block">
                <Image
                  src="/images/join-people.jpg"
                  alt="Professionals collaborating on a laptop"
                  fill
                  sizes="(max-width: 1024px) 0px, 30vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Audiences — icon left on mobile, stacked on desktop */}
            <div className="mt-4 grid gap-8 lg:mt-0 lg:grid-cols-2 lg:gap-x-8">
              {audiences.map((a, i) => (
                <Reveal key={a.title} delay={i * 70}>
                  <div className="flex items-start gap-4 lg:flex-col lg:gap-3">
                    <a.icon className="h-9 w-9 shrink-0 text-white" />
                    <div>
                      <h3 className="text-lg font-bold">{a.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-blue-100 lg:mt-0">
                        {a.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
