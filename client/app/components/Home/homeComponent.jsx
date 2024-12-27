"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useWindowWidth from "../../hooks/useWindowwidth";
import people from "../../assets/home/people.png";
import logoicon from "../../assets/home/logoicon.png";
import BrowseCard from "../Home/browseCard";
import HowItOperates from "./howItOperates";
import { HandleJoinSignLoignfn } from "../AboutUS/aboutusComponent";
const HomeComponent = () => {
  const windowWidth = useWindowWidth();
  const [clipPath, setClipPath] = useState(
    "polygon(100% 100%, 50% 100%, 0 100%, 0 43%, 50% 55%, 100% 43%)"
  );
  useEffect(() => {
    const updateClipPath = () => {
      setClipPath(
        window.innerWidth >= 1024
          ? "polygon(0 27%, 50% 60%, 100% 27%, 100% 100%, 50% 100%, 0 100%)"
          : "polygon(100% 100%, 50% 100%, 0 100%, 0 43%, 50% 55%, 100% 43%)"
      );
    };

    updateClipPath();
    window.addEventListener("resize", updateClipPath);

    return () => window.removeEventListener("resize", updateClipPath);
  }, []);

  const HandlesemicircleDataDis = () => {
    return (
      <>
        <span className="mt-48 text-sm md:text-lg text-center w-4/5 md:w-2/3 font-medium text-white px-4 md:px-6 mb-4 md:mb-6">
          <span className="text-lg md:text-2xl font-bold">Cimply</span> Manage
          All Your Business Cards with Ease
          <br />
          <span className="text-lg md:text-2xl font-extrabold ">
            CimpleCard
          </span>{" "}
        </span>

        {/* Buttons */}
        <div>
          <button className="m-3 bg-[#707ed3] text-white py-2 px-6 rounded-full font-medium hover:bg-[#3342a2]">
            <Link href={`/auth`}>Sign Up</Link>
          </button>
          <button className="m-3 bg-white border border-[#707ed3] text-[#707ed3] py-2 px-6 rounded-full font-medium hover:bg-[#5266cb] hover:text-white">
            <Link href={`/auth`}>Log In</Link>
          </button>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="flex flex-col h-100vh ">
        <div className="relative  text-white h-screen  flex justify-center items-center">

          {/* Logo */}
          <div
            className=" self-start md:hidden z-20 flex justify-center items-center  mt-5"
            style={{
              borderRadius: "50%",
            }}
          >
            <Image src={logoicon} alt="Logo" width={200} height={200} />
          </div>

          {/* Semi-Circle Container */}
          <div
            className="w-[100%] h-[350px] bottom-[100px] md:w-[1000px] md:h-[600px] md:bottom-[50px] sm:w-[550px] flex flex-col justify-start items-center absolute"
            style={{
              backgroundImage: `url(${people.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundColor: "transparent",
              backgroundPosition: "center",
              borderRadius: "50% 50% 0 0",
            }}
          >

            {/* Text Content */}

            {windowWidth > 600 && <HandlesemicircleDataDis />}
          </div>


          {/* Polygonal Divider Section */}
          <div
            className="absolute bottom-[20px] md:bottom-[40px] w-[100%] flex-grow bg-[#3342a2] text-white flex flex-col justify-center items-center overflow-hidden"
            style={{
              clipPath: clipPath,
            }}
          >
            <div className={`relative w-full h-[400px]`}>
              {windowWidth > 600 && (
                <Image
                  src={people}
                  alt="People"
                  fill
                  className={`object-cover`}
                  style={{
                    objectPosition: "center",
                  }}
                />
              )}
            </div>
          </div>


          <div className="absolute md:bottom-[6rem] bottom-[5rem] flex justify-center px-6">
            {windowWidth > 600 ? (
              <p className="text-sm hidden md:block md:text-base text-wrap mt-2 text-center leading-relaxed sm:w-full md:w-1/2">
                Say goodbye to paper business cards and hello to a more
                efficient, eco-friendly way of networking. CimpleCard is your
                one-stop-shop for creating, customizing, and sharing digital
                business cards that truly represent your professional brand.
              </p>
            ) : (
              <div className=" flex flex-col text-center justify-start items-center -mb-[55px]">
                {<HandlesemicircleDataDis />}
              </div>
            )}
          </div>
        </div>
      </div>
      <HowItOperates />
      <div className="w-2/3 lg:-mt-[100px] md:w-1/2 mx-auto mb-10">
        <HandleJoinSignLoignfn />
      </div>
      <BrowseCard />
    </>
  );
};

export default HomeComponent;