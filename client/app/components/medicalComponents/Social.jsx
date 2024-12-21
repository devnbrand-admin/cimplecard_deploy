import React from "react";

const Social = ({ card }) => {
  return (
    <div className="flex justify-center h-fit md:h-[80vh] flex-col md:flex-row align-center">
      <img src="/Assets/MedicalAssets/social.png" className="h-full" />
      <div className="flex flex-col h-full justify-center items-center">
        <h1 className="text-5xl font-bold text-green-600 ">Let's Get</h1>
        <h1 className="text-8xl font-bold text-green-600 mb-6">Social</h1>
        <span className="text-green-600 mb-4">
          Instagram |{" "}
          <span
            className="text-green-800 cursor-pointer"
            onClick={() => window.open(card.instagramLink || "#")}
          >
            {card.instagramHandle || "@DrCarlson"}
          </span>
        </span>
        <span className="text-green-600 mb-4">
          Linkedin |{" "}
          <span
            className="text-green-800 cursor-pointer"
            onClick={() => window.open(card.linkedinLink || "#")}
          >
            {card.linkedinHandle || "@DrCarlson"}
          </span>
        </span>
        <span className="text-green-600 mb-4">
          Facebook |{" "}
          <span
            className="text-green-800 cursor-pointer"
            onClick={() => window.open(card.facebookLink || "#")}
          >
            {card.facebookHandle || "@DrCarlson"}
          </span>
        </span>
        <span className="text-green-600 mb-4">
          Twitter |{" "}
          <span
            className="text-green-800 cursor-pointer"
            onClick={() => window.open(card.twitterLink || "#")}
          >
            {card.twitterHandle || "@DrCarlson"}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Social;
