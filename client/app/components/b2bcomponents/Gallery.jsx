import React from "react";
import image1 from "../../assets/astrologerTemplate/Image1.png"; // Replace with your actual image paths
import image2 from "../../assets/astrologerTemplate/Image2.png";
import image3 from "../../assets/astrologerTemplate/Image3.png";
import Image from "next/image";

function Gallery() {
  return (
    <>
      <h1 className="font-Cormorant not-italic text-4xl md:text-5xl lg:text-6xl text-center text-white my-8">
        Gallery
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-4">
        {/* First Image Card */}
        <div className="flex justify-center">
          <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
            <Image
              src={image1}
              alt="Gallery Image 1"
              className="rounded-lg shadow-md"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Second Image Card */}
        <div className="flex justify-center">
          <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
            <Image
              src={image2}
              alt="Gallery Image 2"
              className="rounded-lg shadow-md"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Third Image Card */}
        <div className="flex justify-center">
          <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
            <Image
              src={image3}
              alt="Gallery Image 3"
              className="rounded-lg shadow-md"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
