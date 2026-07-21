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

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-12 gap-y-10 sm:gap-x-16 lg:gap-x-20">
          {clients.map((client) => (
            <ClientLogo key={client.slug} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
