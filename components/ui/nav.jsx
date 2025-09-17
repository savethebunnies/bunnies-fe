import Image from "next/image";
import { Button } from "./button";

export function Nav() {
  return (
    <nav className="fixed top-0 w-full z-5">
      <div className="py-4 px-6 flex justify-center items-center bg-white ">
        <h1 className="">
          <Image
            src="/logo.png"
            height={50}
            width={130}
            className="w-33 h-auto"
            alt="세이브 더 버니즈 로고"
          ></Image>
        </h1>
        <Button size="icon" variant="ghost" className="absolute right-6">
          <img src="/burger.svg" aria-hidden="true" />
        </Button>
      </div>
    </nav>
  );
}
