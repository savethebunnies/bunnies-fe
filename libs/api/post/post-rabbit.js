"use server";

import { revalidateTag } from "next/cache";

export async function postRabbit(formData) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/rabbit`, {
      method: "POST",
      body: formData,
    });
    revalidateTag("rabbits");
    revalidateTag("rabbit");

    if (!res.ok) {
      throw new Error(`HTTP 에러! 상태 코드: ${res.status}`);
    }
  } catch (error) {
    console.error("데이터 전송 중 오류 발생:", error);
  }
}
