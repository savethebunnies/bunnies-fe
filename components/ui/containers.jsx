import clsx from "clsx";

//중앙 정렬 컨테이너
export function ContentCenter({ children, className }) {
  return (
    <div className="h-[calc(100dvh-var(--nav-height))] relative">
      <div
        className={clsx(
          "flex flex-col items-center justify-center text-center absolute top-1/3 w-full",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

//section container
export function SectionContainer({ children, title, id, className }) {
  return (
    <section
      className={clsx("text-center py-12 full-screen", className)}
      aria-labelledby={`stb-${id}-heading`}
    >
      <h2 className="text-heading mb-6" id={`stb-${id}-heading`}>
        {title}
      </h2>
      <div className="content-inner">{children}</div>
    </section>
  );
}
