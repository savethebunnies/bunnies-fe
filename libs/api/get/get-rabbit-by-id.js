export async function getRabbitById({ id }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}rabbit?id=${id}`,
    {
      next: { tags: ["rabbit", id], revalidate: false },
    }
  );
  // 관리자 수정,삭제,등록  revalidateTag('rabbits')

  if (!res.ok) {
    throw new Error(`Fail to fetch data: ${res.status}`);
  }
  return await res.json();
}
