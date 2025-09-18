export default function Inner({ children, section, heading, subtitle }) {
  return (
    <div className="py-[var(--section-py)] mx-4 text-center max-w-screen-lg md:mx-auto">
      <h2 id={`${section}-heading`} className="text-xl font-semibold mb-2">
        {heading}
      </h2>
      <p id={`${section}-subtitle`} className="text-sm mt-1">
        {subtitle}
      </p>
      {children}
    </div>
  );
}
