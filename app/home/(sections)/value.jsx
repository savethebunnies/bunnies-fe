import Inner from "../(components)/inner";
import ValueCard from "../(components)/value-card";

const values = [
  {
    imageData: { image: "/rabbit_01.png", width: "130", height: "140" },
    title: "토끼에 대한 올바른 인식 확산",
    desc: "토끼도 깊은 교감이 가능한 소중한 반려동물입니다.\n 무지에서 비롯된 방사·유기·학대가 사라지는 세상을 꿈꿉니다.",
  },
  {
    imageData: { image: "/rabbit_02.png", width: "190", height: "190" },
    title: "책임감 있는 입양 문화 조성",
    desc: "입양은 끝이 아닌 시작입니다.\n 입양 후에도 지속적인 소통을 통해 토끼들의 안부를 확인하고,\n 어려움이 생기면 함께 해결책을 찾아갑니다.",
  },
  {
    imageData: { image: "/rabbit_03.png", width: "160", height: "140" },
    title: "비윤리적 행위에 대한 반대",
    desc: "세더버는 다음과 같은 행위에 명확히 반대합니다.\n ❌ 야외 토끼장 운영\n ❌ 동물 체험 및 전시\n ❌ 무분별한 번식 및 판매",
  },
];

export default function Value() {
  return (
    <section aria-labelledby="value-heading" className="bg-[#DEEBDD]">
      <Inner
        section="value"
        heading={
          <>
            <span
              aria-hidden="true"
              lang="en"
              className="block text-base text-[var(--primary)]"
            >
              Save the Bunnies
            </span>
            세이브 더 버니즈
          </>
        }
        subtitle="세더버는 아래의 가치를 중심으로 활동하고 있어요!"
      >
        <div className="grid grid-rows-3 gap-2 mt-9">
          {values.map((value, idx) => {
            return (
              <ValueCard value={value} idx={idx + 1} key={`card-${idx}`} />
            );
          })}
        </div>
      </Inner>
    </section>
  );
}
