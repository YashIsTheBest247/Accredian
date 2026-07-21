"use client";

import { useEffect, useState } from "react";
import { IconSun, IconMoon } from "@/components/icons";

type Theme = "light" | "dark";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = (document.documentElement.getAttribute("data-theme") as Theme) || "light";
    setTheme(current);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`grid h-10 w-10 place-items-center rounded-lg text-ink transition-colors hover:bg-brand-50 ${className}`}
    >
      {/* Render icon only after mount to avoid hydration mismatch */}
      {mounted && (theme === "dark" ? <IconSun className="h-5 w-5" /> : <IconMoon className="h-5 w-5" />)}
    </button>
  );
}
