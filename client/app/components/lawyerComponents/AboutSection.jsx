import React from "react";
import About from "../../assets/lawyerTemplate/About.png"; // Replace with your correct image path
import Image from "next/image";

function AboutSection() {
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
        {/* Title */}
        <h1 className="text-3xl md:text-6xl font-Garamond font-bold leading-tight mb-6">
          Advocating with Precision, <br /> Integrity & Expertise!
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl leading-relaxed font-serif text-gray-800">
          Arjun Mehra is a seasoned legal professional specializing in corporate
          law and civil litigation. Currently a Senior Associate at Integrity
          Legal Partners in New Delhi, he is known for providing tailored legal
          solutions to individuals and businesses alike.
          <br />
          
          A graduate of Symbiosis Law School, Pune, Arjun combines sharp
          analytical skills with a client-first approach. His work on complex
          legal matters and high-profile cases has earned him recognition as a
          trusted advisor in the industry.
          
          <br />
          Committed to protecting and empowering his clients, Arjun Mehra stands
          for integrity, precision, and results.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
