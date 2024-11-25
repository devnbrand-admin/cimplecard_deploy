import React from "react";

const GuidanceSection = () => {
  return (
    <section className="py-20 relative bg-[#2b1923]">
 
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
        <div className="flex-shrink-0">
          <img
            src="/Design2.png"
            alt="Guidance Image"
            className="rounded-lg w-full h-[500px] md:w-[650px] object-contain"
          />
        </div>


        <div className="text-white text-center md:text-left relative">
          <h3 className="text-5xl font-semibold mb-4 text-right">
            We Can Help You Find Your Future
          </h3>
          <p className="text-lg max-w-xl text-right tracking-widest">
            Whether you're looking for guidance on your career, relationships,
            or spiritual path, our psychic readings provide the insights you
            need to move forward.
          </p>
          <button className="absolute mt-4 right-0 bg-transparent border-white border-2 hover:bg-purple-800 text-white px-6 py-3 rounded-lg">
            Schedule a Reading
          </button>
        </div>
      </div>
    </section>
  );
};

export default GuidanceSection;
