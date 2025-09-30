"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { ModalFooter, ModalHeader, ModalWrapper } from "@/components/ui/modal";
import { RABBIT } from "@/constant/query-keys";
import DetailsCard from "../_components/details-card";
import { getRabbitById } from "@/libs/api/get";
import ImageSlider from "../_components/image-slider";

export default function AdoptionDetailModal({ id }) {
  const { data: rabbit } = useQuery({
    queryKey: [RABBIT, id],
    queryFn: () => getRabbitById({ id }),
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const [isOpen, setOpen] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (!isOpen) {
      router.back();
    }
  }, [isOpen, router]);

  return (
    <ModalWrapper isOpen={isOpen} setOpen={setOpen}>
      <ModalHeader title={rabbit?.RABBIT_CONDITION} />
      <ImageSlider images={rabbit?.RABBIT_IMAGES} />
      <DetailsCard content={rabbit} isModal />
      <ModalFooter text="입양하기" />
    </ModalWrapper>
  );
}
