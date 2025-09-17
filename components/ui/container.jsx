//중앙 정렬 컨테이너
export default function Container({ children }) {
  return (
    <div className="h-[calc(100dvh-var(--nav-height))] relative">
      <div className="flex flex-col items-center justify-center text-center absolute top-1/3 w-full">
        {children}
      </div>
    </div>
  );
}
