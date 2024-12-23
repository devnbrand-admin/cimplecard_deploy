import React from "react";
import Navbar from "../components/navbar/Navbar";
import Link from "next/link";
import Image from "next/image";
import Shape from "../assets/shape.png"
function ContactCimpleCard() {
  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      {/* Navbar */}
      <nav className="hidden lg:flex justify-between items-center">
        <Navbar />
      </nav>

      {/* Header for Mobile */}
      <div className="lg:hidden h-24 w-full bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 rounded-b-full shadow-lg"></div>

      {/* Decorative Triangle Shape */}
      <div className="lg:block hidden absolute bottom-48">
      <Image src={Shape} alt="shape" height={200} width={200}/>
      </div>
      {/* Main Section */}
      <main className="flex-1 px-4 sm:px-8 md:px-16 py-8 mt-8 relative z-10">
        {/* Title */}
        <p className="text-3xl sm:text-4xl lg:text-6xl font-extralight text-center text-blue-800 mb-8 font-Poppins">
          Contact <span className="text-blue-500 font-semibold">CimpleCard</span>
        </p>

      
        {/* Content Section */}
        <div className="lg:flex lg:gap-8 md:p-16 lg:px-20 xl:px-36 p-10">
          {/* Left Section */}
          <div className="lg:w-1/2 text-lg space-y-8">
            <div>
              <p className="text-[#707ED3] font-thin">Office</p>
              <p className="text-[#29379D] lg:pr-20">
                407317 2nd Floor, 45th Across Sector HSR, Bashmati Rice Junction,
                India
              </p>
            </div>
            <div className="w-full h-[2px] bg-gradient-to-r from-blue-800 via-blue-400 to-blue-800 rounded-full"></div>

            <div>
              <h2 className="font-thin text-[#707ED3]">Email</h2>
              <p className="text-[#29379D]">info@cimplecard.com</p>
              <p className="text-[#29379D]">support@cimplecard.com</p>
              <p className="text-[#29379D]">meet@cimplecard.com</p>
            </div>
            <div className="w-full h-[2px] bg-gradient-to-r from-blue-800 via-blue-400 to-blue-800 rounded-full"></div>

            <div>
              <h2 className="font-thin text-[#707ED3]">Phone Numbers</h2>
              <p className="text-[#29379D]">+012 345 67890</p>
              <p className="text-[#29379D]">+012 345 67890</p>
              <p className="text-[#29379D]">+012 345 67890</p>
            </div>
            <div className="w-full h-[2px] bg-gradient-to-r from-blue-800 via-blue-400 to-blue-800 rounded-full"></div>
          </div>
          

          {/* Right Section */}
          <div className="lg:w-1/2 h-80 lg:h-auto">
            <div className="w-full h-full shadow-lg gradient-border">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12093.580140135002!2d-73.9871556!3d40.748817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18f1d06d%3A0x3ba9c81f5f3a5f0e!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1686684701047!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Second Gradient Divider */}
        

        {/* Footer Section */}
        <div className=" py-4 px-8 flex justify-center">
            <div className="flex flex-col lg:flex-row items-center justify-center bg-[#f6f7fb] px-6 rounded-full p-2">
          <p className="text-[#707ED3] text-center lg:text-left mb-4 lg:mb-0">
            Join the world leading digital business cards family. <span className="text-[#29379D]">Don't be left out!</span>
          </p>
          <div className="flex gap-1 px-1">
            <Link href={`/auth`}>
              <button className="px-6 py-1 bg-blue-800 text-white hover:bg-blue-700 rounded-full">
                Sign Up
              </button>
            </Link>
            <Link href={`/auth`}>
              <button className="px-6 py-1 bg-white border border-[#707ED4] text-[#3849B1] rounded-full hover:bg-gray-300">
                Log In
              </button>
            </Link>
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ContactCimpleCard;
