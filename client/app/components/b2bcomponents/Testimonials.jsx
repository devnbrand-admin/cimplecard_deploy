"use client";
import React, { useState, useRef } from "react";
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
    <div className="w-full bg-gray-100 py-12">
      <h2 className="text-center text-4xl font-bold mb-8 tracking-wide text-black">
  What Our Client Say's
</h2>
<p>
  
</p>


      <div className="relative w-full overflow-hidden">
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-72 transform -translate-y-1/2 bg-gray-300 p-3 rounded-full shadow-md hover:bg-gray-400 z-10"
        >
          <MdArrowBack size={30} />
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
              <div className="bg-white rounded-lg shadow-lg p-8 mx-4 flex flex-col items-center space-y-6 max-w-2xl">
                <span className="text-red-500 text-8xl font-bold">
                  &#x07F5;&#x07F5;
                </span>
                <p className="italic text-xl text-center text-gray-700">
                  "{testimonial.testimonial}"
                </p>

                <img
                  src={testimonial.profileImg}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full shadow-lg object-cover"
                />

                
                <div>
                
                <p className="text-2xl font-bold">
                  {testimonial.name}
                </p>
                <p className="text-red-500 text-sm text-center font-medium">
                  {testimonial.designation}
                </p>

                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute top-1/2 right-72 transform -translate-y-1/2 bg-gray-300 p-3 rounded-full shadow-md hover:bg-gray-400 z-10"
        >
          <MdArrowForward size={30} />
        </button>
      </div>
    </div>
  );
}

export default TestimonialCarousel;
