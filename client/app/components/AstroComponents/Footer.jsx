import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaTumblr, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8">
        <div>
          <h4 className="text-white mb-4">Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white mb-4">Address</h4>
          <p>123 Cosmic Street</p>
          <p>Universe City</p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-white mb-4">Follow Us</h4>
          <div className="flex justify-center space-x-4">
            <FaFacebook className="text-blue-600 hover:text-blue-800" size={30} />
            <FaInstagram className="text-pink-600 hover:text-pink-800" size={30} />
            <FaTumblr className="text-indigo-600 hover:text-indigo-800" size={30} />
            <FaTwitter className="text-blue-400 hover:text-blue-600" size={30} />
            <FaYoutube className="text-red-600 hover:text-red-800" size={30} />
          </div>
        </div>
      </div>
      <p className="text-center mt-8">© 2024 Cosmic Connections</p>
    </footer>
  );
}

export default Footer;
