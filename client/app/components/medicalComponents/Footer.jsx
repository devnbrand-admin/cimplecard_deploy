import React from "react";

const Footer = () => {
  return (
    <div
      style={{ height: "70vh" }}
      className="flex justify-center items-center flex-col"
    >
      <div
        className="relative h-full flex justify-center"
        style={{ width: "80vw" }}
      >
        <div className="flex h-72 align-center w-fit m-4">
          <div className="h-64 w-72 m-1 bg-gray-200 border border-gray-500 rounded-lg"></div>
          <div className="h-64 w-72 m-1 bg-gray-200 border border-gray-500 rounded-lg"></div>
          <div className="h-64 w-72 m-1 bg-gray-200 border border-gray-500 rounded-lg"></div>
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
          style={{ zIndex: -1 }}
          src="/Assets/MedicalAssets/footerbg.png"
          className="h-full w-full absolute"
        />
      </div>
      <div className="relative w-36 h-36">
        <img
          src="/Assets/MedicalAssets/doctor.png"
          className="w-36 h-36 absolute"
          style={{ top: -40 }}
        />
      </div>
    </div>
  );
};

export default Footer;
