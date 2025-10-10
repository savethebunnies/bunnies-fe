"use client";

import { useQuery } from "@tanstack/react-query";
import { getRabbitById } from "@/libs/api/get";
import { RABBIT } from "@/constant/query-keys";
import { SectionContainer } from "@/components/ui/containers";
import ImageSlider from "../_components/image-slider";
import DetailsCard from "../_components/details-card";
import AdoptionBtn from "../_components/adoption-btn";

export default function AdoptionDetail({ id }) {
  const { data: rabbit } = useQuery({
    queryKey: [RABBIT, id],
    queryFn: () => getRabbitById({ id }),
    staleTime: Infinity,
    cacheTime: Infinity,
    enabled: !!id,
  });
  console.log(rabbit, "rabbit");
  return (
    <SectionContainer
      title={`가족을 기다리고 있어요! 🍀${rabbit?.name}🍀`}
      id={`rabbit-${rabbit?.id}`}
      className="bg-[var(--green-50)]"
    >
      <div className="max-w-lg mx-auto relative pb-20">
        <ImageSlider images={rabbit?.images} />
        <DetailsCard content={rabbit} />
      </div>
      <AdoptionBtn text="입양 신청" />
    </SectionContainer>
  );
}
