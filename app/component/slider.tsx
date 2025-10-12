"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function ImageSlider() {
  const images = [
    "/images/Transition Programme Design cover.png",
    "/images/Transition Programme Design inner.png",
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto py-10">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        className="rounded-2xl shadow-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <motion.img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-[100%] h-auto object-contain rounded-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
