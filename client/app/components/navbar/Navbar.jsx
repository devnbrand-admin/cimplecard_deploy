"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 



const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full px-3  bg-gradient-to-r from-[#28389a] to-[#2a3a9d] text-white  py-3 shadow-md" >
      <div className="container flex justify-between items-center">
        <div className="font-bold text-lg">
          <span className="text-white">Cimple</span>
          <span className="text-gray-200">Card</span>
        </div>

        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <ul
          className={`lg:flex z-30 lg:space-x-6 text-lg  items-center absolute lg:relative bg-gradient-to-r from-[#28389a] to-[#2a3a9d] lg:bg-transparent lg:top-0 lg:left-0 w-full lg:w-auto transition-transform duration-300 ${
            isMenuOpen ? "top-[60px] left-0 right-0" : "top-[-100%]"
          }`}
        >
          <li className="text-center lg:text-left">
            <Link href={`/`} className="block py-2 px-4 text-gray-200 hover:text-white cursor-pointer">
              Home
            </Link>
          </li>
          <li className="text-center lg:text-left">
            <Link href={`/about`} className="block py-2 px-4 text-gray-200 hover:text-white cursor-pointer">
              About
            </Link>
          </li>
          <li className="text-center lg:text-left">
            <Link href={`/contact`} className="block py-2 px-4 text-gray-200 hover:text-white cursor-pointer">
              Contact
            </Link>
          </li>
          <li className="text-center w-2/3 mx-auto lg:hidden mt-2">
          <Link href={`/auth`}> <button className="bg-white text-[#3342a2] px-4 py-2 rounded-full  w-1/2">Sign Up</button></Link><br/>
          <Link href={`/auth`}>  <button className="border border-white px-4 py-2 rounded-full mt-2 mb-2 w-1/2">Login</button></Link>
          </li>
        </ul>

        <div className="hidden lg:block">
        <Link href={`/auth`}> <button className="bg-white text-[#3342a2] px-4 py-2 rounded-full mx-2">Sign Up</button></Link>
        <Link href={`/auth`}> <button className="border border-white px-4 py-2 rounded-full">Login</button></Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
