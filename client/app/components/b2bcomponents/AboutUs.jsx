import React from "react";
import Image from "next/image";
import OfficeImage from "@/app/assets/group.png";

function AboutUs() {
  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${OfficeImage.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-400 bg-opacity-70"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About Us
        </h2>
        <p className="text-lg md:text-xl text-white text-start leading-relaxed tracking-wide font-medium max-w-4xl mb-6">
          We provide{" "}
          <span className="font-semibold text-blue-300">
            innovative technology solutions
          </span>{" "}
          that drive business growth and efficiency. Our mission is to empower
          organizations with cutting-edge tools and strategies for long-term
          success. By fostering innovation and collaboration, we help
          businesses navigate the ever-evolving technological landscape.
        </p>
        <p className="text-lg md:text-xl text-white text-start leading-relaxed tracking-wide font-medium max-w-4xl">
          With a dedicated team of professionals, we prioritize delivering
          quality, reliability, and value to our clients, ensuring their
          journey to success is seamless and impactful.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
