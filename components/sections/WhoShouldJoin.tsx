import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { audiences } from "@/lib/data";

export function WhoShouldJoin() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-brand-600 px-7 py-12 text-white sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            {/* Left: heading + photo */}
            <div>
              <p className="text-lg font-medium text-brand-100">Who Should Join?</p>
              <h2 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">
                Strategic Skill Enhancement
              </h2>
              <p className="mt-4 max-w-sm text-brand-100">
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

            {/* Right: audiences */}
            <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {audiences.map((a, i) => (
                <Reveal key={a.title} delay={i * 70}>
                  <div className="flex flex-col gap-3">
                    <a.icon className="h-9 w-9 text-white" />
                    <h3 className="text-lg font-bold">{a.title}</h3>
                    <p className="text-sm leading-relaxed text-brand-100">{a.description}</p>
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
