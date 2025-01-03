import React from "react";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaFacebook, FaBuilding } from "react-icons/fa";
import ProfileImage from "../../assets/Profile.jpg";
import SecondaryImage from "../../assets/Hero_SecondaryImage.png";

function HeroSection({ card }) {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="bg-[#37729D] flex justify-center items-center px-6 py-4">
        <div className="relative ml-[70px] md:ml-[200px]">
          <input
            type="text"
            placeholder="Search"
            className="w-[400px] md:w-[700px] py-2 px-4 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none"
          />
        </div>
        <button className="text-white text-lg font-medium md:ml-[200px] ml-4">
          Home
        </button>
      </div>
      <div className="border-b-[1px] border-white"></div>

      {/* Main Section */}
      <div className="relative">
        {/* Blue Background Section */}
        <div className="bg-[#37729D] h-[333px] py-10 px-6 md:px-16 flex justify-center items-end">
          <div className="">
            {/* Profile Image */}
            <div className="absolute w-40 h-40 md:w-[380px] md:h-[380px] left-44 top-0 md:left-24 md:top-36 rounded-full overflow-hidden border-[12px] border-[#CFEFFC] ">
              <div className="w-[148px] h-[148px] md:w-[364px] md:h-[364px] rounded-full overflow-hidden border-[10px] border-[#37729D] ">
                <Image
                  src={card.profileImageUrl} // Replace with the actual path of the profile image
                  alt="Profile Picture"
                  layout="responsive"
                  width={192}
                  height={192}
                />
              </div>
            </div>

            {/* Profile Information */}
            <div className="mt-4 md:ml-80 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-white font-mono ">
                {card.title}
              </h1>

              <p className="text-xl  md:text-3xl text-white md:mt-2 tracking-wider">
                Chief Technology Officer at{" "}
                <span className="font-semibold">Tech Solutions Inc.</span>
              </p>
              <p className="text-white text-xl tracking-wider mt-1">
                Mumbai, India
              </p>
            </div>
          </div>
        </div>

        {/* White Background Section */}
        <div className="py-8 md:px-16 h-[333px] flex justify-center">
          <div className="font-mono ml-8 font-extrabold flex flex-col gap-6">
            {/* Personal Socials */}
            <div className="w-[500px]">
              <h3 className="text-3xl text-gray-800">Personal Socials</h3>
              <div className="flex gap-4 mt-4 text-lg">
                <a
                  href="https://linkedin.com/in/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#DEDEDE] hover:bg-[#c9c9c9] text-gray-800 rounded-lg shadow-md transition"
                >
                  <FaLinkedin className="text-blue-600" size={20} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#DEDEDE] hover:bg-[#c9c9c9] text-gray-800 rounded-lg shadow-md transition"
                >
                  <FaTwitter className="text-blue-400" size={20} />
                  <span>Twitter</span>
                </a>
                <a
                  href="https://facebook.com/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#DEDEDE] hover:bg-[#c9c9c9] text-gray-800 rounded-lg shadow-md transition"
                >
                  <FaFacebook className="text-blue-700" size={20} />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* Company Socials */}
            <div className="mt-8">
              <h3 className="text-3xl text-gray-800">Company Socials</h3>
              <div className="flex gap-4 mt-4 text-lg">
                <a
                  href="https://linkedin.com/company/techsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#DEDEDE] hover:bg-[#c9c9c9] text-gray-800 rounded-lg shadow-md transition"
                >
                  <FaBuilding className="text-gray-600" size={20} />
                  <span>Company LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <Image
            src={SecondaryImage}
            alt="sfe"
            layout="responsive"
            width={192}
            height={192}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
