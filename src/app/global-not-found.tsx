"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { SearchX } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main
      style={{ background: "var(--bg)" }}
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div
        style={{
          background: "var(--card-bg)",
          border: "1px solid var(--border)",
          boxShadow: "0 20px 60px -20px rgba(0,0,0,0.15)",
        }}
        className="w-full max-w-[440px] rounded-2xl p-12 text-center"
      >
        <div
          style={{
            background: "var(--accent-dim)",
            color: "var(--accent)",
          }}
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <SearchX size={28} />
        </div>

        <p
          className="mono text-xs font-semibold tracking-widest mb-3"
          style={{ color: "var(--muted)" }}
        >
          ERRO 404
        </p>

        <h1
          className="text-[28px] font-semibold mb-3 leading-snug"
          style={{ color: "var(--heading)" }}
        >
          Página não encontrada
        </h1>

        <p
          className="text-sm mb-9 leading-relaxed"
          style={{ color: "var(--fg)" }}
        >
          O endereço que você acessou não existe ou foi movido para outro lugar.
        </p>

        <Link href="/" className="btn-primary">
          Voltar para o início
        </Link>
      </div>
    </main>
  );
}
