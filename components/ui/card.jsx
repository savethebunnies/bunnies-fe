import Image from "next/image";

export default function Card() {
  return (
    <article className="rounded-lg overflow-hidden border border-[var(--green-200)]">
      <div className="aspect-square overflow-hidden relative">
        <div className="absolute right-1 top-2 bg-[var(--green-900)]/80 z-10 font-bold text-[#FFEF09] px-3 py-2 text-xs rounded-full flex items-center justify-center">
          <span className="leading-none relative top-[1px]">임보 중</span>
        </div>
        <Image
          src="/sample.png"
          fill
          alt="토끼 이미지"
          className="object-cover"
        />
      </div>
      <div className="text-left text-sm p-3 bg-white">
        <div className="flex items-center gap-1 mb-2 leading-none">
          <span className="text-base font-bold relative top-[1px]">성훈이</span>
          <div className="bg-[#BBC9FF] px-2 py-1 rounded-full text-xs">
            <span className="relative top-[1px]">남아</span>
          </div>
        </div>
        <p>
          나이: <span>2000년생 추정</span>
        </p>
        <p>
          몸무게: <span>2</span>kg
        </p>
      </div>
    </article>
  );
}
