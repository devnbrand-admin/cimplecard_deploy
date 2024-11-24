'use client'
import React, { useState } from "react";



export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-[url('/hero-bg.jpg')] bg-cover bg-center text-white min-h-screen">
      {/* Header */}
     

      {/* Hero Section */}
      

      {/* We Can Help You Find Your Future Section */}
      

      {/* Psychic Reading Section */}
      

      {/* Carousel Component (Image slider) */}
     

      {/* Testimonial Carousel Section */}
      

      {/* Subscribe Section */}
      

      {/* Footer */}
      
    </div>
  );
}
