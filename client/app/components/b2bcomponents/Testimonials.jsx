"use client";
import React, { useState, useRef } from "react";
import PeopleImage from "@/app/assets/people.png";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const testimonials = [
  {
    name: "Alice Johnson",
    designation: "CEO, Innovate Corp",
    testimonial:
      "Tech Solutions Inc. has been instrumental in helping us scale our operations. Their team is highly skilled and professional.",
    profileImg:
      "https://www.gannett-cdn.com/presto/2019/01/24/USAT/e7b1a151-1fde-4bfa-b494-43395bd61330-USP_News__Alice_Marie_Johnson.JPG?crop=2870,1614,x93,y205&width=3200&height=1680&fit=bounds",
  },
  {
    name: "Bob Smith",
    designation: "CTO, Future Ventures",
    testimonial:
      "We've partnered with Tech Solutions for over 3 years, and their commitment to excellence is unmatched.",
    profileImg:
      "https://th.bing.com/th/id/OIP.xyasthEsflgnCTam0w3H1AHaE7?rs=1&pid=ImgDetMain",
  },
  {
    name: "Carla Peterson",
    designation: "Product Manager, DreamTech",
    testimonial:
      "The expertise of Tech Solutions has been invaluable in launching our new platform on time and within budget.",
    profileImg:
      "https://th.bing.com/th/id/OIP.IGdJMTbPoAeZcjav9pu66QHaE8?rs=1&pid=ImgDetMain",
  },
  {
    name: "David Brown",
    designation: "Founder, NextWave AI",
    testimonial:
      "Tech Solutions delivers outstanding results. Their innovative approach to solving challenges is truly impressive.",
    profileImg: "https://i.ytimg.com/vi/M_y9yUjdPT4/maxresdefault.jpg",
  },
];

function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStart, setDragStart] = useState(null);
  const [dragDistance, setDragDistance] = useState(0);
  const isDragging = useRef(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleDragStart = (e) => {
    isDragging.current = true;
    setDragStart(e.clientX || e.touches[0].clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging.current) return;

    const currentPosition = e.clientX || e.touches[0].clientX;
    setDragDistance(currentPosition - dragStart);
  };

  const handleDragEnd = () => {
    isDragging.current = false;

    if (dragDistance > 100) {
      handlePrev();
    } else if (dragDistance < -100) {
      handleNext();
    }

    setDragDistance(0);
  };

  return (
    <div
  className="w-full h-screen bg-cover bg-center relative flex justify-center items-center"
  style={{ backgroundImage: `url(${PeopleImage.src})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-blue-400 bg-opacity-50"></div>

  <div className="relative w-full max-w-6xl">
    <h2 className="text-center text-5xl font-bold mb-10 tracking-wide text-white z-10">
      What Our Client Says
    </h2>

    {/* Testimonial Card */}
    <div className="relative w-full overflow-hidden">
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-200 z-20"
      >
        <MdArrowBack size={25} />
      </button>

      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(calc(-${currentIndex * 100}% + ${dragDistance}px))`,
        }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="min-w-full flex-shrink-0 flex justify-center"
          >
            <div className="bg-white rounded-lg shadow-xl p-12 mx-8 flex items-center space-x-10 max-w-4xl relative h-80">
              {/* Circular Image */}
              <div className="flex-shrink-0 relative">
                <div className="w-40 h-40 rounded-full border-4 border-blue-400 overflow-hidden">
                  <img
                    src={testimonial.profileImg}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex flex-col space-y-4">
                <p className="text-xl italic text-gray-700">
                  "{testimonial.testimonial}"
                </p>
                <div>
                  <p className="text-2xl font-bold text-blue-600">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 font-medium">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-200 z-20"
      >
        <MdArrowForward size={25} />
      </button>
    </div>
  </div>
</div>

  );
}

export default TestimonialCarousel;
