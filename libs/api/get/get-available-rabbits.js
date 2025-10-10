import { ADOPTABLE, RABBITS } from "@/constant/query-keys";

export async function getAvailableRabbits() {
  const res = await fetch(`/api/rabbits`, {
    next: { tags: [RABBITS, ADOPTABLE], revalidate: false },
  });
  // 관리자 수정,삭제,등록  revalidateTag('rabbits')

  if (!res.ok) {
    throw new Error(`Fail to fetch data: ${res.status}`);
  }

  return await res.json();
}
