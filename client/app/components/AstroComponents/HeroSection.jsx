import React from "react";

function HeroSection({ card }) {
  return (
    <div className="w-full h-[480px] flex flex-col items-center justify-center text-center px-20 lg:px-32 xl:px-64 space-y-6 ">
      {/* Title */}
      <p className="font-Cormorant text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-snug">
        Discover Your <span className="italic">{card?.title}</span>
      </p>

      {/* Subtitle */}
      <p className="font-Mons text-white text-lg md:text-xl lg:text-xl font-light leading-relaxed">
        {card?.aboutUs}
      </p>
    </div>
  );
}

export default HeroSection;
