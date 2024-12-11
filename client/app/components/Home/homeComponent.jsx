import React from "react";

const HomeComponent = () => {
  return (
    <div
      className="relative text-white h-screen flex justify-center items-center"
      style={{
        backgroundImage: "linear-gradient(135deg, #6b5b95, #b8a9c9)",
        clipPath: "polygon(100% 51%, 50% 76%, 0 53%, 0 0, 48% 0, 100% 0)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Semi-Circle Container */}
      <div
        className="w-[500px] sm:w-[800px] sm:h-[550px] flex flex-col justify-start items-center absolute"
        style={{
          height: "550px", 
          backgroundColor: "white",
          borderRadius: "50% 50% 0 0",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          bottom: "-120px",
        }}
      >
        {/* Logo */}
        <div
          className="-mt-40 sm:-mt-[39px] z-10  w-[100px] h-[100px] bg-[#2f8dff]  flex justify-center items-center text-sm text-gray-700 uppercase tracking-wide mb-3"
          style={{
            borderRadius: "50%",
          }}
        >
          App Logo
        </div>

        <span className="mt-48 sm:mt-0 text-sm md:text-xl text-wrap text-center w-4/5 md:w-1/2 font-bold text-black px-4 md:px-6 mb-4 md:mb-6">
          <span className="text-lg md:text-2xl">CimpleCard</span> Manage All Your Business Cards with Ease
        </span>

        <div>
          <button className="m-3 bg-[#707ed3] text-white py-2 px-6 rounded-lg font-medium hover:bg-[#3342a2]">
            Sign Up
          </button>
          <button className="m-3 bg-transparent border border-[#707ed3] text-[#707ed3] py-2 px-6 rounded-lg font-medium hover:bg-[#8b8a8a]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
