"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { ModalFooter, ModalHeader, ModalWrapper } from "@/components/ui/modal";
import { RABBIT } from "@/constant/query-keys";
import DetailsCard from "../_components/details-card";
import { getRabbitById } from "@/libs/api/get";
import ImageSlider from "../_components/image-slider";
const formUrl = `${process.env.NEXT_PUBLIC_ADOPTION_FORM_URL}`;

export default function AdoptionDetailModal({ id }) {
  const router = useRouter();
  const { data: rabbit } = useQuery({
    queryKey: [RABBIT, id],
    queryFn: () => getRabbitById({ id }),
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const [isOpen, setOpen] = useState(true);

  useEffect(() => {
    if (!isOpen) {
      router.back();
    }
  }, [isOpen, router]);

  const handleformUrlLink = () => window.open(formUrl, "_blank");
  console.log(rabbit, "rabbit");
  return (
    <ModalWrapper isOpen={isOpen} setOpen={setOpen}>
      <ModalHeader title={rabbit?.RABBIT_CONDITION} />
      <ImageSlider images={rabbit?.RABBIT_IMAGES} />
      <DetailsCard content={rabbit} isModal />
      <ModalFooter text="입양 신청" onClick={handleformUrlLink} />
    </ModalWrapper>
  );
}
