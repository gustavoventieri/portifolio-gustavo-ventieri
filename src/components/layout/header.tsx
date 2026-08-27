"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { navItems, themeLabels } from "@/data/navbar";
import { useMounted } from "@/hooks/use-mounted";
import { useActiveSection } from "@/hooks/use-activation-section";
import { useLanguage } from "@/contexts/language-contexts";

export function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const { language, setLanguage } = useLanguage();

  const items = navItems[language];
  const labels = themeLabels[language];
  const isDark = mounted && resolvedTheme === "dark";

  const activeId = useActiveSection(
    items.map((item) => item.href.replace("#", "")),
  );

  return (
    // Fundo com opacidade via arbitrary value, já que precisa de rgba dinâmico (não dá pra fazer só com CSS var)
    <header
      className={`sticky top-0 z-50 border-b border-(--border) backdrop-blur-md ${
        isDark ? "bg-[rgba(22,23,29,0.92)]" : "bg-[rgba(255,255,255,0.92)]"
      }`}
    >
      <div className="max-w-400 mx-auto flex items-center h-14 gap-6 px-4 md:px-6">
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
                {/* Barrinha que "desenha" embaixo do item ativo, largura animada via classe condicional */}
                <span
                  className={`absolute left-0 -bottom-px h-0.5 bg-(--accent) rounded-full transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden md:block w-px h-5 bg-(--border)" />

        {/* Toggle de idioma — segmented control com fundo deslizante */}
        <button
          onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
          title="Switch language"
          className="relative flex items-center shrink-0 rounded-md p-0.75 bg-(--code-bg) hover:border-gray-400 border border-(--border)"
        >
          {/* Fundo cinza que desliza entre PT/EN */}
          <span
            className={`absolute top-0.75 h-[calc(100%-6px)] w-[calc(50%-2px)] rounded bg-[#808080] opacity-[0.12] transition-all duration-250 ease-out ${
              language === "pt" ? "left-0.75" : "left-[calc(50%-1px)]"
            }`}
          />

          <span
            className={`mono relative z-10 px-2.5 py-1 text-[0.72rem] font-semibold tracking-[0.04em] transition-colors duration-200 ${
              language === "pt"
                ? "text-(--text-h) opacity-100"
                : "text-(--text) opacity-50"
            }`}
          >
            PT
          </span>
          <span
            className={`mono relative z-10 px-2.5 py-1 text-[0.72rem] font-semibold tracking-[0.04em] transition-colors duration-200 ${
              language === "en"
                ? "text-(--text-h) opacity-100"
                : "text-(--text) opacity-50"
            }`}
          >
            EN
          </span>
        </button>

        {/* Toggle de tema */}
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          title="Toggle theme"
          className="flex items-center gap-1.5 shrink-0 rounded-md px-2.5 py-1.5 text-(--text-h) bg-(--code-bg) border border-(--border) hover:border-gray-400 transition-colors"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
          <span className="hidden sm:block text-xs">
            {isDark ? labels.light : labels.dark}
          </span>
        </button>
      </div>
    </header>
  );
}
