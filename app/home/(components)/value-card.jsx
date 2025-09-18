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
      <article className="bg-white py-6 px-5 rounded-lg border border-[var(--green-200)]">
        <div className="flex flex-col items-center justify-center h-full">
          <Image
            src={imageData.image}
            width={imageData.width}
            height={imageData.height}
            alt={`이미지-${idx}`}
            aria-hidden="true"
          />

          <h4 className="bg-[var(--green-600)] text-white font-semibold p-1 pr-5 flex items-center rounded-full my-3">
            <span className="w-6 h-6 rounded-full inline-block font-bold bg-white text-[var(--green-600)] mr-3">
              {idx}
            </span>

            {title}
          </h4>
          <p className="text-sm whitespace-pre-line">{desc}</p>
        </div>
      </article>
    </motion.div>
  );
}
