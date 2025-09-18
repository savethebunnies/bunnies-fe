import Image from "next/image";

export default function Card() {
  return (
    <article className="rounded-lg overflow-hidden border border-[var(--green-200)] ">
      <div className="aspect-square overflow-hidden  relative ">
        <span className="absolute right-0 z-10 bg-[var(--green-600)] font-bold text-[#FFEF09] px-3 py-1.5 text-xs rounded-bl-lg">
          임보 중
        </span>

        <Image
          src="/sample.png"
          fill
          alt="토끼 이미지"
          className="object-cover"
        />
      </div>
      <div className="text-left text-sm p-3 bg-white">
        <p className="flex items-center gap-1 mb-2">
          <span className="text-base font-bold">성훈이</span>
          <span className="bg-[#BBC9FF] px-2 py-0.5 rounded-2xl text-xs">
            남아
          </span>
        </p>
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
