import React from "react";

const Footer = ({ card }) => {
  return (
    <div className="flex md:h-[70vh] justify-center items-center flex-col">
      <div
        className="relative h-full flex md:flex-row flex-col items-center justify-center"
        style={{ width: "80vw" }}
      >
        {/* Video Section */}
        <div className="flex h-72 align-center md:w-3/4 w-full m-4">
          {card?.youtubeVideoLink?.length > 0 ? (
            card.youtubeVideoLink.slice(0, 3)?.map((link, index) => (
              <div
                key={index}
                className="h-60 w-1/3 m-1 bg-gray-200 border border-gray-500 rounded-lg overflow-hidden"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={link}
                  title={`Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))
          ) : (
            <div className="text-center w-full text-gray-600">
              <p>No videos available</p>
            </div>
          )}
        </div>

        {/* Call-to-Action Section */}
        <div className="flex flex-col h-3/4 w-72 items-center p-3 text-center">
          <h1 className="text-2xl font-bold text-green-600">Watch Our</h1>
          <h1 className="text-3xl font-bold text-green-600 mb-3">
            Health Videos
          </h1>
          {["Youtube | Healthy Life", "TikTok | Healthy Life", "Instagram | Healthy Life"]?.map(
            (platform, index) => (
              <span
                key={index}
                className="bg-green-600 w-full text-white p-3 my-1 rounded-xl cursor-pointer hover:bg-green-700 transition"
              >
                {platform}
              </span>
            )
          )}
        </div>

        {/* Background Image */}
        <img
          style={{ zIndex: -1, height: "120%" }}
          src="/Assets/MedicalAssets/footerbg.png"
          alt="Footer Background"
          className="w-full absolute hidden md:block"
        />
      </div>

      {/* Doctor Image */}
      <div className="relative w-36 h-36">
        <img
          src="/Assets/MedicalAssets/doctor.png"
          alt="Doctor Illustration"
          className="w-36 h-36 absolute hidden md:block"
          style={{ top: -40 }}
        />
      </div>
    </div>
  );
};

export default Footer;
