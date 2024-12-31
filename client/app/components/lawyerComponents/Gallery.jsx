'use client';
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Gallery = ({ card }) => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <div className="w-full px-4 sm:px-8 md:px-12 mt-20 lg:mt-0">
      <h1 className="font-Cormorant not-italic text-4xl md:text-5xl lg:text-6xl text-center text-black my-8">
        Gallery
      </h1>

      <div className="flex justify-between items-center max-w-5xl mx-auto mb-4">
        <button
          onClick={handlePrev}
          className="bg-black text-[#CB935D] px-4 py-2 rounded-full hover:bg-gray-800"
        >
          &#8592; Prev
        </button>
        <button
          onClick={handleNext}
          className="bg-black text-[#CB935D] px-4 py-2 rounded-full hover:bg-gray-800"
        >
          Next &#8594;
        </button>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1008: { slidesPerView: 3 },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={{ el: ".custom-pagination", clickable: true }}
        loop={true}
        className="max-w-5xl overflow-y-visible mx-auto rounded-lg"
      >
        {card?.gallery?.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl">
              <div className="w-full h-full rounded-lg overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt || `Gallery Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination flex justify-center gap-2 mt-6 text-white pb-6"></div>
    </div>
  );
};

export default Gallery;
