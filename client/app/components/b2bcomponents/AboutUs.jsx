import React from "react";
import Image from "next/image";
import OfficeImage from "@/public/officeimage.jpg";

function AboutUs() {
  return (
    <div className="relative py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row items-stretch lg:space-x-16">
        <div className="lg:w-1/2 flex flex-col justify-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            About Us
          </h2>
          <div className="relative w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

          <p className="text-xl text-gray-800 leading-relaxed tracking-wide font-medium">
            We provide{" "}
            <span className="text-blue-500 font-semibold">
              innovative technology solutions
            </span>{" "}
            that drive business growth and efficiency. Our mission is to
            empower organizations with cutting-edge tools and strategies for
            long-term success. By fostering innovation and collaboration, we
            help businesses navigate the ever-evolving technological landscape.
          </p>
          <p className="text-xl text-gray-800 leading-relaxed tracking-wide font-medium">
            With a dedicated team of professionals, we prioritize delivering
            quality, reliability, and value to our clients, ensuring their
            journey to success is seamless and impactful.
          </p>
        </div>

          <div className="relative w-full h-full lg:h-auto shadow-lg rounded-2xl overflow-hidden bg-blue-100">
            <Image
              src={OfficeImage}
              alt="Office Environment"
              layout="fill"
              objectFit="contain"
              priority
              className="object-cover"
            />
          </div>
      </div>
    </div>
  );
}

export default AboutUs;
