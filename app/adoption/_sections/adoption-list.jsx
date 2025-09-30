"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import Card from "@/components/ui/card";
import { getAvailableRabbits } from "@/libs/api/get";
import { ADOPTABLE, RABBITS } from "@/constant/query-keys";

export default function AdoptionList() {
  const { data: rabbits } = useQuery({
    queryKey: [RABBITS, ADOPTABLE],
    queryFn: getAvailableRabbits,
    staleTime: Infinity,
    cacheTime: Infinity,
  });
  console.log(rabbits);
  if (!rabbits) return;
  return (
    <div className="pb-9">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 box-border">
        {rabbits?.map((rabbit) => {
          const { RABBIT_SEQ } = rabbit;
          return (
            <Link
              key={RABBIT_SEQ}
              scroll={false}
              href={`/adoption/${RABBIT_SEQ}`}
            >
              <Card rabbit={rabbit} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
