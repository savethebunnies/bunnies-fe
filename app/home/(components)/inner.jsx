export default function Inner({ children, section, heading, subtitle }) {
  return (
    <div className="py-[var(--section-py)] mx-4 text-center max-w-screen-lg md:mx-auto">
      <h2
        id={`${section}-heading`}
        className="text-xl font-semibold mb-2 inline-block relative"
      >
        {heading}
        {section == "adoption" && (
          <div>
            <span className="bg-[url('/heart.png')] w-8 h-8 bg-contain inline-block absolute -left-9 -top-1" />
            <span className="bg-[url('/heart.png')] w-8 h-8 bg-contain inline-block absolute -right-9 -top-1" />
          </div>
        )}
      </h2>
      <p id={`${section}-subtitle`} className="text-sm mt-1">
        {subtitle}
      </p>
      {children}
    </div>
  );
}
