"use client";

import { useState } from "react";
import ImageGallery from "../../(components)/image-gallery";
import DetailsCard from "../../(components)/details-card";
import { ModalFooter, ModalHeader, ModalWrapper } from "@/components/ui/modal";

export default function Page({ params }) {
  const [isOpen, setOpen] = useState(true);

  return (
    <ModalWrapper isOpen={isOpen} setOpen={setOpen}>
      <ModalHeader title="입양 공고" />
      <ImageGallery />
      <DetailsCard />
      <ModalFooter text="입양하기" />
    </ModalWrapper>
  );
}
