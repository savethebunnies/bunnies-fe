"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const formUrl = `${process.env.NEXT_PUBLIC_ADOPTION_FORM_URL}`;

export default function AdoptionBtn({ text }) {
  const router = useRouter();
  const handleformUrlLink = () => window.open(formUrl, "_blank");

  return (
    <div className=" border-t border-[var(--gray-50)] bg-[var(--green-50)] py-5 fixed bottom-0 left-0 right-0 px-4">
      <div className="flex max-w-lg gap-2 mx-auto">
        <Button className="min-w-0 w-full" onClick={handleformUrlLink}>
          {text}
        </Button>
        <Button
          variant="outline"
          className="min-w-0 w-full border-1 border-[var(--gray-50)] text-[var(--black-50)]"
          onClick={() => router.push("/adoption")}
        >
          다른 공고 확인하기
        </Button>
      </div>
    </div>
  );
}
