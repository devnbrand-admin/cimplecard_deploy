'use client';
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

// Example profile images (replace with actual images)
import Profile1 from "../../assets/astrologerTemplate/Profile1.png";
import Profile2 from "../../assets/astrologerTemplate/Profile2.png";
import Profile3 from "../../assets/astrologerTemplate/Profile3.png";
import Profile4 from "../../assets/astrologerTemplate/Profile4.png";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      text: "After Astrolex reading, I now look up at the night sky and see a whole new wondrous Universe reflecting back at me. Their writings & courses have my attention, and that’s one of the most valuable currencies.",
      position: "Systems Analyst",
      name:"Theresa Webb",
      image: Profile1,
      rating: 4.5,
    },
    {
      text: "After Astrolex reading, I now look up at the night sky and see a whole new wondrous Universe reflecting back at me. Their writings & courses have my attention, and that’s one of the most valuable currencies.",
      name: "Bessie Cooper",
      position: "Analyst",
      image: Profile2,
      rating: 5,
    },
    {
      text: "After Astrolex reading, I now look up at the night sky and see a whole new wondrous Universe reflecting back at me. Their writings & courses have my attention, and that’s one of the most valuable currencies.",
      name: "Courtney Henry",
      position: "Web Developer",
      image: Profile3,
      rating: 4,
    },
    {
      text: "After Astrolex reading, I now look up at the night sky and see a whole new wondrous Universe reflecting back at me. Their writings & courses have my attention, and that’s one of the most valuable currencies.",
      name: "Annette Black",
      position: "IT Technician",
      image: Profile4,
      rating: 4.8,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <FaRegStar key={i} className="text-gray-300" />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full py-12 text-white">
      {/* Section Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="font-Cormorant italic text-4xl md:text-5xl lg:text-6xl">
          Guided by the Stars,<span className="not-italic"> Loved by Many!</span>
        </h2>
        <p className="font-Mons text-lg md:text-xl lg:text-2xl font-light mt-4 px-4 md:px-10 lg:px-32 xl:px-72">
          Discover how our guidance has brought clarity, positivity, and transformation to the lives of our clients.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Cards Wrapper */}
        <div className="overflow-hidden px-6 md:px-12 lg:px-24">
          <div
            className="flex transition-transform ease-in-out duration-500"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full md:w-1/3 flex-shrink-0 p-4"
              >
                <div className="bg-white text-black rounded-lg shadow-lg p-6 flex flex-col justify-between h-full font-Mons">
                  <p className="text-base md:text-lg font-light mb-4 text-center">{testimonial.text}</p>
                  <div className="flex flex-col items-center mt-4">
                    <img
                      src={testimonial.image.src}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mb-4"
                    />
                    <h3 className="text-lg md:text-2xl font-extrabold">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm md:text-xl font-light">{testimonial.position}</p>
                    <div className="mt-2">{renderStars(testimonial.rating)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute -bottom-10 right-4 flex space-x-3">
          <button
            onClick={handlePrev}
            className="text-gray-800 hover:text-white bg-white rounded-lg p-3 hover:bg-gray-700"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="text-gray-800 hover:text-white bg-white rounded-lg p-3 hover:bg-gray-700"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
