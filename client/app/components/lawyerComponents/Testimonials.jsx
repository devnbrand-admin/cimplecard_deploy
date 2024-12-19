import Image from 'next/image';
import React from 'react';
import TestimonialImage from "../../assets/lawyerTemplate/Testimonial.png"

const Testimonials = () => {
  return (
    <div className="relative mt-24 flex flex-col lg:flex-row items-start  justify-between w-full py-12 px-4 md:px-16">
      {/* Left Content Section */}
      <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
        <h5 className="text-lg font-medium uppercase text-gray-600 tracking-widest">
          Testimonials
        </h5>
        <h2 className="text-6xl font-Cormorant font-medium text-gray-800 mt-2 mb-8">
          What Our Clients Are Saying
        </h2>

        {/* Testimonial Card */}
        <div className="relative bg-[#EEC297] text-gray-700 font-serif p-12 rounded-md shadow-lg w-full left-9 z-10 lg:block hidden">
          <p className="leading-relaxed text-base md:text-lg mb-4">
            Working with Arjun Mehra was a game-changer for my business. His deep knowledge of corporate law and meticulous attention to detail ensured that every aspect of our merger was handled flawlessly. He took the time to understand our goals and offered practical, strategic advice that made the entire process seamless. Arjun’s professionalism, clear communication, and dedication to our case left a lasting impression. I couldn’t have asked for a better legal partner.
          </p>
          <p className="font-bold text-lg">Rajveer Khanna</p>
          <p className="text-base md:text-lg">CEO of Innovate Solutions</p>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full lg:w-1/2 relative">
        <div className="relative w-full h-96 lg:h-[700px]">
          <Image
            src={TestimonialImage} // Replace with your imported image
            alt="Client Handshake"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>

        {/* Overlapping Card on Image for Small Screens */}
        <div className="absolute bottom-0 left-0 lg:hidden bg-[#EEC297] p-6 w-[90%] shadow-lg">
          <p className="leading-relaxed text-sm md:text-base mb-4">
            Working with Arjun Mehra was a game-changer for my business. His deep knowledge of corporate law and meticulous attention to detail ensured that every aspect of our merger was handled flawlessly.
          </p>
          <p className="font-bold text-lg">Rajveer Khanna</p>
          <p className="text-sm">CEO of Innovate Solutions</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
