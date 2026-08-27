/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { SearchX } from "lucide-react";
import { ThemeProvider } from "@/providers/theme-provider";
import { ThemeToggleButton } from "@/components/ui/theme-toggle-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="pt" className={inter.className} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <ThemeToggleButton />

          <main className="min-h-screen flex items-center justify-center px-6 bg-(--bg)">
            <div className="w-full max-w-110 rounded-2xl p-12 text-center border border-(--border) bg-(--card-bg) shadow-[0_30px_60px_-20px_rgba(0,0,0,0.15)]">
              {/* Ícone de destaque */}
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-(--accent-dim) text-(--accent)">
                <SearchX size={28} />
              </div>

              <p className="mono text-xs font-semibold tracking-widest mb-3 text-(--muted)">
                ERRO 404
              </p>

              <h1 className="text-[28px] font-semibold mb-3 leading-snug text-(--heading)">
                Página não encontrada
              </h1>

              <p className="text-sm mb-9 leading-relaxed text-(--fg)">
                O endereço que você acessou não existe ou foi movido para outro
                lugar.
              </p>  

              <button className="btn-primary">
                <a href="/">Voltar para o início</a>
              </button>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
