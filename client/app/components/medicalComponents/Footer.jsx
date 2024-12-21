import React from "react";

const Footer = () => {
  return (
    <div className="flex md:h-[70vh] justify-center items-center flex-col">
      <div
        className="relative h-full flex md:flex-row flex-col items-center justify-center"
        style={{ width: "80vw" }}
      >
        <div className="flex h-72 align-center md:w-3/4 w-full m-4">
          <div className="h-60 w-1/3 m-1 bg-gray-200 border border-gray-500 rounded-lg"></div>
          <div className="h-60 w-1/3 m-1 bg-gray-200 border border-gray-500 rounded-lg"></div>
          <div className="h-60 w-1/3 m-1 bg-gray-200 border border-gray-500 rounded-lg"></div>
        </div>
        <div className="flex flex-col h-3/4 w-72  items-center p-3 text-center">
          <h1 className="text-2xl font-bold text-green-600 ">Watch Our</h1>
          <h1 className="text-3xl font-bold text-green-600 mb-3">
            Health Videos
          </h1>
          <span className="bg-green-600 w-full text-white p-3 my-1 rounded-xl">
            Youtube | Healthy Life
          </span>{" "}
          <span className="bg-green-600 w-full text-white p-3 my-1 rounded-xl">
            TikTok | Healthy Life
          </span>{" "}
          <span className="bg-green-600 w-full text-white p-3 my-1 rounded-xl">
            Instagram | Healthy Life
          </span>
        </div>
        <img
          style={{ zIndex: -1, height: "120%" }}
          src="/Assets/MedicalAssets/footerbg.png"
          className="w-full absolute hidden md:block"
        />
      </div>
      <div className="relative w-36 h-36">
        <img
          src="/Assets/MedicalAssets/doctor.png"
          className="w-36 h-36 absolute hidden md:block"
          style={{ top: -40 }}
        />
      </div>
    </div>
  );
};

export default Footer;
