"use client";

import { eventeData } from "@/data/academic-experience";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

// no-op subscribe: this value never changes after mount, so nothing to subscribe to
const subscribe = () => () => {};

export function EventCarousel() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const n = eventeData.length;
  const mounted = useSyncExternalStore(
    subscribe,
    () => true, // client snapshot
    () => false, // server snapshot
  );

  const prev = () => setActive((a) => (a - 1 + n) % n);
  const next = () => setActive((a) => (a + 1) % n);

  const featured = eventeData[active % n];
  const thumb1 = eventeData[(active + 1) % n];
  const thumb2 = eventeData[(active + 2) % n];

  // No mobile (telas < md), tocar na foto abre o modal em vez do overlay
  // de hover, que fica grande demais no card pequeno.
  const handlePhotoTap = (index: number, promote?: number) => {
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 767px)").matches;

    if (isMobile) {
      setModalIndex(index);
      return;
    }

    if (promote !== undefined) setActive((active + promote) % n);
  };

  const modalPrev = () =>
    setModalIndex((i) => (i === null ? i : (i - 1 + n) % n));
  const modalNext = () => setModalIndex((i) => (i === null ? i : (i + 1) % n));

  // Overlay de descrição e zoom só fazem sentido com mouse de verdade.
  // Em touch (celular ou tablet), :hover/mouseenter dispara no toque sem
  // um "mouseleave" correspondente, deixando o overlay preso na foto
  // errada quando ela troca de posição — então nem ativamos o estado.
  const isHoverCapable = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const onPhotoEnter = (index: number) => {
    if (isHoverCapable()) setHovered(index);
  };
  const onPhotoLeave = () => {
    if (isHoverCapable()) setHovered(null);
  };

  // Trava o scroll do body e permite navegar/fechar pelo teclado
  useEffect(() => {
    if (modalIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalIndex(null);
      if (e.key === "ArrowLeft") modalPrev();
      if (e.key === "ArrowRight") modalNext();
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [modalIndex]);

  const overlayClass = (visible: boolean) =>
    `hidden md:flex absolute inset-0 flex-col justify-end px-4 py-3.5 rounded-[inherit] transition-opacity duration-[250ms] ease-in-out ${
      visible ? "opacity-100" : "opacity-0"
    }`;

  const overlayGradient = {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)",
  };

  const modalItem = modalIndex !== null ? eventeData[modalIndex] : null;

  const modal = modalItem && (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:hidden"
      onClick={() => setModalIndex(null)}
    >
      <div className="absolute inset-0 bg-black/80" />

      <div
        className="relative w-full max-w-sm rounded-xl overflow-hidden bg-(--card-bg) border border-(--border) shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setModalIndex(null)}
          aria-label="Fechar"
          className="absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-sm"
        >
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
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="relative w-full aspect-4/3 bg-[#1a1b24]">
          <Image
            src={modalItem.url}
            alt={modalItem.title}
            fill
            sizes="90vw"
            className="object-cover"
          />

          {/* Setas de navegação sobre a foto */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              modalPrev();
            }}
            aria-label="Foto anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-sm"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              modalNext();
            }}
            aria-label="Próxima foto"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-sm"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className="p-4 flex flex-col gap-1.5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-(--heading) font-semibold text-sm">
              {modalItem.title}
            </h3>
            <span className="mono text-[0.65rem] text-(--muted) shrink-0">
              {modalIndex! + 1}/{n}
            </span>
          </div>
          <p className="text-(--fg) text-[0.8rem] leading-[1.55]">
            {modalItem.desc}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-3">
      {/* Main row: featured + thumbnails */}
      <div className="flex gap-2.5 items-stretch">
        {/* Featured image */}
        <div
          className="basis-[62%] grow-0 shrink-0 relative rounded-[10px] overflow-hidden bg-[#1a1b24] cursor-pointer aspect-4/3"
          onMouseEnter={() => onPhotoEnter(0)}
          onMouseLeave={onPhotoLeave}
          onClick={() => handlePhotoTap(active % n)}
        >
          <Image
            src={featured.url}
            alt={featured.title}
            fill
            sizes="(max-width: 768px) 62vw, 40vw"
            className={`object-cover transition-transform duration-400 ease-in-out ${
              hovered === 0 ? "scale-110" : "scale-100"
            }`}
          />
          {/* Permanent subtle gradient at bottom for title */}
          <div
            className="absolute inset-0 rounded-[inherit]"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)",
            }}
          />
          {/* Hover overlay — só desktop */}
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
              hovered === 0 ? "md:opacity-0" : "opacity-100"
            }`}
          >
            <span className="text-white font-semibold text-[0.85rem] [text-shadow:0_1px_4px_rgba(0,0,0,0.8)]">
              {featured.title}
            </span>
          </div>
          {/* Featured badge */}

          <div
            className={`hidden md:flex absolute top-2.5 right-2.5 items-center gap-1 bg-black/55 backdrop-blur-sm text-white/90 text-[0.65rem] font-medium px-2.5 py-1 rounded pointer-events-none transition-opacity duration-200 ${
              hovered === 0 ? "opacity-0" : "opacity-100"
            }`}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1="21" y1="3" x2="14" y2="10" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
            Ver mais
          </div>

          {/* Dica de toque — só aparece onde não tem hover (mesmo breakpoint do modal) */}
          <div className="md:hidden absolute top-2.5 right-2.5 flex items-center gap-1 bg-black/55 backdrop-blur-sm text-white/90 text-[0.65rem] font-medium px-2.5 py-1 rounded pointer-events-none">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1="21" y1="3" x2="14" y2="10" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
            Toque para ver mais
          </div>
        </div>

        {/* Thumbnails column */}
        <div className="flex-1 flex flex-col gap-2.5">
          {[thumb1, thumb2].map((photo, i) => {
            const photoIndex = (active + i + 1) % n;

            return (
              <div
                key={i}
                className="flex-1 relative rounded-lg overflow-hidden bg-[#1a1b24] cursor-pointer border border-(--border) min-h-0 hover:opacity-75 "
                // onMouseEnter={() => onPhotoEnter(i + 1)}
                onMouseLeave={onPhotoLeave}
                onClick={() => handlePhotoTap(photoIndex, i + 1)}
              >
                <Image
                  src={photo.url}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 768px) 38vw, 24vw"
                  className={`object-cover transition-[filter,transform] duration-250 ease-in-out ${
                    hovered === i + 1
                      ? "scale-110 brightness-95"
                      : "scale-100 brightness-[0.75]"
                  }`}
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
                    hovered === i + 1 ? "md:opacity-0" : "opacity-100"
                  }`}
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)",
                  }}
                >
                  <span className="hidden sm:flex text-white text-[0.7rem] font-medium [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]">
                    {photo.title}
                  </span>
                </div>
              </div>
            );
          })}
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

      {/* Modal renderizado direto no body, fora da árvore do carrossel,
          pra garantir que o fixed cubra a viewport inteira de verdade. */}
      {mounted && modal && createPortal(modal, document.body)}
    </div>
  );
}
