import Image from "next/image";
import { EnquireButton } from "@/components/enquiry/EnquireButton";
import { IconCheckCircle, IconArrowRight, IconStar } from "@/components/icons";
import { heroPoints } from "@/lib/data";

export function Hero() {
  return (
    <section id="home" className="px-3 pt-[4.5rem] sm:px-6 lg:pt-24">
      <div className="mx-auto max-w-[88rem]">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-50 via-brand-50 to-surface px-5 py-8 sm:rounded-3xl sm:px-10 sm:py-10 lg:px-14 lg:py-12">
          <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />

          {/* Mobile: image first, then copy. Desktop: copy left, image right. */}
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            {/* Visual */}
            <div className="relative order-1 lg:order-2">
              <div className="relative mx-auto aspect-square w-full max-w-[19rem] overflow-hidden rounded-2xl sm:max-w-md sm:rounded-3xl lg:mx-0 lg:aspect-auto lg:h-[24rem] lg:max-w-none">
                <Image
                  src="/images/hero-people.jpg"
                  alt="Two professionals collaborating with a laptop"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute left-1 top-6 hidden rounded-2xl bg-surface px-4 py-3 shadow-lg ring-1 ring-line lg:block">
                <p className="text-[0.7rem] font-medium text-ink-soft">Avg. rating</p>
                <p className="flex items-center gap-1 text-base font-bold text-ink">
                  4.8 <IconStar className="h-4 w-4 text-accent-500" />
                </p>
              </div>
              <div className="absolute -bottom-3 right-3 hidden rounded-2xl bg-surface px-4 py-3 shadow-lg ring-1 ring-line lg:block">
                <p className="text-base font-bold text-brand-600">10K+</p>
                <p className="text-[0.7rem] font-medium text-ink-soft">Professionals trained</p>
              </div>
            </div>

            {/* Copy */}
            <div className="relative order-2 text-center lg:order-1 lg:max-w-xl lg:text-left">
              <h1 className="text-[2.1rem] font-extrabold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]">
                Next-Gen <span className="text-brand-600">Expertise</span> For Your{" "}
                <span className="text-brand-600">Enterprise</span>
              </h1>
              <p className="mt-5 text-lg font-medium text-ink-soft sm:text-xl">
                Cultivate high-performance teams through expert learning.
              </p>

              {/* 2-col on mobile, inline row on desktop */}
              <ul className="mt-7 grid grid-cols-2 gap-x-4 gap-y-4 lg:flex lg:flex-wrap lg:gap-x-7 lg:gap-y-3">
                {heroPoints.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-left text-[0.95rem] font-semibold text-ink lg:text-base"
                  >
                    <IconCheckCircle className="h-5 w-5 shrink-0 text-green-500" />
                    {p}
                  </li>
                ))}
              </ul>

              <EnquireButton size="lg" className="mt-8 w-full lg:w-auto">
                Enquire Now
                <IconArrowRight className="hidden h-5 w-5 lg:block" />
              </EnquireButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
