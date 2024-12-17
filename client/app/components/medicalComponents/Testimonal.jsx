import React from "react";

const Testimonal = () => {
  return (
    <div
      className="w-full flex p-3 md:h-fit lg:h-[80vh] flex-col md:flex-row justify-center items-start align-start mt-4 md:mt-8"
      id="Testimonials"
      // style={{ height: "80vh" }}
    >
      <h1
        className="text-3xl md:text-6xl h-full lg:text-8xl w-full md:w-96 m-4 md:m-10 text-center md:text-left"
        style={{ color: "#0B8823", fontWeight: 700 }}
      >
        Hear from my happy clients..
      </h1>
      <div
        className="w-full  md:w-1/3 h-auto md:h-3/4 flex flex-col justify-center p-2 md:p-3"
        style={{ backgroundColor: "#D8ECDC" }}
      >
        {[1, 2, 3].map((i, ind) => (
          <p
            key={ind}
            className="rounded-lg bg-white p-2 md:p-3 m-1 md:m-2 text-xs md:text-sm"
            style={{ color: "#0B8823" }}
          >
            Dr. Owusu is an exceptional doctor who truly cares about his
            patients. His bedside manner is outstanding, and he takes the time
            to explain everything in a way that's easy to understand. I highly
            recommend him!" - Emily A., USA
          </p>
        ))}
      </div>
    </div>
  );
};

export default Testimonal;
