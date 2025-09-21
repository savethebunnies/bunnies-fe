"use client";
import { motion } from "framer-motion";

export default function Inner({ children, section, heading, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0 }}
    >
      <div className="py-[var(--section-py)] side-margin text-center max-w-screen-lg">
        <h2
          id={`${section}-heading`}
          className="text-xl font-semibold mb-2 inline-block relative"
        >
          {heading}
          {section == "adoption" && (
            <div>
              <span className="bg-[url('/heart.png')] w-8 h-8 bg-contain inline-block absolute -left-9 -top-1" />
              <span className="bg-[url('/heart.png')] w-8 h-8 bg-contain inline-block absolute -right-9 -top-1" />
            </div>
          )}
        </h2>
        <p id={`${section}-subtitle`} className="text-sm mt-1">
          {subtitle}
        </p>
        {children}
      </div>
    </motion.div>
  );
}
