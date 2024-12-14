import React from "react";
import ContactDiv from "../ContactDiv";

const HeroMobile = ({ card }) => {
  return (
    <div
      style={{
        backgroundImage: `url('/Assets/MedicalAssets/banner-bg.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        width: "100vw",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      id="Profile"
    >
      <img
        src={card.profileImageUrl}
        alt="profile img"
        className="rounded-full"
        style={{ width: "50vw", height: "50vw", marginBottom: "20px" }}
      />

      {/* Title Section */}
      <div className="text-center my-4">
        <h1 className="text-3xl font-bold" style={{ color: "#0B8823" }}>
          {card.title}
        </h1>
        <span className="text-lg font-medium" style={{ color: "#0B8823" }}>
          {card.jobTitle}
        </span>{" "}
        <span className="text-lg font-light" style={{ color: "#0B8823" }}>
          | {card.companyName}
        </span>
      </div>

      {/* Social Links */}
      <div className="my-4">
        {/* Personal Socials */}
        <div className="flex justify-center items-center mb-2">
          <p className="text-md font-light mr-2" style={{ color: "#0B8823" }}>
            Personal Socials
          </p>
          <img
            src="/Assets/MedicalAssets/link.png"
            alt="link icon"
            className="w-5 h-5 mx-1"
          />
          <img
            src="/Assets/MedicalAssets/twitter.png"
            alt="twitter icon"
            className="w-5 h-5 mx-1"
          />
          <img
            src="/Assets/MedicalAssets/linkedin.png"
            alt="linkedin icon"
            className="w-5 h-5 mx-1"
            onClick={() => window.open(card.companySocialMediaLink)}
          />
          <img
            src="/Assets/MedicalAssets/instagram.png"
            alt="instagram icon"
            className="w-5 h-5 mx-1"
            onClick={() => window.open(card.instagramVideoLink)}
          />
        </div>
        {/* Company Socials */}
        <div className="flex justify-center items-center">
          <p className="text-md font-light mr-2" style={{ color: "#0B8823" }}>
            Company Socials
          </p>
          <img
            src="/Assets/MedicalAssets/linkedin.png"
            alt="linkedin icon"
            className="w-5 h-5 mx-1"
            onClick={() => window.open(card.companySocialMediaLink)}
          />
          <img
            src="/Assets/MedicalAssets/instagram.png"
            alt="instagram icon"
            className="w-5 h-5 mx-1"
            onClick={() => window.open(card.instagramVideoLink)}
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full flex justify-center mt-4">
        <div
          className="relative w-full text-green"
          style={{
            maxWidth: "300px",
            border: "1px solid #ccc",
            padding: "10px",
          }}
        >
          <img
            src="/Assets/MedicalAssets/Rectangleup.png"
            alt="decorative"
            className="absolute top-0 left-0 w-full h-10"
          />
          {/* <img
            src="/Assets/MedicalAssets/Rectanglemid.png"
            alt="decorative"
            className="w-full"
          /> */}
          <img
            src="/Assets/MedicalAssets/Rectangledown.png"
            alt="decorative"
            className="absolute bottom-0 left-0 w-full h-10"
          />
          <ContactDiv card={card} />
        </div>
      </div>
    </div>
  );
};

export default HeroMobile;
