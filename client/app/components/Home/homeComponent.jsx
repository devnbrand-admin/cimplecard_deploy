"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import useWindowWidth from "../../hooks/useWindowwidth";
import people from "../../assets/home/people.png";
import logoicon from "../../assets/home/logoicon.png";
import HowItOperates from "./howItOperates";
import BrowseCard from "../Home/browseCard";
import { handleJoinSignLoignfn } from "../AboutUS/aboutusComponent";

const HomeComponent = () => {
  const windowWidth = useWindowWidth();

  const getClipPath = () => {
    return windowWidth >= 1024
      ? "polygon(0 27%, 50% 60%, 100% 27%, 100% 100%, 50% 100%, 0 100%)"
      : "polygon(100% 100%, 50% 100%, 0 100%, 0 43%, 50% 55%, 100% 43%)";
  };

  const renderSemiCircleData = () => (
    <div className="flex flex-col items-center">
      <span className="mt-48 sm:mt-0 text-sm md:text-lg text-center w-4/5 md:w-2/3 font-medium text-white px-4 md:px-6 mb-4 md:mb-6">
        <span className="text-lg md:text-2xl font-bold">Cimply</span> Manage
        All Your Business Cards with Ease
        <br />
        <span className="text-lg md:text-2xl font-extrabold">CimpleCard</span>
      </span>
      {/* Buttons */}
      <div>
        <button className="m-3 bg-[#707ed3] text-white py-2 px-6 rounded-full font-medium hover:bg-[#3342a2]">
          <Link href="/auth">Sign Up</Link>
        </button>
        <button className="m-3 bg-white border border-[#707ed3] text-[#707ed3] py-2 px-6 rounded-full font-medium hover:bg-[#5266cb] hover:text-white">
          <Link href="/auth">Log In</Link>
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-100vh z-10">
      {/* Top Section */}
      <div className="relative text-white h-screen flex justify-center items-center">
        {/* Semi-Circle Container */}
        <div
          className="w-full h-[300px] md:w-[600px] md:h-[450px] flex flex-col justify-start items-center absolute"
          style={{
            backgroundImage: `url(${people.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "50% 50% 0 0",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          }}
        >
          {/* Logo */}
          <div
            className="-mt-[150px] sm:-mt-[70px] z-30 w-[130px] h-[130px] flex justify-center items-center mb-3"
            style={{ borderRadius: "50%" }}
          >
            <Image src={logoicon} alt="Logo" />
          </div>

          {/* Text Content */}
          {windowWidth > 600 && renderSemiCircleData()}
        </div>
      </div>

      {/* Polygonal Divider Section */}
      <div
        className="absolute bottom-0 w-full flex-grow bg-[#3342a2] text-white flex flex-col justify-center items-center"
        style={{
          clipPath: getClipPath(),
        }}
      >
        {windowWidth > 600 && (
          <div className="relative w-full h-[400px]">
            <Image
              src={people}
              alt="People"
              fill
              className="object-cover"
              style={{ objectPosition: "center" }}
            />
          </div>
        )}
        <div className="absolute bottom-16 flex justify-center px-6">
          {windowWidth > 600 ? (
            <p className="text-sm hidden md:block md:text-base mt-2 text-center leading-relaxed sm:w-full md:w-1/2">
              Say goodbye to paper business cards and hello to a more efficient,
              eco-friendly way of networking. CimpleCard is your one-stop-shop
              for creating, customizing, and sharing digital business cards that
              truly represent your professional brand.
            </p>
          ) : (
            <div className="flex flex-col text-center items-center -mb-[55px]">
              {renderSemiCircleData()}
            </div>
          )}
        </div>
      </div>

      {/* Additional Sections */}

      <div
      className="hidden md:block top-[132px] absolute  z-20 bg-[#e9eafa]  w-full md:h-[880px] h-[480px] shadow-lg shadow-black"
        style={{
          clipPath: "polygon(0 48%, 100% 59%, 100% 45%)",
        }}
      >
        <div
          className="absolute inset-0 shadow-lg shadow-black"
          style={{
            clipPath: "polygon(0 48%, 100% 59%, 100% 45%)",
          }}
        />
      </div>
      <HowItOperates />
      <div className="w-2/3 md:-mt-[100px] md:w-1/2 mx-auto mb-10">
        {handleJoinSignLoignfn()}
      </div>
      <BrowseCard />
    </div>
  );
};

export default HomeComponent;