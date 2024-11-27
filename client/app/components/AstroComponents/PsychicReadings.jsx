import React from "react";
import Design from "../../assets/Design.png"
import Image from "next/image";

const PsychicReadings = () => {
  return (
    <section className="w-full flex justify-center items-end relative h-screen">

      <div className="absolute inset-0 -z-10">

  <Image
    src={Design}
    alt="Background"
    layout="fill"
    objectFit="cover"
    quality={100}
    priority
  />

  <div className="absolute inset-0 bg-black/50"></div>
</div>

      <div className="w-full flex flex-col items-center justify-center text-center px-4">

        <h3 className="text-6xl font-extrabold mb-6 text-teal-400 tracking-wide drop-shadow-lg">
          Psychic Readings
        </h3>


        <p className="text-xl max-w-3xl mx-auto mb-10 text-gray-300 leading-relaxed">
          Discover the magic of psychic readings to gain insight and clarity in
          your life. Our skilled psychics provide guidance tailored to your
          needs.
        </p>


        <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-teal-500/50 transform transition-all hover:scale-105">
          Book a Reading
        </button>
      </div>
    </section>
  );
};

export default PsychicReadings;
