"use client";

import { useLanguage } from "@/contexts/language-contexts";
import { TERMINAL_CMDS, TERMINAL_DELAYS, terminalData } from "@/data/terminal";
import { useEffect, useRef, useState } from "react";

export function Terminal() {
  type Line = { type: "cmd" | "output"; text: string };

  const [lines, setLines] = useState<Line[]>([]);
  const [typing, setTyping] = useState("");
  const [phase, setPhase] = useState<"idle" | "typing" | "output">("idle");
  const [seqIdx, setSeqIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  const termRef = useRef<HTMLDivElement>(null);

  const { language } = useLanguage();

  const translatedTerminalData = terminalData[language];

  useEffect(() => {
    if (termRef.current) {
      termRef.current.scrollTop = termRef.current.scrollHeight;
    }
  }, [lines, typing]);

  useEffect(() => {
    if (seqIdx >= TERMINAL_CMDS.length) return;

    const step = {
      cmd: TERMINAL_CMDS[seqIdx],
      delay: TERMINAL_DELAYS[seqIdx],
      output: translatedTerminalData.output[seqIdx],
    };

    if (phase === "idle") {
      const t = setTimeout(() => setPhase("typing"), seqIdx === 0 ? 800 : 500);

      return () => clearTimeout(t);
    }

    if (phase === "typing") {
      if (charIdx < step.cmd.length) {
        const t = setTimeout(
          () => {
            setTyping(step.cmd.slice(0, charIdx + 1));
            setCharIdx((c) => c + 1);
          },
          55 + Math.random() * 35,
        );

        return () => clearTimeout(t);
      }

      const t = setTimeout(() => {
        setLines((l) => [...l, { type: "cmd", text: step.cmd }]);
        setTyping("");
        setCharIdx(0);
        setPhase("output");
      }, 220);

      return () => clearTimeout(t);
    }

    if (phase === "output") {
      const t = setTimeout(() => {
        setLines((l) => [...l, { type: "output", text: step.output }]);

        setSeqIdx((i) => i + 1);
        setPhase("idle");
      }, step.delay);

      return () => clearTimeout(t);
    }
  }, [phase, charIdx, seqIdx, translatedTerminalData]);

  return (
    <div className="relative isolate ">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 sm:-inset-16 -z-10 flex items-center justify-center"
      >
        <div className="w-[95%]  h-[95%] rounded-[60%_40%_30%_80%/60%_30%_80%_40%] blur-2xl sm:blur-3xl opacity-90 bg-cyan-700 dark:bg-zinc-600 animate-blob-morph" />
      </div>

      <div className="rounded-lg overflow-hidden bg-[#0e0f14] border border-[#2a2b35] shadow-[0_24px_84px_rgba(0,0,0,0.5)] min-h-80">
        <div className="flex items-center gap-3 px-4 py-2.5 bg-[#1a1b24] border-b border-[#2a2b35]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>

          <div className="flex justify-center w-full mr-10">
            <span className="mono text-xs text-white">gustavo@archlinux</span>
          </div>
        </div>

        <div
          ref={termRef}
          className="flex flex-col gap-1.5 px-5 py-4 min-h-100 overflow-y-auto"
        >
          {lines.map((line, i) =>
            line.type === "cmd" ? (
              <TerminalLine key={i} text={line.text} isCmd />
            ) : (
              <TerminalLine key={i} text={line.text} isOutput />
            ),
          )}

          <div className="flex gap-2 items-center mono text-sm min-h-5.5">
            <span className="text-[#22c55e]">$</span>

            <span>{renderCommand(typing)}</span>

            <span className="inline-block w-2 h-[1em] bg-[#f87171] align-text-bottom animate-[blink_1s_step-end_infinite]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function renderCommand(text: string) {
  const spaceIdx = text.indexOf(" ");

  if (spaceIdx === -1) {
    return <span className="text-[#22c55e] text-[12px]">{text}</span>;
  }

  const command = text.slice(0, spaceIdx);
  const rest = text.slice(spaceIdx);

  return (
    <>
      <span className="text-[#22c55e] text-[12px]">{command}</span>

      <span className="text-[#f3f4f6] text-[12px]">{rest}</span>
    </>
  );
}

function TerminalLine({
  text,
  isCmd,
  isOutput,
}: {
  text: string;
  isCmd?: boolean;
  isOutput?: boolean;
}) {
  if (isCmd) {
    return (
      <div className="flex gap-2 items-start mono text-[12px] leading-relaxed">
        <span className="text-[#22c55e]">$</span>
        <span>{renderCommand(text)}</span>
      </div>
    );
  }

  if (isOutput) {
    return (
      <div className="mono text-[12px] leading-relaxed whitespace-pre text-[#9ca3af]">
        {text}
      </div>
    );
  }

  return null;
}
