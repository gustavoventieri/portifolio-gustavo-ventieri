"use client";

import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  TerminalSquare,
  User,
  Briefcase,
  FolderGit2,
  GraduationCap,
  Award,
  Mail,
} from "lucide-react";
import { navItems } from "@/data/navbar";
import { useLanguage } from "@/contexts/language-contexts";
import { useActiveSection } from "@/hooks/use-activation-section";

// Ícone por seção, mapeado pelo href. Se adicionar/remover itens em navItems,
// atualize esse mapa junto.
const NAV_ICONS: Record<string, LucideIcon> = {
  "#hero": TerminalSquare,
  "#about": User,
  "#experience": Briefcase,
  "#projects": FolderGit2,
  "#academic": GraduationCap,
  "#certifications": Award,
  "#contact": Mail,
};

export function MobileNav() {
  const { language } = useLanguage();
  const items = navItems[language];
  const [open, setOpen] = useState(false);

  const activeId = useActiveSection(
    items.map((item) => item.href.replace("#", "")),
  );

  // Fecha com Esc e trava o scroll do body enquanto o menu está aberto
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      {/* Backdrop: fecha o menu ao tocar fora dele */}
      <button
        aria-hidden="true"
        tabIndex={-1}
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <div className="fixed bottom-6 right-6 z-50">
        {/* Caixinha com os itens do header, sobe/some junto com o botão */}
        <nav
          className={`absolute bottom-full right-0 mb-3 w-60 origin-bottom-right rounded-lg border border-(--border) bg-(--card-bg) shadow-xl overflow-hidden transition-all duration-300 ease-out ${
            open
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-3 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col p-1.5">
            {items.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeId === id;
              const Icon = NAV_ICONS[item.href];

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`relative flex items-center gap-3 pl-4 pr-3 py-2.5 rounded-md text-sm transition-colors ${
                      isActive
                        ? "text-(--accent) font-medium bg-(--accent-dim)"
                        : "text-(--text) hover:text-(--accent)"
                    }`}
                  >
                    {/* Barrinha lateral no item ativo, mesma linguagem do underline do header */}
                    <span
                      className={`absolute left-0 top-1/2 -translate-y-1/2 w-0.5 rounded-full bg-(--accent) transition-all duration-300 ${
                        isActive ? "h-4" : "h-0"
                      }`}
                    />
                    {Icon && <Icon size={16} className="shrink-0" />}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Botão sanduíche -> X, mesmo estilo dos botões do header */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex items-center justify-center w-11 h-11 bg-(--card-bg)  rounded-lg text-(--text-h)  border border-(--border) shadow-lg hover:border-gray-400 transition-colors active:scale-95"
        >
          <span
            className={`relative w-4 h-4 flex flex-col justify-between transition-transform duration-300 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          >
            <span
              className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center ${
                open ? "rotate-45 translate-y-1.75" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center ${
                open ? "-rotate-45 -translate-y-1.75" : ""
              }`}
            />
          </span>
        </button>
      </div>
    </div>
  );
}
