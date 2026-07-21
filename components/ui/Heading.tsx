import type { ReactNode } from "react";

type HeadingProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
  light?: boolean;
};

export function Heading({
  title,
  subtitle,
  align = "center",
  className = "",
  light = false,
}: HeadingProps) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  return (
    <div className={`flex max-w-3xl flex-col gap-3 ${alignment} ${className}`}>
      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.6rem] lg:leading-[1.12] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? "text-brand-100" : "text-ink-soft"}`}>{subtitle}</p>
      )}
    </div>
  );
}

/** Blue accent span for two-tone headings. */
export function Hl({ children }: { children: ReactNode }) {
  return <span className="text-brand-600">{children}</span>;
}
