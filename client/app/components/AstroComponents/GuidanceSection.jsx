import React from "react";
import Design2 from "../../assets/Design2.png"
import Image from "next/image";

const GuidanceSection = () => {
  return (
    <section className="py-20 relative bg-[#1a202c]">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
        <div className="flex-shrink-0">
        <Image
    src={Design2}
    alt="Guidance Image"
    className="rounded-lg object-cover"
    layout="intrinsic"
    width={550}
    height={300}
  />
        </div>

        <div className="text-white text-center md:text-left relative">
          <h3 className="text-5xl font-extrabold mb-6 text-teal-400 tracking-wide drop-shadow-lg">
            We Can Help You Find Your Future
          </h3>
          <p className="text-xl max-w-xl mx-auto md:mx-0 mb-8 text-gray-300 leading-relaxed">
            Whether you're looking for guidance on your career, relationships, or spiritual path,
            our psychic readings provide the insights you need to move forward.
          </p>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-teal-500/50 transform transition-all hover:scale-105">
            Schedule a Reading
          </button>
        </div>
      </div>
    </section>
  );
};

export default GuidanceSection;
