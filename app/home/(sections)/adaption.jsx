import Card from "@/components/ui/card";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import Inner from "../(components)/inner";

export default function Adaption() {
  return (
    <section
      aria-labelledby="adoption-heading"
      aria-describedby="adoption-subtitle"
      className="bg-[var(--green-50)]"
    >
      <Inner
        section="adoption"
        heading="가족을 기다리고 있어요"
        subtitle="하나뿐인 가족이 되어주세요"
      >
        <div className="grid grid-cols-2 gap-2 py-9 sm:grid-cols-4">
          <Card />
          <Card />
        </div>
        <Button variant="outline" className="border-[var(--green-300)]">
          <Link href="/adaption">입양공고 더보러 가기</Link>
        </Button>
      </Inner>
    </section>
  );
}
