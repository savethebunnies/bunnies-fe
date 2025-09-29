"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./button";
import Dimmed from "./dimmed";

const NAVMENUS = [
  { name: "세더버 소개", link: "/about" },
  { name: "입양 홍보", link: "/adoption" },
];

export function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  //esc 눌렀을 때 닫기 추가하기
  return (
    <>
      <header
        className="fixed top-0 w-full z-10"
        id="header"
        aria-label="사이트 헤더"
      >
        <div className="py-4 px-6 flex justify-center items-center bg-white shadow-sm ">
          <h1 className="">
            <Link href={"/home"} aria-label="홈으로 이동">
              <Image
                src="/logo.png"
                height={50}
                width={130}
                className="w-33 h-auto opacity-70"
                alt="세이브 더 버니즈 로고"
              ></Image>
            </Link>
          </h1>
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-6 z-50"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-controls="nav-menus"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            <img
              src={isMenuOpen ? "/close.svg" : "/burger.svg"}
              className={isMenuOpen ? "opacity-90" : ""}
              aria-hidden="true"
            />
          </Button>
        </div>

        {/* 네비게이션 패널 */}
      </header>
      <nav
        id="nav-menus"
        aria-label="네비게이션 메뉴"
        className={`z-30 shadow-xl transform transition-transform duration-300 ease-in-out fixed inset-y-0 right-0 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        data-open={isMenuOpen ? "true" : "false"}
      >
        <ul className="bg-white w-[60vw] h-screen pt-[var(--nav-height)]">
          {NAVMENUS.map((menu, idx) => {
            return (
              <li className="py-4 px-6" key={`menu-${idx}`}>
                <Link
                  href={menu.link}
                  className="w-full h-full"
                  onClick={() => setMenuOpen(false)}
                >
                  {menu.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Dimmed isOpen={isMenuOpen} setOpen={setMenuOpen} />
    </>
  );
}
