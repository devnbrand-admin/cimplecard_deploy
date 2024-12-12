import React from "react";

// Example image imports (replace with your actual images)
import TarotImage from "../../assets/astrologerTemplate/Tarrot.png";
import HoroscopeImage from "../../assets/astrologerTemplate/Horoscope.png";
import CompatibilityImage from "../../assets/astrologerTemplate/Compatibility.png";
import FinanceImage from "../../assets/astrologerTemplate/Finance.png";
import ConsultationImage from "../../assets/astrologerTemplate/Consultation.png";
import BirthChartImage from "../../assets/astrologerTemplate/BirthChart.png";

const ServicesSection = () => {
  const services = [
    {
      title: "Tarot Card Reading",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      bgImage: TarotImage,
    },
    {
      title: "Daily Horoscope",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      bgImage: HoroscopeImage,
    },
    {
      title: "Compatibility Reports",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      bgImage: CompatibilityImage,
    },
    {
      title: "Career & Finance Reading",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      bgImage: FinanceImage,
    },
    {
      title: "Personal Consultations",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      bgImage: ConsultationImage,
    },
    {
      title: "Birth Chart Generator",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      bgImage: BirthChartImage,
    },
  ];

  return (
    <div className="w-full py-12 text-white">
      {/* Section Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="font-Cormorant italic text-4xl md:text-5xl lg:text-6xl">
          Illuminating Paths,<span className="not-italic"> One Star at a Time</span> 
        </h2>
        <p className="font-Mons text-lg md:text-xl lg:text-xl font-light mt-4 px-4 md:px-10 lg:px-32 xl:px-72">
          Unlock the mysteries of your life with expert astrological insights.
          Our services are designed to provide clarity, guidance, and solutions
          tailored to your unique journey.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-lg flex items-center justify-center"
            style={{
              backgroundImage: `url(${service.bgImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              aspectRatio: "4/4", // Maintain image proportions
            }}
          >
            <div className="absolute inset-0 bg-white bg-opacity-20 transition-opacity group-hover:bg-opacity-10"></div>
            <div className="relative z-10 text-center font-Mons px-4">
              <h3 className="text-xl md:text-2xl font-bold">{service.title}</h3>
              <p className="text-sm md:text-base px-2 md:px-4 font-light mt-2">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
