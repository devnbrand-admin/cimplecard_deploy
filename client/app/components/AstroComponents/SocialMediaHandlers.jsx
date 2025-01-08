import React from "react";

const SocialMediaSection = ({ card }) => {
  return (
    <div className="w-full bg-transparent text-white py-16">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="font-Cormorant not-italic text-4xl md:text-5xl lg:text-6xl">
          Unlocking the <span className="italic">Secrets</span> of the Universe
        </h2>
      </div>

      {/* YouTube Section */}
      <div className="mb-16">
        <h3 className="text-center text-lg md:text-xl font-Mons mb-8">Our YouTube Channel</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12 lg:px-24 font-Figtree">
          {/* YouTube Video Cards */}
          {
            card?.youtubeVideoLink?.map((video, index) => (
              <div key={index} className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
                <iframe
                  src={video}
                  width="400"
                  height="225"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-56 md:h-64 rounded-lg"
                ></iframe>
                {/* <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden p-4">
                  <iframe
                    src="https://www.youtube.com/embed/ScMzIvxBSi4"
                    width="100%"
                    height="260"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                  <div className="py-4 space-y-3">
                    <p className="text-sm bg-[#ffe9f0] text-[#FD4380] w-24 rounded-full p-[2px] text-center">Zodiac Signs</p>
                    <p className="text-base md:text-lg">Unveiling the Mystique of Indian Astrology: Unraveling the Secrets of the Zodiac</p>
                    <p className="text-sm text-gray-600">Noah Davis | April 1, 2024 | 3 min read</p>
                  </div>
                </div> */}
              </div>
            ))
          }
        </div>
      </div>

      {/* Instagram Section */}
      <div>
        <h3 className="text-center text-2xl md:text-3xl font-Mons mb-8">Our Instagram Channel</h3>
        <div className="flex flex-wrap gap-2">

        {
          card?.instagramReel?.map((link, index) => (
            <div key={index} className="flex items-center justify-center px-6 md:px-12 lg:px-24">
              <iframe
                // https://www.instagram.com/reel/DCb_byHtcHI/embed
                src={`${link}embed`}
                width="400"
                height="600"
                allow="encrypted-media"
                className="rounded-lg border border-gray-300 shadow-lg"
                ></iframe>
            </div>))
        }
        </div>
      </div>
    </div>
  );
};

export default SocialMediaSection;
