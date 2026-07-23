import { Heading, Hl } from "@/components/ui/Heading";
import { ClientLogo } from "@/components/ClientLogo";
import { clients } from "@/lib/data";

export function Clients() {
  // Duplicated once so the -50% marquee loop is seamless.
  const loop = [...clients, ...clients];

  return (
    <section id="clients" className="py-14 sm:py-20">
      <div className="container-page">
        <Heading
          title={<>Our Proven <Hl>Partnerships</Hl></>}
          subtitle={<>Successful Collaborations With the <Hl>Industry&apos;s Best</Hl></>}
        />
      </div>

      {/* Continuous right-to-left marquee */}
      <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-14 sm:gap-20">
          {loop.map((client, i) => (
            <div
              key={`${client.slug}-${i}`}
              className="flex shrink-0 items-center justify-center"
              aria-hidden={i >= clients.length}
            >
              <ClientLogo client={client} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
