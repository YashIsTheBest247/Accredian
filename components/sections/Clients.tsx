import { Heading, Hl } from "@/components/ui/Heading";
import { clients } from "@/lib/data";

export function Clients() {
  return (
    <section id="clients" className="py-20 sm:py-24">
      <div className="container-page">
        <Heading
          title={<>Our Proven <Hl>Partnerships</Hl></>}
          subtitle={<>Successful Collaborations With the <Hl>Industry&apos;s Best</Hl></>}
        />

        <div className="mt-14 grid grid-cols-2 items-center gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
            >
              <span className="text-2xl font-extrabold tracking-tight text-slate-500">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
