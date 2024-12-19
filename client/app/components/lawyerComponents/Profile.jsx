import React from "react";
import Image from "next/image";
import {
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import profileImage from "../../assets/lawyerTemplate/ProfileImage.png";
import bgImage from "../../assets/lawyerTemplate/BackgroundImage.png";

function Profile() {
  return (
    <div className="relative bg-[#121F2E] text-white">
     
      <div className="absolute inset-0 z-[-1]">
        <Image
          src={bgImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
        />
      </div>

     
      

      <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-6">
        {/* Profile Image */}
        <div className="flex justify-center w-full md:w-1/2 mb-6 md:mb-0 mt-16">
          <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] border-[10px] md:border-[14px] border-[#CB935D] rounded-full overflow-hidden">
            <Image
              src={profileImage}
              alt="Profile"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8 font-serif">
            Arjun Mehra
          </h1>
          <h2 className="text-lg md:text-2xl md:mb-2">
            Expert in Corporate Law & Civil Litigation
          </h2>
          <p className="text-base md:text-xl mb-6">New Delhi, India</p>

          {/* Social Media Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#CB935D] text-black hover:bg-[#B78A50] transition"
            >
              <FaLinkedin className="text-[#0A66C2]" /> LinkedIn
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#CB935D] text-black hover:bg-[#B78A50] transition"
            >
              <FaTwitter className="text-[#1DA1F2]" /> Twitter
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#CB935D] text-black hover:bg-[#B78A50] transition"
            >
              <FaFacebook className="text-[#1877F2]" /> Facebook
            </a>
          </div>
        </div>
      </section>

      
      <section className="bg-white text-black px-6 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6 font-serif">
  
        <div className="p-6 shadow-md rounded-lg flex flex-col items-center gap-4 text-center bg-gray-100 hover:shadow-lg transition overflow-auto">
          <FaEnvelope className="text-3xl text-[#CB935D]" />
          <h3 className="text-xl font-bold">Email</h3>
          <p className="text-base">johndoe@techsolutions.com</p>
          <p className="text-base">contact@techsolutions.com</p>
        </div>

   
        <div className="p-6 shadow-md rounded-lg flex flex-col items-center gap-2 text-center bg-gray-100 hover:shadow-lg transition">
          <FaPhone className="text-3xl text-[#CB935D]" />
          <h3 className="text-xl font-bold">Mobile</h3>
          <p className="text-base">+1-234-667-9876</p>
          <p className="text-base">+999-234-87960</p>
        </div>

      
        <div className="p-6 shadow-md rounded-lg flex flex-col items-center gap-2 text-center bg-gray-100 hover:shadow-lg transition">
          <FaCalendarAlt className="text-3xl text-[#CB935D]" />
          <h3 className="text-xl font-bold">Date of Birth</h3>
          <p className="text-base">1985-06-18</p>
        </div>

     
        <div className="p-6 shadow-md rounded-lg flex flex-col items-center gap-2 text-center bg-gray-100 hover:shadow-lg transition">
          <FaMapMarkerAlt className="text-3xl text-[#CB935D]" />
          <h3 className="text-xl font-bold">Address</h3>
          <p className="text-base">1234 Elm Street, Springfield, IL</p>
          <p className="text-base">56744, Queenstreet, IL</p>
        </div>
      </section>
    </div>
  );
}

export default Profile;
