import React from "react";
import About from "../../assets/lawyerTemplate/About.png"; // Replace with your correct image path
import Image from "next/image";

function AboutSection({card}) {
  return (
    <section className="relative bg-white text-[#121F2E] px-6 md:px-20 py-32">
      {/* Background Image */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 hidden md:block">
  <Image
    src={About}
    alt="Scales of Justice"
    layout="fill"
    objectFit="cover"
    priority={true}
  />
</div>

      {/* Content Container */}
      <div className="relative max-w-4xl mx-auto text-center z-10">
     
        <h1 className="text-3xl md:text-6xl font-Garamond font-bold leading-tight mb-6">
          Advocating with Precision, <br /> Integrity & Expertise!
        </h1>

       
        <pre className="text-lg md:text-xl leading-relaxed font-serif text-gray-800">
          {card.aboutUs}
        </pre>
      </div>
    </section>
  );
}

export default AboutSection;
