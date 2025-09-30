"use server";

import { revalidateTag } from "next/cache";

export async function postRabbit(formData) {
  const newFormData = new FormData();
  for (const [key, value] of formData.entries()) {
    if (key.startsWith("$ACTION_ID_")) {
      continue;
    }
    const newKey = `RABBIT_${key.toUpperCase()}`;
    newFormData.append(newKey, value);
  }
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}add-rabbit`, {
      method: "POST",
      body: newFormData,
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
