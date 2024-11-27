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
    <section className="text-center pt-10 bg-black text-white">
      <h2 className="text-4xl font-bold mb-12 mt-10">What My Clients Say</h2>
      <div className="container mx-auto">
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
          className="w-11/12 md:w-10/12"
        >
          {testimonials.map((testi, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 border border-gray-700 rounded-lg bg-black/70 text-white shadow-lg">
                <img
                  src={testi.image}
                  alt={`${testi.name}'s photo`}
                  className="w-16 h-16 mx-auto rounded-full mb-4 border-2 border-purple-600"
                />
                <p className="mb-4 italic text-gray-300">{`"${testi.feedback}"`}</p>
                <div className="font-semibold text-purple-500">
                  {testi.name}
                </div>
                <div className="mt-2 text-yellow-400 text-lg">
                  {"⭐".repeat(testi.rating)}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
