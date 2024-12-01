import React from "react";
import ProfileImage from "../../assets/Profile.jpg";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaFacebook, FaBuilding } from "react-icons/fa";
import HeroBg from "../../assets/hero-bg.jpg"

function HeroSection() {
  const personalSocials = [
    {
      id: 1,
      title: "LinkedIn",
      url: "https://linkedin.com/in/johndoe",
      icon: <FaLinkedin size={26} />,
    },
    {
      id: 2,
      title: "Twitter",
      url: "https://twitter.com/johndoe",
      icon: <FaTwitter size={26} />,
    },
    {
      id: 3,
      title: "Facebook",
      url: "https://facebook.com/johndoe",
      icon: <FaFacebook size={26} />,
    },
  ];

  const companySocials = [
    {
      id: 4,
      title: "Company LinkedIn",
      url: "https://linkedin.com/company/techsolutions",
      icon: <FaBuilding size={26} />,
    },
  ];

  return (
    <div className="w-full h-screen flex flex-col bg-gray-100">

      <div className="w-full h-1/2 relative bg-gray-200">
        
          <Image src={HeroBg} alt="Hero Background" layout="fill" objectFit="cover" />
      
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>


      <div className="w-full h-1/2 bg-white flex items-center justify-center">
        <div className="w-full max-w-5xl flex items-start space-x-8">

          <div className="relative flex-shrink-0">
            <div className="h-56 w-56 rounded-full overflow-hidden border-4 border-teal-500  shadow-lg">
              <Image
                src={ProfileImage}
                alt="Profile"
                layout="responsive"
                width={144}
                height={144}
                objectFit="cover"
              />
            </div>
          </div>


          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">John Doe</h1>
              <h2 className="text-2xl text-gray-600 mt-1">
                Chief Technology Officer at{" "}
                <span className="text-teal-500 font-semibold">
                  Tech Solutions Inc.
                </span>
              </h2>
            </div>

            <p className="text-base text-gray-500 leading-relaxed">
              Transforming businesses through innovative technology solutions.
              Passionate about building teams and driving impactful projects to
              create a better future.
            </p>


            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Connect with Me
                </h3>
                <div className="flex space-x-4">
                  {personalSocials.map((link) => (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-teal-500 transition-colors"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Company Socials
                </h3>
                <div className="flex space-x-4">
                  {companySocials.map((link) => (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-teal-500 transition-colors"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
