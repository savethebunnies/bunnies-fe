import Image from "next/image";
import Burger from "@/public/burger.svg";
import { Button } from "./button";

export function Nav() {
  return (
    <nav>
      <div className="py-4 px-6 flex justify-center items-center">
        <h1 className="">
          <Image
            src="/logo.png"
            height={50}
            width={130}
            alt="세이브 더 버니즈 로고"
          ></Image>
        </h1>
        <Button size="icon" variant="ghost" className="absolute right-6">
          <Burger aria-hidden="true" />
        </Button>
      </div>
    </nav>
  );
}
