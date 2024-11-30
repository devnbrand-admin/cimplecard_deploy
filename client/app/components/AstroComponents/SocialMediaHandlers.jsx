import React from "react";

function SocialMediaEmbeds() {
  return (
    <div className="w-full min-h-screen bg-[#2b1923] text-white">
      <div className="max-w-6xl w-full mx-auto p-8">
        <h2 className="text-4xl font-extrabold text-center text-teal-300 mb-14 mt-20">
          Connect With Us Beyond the Stars
        </h2>

        <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 border border-teal-500 mb-12 bg-gradient-to-br from-black via-teal-900 to-black">
          <h3 className="text-lg font-semibold text-teal-200 p-4 border-b border-teal-700 text-center">
            Cosmic YouTube Channel
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            <div className="flex items-center justify-center">
              <iframe
                src="https://www.youtube.com/embed/ScMzIvxBSi4"
                width="100%"
                height="400"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg border border-teal-400 shadow-inner"
              ></iframe>
            </div>
            <div className="flex items-center justify-center">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                width="100%"
                height="400"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg border border-teal-400 shadow-inner"
              ></iframe>
            </div>
            <div className="flex items-center justify-center">
              <iframe
                src="https://www.youtube.com/embed/kJQP7kiw5Fk"
                width="100%"
                height="400"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg border border-teal-400 shadow-inner"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 border border-teal-500 bg-gradient-to-br from-black via-teal-900 to-black">
          <h3 className="text-lg font-semibold text-teal-200 p-4 border-b border-teal-700 text-center">
            Galactic Instagram Highlights
          </h3>
          <div className="flex items-center justify-center p-4 min-h-[300px]">
            <iframe
              src="https://www.instagram.com/reel/DCb_byHtcHI/embed"
              width="40%"
              height="700"
              allow="encrypted-media"
              className="rounded-lg border border-teal-400 shadow-inner"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaEmbeds;
