import React from "react";

function HeroSection() {
  

  return (
    <div className="w-full h-[480px] flex flex-col items-center justify-center text-center px-4 md:px-12 lg:px-64 space-y-6 ">
      {/* Title */}
      <p className="font-Cormorant text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-snug">
        Discover Your <span className="italic">Celestial Path</span>
      </p>

      {/* Subtitle */}
      <p className="font-Mons text-white text-lg md:text-xl lg:text-3xl font-light leading-relaxed">
        Guided by the wisdom of the cosmos, Dr. Meera Sharma, a Ph.D. in Vedic Astrology, helps individuals unlock their true potential. With years of experience and a personalized approach, she empowers lives through insightful astrological guidance.
      </p>
    </div>
  );
}

export default HeroSection;
