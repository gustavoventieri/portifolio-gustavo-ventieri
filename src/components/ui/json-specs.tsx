import { AboutType } from "@/data/about";
import { Code } from "lucide-react";

export function JsonSpecsCard({ data }: { data: AboutType }) {
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
        <div
          className="w-[95%]  h-[95%] blur-2xl sm:blur-3xl opacity-90 bg-cyan-700 dark:bg-zinc-600 animate-blob-morph"
          style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
        />
      </div>
      <div
        style={{
          background: "#0e0f14",
          border: "1px solid #2a2b35",
          borderRadius: 14,
          overflow: "hidden",
          boxShadow: "0 12px 40px rgba(0,0,0,0.45)",
        }}
      >
        {/* Card header */}
        <div
          style={{
            background: "#1a1b24",
            borderBottom: "1px solid #2a2b35",
            padding: "10px 18px",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span style={{ color: "#f87171" }}>
            <Code size={14} />
          </span>

          <span className="mono text-xs" style={{ color: "#9ca3af" }}>
            system_specs.json
          </span>
        </div>

        {/* JSON body */}
        <div
          style={{ padding: "18px 22px 20px" }}
          className="flex flex-col gap-0.5"
        >
          <div
            className="mono text-sm"
            style={{ color: "#4b5563", marginBottom: 4 }}
          >
            {"{"}
          </div>

          {specs.map((item, i) => (
            <div
              key={item.key}
              className="mono text-sm flex flex-wrap"
              style={{ paddingLeft: 20 }}
            >
              <span style={{ color: "#6b7280" }}>&quot;</span>

              <span style={{ color: "#9ca3af" }}>{item.key}</span>

              <span style={{ color: "#6b7280" }}>&quot;</span>

              <span style={{ color: "#4b5563" }}>:&nbsp;</span>

              <span style={{ color: "#6b7280" }}>&quot;</span>

              <span style={{ color: "#f87171" }}>{item.value}</span>

              <span style={{ color: "#6b7280" }}>&quot;</span>

              {i < specs.length - 1 && (
                <span style={{ color: "#4b5563" }}>,</span>
              )}
            </div>
          ))}

          <div
            className="mono text-sm"
            style={{ color: "#4b5563", marginTop: 4 }}
          >
            {"}"}
          </div>
        </div>
      </div>
    </div>
  );
}
