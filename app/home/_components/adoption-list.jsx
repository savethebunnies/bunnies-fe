"use client";

import { useQuery } from "@tanstack/react-query";
import { getAvailableRabbits } from "@/libs/api/get";

import Link from "next/link";
import Card from "@/components/ui/card";
import { ADOPTABLE, RABBITS } from "@/constant/query-keys";

export default function AdoptionList() {
  const { data: rabbits } = useQuery({
    queryKey: [RABBITS, ADOPTABLE],
    queryFn: getAvailableRabbits,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  if (!rabbits) return;
  return (
    <div className="py-9">
      <div className="grid grid-flow-col auto-cols-[calc((100%_-_0.5rem)/2)] sm:auto-cols-[calc((100%_-_1.5rem)/4)] gap-2  overflow-x-auto snap-x snap-mandatory box-border">
        {rabbits?.map((rabbit) => {
          const { RABBIT_SEQ } = rabbit;
          return (
            <Link key={RABBIT_SEQ} href={`/adoption/${RABBIT_SEQ}`}>
              <Card rabbit={rabbit} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
