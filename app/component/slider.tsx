"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,} from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { Swiper as SwiperType } from "swiper";

export default function ImageSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  const images = [
    "/images/slide1.jpeg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
    "/images/slide4.jpeg",
  ];

  return (
    <div className="relative w-full h-screen group">
      {/* Swiper Container */}
      <div className="relative w-full h-full">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="w-full h-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="w-full h-full flex justify-center items-center relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-[360px] h-auto object-cover"
                />
                {/* Optional overlay for better text visibility if needed */}
                <div className="absolute inset-0 bg-black/20" />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Next Button */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 
                     bg-white/90 hover:bg-white 
                     backdrop-blur-sm
                     text-gray-800 hover:text-gray-900
                     w-10 h-10 md:w-14 md:h-14 rounded-full 
                     flex items-center justify-center
                     shadow-lg hover:shadow-xl
                     transition-all duration-300 
                     opacity-0 group-hover:opacity-100
                     focus:opacity-100
                     hover:scale-110
                     z-20
                     border border-gray-200"
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5 md:w-7 md:h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Custom Previous Button */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 
                     bg-white/90 hover:bg-white 
                     backdrop-blur-sm
                     text-gray-800 hover:text-gray-900
                     w-10 h-10 md:w-14 md:h-14 rounded-full 
                     flex items-center justify-center
                     shadow-lg hover:shadow-xl
                     transition-all duration-300 
                     opacity-0 group-hover:opacity-100
                     focus:opacity-100
                     hover:scale-110
                     z-20
                     border border-gray-200"
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5 md:w-7 md:h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      {/* Progress indicator - positioned at bottom center */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperRef.current?.slideTo(index)}
            className="w-2 h-2 rounded-full bg-white/50 hover:bg-white/80 
                       transition-all duration-300"
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
