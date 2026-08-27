"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";

export function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Alternar tema"
      style={{
        position: "fixed",
        top: 24,
        right: 24,
        background: "var(--card-bg)",
        border: "1px solid var(--border)",
        color: "var(--heading)",
      }}
      className="w-10 h-10 rounded-full flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
