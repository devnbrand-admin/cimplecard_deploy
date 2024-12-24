import React from "react";

const SocialMediaSection = () => {
  return (
    <div className="w-full bg-[#121F2E] text-white py-16 mt-10">
     
      <div className="text-center mb-10">
        <h2 className="font-Garamond not-italic text-4xl md:text-5xl lg:text-6xl">
          Blog Posts
        </h2>
      </div>

      {/* YouTube Section */}
      <div className="mb-16">
        <h3 className="text-center text-lg md:text-3xl font-Garamond mb-8 text-[#BC9B77] tracking-wide">
          Our YouTube Channel
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12 lg:px-24 font-Figtree">
          {/* YouTube Video Cards */}
          <div className="bg-transparent rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/ScMzIvxBSi4"
              width="100%"
              height="400"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
            <div className="py-4 space-y-3">
              <p className="text-base text-white">
                Lorem, ipsum dolor sit amet
              </p>
            </div>
          </div>

          <div className="bg-transparent rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              width="100%"
              height="400"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
            <div className="py-4 space-y-4">
              <p className="text-base text-white">
                Lorem, ipsum dolor sit amet
              </p>
            </div>
          </div>

          <div className="bg-transparent rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/kJQP7kiw5Fk"
              width="100%"
              height="400"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
            <div className="py-4 space-y-3">
              <p className="text-base text-white">
                Lorem, ipsum dolor sit amet
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Instagram Section */}
      <div>
        <h3 className=" text-lg text-center md:text-3xl font-Garamond mb-8 text-[#BC9B77] tracking-wide">
          Our Instagram Channel
        </h3>
        <div className="flex flex-col items-center justify-center px-6 md:px-12 lg:px-24">
          <iframe
            src="https://www.instagram.com/reel/DCb_byHtcHI/embed"
            width="400"
            height="600"
            allow="encrypted-media"
            className="rounded-lg border border-gray-300 shadow-lg"
          ></iframe>
          <div className="py-4 space-y-3">
            <p className="text-base text-white font-serif">
              Lorem, ipsum dolor sit amet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaSection;
