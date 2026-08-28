import { JsonSpecs } from "@/data/about";
import { Code } from "lucide-react";

export function JsonSpecsCard({ data }: { data: JsonSpecs }) {
  const specs = [
    { key: "os", value: data.jsonOs },
    { key: "main_stack", value: data.jsonMainStack },
    { key: "database", value: data.jsonDatabase },
    { key: "editor", value: data.jsonEditor },
    { key: "interests", value: data.jsonInterests },
    { key: "status", value: data.jsonStatus },
  ];

  return (
    <div className="relative isolate">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 sm:-inset-16 -z-10 flex items-center justify-center"
      >
        <div className="w-[95%] rounded-[60%_40%_30%_80%/60%_30%_80%_40%] h-[95%] blur-2xl sm:blur-3xl opacity-90 bg-cyan-700 dark:bg-zinc-600 animate-blob-morph" />
      </div>

      <div className="bg-[#0e0f14] border border-[#2a2b35] rounded-[14px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
        {/* Card header */}
        <div className="bg-[#1a1b24] border-b border-[#2a2b35] px-4.5 py-2.5 flex items-center gap-2.5">
          <span className="text-[#f87171]">
            <Code size={14} />
          </span>

          <span className="mono text-xs text-[#9ca3af]">system_specs.json</span>
        </div>

        {/* JSON body */}
        <div className="px-5.5 pt-4.5 pb-5 flex flex-col gap-0.5">
          <div className="mono text-sm text-[#4b5563] mb-1">{"{"}</div>

          {specs.map((item, i) => (
            <div key={item.key} className="mono text-sm flex flex-wrap pl-5">
              <span className="text-[#6b7280]">&quot;</span>
              <span className="text-[#9ca3af]">{item.key}</span>
              <span className="text-[#6b7280]">&quot;</span>
              <span className="text-[#4b5563]">:&nbsp;</span>
              <span className="text-[#6b7280]">&quot;</span>
              <span className="text-[#f87171]">{item.value}</span>
              <span className="text-[#6b7280]">&quot;</span>

              {i < specs.length - 1 && (
                <span className="text-[#4b5563]">,</span>
              )}
            </div>
          ))}

          <div className="mono text-sm text-[#4b5563] mt-1">{"}"}</div>
        </div>
      </div>
    </div>
  );
}
