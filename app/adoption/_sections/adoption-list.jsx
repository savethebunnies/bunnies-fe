"use client";

import Card from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import getAvailableRabbits from "../_libs/get-available-rabbits";

export default function AdaptionList() {
  const { data: rabbits } = useQuery({
    queryKey: ["rabbits", "adaptable"],
    queryFn: getAvailableRabbits,
  });
  console.log(rabbits);
  return (
    <div className="py-9">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 box-border">
        {rabbits?.map((rabbit) => {
          return (
            <Link href="/">
              <Card rabbit={rabbit} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
