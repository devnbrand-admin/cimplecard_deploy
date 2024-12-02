import React from "react";

function SocialMediaEmbeds() {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-6xl w-full mx-auto p-8">

        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          Follow Us on Social Media
        </h2>

        {/* YouTube Section */}
        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 border mb-8 bg-gradient-to-b from-blue-300 to-blue-200">
          <h3 className="text-lg font-semibold text-gray-700 p-4 border-b text-center">
            Our YouTube Channel
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            <div className="flex items-center justify-center">
              <iframe
                src="https://www.youtube.com/embed/ScMzIvxBSi4"
                width="100%"
                height="300"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <div className="flex items-center justify-center">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                width="100%"
                height="300"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <div className="flex items-center justify-center">
              <iframe
                src="https://www.youtube.com/embed/kJQP7kiw5Fk"
                width="100%"
                height="300"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Instagram Section */}
        <div className="bg-gradient-to-b from-blue-300 to-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 border">
          <h3 className="text-lg font-semibold text-gray-700 p-4 border-b text-center">
            Our Instagram Handle
          </h3>
          <div className="flex items-center justify-center p-4">
            <iframe
              src="https://www.instagram.com/reel/DCb_byHtcHI/embed"
              width="350"
              height="500"
              allow="encrypted-media"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SocialMediaEmbeds;
