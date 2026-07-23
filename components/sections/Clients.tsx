import { Heading, Hl } from "@/components/ui/Heading";
import { ClientLogo } from "@/components/ClientLogo";
import { clients } from "@/lib/data";

export function Clients() {
  return (
    <section id="clients" className="py-14 sm:py-20">
      <div className="container-page">
        <Heading
          title={<>Our Proven <Hl>Partnerships</Hl></>}
          subtitle={<>Successful Collaborations With the <Hl>Industry&apos;s Best</Hl></>}
        />
      </div>

      {/* Mobile: horizontal scroll strip. Desktop: centered wrap row. */}
      <div className="mt-12 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:overflow-visible">
        <div className="flex w-max items-center gap-12 px-5 sm:gap-16 lg:mx-auto lg:w-full lg:max-w-5xl lg:flex-wrap lg:justify-center lg:gap-x-20 lg:px-0">
          {clients.map((client) => (
            <div key={client.slug} className="flex shrink-0 items-center justify-center">
              <ClientLogo client={client} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
