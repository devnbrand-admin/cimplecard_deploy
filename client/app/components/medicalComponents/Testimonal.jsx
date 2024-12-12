import React from "react";

const Testimonal = () => {
  return (
    <div
      className="w-full flex justify-center mt-8"
      id="Testimonials"
      style={{ height: "80vh" }}
    >
      <h1
        className="text-8xl w-96 m-10"
        style={{ color: "#0B8823", fontWeight: 700 }}
      >
        Hear from my happy clients..
      </h1>
      <div
        className="w-1/3 h-3/4 flex h-full flex-col justify-center p-3"
        style={{ backgroundColor: "#D8ECDC" }}
      >
        {[1, 2, 3].map((i, ind) => (
          <p
            key={ind}
            className="rounded-lg bg-white p-3 m-1 text-sm"
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
