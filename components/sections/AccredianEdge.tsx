import type { CSSProperties } from "react";
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

/* ---------- Wheel geometry (viewBox 200×200, centre 100,100) ---------- */
const SEG = 360 / edgeItems.length;
const R_OUT = 78;
const R_IN = 39; // ~0.5 ratio → matches the reference ring thickness
const segColors = [
  "#29ABE2",
  "#1F8FE0",
  "#1E7BDC",
  "#1B63CE",
  "#2059C4",
  "#17408F",
  "#1C4FA8",
];

const rad = (deg: number) => (deg * Math.PI) / 180;

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

/**
 * Label placement around the wheel, indexed to match `edgeItems`.
 * All values stay inside 0–100% of the container, so nothing can overflow.
 * Wheel is 46% wide (spans 27%–73%); corner labels sit above/below the circle.
 */
const labelPos: { style: CSSProperties; align: string }[] = [
  { style: { left: "60%", top: "1%", width: "36%" }, align: "text-left" }, // Tailored Solutions
  { style: { left: "74%", top: "42%", width: "25%", transform: "translateY(-50%)" }, align: "text-left" }, // Expert Guidance
  { style: { left: "64%", top: "65%", width: "34%" }, align: "text-left" }, // Innovative Framework
  { style: { left: "50%", top: "87%", width: "58%", transform: "translateX(-50%)" }, align: "text-center" }, // Advanced Technology
  { style: { right: "64%", top: "65%", width: "34%" }, align: "text-right" }, // Diverse Offerings
  { style: { right: "74%", top: "42%", width: "25%", transform: "translateY(-50%)" }, align: "text-right" }, // Proven Impact
  { style: { right: "60%", top: "1%", width: "36%" }, align: "text-right" }, // Flexible Delivery
];

export function AccredianEdge() {
  return (
    <section id="edge" className="bg-surface py-14 sm:py-20">
      <div className="container-page">
        <Heading
          title={<>The <Hl>Accredian Edge</Hl></>}
          subtitle={<>Key Aspects of <Hl>Our Strategic Training</Hl></>}
        />

        {/* ---------- Mobile / tablet: "OUR USPS" wheel ---------- */}
        <div className="relative mx-auto mt-8 aspect-[1/1.28] w-full max-w-[27rem] lg:hidden">
          {/* Wheel — centred horizontally, sitting in the upper-middle */}
          <div className="absolute left-1/2 top-[42%] aspect-square w-[46%] -translate-x-1/2 -translate-y-1/2">
            <svg viewBox="0 0 200 200" className="h-full w-full">
              {edgeItems.map((item, i) => (
                <path key={item.title} d={segmentPath(i)} fill={segColors[i]} />
              ))}
              <circle cx="100" cy="100" r={R_IN - 2} fill="#F1F7FF" />
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
                  <item.icon className="h-[1.15rem] w-[1.15rem]" />
                </span>
              );
            })}

            {/* Centre label */}
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[1.15rem] font-extrabold leading-[1.1] tracking-tight text-ink">
              OUR
              <br />
              USPS
            </span>
          </div>

          {/* Labels around the wheel */}
          {edgeItems.map((item, i) => (
            <div
              key={item.title}
              style={labelPos[i].style}
              className={`absolute ${labelPos[i].align}`}
            >
              <h3 className="text-[0.73rem] font-bold leading-tight text-ink">{item.title}</h3>
              <p className="mt-0.5 text-[0.66rem] leading-snug text-ink-soft">
                {item.description}
              </p>
            </div>
          ))}
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
