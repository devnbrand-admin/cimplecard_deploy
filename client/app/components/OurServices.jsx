"use client";
import React from "react";

const OurServices = () => {
  const cards = [
    {
      id: 1,
      serviceImage:
        "https://th.bing.com/th/id/OIP.tWJBwTsb8Sc3s_1ZMzihvgHaHa?w=159&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      serviceName: "Web Development",
      description: " adipisci possimus et dolores asperiores sint, a aut, quis laborum perspiciatis facere beatae.Building scalable web applications.",
      url: "https://example.com/1",
    },
    {
      id: 2,
      serviceImage:
        "https://d30o293m18t25t.cloudfront.net/wp-content/uploads/2022/04/mobile-app-development.png",
      serviceName: "Mobile App Development",
      description: " adipisci possimus et dolores asperiores sint, a aut, quis laborum perspiciatis facere beatae.Creating intuitive mobile experiences.",
      url: "https://example.com/2",
    },
    {
      id: 3,
      serviceImage:
        "https://www.stratospherenetworks.com/blog/wp-content/uploads/2019/06/cloud-computing-concept-with-folders.jpg",
      serviceName: "Cloud Solutions",
      description: " adipisci possimus et dolores asperiores sint, a aut, quis laborum perspiciatis facere beatae.Innovative cloud-based solutions.",
      url: "https://example.com/3",
    },
    {
      id: 4,
      serviceImage:
        "https://www.mouser.co.uk/images/AI-and-Machine-Learning-infographic.jpg",
      serviceName: "AI & Machine Learning",
      description: " adipisci possimus et dolores asperiores sint, a aut, quis laborum perspiciatis facere beatae.Advanced AI and ML technologies.",
      url: "https://example.com/4",
    },
    {
      id: 5,
      serviceImage:
        "https://th.bing.com/th/id/OIP.Ywd0YoHovYABnOWsmS6yygHaEc?rs=1&pid=ImgDetMain",
      serviceName: "Blockchain Development",
      description: " adipisci possimus et dolores asperiores sint, a aut, quis laborum perspiciatis facere beatae.Decentralized and secure solutions.",
      url: "https://example.com/5",
    },
    {
      id: 6,
      serviceImage:
        "https://www.cm-alliance.com/hubfs/60776739_l%20(1).jpg#keepProtocol",
      serviceName: "Cybersecurity Services",
      description: " adipisci possimus et dolores asperiores sint, a aut, quis laborum perspiciatis facere beatae.Ensuring digital safety and privacy.",
      url: "https://example.com/6",
    },
  ];

  return (
    <div className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => window.open(card.url, "_blank")}
            className="relative cursor-pointer overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md transition-all duration-300 hover:bg-orange-50 hover:border-orange-400"
          >
            <div className="flex justify-center items-center py-4">
              <img
                src={card.serviceImage}
                alt={card.serviceName}
                className="w-16 h-16 object-contain"
              />
            </div>

            <div className="text-center px-4 pb-4">
              <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 hover:text-orange-500">
                {card.serviceName}
              </h3>
              <p className="text-sm text-gray-600 text-center mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
