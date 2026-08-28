export function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div style={{ marginBottom: 48 }}>
      {/* Eyebrow row: label + extending line */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 14,
        }}
      >
        <span
          className="mono"
          style={{
            fontSize: "0.72rem",
            color: "var(--accent)",
            letterSpacing: "0.08em",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>
        <div
          style={{
            flex: 1,
            height: 1,
            background: "linear-gradient(to right, var(--accent), transparent)",
            opacity: 0.35,
          }}
        />
      </div>

      {/* Title with left accent bar + underline */}
      <div style={{ position: "relative", paddingLeft: 20 }}>
        {/* Left bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "10%",
            bottom: "10%",
            width: 3,
            borderRadius: 2,
            background: "var(--accent)",
          }}
        />
        <h2
          style={{
            fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
            fontWeight: 700,
            color: "var(--heading)",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
          }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}
