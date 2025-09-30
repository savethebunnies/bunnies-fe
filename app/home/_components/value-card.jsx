"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ValueCard({ value, idx }) {
  const { imageData, title, desc } = value;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0 }}
    >
      <article className="snap-start bg-white py-6 px-5 rounded-lg border border-[var(--green-200)]  h-full">
        <div className="grid grid-rows-[1fr_1fr] h-full">
          <div className="mx-auto flex items-center justify-center">
            <Image
              src={imageData.image}
              width={imageData.width}
              height={140}
              alt={`이미지-${idx}`}
              aria-hidden="true"
            />
          </div>
          {/* 텍스트 */}
          <div>
            <div className="w-fit flex items-center justify-center bg-[var(--green-600)] p-1 pr-5 rounded-full mx-auto mt-2">
              <p className=" left-1 w-6 h-6 rounded-full font-bold bg-white text-[var(--green-600)] mr-3 flex items-center justify-center">
                <span className="leading-none relative top-[1px]"> {idx}</span>
              </p>
              <h4 className="text-base text-white font-semibold leading-none flex items-center justify-center relative">
                {title}
              </h4>
            </div>
            <p className="text-15 whitespace-pre-line pt-3">{desc}</p>
          </div>
        </div>
      </article>
    </motion.div>
  );
}
