"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect } from "react";
import Arrow from "@/public/arrow-right.svg";
export default function Home() {
  useEffect(() => {
    async function getPost() {
      try {
        const res = await fetch("api/rabbits/1", {
          method: "GET",
        });

        if (!res.ok) {
          throw new Error(`HTTP 에러! 상태 코드: ${res.status}`);
        }

        const data = await res.json();
        console.log("서버 응답:", data);
      } catch (error) {
        console.error("데이터 전송 중 오류 발생:", error);
      }
    }
    getPost();
  }, []);
  return (
    <div>
      <Button>
        <span>유기토끼 만나러 가기</span>
        <Arrow aria-hidden="true" />
      </Button>
    </div>
  );
}
