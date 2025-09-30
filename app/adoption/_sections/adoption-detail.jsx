"use client";

import { useQuery } from "@tanstack/react-query";
import { getRabbitById } from "@/libs/api/get";
import { RABBIT } from "@/constant/query-keys";
import { SectionContainer } from "@/components/ui/containers";
import ImageSlider from "../_components/image-slider";
import DetailsCard from "../_components/details-card";

export default function AdoptionDetail({ id }) {
  const { data: rabbit } = useQuery({
    queryKey: [RABBIT, id],
    queryFn: () => getRabbitById({ id }),
    staleTime: Infinity,
    cacheTime: Infinity,
  });
  console.log(rabbit);
  return (
    <SectionContainer
      title={`가족을 기다리고 있어요! 🍀${rabbit?.RABBIT_NM}🍀`}
      id={`rabbit-${rabbit?.RABBIT_SEQ}`}
      className="bg-[var(--green-50)]"
    >
      <div className="max-w-lg mx-auto relative ">
        <ImageSlider images={rabbit?.RABBIT_IMAGES} />
        <DetailsCard content={rabbit} />
      </div>
    </SectionContainer>
  );
}
