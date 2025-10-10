import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/ui/containers";
import AdoptionList from "./_sections/adoption-list";
import { auth } from "@/libs/utils/auth";

export default async function Page() {
  const session = await auth();
  const isAdmin = session.user.role === "ADMIN";
  return (
    <>
      <SectionContainer
        title="가족을 기다려요"
        id="adaption"
        className="bg-[var(--green-100)]"
      >
        <AdoptionList />
        {/* 관리자만 보이는 버튼 */}
        {isAdmin && (
          <Button>
            <Link href="/admin/adoption">새로운 공고 등록하기</Link>
          </Button>
        )}
      </SectionContainer>
    </>
  );
}
