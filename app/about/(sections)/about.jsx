import { SectionContainer } from "@/components/ui/containers";
import Image from "next/image";

export default function About() {
  return (
    <SectionContainer
      title="About"
      id="about"
      className="bg-[var(--green-100)]"
    >
      <div className="grid grid-rows-[auto_auto] gap-2">
        <div className="bg-white py-6 px-4 rounded-lg">
          <p className="text-xl font-bold text-[var(--primary)] mb-4">
            세이브더 버니즈(세더버)는 유기토끼를 지원하는 작은 봉사
            커뮤니티입니다.
          </p>
          <p className="mb-4">
            유기된 토끼가 구조되어 새로운 가족을 만나기까지의 여정을 함께하며,
            그 과정에서 필요한 도움을 나누고 있습니다.
          </p>
          <p className="underline decoration-[var(--primary)] decoration-1 underline-offset-4">
            모든 활동은 후원이나 고정적인 보호소 운영 없이, 봉사자들의 자발적인
            힘으로 이루어지고 있습니다. 따라서 지원 범위가 한정적일 수 있으며,
            구조 요청 시에는 임시보호 공간이나 병원비 부담 등 요청자분의
            직접적인 도움이 필요할 수 있습니다.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg">
          <p className="mb-4">
            안녕하세요, 세이브 더 버니즈
            <br />
            (Save the Bunnies, 이하 세더버)입니다.
          </p>
          <p className="mb-4">
            세더버는 2024년에 뜻을 함께하는 소수의 사람들이 모여 만든 유기토끼
            지원 커뮤니티입니다.
          </p>
          <p className="mb-4">
            세더버가 만들어지기 전, 저희는 각자 개인의 자리에서 버려진
            토끼들에게 작은 도움을 건네고 있었습니다. 하지만 유기된 토끼 한
            마리가 두 마리로, 두 마리가 네 마리로, 그리고 어느새 수십 마리로
            늘어나기까지는 그리 오랜 시간이 걸리지 않았습니다.
          </p>
          <p className="mb-4">
            구조자 한두 명이 임시 보호, 병원 진료, 입양 홍보까지 모두
            감당하기에는 벅찼고, 그 한계 앞에서 '함께해야 바꿀 수 있다'는
            생각으로 세더버가 시작되었습니다.
          </p>
          <p className="mb-4">
            여전히 많은 토끼들이 이유 없이 버려지고 있습니다. 아직은 작고
            느리지만, 포기하지 않고 한 걸음씩 나아간다면, 언젠가 모든 토끼들이
            버림받지 않는 사회를 만들 수 있으리라 믿습니다.
          </p>

          <div className="mt-9">
            <Image
              src="/logo_about.png"
              width={48}
              height={48}
              alt="세더버 로고"
              aria-hidden="true"
              className="mx-auto mb-4"
            />
            <h2 className="text-xl font-black" lang="en">
              Save the Bunnies
            </h2>
            <p className="text-base">세이브 더 버니즈</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
