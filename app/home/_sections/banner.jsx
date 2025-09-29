import Image from "next/image";
import FloatBtn from "../_components/float-btn";

export default function Banner() {
  return (
    <section
      aria-labelledby="stb-banner-heading"
      className="bg-[url('/bg_mo.png')] sm:bg-[url('/bg_pc.png')] bg-cover bg-right-bottom bg-no-repeat"
    >
      <h2 id="stb-banner-heading" className="sr-only">
        세이브 더 버니즈 배너
      </h2>
      <div className="full-screen content-inner   flex items-center justify-center">
        <div className="text-center rounded-lg backdrop-blur-[2px] bg-white/35 border-2 border-white/70 w-full relative pb-9">
          <div className="h-18 w-18 overflow-hidden bg-white flex items-center justify-center rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/logo_s.png"
              width={42}
              height={50}
              alt="세이브 더 버니즈 로고"
            />
          </div>
          <div className="pt-18 pb-12 text-17">
            <p className="mb-5 font-semibold text-[var(--hover)]">
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
          <FloatBtn />
        </div>
      </div>
    </section>
  );
}
