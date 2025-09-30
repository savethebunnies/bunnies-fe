"use client";

import Lottie from "react-lottie-player";
import lottieJson from "/public/loading.json";
import { ContentCenter } from "@/components/ui/containers";

export default function LottieAnimation() {
  return (
    <ContentCenter className="top-1/4">
      <div style={{ width: 300, height: 300 }}>
        <Lottie
          animationData={lottieJson}
          play={true}
          loop={true}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </ContentCenter>
  );
}
