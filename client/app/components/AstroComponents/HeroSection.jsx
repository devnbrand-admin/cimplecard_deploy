import React from "react";
import ProfileImage from "@/public/Profile.jpg";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaFacebook, FaBuilding } from "react-icons/fa";

function HeroSection() {
  const personalSocials = [
    {
      id: 1,
      title: "LinkedIn",
      url: "https://linkedin.com/in/johndoe",
      icon: <FaLinkedin className="text-purple-400" size={30} />,
    },
    {
      id: 2,
      title: "Twitter",
      url: "https://twitter.com/johndoe",
      icon: <FaTwitter className="text-blue-400" size={30} />,
    },
    {
      id: 3,
      title: "Facebook",
      url: "https://facebook.com/johndoe",
      icon: <FaFacebook className="text-blue-600" size={30} />,
    },
  ];

  const companySocials = [
    {
      id: 4,
      title: "Company LinkedIn",
      url: "https://linkedin.com/company/techsolutions",
      icon: <FaBuilding className="text-gray-300" size={30} />,
    },
  ];

  return (
    <div
      className="relative w-full h-screen text-white flex flex-col"
      style={{
        backgroundImage: `url('/hero-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Transparent Blur Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md"></div>

      {/* Content Section */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 md:px-16">
        {/* Profile Image */}
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-purple-400 shadow-lg mt-10">
          <Image
            src={ProfileImage}
            alt="Profile Image"
            layout="responsive"
            width={224}
            height={224}
            objectFit="cover"
            className="rounded-full"
          />
        </div>

        {/* Text Content */}
        <h1 className="mt-4 text-2xl md:text-3xl font-bold">John Doe</h1>
        <h2 className="text-lg md:text-xl font-medium text-gray-300 mt-2">
          Chief Technology Officer at{" "}
          <span className="text-purple-400 font-semibold">Tech Solutions Inc.</span>
        </h2>
        <p className="text-sm md:text-base text-gray-100 mt-2 max-w-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia natus voluptates tenetur laborum, pariatur debitis? Dignissimos necessitatibus, alias voluptates voluptate eligendi rerum rem temporibus quis ipsum vitae eos non!
        </p>

        {/* Social Links */}
        <div className="mt-10 flex flex-col gap-2">
          {/* Personal Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Personal Socials</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {personalSocials.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 hover:bg-purple-700 text-white rounded-lg px-4 py-2 shadow-md transition-all"
                >
                  {link.icon}
                  <span className="text-lg font-medium">{link.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Company Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company Socials</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {companySocials.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 hover:bg-purple-700 text-white rounded-lg px-4 py-2 shadow-md transition-all"
                >
                  {link.icon}
                  <span className="text-lg font-medium">{link.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
