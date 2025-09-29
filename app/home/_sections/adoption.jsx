import { Button } from "../../../components/ui/button";
import Inner from "../_components/inner";
import AdoptionList from "../_components/adoption-list";
import Link from "next/link";

export default function Adoption() {
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
        <AdoptionList />
        <Button variant="outline" className="border-[var(--green-300)]">
          <Link href="/adoption">입양공고 더보러 가기</Link>
        </Button>
      </Inner>
    </section>
  );
}
