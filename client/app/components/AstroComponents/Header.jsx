import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaEnvelope, FaPhone, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import ProfileImage from "../../assets/astrologerTemplate/ProfileImg.png"
import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="flex flex-col text-white py-12">
      <div className="h-[1px] w-full bg-white"></div>
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 mt-10 lg:space-y-0 lg:space-x-8 px-4 lg:px-24">
        {/* Profile Image */}
        <div className="flex-shrink-0 rounded-full overflow-hidden border-4 border-white w-32 h-32 sm:w-40 sm:h-40 lg:w-96 lg:h-96">
          <Image
            src={ProfileImage}
            alt="Profile"
            height={380}
            width={380}
          />
        </div>

        {/* Right Side: Personal Information and Social Media */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 lg:space-y-16 px-0 py-0 lg:px-14 lg:py-16">
          {/* Name and Details */}
          <div className="font-Cormorant space-y-4">
            <h1 className="lg:text-7xl text-4xl font-bold">Dr. Meera Sharma</h1>
            <p className="lg:text-5xl text-3xl mt-2 font-medium">Ph.D. in Vedic Astrology, Gold Medalist</p>
            <p className="lg:text-5xl text-3xl">Bengaluru, India</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-white text-blue-600 py-2 lg:py-3 px-3 lg:px-4 rounded-sm hover:scale-110 transition flex justify-center items-center gap-2"
            >
              <FaLinkedin size={24} />
              <p className="text-black">Linkedin</p>
            </a>
            <a
              href="#"
              className="bg-white text-blue-400 py-2 lg:py-3 px-3 lg:px-4 rounded-sm hover:scale-110 transition flex justify-center items-center gap-2"
            >
              <FaTwitter size={24} />
              <p className="text-black">Twitter</p>
            </a>
            <a
              href="#"
              className="bg-white text-blue-800 py-2 lg:py-3 px-3 lg:px-4 rounded-sm hover:scale-110 transition flex justify-center items-center gap-2"
            >
              <FaFacebook size={24} />
              <p className="text-black">Facebook</p>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section: Contact Information Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl mx-auto">
        <div className="bg-[#020013] border border-violet-950 pt-8 pb-8 text-center rounded-lg flex flex-col items-center space-x-4">
          <div className="flex flex-col items-center gap-4">
          <FaEnvelope size={28} />
          <p className="text-xl font-bold">Email</p>
            <p className="text-sm">johndoe@techsolutions.com</p>
            <p className="text-sm">contact@techsolutions.com</p>
          </div>
        </div>
        <div className="bg-[#020013] border border-violet-950 pt-8 pb-8 text-center rounded-lg flex flex-col items-center space-x-4 gap-4">
          <div className="flex flex-col items-center gap-4">
          <FaPhone size={28} />
            <p className="text-xl font-bold">Mobile</p>
            <p className="text-sm">+1-234-667-9876</p>
            <p className="text-sm">+999-234-87960</p>
          </div>
        </div>
        <div className="bg-[#020013] border border-violet-950 pt-8 pb-8 text-center rounded-lg flex flex-col items-center space-x-4 gap-4">
        <div className="flex flex-col items-center gap-4">
          <FaCalendarAlt size={28}/>
            <p className="text-xl font-bold">Date of Birth</p>
            <p className="text-sm">1985-06-18</p>
          </div>
        </div>
        <div className="bg-[#020013] border border-violet-950 pt-8 pb-8 text-center px-4 rounded-lg flex flex-col items-center space-x-4 gap-4">
          <div className="flex flex-col items-center gap-4">
          <FaMapMarkerAlt size={28} />
            <p className="text-xl font-bold">Address</p>
            <p className="text-sm">1234 Elm Street, Springfield, IL, 62345</p>
            <p className="text-sm">56744, Queenstreet, IL, 62345</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
