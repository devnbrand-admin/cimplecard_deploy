import React from "react";

const PsychicReadings = () => {
  return (
    <section className="w-full flex justify-center items-end relative h-screen">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `url('/Design.png')`,
        }}
      />

      <div className="w-full flex flex-col items-center justify-center text-center px-4">
        <h3 className="text-4xl font-semibold mb-6 text-white">
          Psychic Readings
        </h3>

        <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-300">
          Explore the art of psychic readings and how they can help you gain
          clarity in your life. Our team of experienced psychics offers
          personalized readings.
        </p>

        <button className="border-purple-600 border-2 hover:bg-purple-800 text-white px-6 py-3 rounded">
          Book a Reading
        </button>
      </div>
    </section>
  );
};

export default PsychicReadings;
