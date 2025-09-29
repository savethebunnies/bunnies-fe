import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import { SectionContainer } from "@/components/ui/containers";
import Link from "next/link";
import { dehydrate, QueryClient } from "@tanstack/react-query";

async function getAvailableRabbits() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/rabbits`, {
    next: { tags: ["rabbits", "adaptable"] },
  });
  console.log(res, "res");
  if (!res.ok) {
    throw new Error(`Fail to fetch data: ${res.status}`);
  }

  return await res.json();
}

export default async function Page() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["rabbits", "adaptable"],
    queryFn: getAvailableRabbits,
  });

  const dehydratedState = dehydrate(queryClient);
  return (
    <>
      <SectionContainer
        title="가족을 기다려요"
        id="adaption"
        className="bg-[var(--green-100)]"
      >
        <div className="py-9">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 box-border">
            <Link href="/adoption/1">
              <Card />
            </Link>
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        {/* 관리자만 보이는 버튼 */}
        <Button>
          <Link href="/admin/adaption">새로운 공고 등록하기</Link>
        </Button>
      </SectionContainer>
    </>
  );
}
