"use client";
import { navLinks } from "@/constants/header-content";
import { useLanguage } from "@/contexts/language-contexts";
import { Terminal } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  const { language } = useLanguage();
  const languageNavLinks = navLinks[language];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-background font-mono transition-all duration-300">
      <div className=" mx-auto flex   h-15 items-center justify-between  px-6 lg:px-28 md:px-20 ">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center gap-2">
            <Terminal className="text-accent w-5 h-5" />
            <span className=" flex xl:hidden md:text-md  text-[12px] font-bold tracking-[0.2em] text-accent">
              G. Ventieri
            </span>

            <span className="xl:flex hidden xl:text-[16px] font-bold tracking-widest text-accent">
              Gustavo Ventieri
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-4">
          {languageNavLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] font-medium tracking-[0.2em] text-zinc-500 hover:text-zinc-200 transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-[12px] tracking-widest text-accent lowercase">
              open to work
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
