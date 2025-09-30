"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageSlider({ images }) {
  return (
    <div className="relative aspect-square w-full my-4 mx-auto bg-white rounded overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={false}
        className="h-full w-full"
        style={{
          "--swiper-theme-color": "#2e7b10",
          "--swiper-navigation-color": "#FFFFFF",
          "--swiper-pagination-bullet-inactive-opacity": "0.1",
          "--swiper-navigation-size": "40px",
        }}
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <Image src={image} fill className="object-cover" alt={index} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
