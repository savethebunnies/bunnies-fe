import Image from "next/image";
import GoogleLoginBtn from "./_components/google-login-btn";
import { ContentCenter } from "@/components/ui/containers";

export default async function Page() {
  return (
    <section className="mx-4">
      <ContentCenter className="top-1/4">
        <Image
          src="/logo.png"
          width="210"
          height="65"
          alt="세이브더버니즈 로고"
        />
        <h2 className="text-xl mt-5 mb-2">
          간편하게 로그인하고
          <br />
          세더버 함께하기
        </h2>
        <p className="text-sm mb-18">
          계정이 없다면 자동으로 회원가입이 진행됩니다.
        </p>
        <GoogleLoginBtn />
      </ContentCenter>
    </section>
  );
}
