export const Footer = () => {
  return (
    <footer className="w-full  border-t border-line bg-background py-3 font-mono">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-6 gap-4">
        {/* Esquerda: Copyright e Direitos */}
        <div className="text-[13px] text-zinc-500 ">
          © {new Date().getFullYear()}{" "}
          <span className="text-hero">Gustavo Ventieri</span>.
          <span className="ml-2 opacity-50">All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};
