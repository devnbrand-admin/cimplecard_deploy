import React from "react";

function SocialMediaEmbeds({ card }) {
  return (
    <div className="w-full min-h-screen bg-white font-Mons">
      <div className="max-w-6xl w-full mx-auto p-8">

        <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-8">
          Follow Us on Social Media
        </h2>

        {/* YouTube Section */}
        <h3 className="text-xl font-semibold text-[#578EB6] p-4 border-b text-center">
          Our YouTube Channel
        </h3>
        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 border mb-8 bg-gradient-to-b from-[#578EB6] to-[#FFFFFF]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {
              card?.youtubeVideoLink?.map((video, index) => (
                <div key={index} className="flex items-center justify-center">
                  <iframe
                    src={video}
                    width="100%"
                    height="300"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              ))
            }
            {/* <div className="flex items-center justify-center">
              <iframe
                src="https://www.youtube.com/embed/kJQP7kiw5Fk"
                width="100%"
                height="300"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div> */}
          </div>
        </div>

        {/* Instagram Section */}
        <h3 className="text-3xl font-semibold text-[#578EB6] p-4 border-b text-center">
          Our Instagram Handle
        </h3>
        <div className="bg-gradient-to-b from-[#578EB6] flex gap-2 flex-wrap to-[#FFFFFF] rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 border">
          {
            card?.instagramPost?.map((link, index) => (
              <div key={index} className="flex flex-1 basis-[150px] grow items-center justify-center p-4">
                <iframe
                  src={`${link}embed`}
                  width="350"
                  height="500"
                  allow="encrypted-media"
                  className="rounded-lg"
                ></iframe>
              </div>
            ))
          }
        </div>

      </div>
    </div>
  );
}

export default SocialMediaEmbeds;
