"use client";

import { useRouter } from "next/navigation";
import { Button } from "./button";
import Dimmed from "./dimmed";

export function ModalWrapper({ isOpen = false, setOpen, children }) {
  return (
    <section
      className="absolute top-0 w-full h-screen flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <article className="rounded-xl overflow-hidden z-30 bg-white w-[calc(100%-32px)]  max-w-lg">
        <div className="px-5">{children}</div>
      </article>
      <Dimmed isOpen={isOpen} setOpen={setOpen} />
    </section>
  );
}

export function ModalHeader({ title }) {
  const router = useRouter();
  return (
    <div className=" flex justify-between items-center pt-6">
      <h2 className="font-bold text-[var(--hover)]" id="modal-title">
        {title}
      </h2>
      <Button variant="ghost" size="icon" onClick={() => router.back()}>
        <img
          src="/close.svg"
          alt="아이콘"
          className="relative w-6 h-6 left-2"
          aria-hidden="true"
          aria-label="모달 닫기"
        />
      </Button>
    </div>
  );
}

export function ModalFooter({ onClick, text }) {
  const router = useRouter();
  return (
    <div className="flex py-5 gap-2 border-t border-[var(--gray-50)] bg-white -mx-5 px-5">
      <Button size="sm" className="min-w-0 w-full" onClick={onClick}>
        {text}
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="min-w-0 w-full border-1 border-[var(--gray-50)] text-[var(--black-50)]"
        onClick={() => router.back()}
      >
        닫기
      </Button>
    </div>
  );
}
