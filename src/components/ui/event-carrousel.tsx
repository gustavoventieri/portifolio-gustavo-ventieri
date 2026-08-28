"use client";

import { eventeData } from "@/data/academic-experience";
import { useState } from "react";
import Image from "next/image";

export function EventCarousel() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const n = eventeData.length;

  const prev = () => setActive((a) => (a - 1 + n) % n);
  const next = () => setActive((a) => (a + 1) % n);

  const featured = eventeData[active % n];
  const thumb1 = eventeData[(active + 1) % n];
  const thumb2 = eventeData[(active + 2) % n];

  const overlayClass = (visible: boolean) =>
    `absolute inset-0 flex flex-col justify-end px-4 py-3.5 rounded-[inherit] transition-opacity duration-[250ms] ease-in-out ${
      visible ? "opacity-100" : "opacity-0"
    }`;

  const overlayGradient = {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)",
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Main row: featured + thumbnails */}
      <div className="flex gap-2.5 items-stretch">
        {/* Featured image */}
        <div
          className="basis-[62%] grow-0 shrink-0 relative rounded-[10px] overflow-hidden bg-[#1a1b24] cursor-pointer aspect-4/3"
          onMouseEnter={() => setHovered(0)}
          onMouseLeave={() => setHovered(null)}
        >
          <Image
            src={featured.url}
            alt={featured.title}
            fill
            sizes="(max-width: 768px) 62vw, 40vw"
            className="object-cover transition-transform duration-400 ease-in-out"
          />
          {/* Permanent subtle gradient at bottom for title */}
          <div
            className="absolute inset-0 rounded-[inherit]"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)",
            }}
          />
          {/* Hover overlay */}
          <div className={overlayClass(hovered === 0)} style={overlayGradient}>
            <p className="text-white text-[0.7rem] font-mono mb-0.75 opacity-75">
              {featured.title}
            </p>
            <p className="text-white/90 text-[0.78rem] leading-normal">
              {featured.desc}
            </p>
          </div>
          {/* Always-visible title */}
          <div
            className={`absolute bottom-3 left-3.5 right-3.5 pointer-events-none transition-opacity duration-200 ${
              hovered === 0 ? "opacity-0" : "opacity-100"
            }`}
          >
            <span className="text-white font-semibold text-[0.85rem] [text-shadow:0_1px_4px_rgba(0,0,0,0.8)]">
              {featured.title}
            </span>
          </div>
          {/* Featured badge */}
          <div className="absolute top-2.5 left-2.5 bg-(--accent) text-white font-mono text-[0.6rem] font-semibold px-2 py-0.5 rounded tracking-wider">
            ★ DESTAQUE
          </div>
        </div>

        {/* Thumbnails column */}
        <div className="flex-1 flex flex-col gap-2.5">
          {[thumb1, thumb2].map((photo, i) => (
            <div
              key={i}
              className="flex-1 relative rounded-lg overflow-hidden bg-[#1a1b24] cursor-pointer border border-(--border) min-h-0"
              onMouseEnter={() => setHovered(i + 1)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setActive((active + i + 1) % n)}
            >
              <Image
                src={photo.url}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 38vw, 24vw"
                className="object-cover brightness-[0.75] transition-[filter] duration-250"
              />
              <div
                className={overlayClass(hovered === i + 1)}
                style={overlayGradient}
              >
                <p className="text-white font-semibold text-[0.72rem] mb-0.5">
                  {photo.title}
                </p>
                <p className="text-white/85 text-[0.68rem] leading-[1.45]">
                  {photo.desc}
                </p>
              </div>
              {/* Always-visible title on thumbs */}
              <div
                className={`absolute bottom-0 left-0 right-0 px-2.5 pt-2 pb-1.75 transition-opacity duration-200 ${
                  hovered === i + 1 ? "opacity-0" : "opacity-100"
                }`}
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)",
                }}
              >
                <span className="text-white text-[0.7rem] font-medium [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]">
                  {photo.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls row */}
      <div className="flex items-center justify-between">
        {/* Dots */}
        <div className="flex gap-1.5">
          {eventeData.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full border-0 cursor-pointer p-0 transition-[width,background] duration-250 ${
                i === active ? "w-5 bg-(--accent)" : "w-1.5 bg-(--border)"
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-2">
          {(
            [
              { fn: prev, label: "prev" },
              { fn: next, label: "next" },
            ] as const
          ).map(({ fn, label }) => (
            <button
              key={label}
              onClick={fn}
              className="w-8.5 h-8.5 rounded-lg bg-(--card-bg) border border-(--border) text-(--fg) cursor-pointer flex items-center justify-center transition-colors duration-200 hover:border-(--accent) hover:text-(--accent)"
            >
              {label === "prev" ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Counter */}
      <p className="mono text-[0.65rem] text-(--muted) text-right mb-2 md:mb-0">
        {active + 1} de {n} eventos
      </p>
    </div>
  );
}
