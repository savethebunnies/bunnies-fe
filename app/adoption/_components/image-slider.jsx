"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import clsx from "clsx";
import { useState } from "react";

export default function ImageSlider({ images }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  return (
    <div className="relative aspect-[4/5] w-full my-4 mx-auto bg-white rounded-md overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="h-full w-full"
        style={{
          "--swiper-theme-color": "#2e7b10",
          "--swiper-navigation-color": "#FFFFFF",
          "--swiper-pagination-bullet-inactive-opacity": "0.1",
          "--swiper-navigation-size": "40px",
        }}
        onSlideChange={(swiper) => {
          setCurrentSlideIndex(swiper.realIndex);
        }}
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className={clsx(
                "relative h-full w-full overflow-visible"
                // currentSlideIndex == 0 && "frame"
              )}
            >
              <Image src={image} fill className="object-cover" alt={index} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
