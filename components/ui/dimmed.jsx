"use client";

export default function Dimmed({ isOpen, setOpen }) {
  return (
    <div
      className={`
    fixed inset-0 z-20 bg-black/40 transition-opacity duration-300
    ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
  `}
      onClick={() => setOpen(false)}
      aria-hidden="true"
    />
  );
}
