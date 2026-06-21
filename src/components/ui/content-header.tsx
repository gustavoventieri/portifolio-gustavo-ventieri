"use client";

interface ContentHeaderProps {
  text: string;
  variant: "orange" | "pink" | "purple" | "blue";
}

const colorVariants = {
  orange: { dash: "bg-[#fb923c]", text: "text-[#fb923c]" },
  pink: { dash: "bg-[#f472b6]", text: "text-[#f472b6]" },
  purple: { dash: "bg-[#a78bfa]", text: "text-[#a78bfa]" },
  blue: { dash: "bg-hero", text: "text-hero" },
};

export const ContentHeader = ({ text, variant }: ContentHeaderProps) => {
  const colors = colorVariants[variant];

  return (
    <div className="flex items-center gap-2 mb-4">
      <div className={`h-px w-8 ${colors.dash}`}></div>
      <span
        className={`text-[10px] uppercase tracking-[0.3em] font-mono ${colors.text}`}
      >
        {text}
      </span>
    </div>
  );
};
