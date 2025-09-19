"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function FloatBtn() {
  const y = useMotionValue(0);
  const animRef = useRef(null);

  useEffect(() => {
    animRef.current = animate(y, [0, -8, 0], {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    });
    return () => animRef.current?.stop();
  }, [y]);

  return (
    <motion.div
      style={{ y }}
      onHoverStart={() => animRef.current?.pause()}
      onHoverEnd={() => animRef.current?.play()}
      className="inline-block transform-gpu will-change-transform"
    >
      <Button>
        <Link href="/adaption" className="flex gap-2">
          유기토끼 만나러 가기
          <img src="/arrow-right.svg" aria-hidden="true" />
        </Link>
      </Button>
    </motion.div>
  );
}
