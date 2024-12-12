import React from "react";
import ContactDiv from "./ContactDiv";
const Hero = ({ card }) => {
  return (
    <div
      style={{
        backgroundImage: `url('/Assets/MedicalAssets/banner-bg.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: "100vh",
      }}
      id="Profile"
    >
      <div className="w-1/2 absolute top-40 left-52 flex justify-between flex-col">
        <div className="my-7">
          <h1 className="text-7xl font-bold" style={{ color: "#0B8823" }}>
            {card.title}
          </h1>
          <span className="text-2xl font-medium" style={{ color: "#0B8823" }}>
            {card.jobTitle}
          </span>{" "}
          <span className="text-2xl font-light" style={{ color: "#0B8823" }}>
            | {card.companyName}
          </span>
        </div>
        <div className="m-7">
          <div className="flex my-2">
            <p className="text-lg font-light mx-3" style={{ color: "#0B8823" }}>
              Personal Socials
            </p>
            <img
              src="/Assets/MedicalAssets/link.png"
              alt="doctor img"
              className="w-5 ms-2 h-5"
            />
            <img
              src="/Assets/MedicalAssets/twitter.png"
              alt="doctor img"
              className="w-5 ms-2 h-5"
            />
            <img
              src="/Assets/MedicalAssets/linkedin.png"
              alt="doctor img"
              className="w-5 ms-2 h-5"
            />
            <img
              src="/Assets/MedicalAssets/instagram.png"
              alt="doctor img"
              className="w-5 ms-2 h-5"
            />
          </div>
          <img
            src="/Assets/MedicalAssets/line.png"
            alt="doctor img"
            className="w-28 mx-3"
          />
          <div className="flex my-1">
            <p className="text-lg font-light mx-3" style={{ color: "#0B8823" }}>
              Company Socials
            </p>

            <img
              src="/Assets/MedicalAssets/linkedin.png"
              alt="doctor img"
              className="w-5 h-5 ms-2 "
            />

            <img
              src="/Assets/MedicalAssets/instagram.png"
              alt="doctor img"
              className="w-5 h-5 ms-2"
            />
          </div>
        </div>
        <div className="w-72 border my-7 h-[500px] relative">
          <img
            src="/Assets/MedicalAssets/Rectangleup.png"
            alt="img"
            className="w-72 absolute top-0 right-0 h-[400px]"
            style={{ top: -20, right: -20 }}
          />
          <img
            src="/Assets/MedicalAssets/Rectanglemid.png"
            alt="img"
            className="w-72 h-[500px]"
          />
          <img
            src="/Assets/MedicalAssets/Rectangledown.png"
            alt="img"
            className="w-72 absolute h-[400px]"
            style={{ bottom: -5, left: -20 }}
          />
          <ContactDiv card={card} />
        </div>
      </div>

      <img
        src={card.profileImageUrl}
        alt="profile img"
        className="w-1/3 absolute rounded-full"
        style={{ bottom: 20, right: 100 }}
      />
    </div>
  );
};

export default Hero;
