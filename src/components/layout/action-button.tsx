"use client"; // Necessário para usar hooks como o useState

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/constants/header-content";
import { useLanguage } from "@/contexts/language-contexts";

export const ActionButton = () => {
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const languageNavLinks = navLinks[language];

  return (
    <div className="lg:hidden fixed bottom-12 right-6 z-50">
      <div className="relative flex flex-col items-end">
        {isMenuOpen && (
          <div className="flex flex-col items-start gap-3  bg-paper border border-paper-border text-gray-400  shadow-2xl rounded-lg p-3 mb-4 transition-all duration-300 ease-in-out">
            {languageNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-sm  hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex gap-3">
                  <link.icon
                    size={16}
                    className="text-muted-foreground transition-colors mt-0.5"
                  />
                  {link.label}
                </div>
              </a>
            ))}
          </div>
        )}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="pointer-events-auto bg-paper border border-paper-border text-gray-400
                     rounded-lg p-3 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          <div
            className={`transition-transform duration-300 ${isMenuOpen ? "rotate-180" : "rotate-0"}`}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </div>
        </button>
      </div>
    </div>
  );
};
