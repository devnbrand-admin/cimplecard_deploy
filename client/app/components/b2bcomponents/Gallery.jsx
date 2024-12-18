import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import image1 from "../../assets/astrologerTemplate/Image1.png";
import image2 from "../../assets/astrologerTemplate/Image2.png";
import image3 from "../../assets/astrologerTemplate/Image3.png";

// Image Data
const galleryImages = [
  { id: 1, src: image1, alt: "Gallery Image 1" },
  { id: 2, src: image2, alt: "Gallery Image 2" },
  { id: 3, src: image3, alt: "Gallery Image 3" },
  { id: 4, src: image1, alt: "Gallery Image 4" },
  { id: 5, src: image2, alt: "Gallery Image 5" },
  { id: 6, src: image3, alt: "Gallery Image 6" },
];

function Gallery() {
  const swiperRef = useRef(null);

  // Custom Navigation Handlers
  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <div className="w-full px-4 sm:px-8 md:px-12 mb-20 mt-20 lg:mt-0">
      {/* Title */}
      <h1 className="font-Cormorant text-5xl lg:text-6xl text-center text-black mb-8">
        Gallery
      </h1>

      {/* Custom Navigation Buttons */}
      <div className="flex justify-between items-center max-w-5xl mx-auto mb-4">
        <button
          onClick={handlePrev}
          className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800"
        >
          &#8592; Prev
        </button>
        <button
          onClick={handleNext}
          className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800"
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
        className="max-w-5xl mx-auto"
      >
        {galleryImages.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    
      <div className="custom-pagination flex justify-center gap-2 mt-6"></div>
    </div>
  );
}

export default Gallery;
