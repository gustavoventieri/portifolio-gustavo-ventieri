"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  className?: string;
  triggerOnce?: boolean;
}

const directionOffset: Record<RevealDirection, string> = {
  up: "translate-y-6",
  down: "-translate-y-6",
  left: "translate-x-6",
  right: "-translate-x-6",
  none: "",
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  triggerOnce = true,
}: RevealProps) {
  const { ref, isVisible } = useScrollReveal({ triggerOnce });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${directionOffset[direction]}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
