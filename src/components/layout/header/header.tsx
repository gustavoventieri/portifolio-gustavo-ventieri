"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "ACTIVITY", href: "#activity" },
  { label: "DATA", href: "#data" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/50 bg-[#07101f] font-mono transition-all duration-300">
      <div className="container mx-auto flex  md:h-8 h-10 items-center justify-between  px-5">
        {/* Logo Estilo Terminal */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="md:text-md text-sm font-bold tracking-widest text-[#22d3ee]">
            {">"}_ <span className="text-[#22d3ee]">G. Ventieri</span>
          </span>
        </Link>

        {/* Desktop Navigation - Centralizada/Direita */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] font-medium tracking-[0.2em] text-zinc-500 hover:text-zinc-200 transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Status "Open to work" */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-[12px] tracking-widest text-[#22d3ee] lowercase">
              open_to_work
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
