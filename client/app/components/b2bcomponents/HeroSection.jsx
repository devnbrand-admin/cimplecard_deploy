import React from "react";
import HeroImage from "@/public/hero1.jpg";
import ProfileImage from "@/public/Profile.jpg";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaFacebook, FaBuilding } from "react-icons/fa";

function HeroSection() {
  const personalSocials = [
    {
      id: 1,
      title: "LinkedIn",
      url: "https://linkedin.com/in/johndoe",
      icon: <FaLinkedin className="text-blue-600" size={30} />,
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
      icon: <FaFacebook className="text-blue-700" size={30} />,
    },
  ];

  const companySocials = [
    {
      id: 4,
      title: "Company LinkedIn",
      url: "https://linkedin.com/company/techsolutions",
      icon: <FaBuilding className="text-gray-600" size={30} />,
    },
  ];

  return (
    <div className="w-full h-auto bg-gray-100">
      <div className="relative w-full h-60 md:h-72">
        <Image
          src={HeroImage}
          layout="fill"
          objectFit="cover"
          alt="Hero Background"
          priority
          className="object-cover"
        />
      </div>

      <div className="relative bg-white shadow-md px-6 md:px-16 py-8 -mt-24 z-10">
        <div className="absolute left-1/2 -top-24 transform -translate-x-1/2 md:left-20 md:-translate-x-0">
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
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
        </div>

        <div className="flex flex-col items-center md:items-start md:ml-64 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            John Doe
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-gray-600 mt-2">
            Chief Technology Officer at{" "}
            <span className="text-blue-600 font-semibold">Tech Solutions Inc.</span>
          </h2>
          <p className="text-sm md:text-base text-gray-500 mt-3 max-w-3xl">
            Passionate about leading technology teams, building innovative solutions, and delivering exceptional value.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Socials</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {personalSocials.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg px-4 py-2 shadow-md transition-all"
                >
                  {link.icon}
                  <span className="text-lg font-medium">{link.title}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Company Socials</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {companySocials.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg px-4 py-2 shadow-md transition-all"
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
