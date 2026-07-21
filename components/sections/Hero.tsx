import Image from "next/image";
import { EnquireButton } from "@/components/enquiry/EnquireButton";
import { IconCheckCircle, IconArrowRight, IconStar } from "@/components/icons";
import { heroPoints } from "@/lib/data";

export function Hero() {
  return (
    <section id="home" className="px-4 pt-20 sm:px-6 lg:pt-24">
      <div className="mx-auto max-w-[88rem]">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-50 via-brand-50 to-surface px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
          <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            {/* Copy */}
            <div className="relative max-w-xl">
              <h1 className="text-[2rem] font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.35rem]">
                Next-Gen <span className="text-brand-600">Expertise</span>
                <br className="hidden sm:block" /> For Your{" "}
                <span className="text-brand-600">Enterprise</span>
              </h1>
              <p className="mt-6 text-xl font-medium text-ink-soft">
                Cultivate high-performance teams through expert learning.
              </p>

              <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
                {heroPoints.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-base font-semibold text-ink">
                    <IconCheckCircle className="h-5 w-5 text-green-500" />
                    {p}
                  </li>
                ))}
              </ul>

              <EnquireButton size="lg" className="mt-9">
                Enquire Now
                <IconArrowRight className="h-5 w-5" />
              </EnquireButton>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl sm:aspect-[5/4] sm:max-w-md lg:mx-0 lg:aspect-auto lg:h-[24rem] lg:max-w-none">
                <Image
                  src="/images/hero-people.jpg"
                  alt="Two professionals collaborating with a laptop"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute left-1 top-6 hidden rounded-2xl bg-surface px-4 py-3 shadow-lg ring-1 ring-line sm:block">
                <p className="text-[0.7rem] font-medium text-ink-soft">Avg. rating</p>
                <p className="flex items-center gap-1 text-base font-bold text-ink">
                  4.8 <IconStar className="h-4 w-4 text-accent-500" />
                </p>
              </div>
              <div className="absolute -bottom-3 right-3 hidden rounded-2xl bg-surface px-4 py-3 shadow-lg ring-1 ring-line sm:block">
                <p className="text-base font-bold text-brand-600">10K+</p>
                <p className="text-[0.7rem] font-medium text-ink-soft">Professionals trained</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
