import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[600px] text-center py-20 flex items-center"
      style={{
        backgroundImage: `url('/hero-bg.jpg')`,
      }}
    >
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to <span className="text-purple-400">Witchcraft</span>
        </h1>
        <p className="text-lg md:text-xl mt-4">
          We can help you find your future with spiritual insights.
        </p>
        <button className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded">
          Schedule a Reading
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
