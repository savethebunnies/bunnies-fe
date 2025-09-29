"use client";

import { useEffect, useState } from "react";
import ImageGallery from "../../_components/image-gallery";
import DetailsCard from "../../_components/details-card";
import { ModalFooter, ModalHeader, ModalWrapper } from "@/components/ui/modal";
import { useRouter } from "next/navigation";

export default function Page({ params }) {
  const [isOpen, setOpen] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (!isOpen) {
      router.back();
    }
  }, [isOpen, router]);

  return (
    <ModalWrapper isOpen={isOpen} setOpen={setOpen}>
      <ModalHeader title="입양 공고" />
      <ImageGallery />
      <DetailsCard />
      <ModalFooter text="입양하기" />
    </ModalWrapper>
  );
}
