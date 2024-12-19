import React from "react";

const Testimonal = ({ card }) => {
  return (
    <div
      className="w-full flex p-3 md:h-fit lg:h-[80vh] flex-col md:flex-row justify-center items-start align-start mt-4 md:mt-8"
      id="Testimonials"
    >
      <h1
        className="text-3xl md:text-6xl h-full lg:text-8xl w-full md:w-96 m-4 md:m-10 text-center md:text-left"
        style={{ color: "#0B8823", fontWeight: 700 }}
      >
        Hear from my happy clients..
      </h1>
      <div
        className="w-full md:w-1/3 h-auto md:h-3/4 flex flex-col justify-center p-2 md:p-3"
        style={{ backgroundColor: "#D8ECDC" }}
      >
        {(card.testimonials && card.testimonials.length > 0
          ? card.testimonials
          : ["no testimonals added"]
        ).map((testimonial, index) => (
          <p
            key={index}
            className="rounded-lg bg-white p-2 md:p-3 m-1 md:m-2 text-xs md:text-sm"
            style={{ color: "#0B8823" }}
          >
            {testimonial}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Testimonal;
