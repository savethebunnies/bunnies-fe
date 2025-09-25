import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import { SectionContainer } from "@/components/ui/containers";
import Link from "next/link";

export default function Page() {
  return (
    <SectionContainer
      title="입양 홍보"
      id="adaption"
      className="bg-[var(--green-100)]"
    >
      <div className="py-9">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 box-border">
          <Card />
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
  );
}
