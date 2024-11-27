import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mary Simon",
      rating: 5,
      feedback: "Amazing reading experience!",
      image: "https://picsum.photos/100?random=1",
    },
    {
      name: "John Doe",
      rating: 4,
      feedback: "Helped me find clarity.",
      image: "https://picsum.photos/100?random=2",
    },
    {
      name: "Alice Brown",
      rating: 5,
      feedback: "Insightful and life-changing advice.",
      image: "https://picsum.photos/100?random=3",
    },
    {
      name: "Michael Green",
      rating: 4,
      feedback: "Very accurate and helpful!",
      image: "https://picsum.photos/100?random=4",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-teal-50 to-white text-center">
      <h2 className="text-4xl font-bold mb-12 text-teal-700">
        What My Clients Say
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-11/12 md:w-10/12 mx-auto"
      >
        {testimonials.map((testi, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-lg transition-shadow">
              <img
                src={testi.image}
                alt={`${testi.name}'s photo`}
                className="w-16 h-16 mx-auto rounded-full mb-4 border-2 border-teal-300"
              />
              <p className="italic text-gray-600 mb-4">{`"${testi.feedback}"`}</p>
              <div className="text-lg font-medium text-teal-700">
                {testi.name}
              </div>
              <div className="mt-2 text-yellow-400 text-lg">
                {"⭐".repeat(testi.rating)}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
