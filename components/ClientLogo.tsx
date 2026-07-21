"use client";

import { useEffect, useState, type CSSProperties } from "react";
import type { Client } from "@/lib/data";

/**
 * Renders a partner logo. It defaults to a clean, theme-aware wordmark and
 * only *upgrades* to a real image once that image successfully preloads —
 * so a missing file never shows a broken-image icon.
 *
 * To use real logos: drop files into public/images/logos/ named by slug
 * (e.g. ibm.svg, reliance.png). No code changes required.
 */
export function ClientLogo({ client }: { client: Client }) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    const exts = ["svg", "png"];
    const tryLoad = (i: number) => {
      if (i >= exts.length || !active) return;
      const url = `/images/logos/${client.slug}.${exts[i]}`;
      const img = new window.Image();
      img.onload = () => {
        if (active) setSrc(url);
      };
      img.onerror = () => tryLoad(i + 1);
      img.src = url;
    };
    tryLoad(0);
    return () => {
      active = false;
    };
  }, [client.slug]);

  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={`${client.name} logo`}
        className="h-10 w-auto max-w-[10rem] object-contain grayscale-0 sm:h-12"
      />
    );
  }

  const vars = { "--lc": client.color, "--lcd": client.darkColor } as CSSProperties;

  return (
    <span className="flex flex-col items-center leading-none" style={vars} title={client.name}>
      <span
        className={`client-wordmark text-2xl font-extrabold tracking-tight sm:text-3xl ${
          client.serif ? "font-serif" : ""
        }`}
      >
        {client.name}
      </span>
      {client.sub && (
        <span className="mt-1 text-[0.6rem] font-medium tracking-wide text-ink-soft">
          {client.sub}
        </span>
      )}
    </span>
  );
}
