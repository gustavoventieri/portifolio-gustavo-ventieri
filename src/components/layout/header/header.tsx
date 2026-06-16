"use client";
import { navLinks } from "@/constraints/header-content";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-ground/80 font-mono transition-all duration-300">
      <div className="container mx-auto flex  md:h-9 h-10 items-center justify-between  px-5">
        {/* Logo Estilo Terminal */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="md:text-md text-sm font-bold tracking-widest text-accent">
            {">"}_ <span className="text-accent">G. Ventieri</span>
          </span>
        </Link>

        {/* Desktop Navigation - Centralizada/Direita */}
        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[10px] font-medium tracking-[0.2em] text-zinc-500 hover:text-zinc-200 transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Status "Open to work" */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-[12px] tracking-widest text-accent lowercase">
              open_to_work
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
