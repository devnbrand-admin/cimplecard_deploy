import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Importing React Icons

const ContactSection = () => {
  return (
    <div className="w-full bg-transparent text-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 lg:px-24">
        {/* Contact Information Card */}
        <div className="bg-white opacity-70 text-black rounded-lg shadow-lg py-20 px-20 space-y-8">
          <h3 className="text-2xl font-bold mb-6 font-Cormorant">Contact Information</h3>
          <p className="flex items-center mb-4 text-xl font-Mons">
            <FaMapMarkerAlt className="mr-4" />
            1234 Elm Street, Springfield, IL, 62345
          </p>
          <p className="flex items-center mb-4 text-xl font-Mons">
            <FaPhoneAlt className=" mr-4" />
            +1-234-667-9876
          </p>
          <p className="flex items-center text-xl font-Mons">
            <FaEnvelope className=" mr-4" />
            johndoe@techsolutions.com
          </p>
        </div>

        {/* Send a Message Form */}
        <div className="text-white">
          <h3 className="text-2xl mb-6 font-Cormorant uppercase tracking-wide">Send Us a Message</h3>
          <form className="grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-white py-2"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-white py-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-white py-2"
            />
            <textarea
              placeholder="Share Your Message"
              className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-white py-2 resize-none"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-transparent border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-black transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
