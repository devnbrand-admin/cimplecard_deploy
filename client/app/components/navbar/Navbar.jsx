import Link from "next/link";
import React from "react";

const NavbarComponent = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-[#28389a] to-[#2a3a9d] text-white px-4 py-3 shadow-md ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand */}
        <div className="font-bold text-lg">
          <span className="text-white">Cimple</span>
          <span className="text-gray-200">Card</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 ">
        <Link href={`/`}  className="text-gray-200 hover:text-white cursor-pointer">Home</Link>
        <Link href={`/about`} className="text-gray-200 hover:text-white cursor-pointer">About</Link>
        <Link href={`/contact`}  className="text-gray-200 hover:text-white cursor-pointer">Contact</Link>
        </ul>

        <div className="mr-5">
          <button className="bg-white text-[#3342a2] px-4 py-2 rounded-full mx-2">Sign Up</button>
          <button className="border border-white px-4 py-2 rounded-full">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
