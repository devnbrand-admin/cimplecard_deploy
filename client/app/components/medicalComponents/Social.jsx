import React from "react";

const Social = () => {
  return (
    <div
      style={{ height: "80vh" }}
      className="flex justify-center align-center"
    >
      <img src="/Assets/MedicalAssets/social.png" className="h-full" />
      <div className="flex flex-col h-full justify-center items-center">
        <h1 className="text-5xl font-bold text-green-600 ">Let's Get</h1>
        <h1 className="text-8xl font-bold text-green-600 mb-6">Social</h1>
        <span className="text-green-600 mb-4">
          Instagram | <span className="text-green-800">@DrCarlson</span>
        </span>
        <span className="text-green-600 mb-4">
          Linkedin| <span className="text-green-800">@DrCarlson</span>
        </span>
        <span className="text-green-600 mb-4">
          Facebook | <span className="text-green-800">@DrCarlson</span>
        </span>
        <span className="text-green-600 mb-4">
          Twitter | <span className="text-green-800">@DrCarlson</span>
        </span>
      </div>
    </div>
  );
};

export default Social;
