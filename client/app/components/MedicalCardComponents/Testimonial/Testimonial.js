'use client';
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    content:
      "Zen Doan is a business analyst, entrepreneur and media proprietor, and investor. She also known as the best selling book author.",
    name: "Zen",
    title: "Author",
    img: "https://user-images.githubusercontent.com/13468728/234031693-6bbaba7d-632c-4d7d-965f-75a76a549ce2.jpg",
  },
  {
    content:
      "Jonathan Koletic is an American internet entrepreneur and media proprietor, and investor. He is the founder of the multi-national technology company Treymont.",
    name: "Jonathan",
    title: "Treymont Inc.",
    img: "https://user-images.githubusercontent.com/13468728/234031617-2dfb19ea-01d0-4370-b63b-bb6bdfb4f78e.jpg",
  },
  {
    content:
      "Charlie Green is an European entrepreneur and media consultant, and investor. He is the founder of the Hallmark Inc.",
    name: "Charlie",
    title: "Hallmark Inc.",
    img: "https://user-images.githubusercontent.com/13468728/234031646-10533999-39e5-4c7b-ab54-d0299b13ce74.jpg",
  },
  {
    content:
      "Sarah Dam is an American internet entrepreneur and media proprietor, and investor. She is the founder of the multi-national technology company Zara.",
    name: "Sarah",
    title: "Zara Inc.",
    img: "https://github.com/ecemgo/ecemgo/assets/13468728/55116c98-5f9a-4b0a-9fdb-4911b52d5ef3",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      updateSlide(currentIndex);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  return (
    <div className="relative mt-[10vh] flex flex-col items-center min-h-screen py-8">
      <h1 className="text-5xl font-extrabold text-center mb-8">Testimonials</h1>
      <main className="w-[800px] max-w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex items-center justify-between p-8 h-[400px]"
            >
              <div className="bg-white/70 backdrop-blur-sm shadow-lg rounded-lg p-6 w-2/3">
                <p className="text-gray-700 text-lg">{testimonial.content}</p>
                <h2 className="text-xl font-semibold mt-4">{testimonial.name}</h2>
                <p className="text-sm font-medium text-gray-600">
                  {testimonial.title}
                </p>
              </div>
              <div className="w-[200px]">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </main>
      <div className="flex mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-4 w-4 rounded-full transition-all ${
              currentIndex === index ? 'w-6 bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => updateSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
