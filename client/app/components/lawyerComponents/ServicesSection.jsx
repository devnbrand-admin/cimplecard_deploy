"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import criminalLawImg from "../../assets/lawyerTemplate/Service1.png";
import familyLawImg from "../../assets/lawyerTemplate/Service2.png";
import corporateLawImg from "../../assets/lawyerTemplate/Service3.png";
import realEstateLawImg from "../../assets/lawyerTemplate/Service4.png";

const servicesData = [
  { id: 1, title: "Criminal Law", image: criminalLawImg },
  { id: 2, title: "Family Law", image: familyLawImg },
  { id: 3, title: "Corporate Law", image: corporateLawImg },
  { id: 4, title: "Real Estate Law", image: realEstateLawImg },
];

const ServicesSection = ({card}) => {
  return (
    <section className="py-10 px-4 bg-white relative">
      {/* Title */}
      <h2 className="text-6xl font-serif text-center mb-4">Services</h2>

      {/* Description */}
      <p className="text-gray-800 text-lg text-center max-w-4xl font-serif mx-auto mb-8 leading-relaxed">
        We offer comprehensive legal services in corporate law, civil
        litigation, and contract law. Our expertise spans navigating complex
        mergers and acquisitions, ensuring regulatory compliance, and providing
        effective representation in high-stakes disputes. With a client-first
        approach, we excel at drafting, negotiating, and resolving
        contract-related matters, delivering strategic and tailored solutions to
        meet your legal needs.
      </p>

      {/* Swiper Carousel */}
      <div className="relative max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="flex items-center"
        >
          {servicesData.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
              
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="brightness-10"
                />

              
                <div className="absolute inset-0 flex items-end mb-2 justify-center">
                  <h3 className="text-[#CB935D] text-3xl font-serif">
                    {service.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

       
        <div className="absolute -bottom-20 right-6 flex gap-2 z-10">
          <button className="custom-prev w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-yellow-600 transition border-[2px] border-yellow-400">
            <FaAngleLeft />
          </button>
          <button className="custom-next w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-yellow-600 transition border-[2px] border-yellow-400">
            <FaAngleRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
