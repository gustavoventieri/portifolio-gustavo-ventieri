"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { navItems, themeLabels, type Locale } from "@/data/nav-items";
import { useMounted } from "@/hooks/use-mounted";
import { useActiveSection } from "@/hooks/use-activation-section";

export function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const [lang, setLang] = useState<Locale>("pt");

  const items = navItems[lang];
  const labels = themeLabels[lang];
  const isDark = mounted && resolvedTheme === "dark";

  const activeId = useActiveSection(
    items.map((item) => item.href.replace("#", "")),
  );

  return (
    <header
      style={{
        background: isDark ? "rgba(22,23,29,0.92)" : "rgba(255,255,255,0.92)",
      }}
      className="sticky top-0 z-50 border-b border-(--border) backdrop-blur-md"
    >
      <div className="max-w-300 mx-auto flex items-center h-14 gap-6 px-4 md:px-6">
        <a href="#hero" className="font-mono mt-2 text-sm text-(--accent)">
          gustavo@archlinux
        </a>

        <div className="flex-1" />

        {/* Nav — direita (desktop) */}
        <nav className="hidden md:flex items-center gap-6">
          {items.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeId === id;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-sm py-1 transition-colors ${
                  isActive
                    ? "text-(--accent) font-medium"
                    : "text-(--text) hover:text-(--accent)"
                }`}
              >
                {item.label}
                <span
                  className="absolute left-0 -bottom-px h-0.5 bg-(--accent) rounded-full transition-all duration-300"
                  style={{
                    width: isActive ? "100%" : "0%",
                  }}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden md:block w-px h-5 bg-(--border)" />

        <button
          onClick={() => setLang(lang === "pt" ? "en" : "pt")}
          title="Switch language"
          style={{
            position: "relative",
            background: "var(--code-bg)",
            border: "1px solid var(--border)",
            borderRadius: 6,
            padding: 3,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          {/* Fundo que desliza */}
          <span
            style={{
              position: "absolute",
              top: 3,
              left: lang === "pt" ? 3 : "calc(50% - 1px)",
              width: "calc(50% - 2px)",
              height: "calc(100% - 6px)",
              background: "#  ",
              opacity: 0.12,
              borderRadius: 4,
              transition: "left 0.25s ease",
            }}
          />

          <span
            className="mono"
            style={{
              position: "relative",
              zIndex: 1,
              padding: "4px 10px",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              color: lang === "pt" ? "var(--text-h)" : "var(--text)",
              opacity: lang === "pt" ? 1 : 0.5,
              transition: "color 0.2s, opacity 0.2s",
            }}
          >
            PT
          </span>
          <span
            className="mono"
            style={{
              position: "relative",
              zIndex: 1,
              padding: "4px 10px",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              color: lang === "en" ? "var(--text-h)" : "var(--text)",
              opacity: lang === "en" ? 1 : 0.5,
              transition: "color 0.2s, opacity 0.2s",
            }}
          >
            EN
          </span>
        </button>

        {/* Toggle de tema */}
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          style={{
            background: "var(--code-bg)",
            border: "1px solid var(--border)",
            borderRadius: 6,
            padding: "6px 10px",
            color: "var(--text-h)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
            transition: "border-color 0.2s",
            flexShrink: 0,
          }}
          title="Toggle theme"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
          <span className="text-xs hidden sm:block">
            {isDark ? labels.light : labels.dark}
          </span>
        </button>
      </div>
    </header>
  );
}
