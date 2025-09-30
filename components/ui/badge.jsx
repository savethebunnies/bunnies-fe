export default function Badge({ text }) {
  const key = String(text).trim();

  const PALETTE = {
    남아: { bg: "#D3E4F3", fg: "#2F4458" },
    여아: { bg: "#F3D8E1", fg: "#543244" },
    불확실: { bg: "#D1E2D0", fg: "#314A31" },
  };
  const { bg, fg } = PALETTE[key] ?? { bg: "#D1E2D0", fg: "#314A31" };

  return (
    <div
      className="px-2 py-[3px] rounded-full text-xs select-none"
      style={{ backgroundColor: bg, color: fg }}
    >
      <span className="relative top-[1px]">{text}</span>
    </div>
  );
}
