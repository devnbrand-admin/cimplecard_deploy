import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import BackgroundImage from "../../assets/lawyerTemplate/Contact.png";

const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen font-sans">
     
      <div className="bg-[#F7F7F7] flex items-center justify-center w-full md:w-1/2 p-8">
        <div className="bg-white py-16 px-10 shadow-lg rounded-md max-w-md w-full font-Manrope">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 font-Garamond">
            Contact Information
          </h2>
          <div className="space-y-8 text-gray-800 text-lg">
            <div className="flex items-center gap-8">
              <FaMapMarkerAlt size={20} />
              <p>1234 Elm Street, Springfield, IL, 62345</p>
            </div>
            <div className="flex items-center gap-8">
              <FaPhoneAlt size={20} />
              <p>+1-234-667-9876</p>
            </div>
            <div className="flex items-center gap-8">
              <FaEnvelope size={20} />
              <p>johndoe@techsolutions.com</p>
            </div>
          </div>
        </div>
      </div>

  
      <div
        className="relative w-full md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BackgroundImage.src})`,
        }}
      >
    
        <div className="absolute inset-0 bg-[#121F2E] bg-opacity-80"></div>

        {/* Form Content */}
        <div className="relative p-8 md:p-16 font-Garamond">
          <h2 className="text-3xl font-semibold text-white mb-8">
            SEND US A MESSAGE
          </h2>
          <form className="space-y-12 text-lg">
            <div className="relative">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent border-b border-white text-white placeholder-gray-300 focus:outline-none focus:border-yellow-500 py-2"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full bg-transparent border-b border-white text-white placeholder-gray-300 focus:outline-none focus:border-yellow-500 py-2"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-white text-white placeholder-gray-300 focus:outline-none focus:border-yellow-500 py-2"
              />
            </div>
            <div className="relative">
              <textarea
                placeholder="Share Your Message"
                rows="4"
                className="w-full bg-transparent border-b border-white text-white placeholder-gray-300 focus:outline-none focus:border-yellow-500 py-2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white uppercase border border-yellow-600 px-6 py-2 hover:bg-yellow-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
