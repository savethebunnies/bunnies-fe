import Badge from "@/components/ui/badge";
import clsx from "clsx";

export default function DetailsCard({ content, isModal = false }) {
  const {
    character,
    description,
    gender,
    name,
    location,
    weight,
    date,
    age,
    neutered,
  } = content;
  if (!content) return;
  return (
    <div
      className={clsx(
        "flex flex-col gap-[2px] pb-7 text-15 text-[var(--black-50)] text-left"
        // isModal && "overflow-auto max-h-[20vh]"
      )}
    >
      <div className="flex items-center gap-2 mb-3">
        <h3 className="text-lg font-bold relative top-[1px]">{name}</h3>
        <Badge text={gender} />
      </div>
      <p className="flex gap-1">
        나이:
        <span className="font-bold">{age}</span>
      </p>
      <p className="flex gap-1">
        몸무게:<span className="font-bold">{weight}</span>kg
      </p>
      <p className="flex gap-1">
        구조장소:<span className="font-bold">{location}</span>
      </p>
      <p className="flex gap-1">
        구조날짜:<span className="font-bold">{date}</span>
      </p>
      <p className="flex gap-1">
        중성화:<span className="font-bold">{neutered}</span>
      </p>
      <p className="flex gap-1">
        특징:
        <span className="font-bold">{character}</span>
      </p>
      <p className="flex gap-1">
        기타:
        <span className="font-bold">{description}</span>
      </p>
    </div>
  );
}
