import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaTumblr, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 py-10 relative">

      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Design.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 px-4">
        <div>
          <h4 className="text-2xl font-extrabold mb-4 text-teal-400">Quick Links</h4>
          <ul className="space-y-2">
            <li className="hover:text-teal-200 cursor-pointer">Home</li>
            <li className="hover:text-teal-200 cursor-pointer">About</li>
            <li className="hover:text-teal-200 cursor-pointer">Services</li>
            <li className="hover:text-teal-200 cursor-pointer">Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-extrabold mb-4 text-teal-400">Address</h4>
          <p className="hover:text-teal-200 cursor-pointer">123 Cosmic Street</p>
          <p className="hover:text-teal-200 cursor-pointer">Universe City</p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-2xl font-extrabold mb-4 text-teal-400">Follow Us</h4>
          <div className="flex justify-center space-x-6">
            <FaFacebook className="text-blue-600 hover:text-blue-700 transition-colors" size={30} />
            <FaInstagram className="text-pink-600 hover:text-pink-700 transition-colors" size={30} />
            <FaTumblr className="text-indigo-600 hover:text-indigo-700 transition-colors" size={30} />
            <FaTwitter className="text-blue-400 hover:text-blue-500 transition-colors" size={30} />
            <FaYoutube className="text-red-600 hover:text-red-700 transition-colors" size={30} />
          </div>
        </div>
      </div>

      <p className="text-center mt-8 text-sm text-gray-200">© 2024 Cosmic Connections</p>
    </footer>
  );
}

export default Footer;
