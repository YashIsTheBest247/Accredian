import { EnquireButton } from "@/components/enquiry/EnquireButton";
import { IconHeadset, IconChevronRight } from "@/components/icons";

export function CtaBand() {
  return (
    <section className="pb-16 pt-4">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-brand-600 px-7 py-10 text-white sm:px-12 sm:py-12">
          <div className="pointer-events-none absolute -right-10 bottom-[-8rem] h-80 w-80 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -right-24 bottom-[-14rem] h-[28rem] w-[28rem] rounded-full bg-white/5" />
          <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-5">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white text-brand-600">
                <IconHeadset className="h-8 w-8" />
              </span>
              <div>
                <h2 className="text-2xl font-extrabold leading-snug sm:text-3xl">
                  Want to Learn More About Our Training Solutions?
                </h2>
                <p className="mt-2 text-brand-100">Get Expert Guidance for Your Team&apos;s Success!</p>
              </div>
            </div>
            <EnquireButton variant="secondary" size="lg" className="shrink-0">
              Contact Us
              <IconChevronRight className="h-4 w-4" />
            </EnquireButton>
          </div>
        </div>
      </div>
    </section>
  );
}
