import { Button } from "@/components/ui/button";
import Image from "next/image";
import Arrow from "@/public/arrow-right.svg";

export default function Page() {
  return (
    <main>
      <section
        aria-labelledby="stb-banner-heading"
        className="bg-[url('/bg_pc.png')] h-[calc(100vh-var(--nav-height))] bg-cover bg-bottom-right bg-no-repeat flex items-center justify-center"
      >
        <h2 id="stb-banner-heading" className="sr-only">
          세이브 더 버니즈 배너
        </h2>

        <div className="text-center rounded-lg border-4 mx-4 border-white bg-white/60 w-full relative pb-9">
          <div className="h-18 w-18 overflow-hidden bg-white flex items-center justify-center rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/logo_s.png"
              width={42}
              height={50}
              alt="세이브 더 버니즈 로고"
            />
          </div>
          <div className="pt-18 pb-12">
            <p className="mb-5">
              세이브 더 버니즈는
              <br />
              누구나 참여할 수 있는 열린 공동체입니다
            </p>
            <p className="mb-5">
              유기된 토끼에게 한 번 더 눈길을 주세요!
              <br />
              📣 홍보에 함께해 주세요 <br /> 🏡 입양을 고려해 주세요
            </p>
            <p>
              세더버는 여러분의 관심과
              <br />
              행동으로 이어집니다
            </p>
          </div>

          <Button>
            유기토끼 만나러 가기
            <Arrow aria-hidden="true" />
          </Button>
        </div>
      </section>
    </main>
  );
}
