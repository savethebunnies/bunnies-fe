import Image from "next/image";
import Badge from "./badge";

export default function Card({ rabbit }) {
  const {
    name,
    gender,
    condition,
    images = "/sample.png",
    weight,
    age,
    date,
    neutered,
  } = rabbit;
  return (
    <article className="rounded-lg overflow-hidden border border-[var(--green-200)]">
      <div className="aspect-square overflow-hidden relative">
        <div className="absolute right-1 top-2 bg-[var(--green-900)]/80 z-[1] font-bold text-[#FFEF09] px-2 py-[6px] text-xs rounded-full flex items-center justify-center">
          <span className="leading-none relative top-[1px]">{condition}</span>
        </div>
        <Image
          src={images[0]}
          fill
          alt={name}
          className="object-cover bg-[var(--green-50)]"
        />
      </div>
      <div className="text-left text-sm p-3 bg-white">
        <div className="flex items-center gap-1 mb-2 leading-none">
          <span className="text-base font-bold relative top-[1px]">{name}</span>
          <Badge text={gender} />
        </div>
        <p>
          나이: <span>{age}</span>
        </p>
        <p>
          몸무게: <span>{weight}</span>kg
        </p>
      </div>
    </article>
  );
}
