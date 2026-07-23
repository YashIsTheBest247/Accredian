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

/* Wheel geometry (viewBox 200×200, centre 100,100) */
const SEG = 360 / edgeItems.length;
const R_OUT = 78;
const R_IN = 44;
const segColors = [
  "#2BA8E0",
  "#2C8FD9",
  "#2477D0",
  "#1F63C4",
  "#1B54B4",
  "#17408F",
  "#1D4FA8",
];

const rad = (deg: number) => (deg * Math.PI) / 180;

function WheelLabel({ item }: { item: (typeof edgeItems)[number] }) {
  return (
    <div>
      <h3 className="text-[0.72rem] font-bold leading-tight text-ink">{item.title}</h3>
      <p className="mt-0.5 text-[0.66rem] leading-snug text-ink-soft">{item.description}</p>
    </div>
  );
}

function segmentPath(i: number) {
  const a1 = rad(-90 + i * SEG);
  const a2 = rad(-90 + (i + 1) * SEG);
  const x1 = 100 + R_OUT * Math.cos(a1);
  const y1 = 100 + R_OUT * Math.sin(a1);
  const x2 = 100 + R_OUT * Math.cos(a2);
  const y2 = 100 + R_OUT * Math.sin(a2);
  const x3 = 100 + R_IN * Math.cos(a2);
  const y3 = 100 + R_IN * Math.sin(a2);
  const x4 = 100 + R_IN * Math.cos(a1);
  const y4 = 100 + R_IN * Math.sin(a1);
  return `M${x1} ${y1} A${R_OUT} ${R_OUT} 0 0 1 ${x2} ${y2} L${x3} ${y3} A${R_IN} ${R_IN} 0 0 0 ${x4} ${y4} Z`;
}

export function AccredianEdge() {
  return (
    <section id="edge" className="bg-surface py-14 sm:py-20">
      <div className="container-page">
        <Heading
          title={<>The <Hl>Accredian Edge</Hl></>}
          subtitle={<>Key Aspects of <Hl>Our Strategic Training</Hl></>}
        />

        {/* ---------- Mobile / tablet: "OUR USPS" wheel ---------- */}
        <div className="mx-auto mt-8 w-full max-w-[30rem] lg:hidden">
          <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-x-2">
            {/* Left labels: Flexible Delivery, Proven Impact, Diverse Offerings */}
            <div className="flex flex-col justify-around gap-5 py-1 text-right">
              {[6, 5, 4].map((idx) => (
                <WheelLabel key={edgeItems[idx].title} item={edgeItems[idx]} />
              ))}
            </div>

            {/* Wheel */}
            <div className="relative aspect-square w-[42vw] max-w-[15rem] self-center">
            <svg viewBox="0 0 200 200" className="h-full w-full">
              {edgeItems.map((item, i) => (
                <path key={item.title} d={segmentPath(i)} fill={segColors[i]} />
              ))}
              <circle cx="100" cy="100" r={R_IN - 3} fill="#F3F8FF" />
            </svg>

            {/* Icons on each segment */}
            {edgeItems.map((item, i) => {
              const mid = rad(-90 + i * SEG + SEG / 2);
              const rr = (R_OUT + R_IN) / 2;
              return (
                <span
                  key={item.title}
                  className="absolute -translate-x-1/2 -translate-y-1/2 text-white"
                  style={{
                    left: `${50 + (rr * Math.cos(mid)) / 2}%`,
                    top: `${50 + (rr * Math.sin(mid)) / 2}%`,
                  }}
                >
                  <item.icon className="h-[1.1rem] w-[1.1rem]" />
                </span>
              );
            })}

            {/* Centre label */}
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[1.05rem] font-extrabold leading-tight tracking-tight text-ink">
              OUR
              <br />
              USPS
            </span>
            </div>

            {/* Right labels: Tailored Solutions, Expert Guidance, Innovative Framework */}
            <div className="flex flex-col justify-around gap-5 py-1 text-left">
              {[0, 1, 2].map((idx) => (
                <WheelLabel key={edgeItems[idx].title} item={edgeItems[idx]} />
              ))}
            </div>
          </div>

          {/* Bottom label: Advanced Technology */}
          <div className="mx-auto mt-4 max-w-[17rem] text-center">
            <WheelLabel item={edgeItems[3]} />
          </div>
        </div>

        {/* ---------- Desktop: zigzag timeline ---------- */}
        <div className="relative mt-14 hidden lg:block">
          <div className="relative h-[26rem]">
            <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-line" />

            <div className="relative grid h-full grid-cols-7">
              {edgeItems.map((item, i) => {
                const up = i % 2 === 0;
                return (
                  <Reveal key={item.title} delay={i * 70}>
                    <div className="relative flex h-full items-center justify-center">
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

                      <span className="relative z-10 rounded-full bg-surface p-1.5 shadow-[0_10px_25px_-8px_rgba(16,24,40,0.35)] ring-1 ring-line">
                        <span
                          className={`grid h-[4.5rem] w-[4.5rem] place-items-center rounded-full bg-gradient-to-br text-white ${shades[i]}`}
                        >
                          <item.icon className="h-8 w-8" />
                        </span>
                      </span>

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
      </div>
    </section>
  );
}
