import { Cpu } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-line bg-ground py-3 font-mono">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4">
        {/* Esquerda: Copyright e Direitos */}
        <div className="text-[11px] text-zinc-500 ">
          © {new Date().getFullYear()}{" "}
          <span className="text-zinc-300">Gustavo Ventieri</span>.
          <span className="ml-2 opacity-50">All rights reserved.</span>
        </div>

        {/* Direita: Metadados do Sistema (Novas Infos) */}
        <div className="flex items-center gap-6 text-[10px] tracking-[0.15em] text-zinc-500">
          <div className="flex items-center gap-2  border-line">
            <Cpu size={12} className="text-zinc-600" />
            <span>
              Sys: <span className="text-accent font-bold">Stable</span>
            </span>
          </div>

          {/* Latência/Deploy */}
          <div className="flex items-center gap-2 border-l border-line pl-6">
            <div className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-40 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
            </div>
            <span className="text-zinc-500">
              Latency: <span className="text-accent font-bold">24ms</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
