type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span className="text-2xl font-extrabold lowercase tracking-tight text-brand-600">
        accredian
      </span>
      <span className="mt-0.5 text-[0.62rem] font-medium tracking-[0.14em] text-slate-500">
        credentials that matter
      </span>
    </span>
  );
}
