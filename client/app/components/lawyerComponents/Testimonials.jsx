'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import TestimonialImage from "../../assets/lawyerTemplate/Testimonial.png";
import testimonials from "../../data/LawyerTemplate/testimonial.json";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-24 flex flex-col lg:flex-row items-start justify-between w-full py-12 px-4 md:px-16">
      <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
        <h5 className="text-lg font-medium uppercase text-gray-600 tracking-widest">
          Testimonials
        </h5>
        <h2 className="text-6xl font-Cormorant font-medium text-gray-800 mt-2 mb-8">
          What Our Clients Are Saying
        </h2>

        <div className="relative bg-[#EEC297] text-gray-700 font-serif p-12 rounded-md shadow-lg w-full left-9 z-10 lg:block hidden">
          <p className="leading-relaxed text-base md:text-lg mb-4">
            {testimonials[currentIndex].text}
          </p>
          <p className="font-bold text-lg">{testimonials[currentIndex].name}</p>
          <p className="text-base md:text-lg">{testimonials[currentIndex].position}</p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 relative">
        <div className="relative w-full h-96 lg:h-[700px]">
          <Image
            src={TestimonialImage}
            alt="Client Handshake"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>

        <div className="absolute bottom-0 left-0 lg:hidden bg-[#EEC297] p-6 w-[90%] shadow-lg">
          <p className="leading-relaxed text-sm md:text-base mb-4">
            {testimonials[currentIndex].text}
          </p>
          <p className="font-bold text-lg">{testimonials[currentIndex].name}</p>
          <p className="text-sm">{testimonials[currentIndex].position}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
