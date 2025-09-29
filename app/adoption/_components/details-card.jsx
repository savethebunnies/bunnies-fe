import Badge from "@/components/ui/badge";

export default function DetailsCard({ content }) {
  const {
    RABBIT_CHARACTER,
    RABBIT_DESC,
    RABBIT_GENDER,
    RABBIT_NM,
    RABBIT_RESCUE_LOCATION,
    RABBIT_WEIGHT,
  } = content;
  return (
    <div className="flex flex-col gap-[2px] pb-7 overflow-auto max-h-60 text-15 text-[var(--black-50)]">
      <div className="flex items-center gap-1 mb-3">
        <h3 className="text-lg font-bold relative top-[1px]">{RABBIT_NM}</h3>
        <Badge text={RABBIT_GENDER} />
      </div>
      <p className="flex gap-1">
        나이:
        <span className="font-bold">2000년생</span>
      </p>
      <p className="flex gap-1">
        몸무게:<span className="font-bold">{RABBIT_WEIGHT}</span>kg
      </p>
      <p className="flex gap-1">
        구조장소:<span className="font-bold">{RABBIT_RESCUE_LOCATION}</span>
      </p>
      <p className="flex gap-1">
        특징:
        <span className="font-bold">{RABBIT_CHARACTER}</span>
      </p>
      <p className="flex gap-1">
        기타:
        <span className="font-bold">{RABBIT_DESC}</span>
      </p>
    </div>
  );
}
