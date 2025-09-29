import Image from "next/image";
import Badge from "./badge";

export default function Card({ rabbit }) {
  const { RABBIT_NM, RABBIT_GENDER, RABBIT_CONDITION, ALL_IMAGE_URLS } = rabbit;
  return (
    <article className="rounded-lg overflow-hidden border border-[var(--green-200)]">
      <div className="aspect-square overflow-hidden relative">
        <div className="absolute right-1 top-2 bg-[var(--green-900)]/80 z-10 font-bold text-[#FFEF09] px-3 py-2 text-xs rounded-full flex items-center justify-center">
          <span className="leading-none relative top-[1px]">
            {RABBIT_CONDITION}
          </span>
        </div>
        <Image
          src={ALL_IMAGE_URLS[0]}
          fill
          alt={RABBIT_NM}
          className="object-cover"
        />
      </div>
      <div className="text-left text-sm p-3 bg-white">
        <div className="flex items-center gap-1 mb-2 leading-none">
          <span className="text-base font-bold relative top-[1px]">
            {RABBIT_NM}
          </span>
          <Badge text={RABBIT_GENDER} />
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
