"use client";
import React from "react";

const OurServices = () => {
  const cards = [
    {
      id: 1,
      serviceImage:
        "https://th.bing.com/th/id/OIP.tWJBwTsb8Sc3s_1ZMzihvgHaHa?w=159&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      serviceName: "Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id assumenda totam minus recusandae accusantium ipsam aliquid sed esse. Minima ut nesciunt ab dolorem magni eius! Temporibus voluptas nostrum adipisci?",
      url: "https://example.com/1",
    },
    {
      id: 2,
      serviceImage:
        "https://d30o293m18t25t.cloudfront.net/wp-content/uploads/2022/04/mobile-app-development.png",
      serviceName: "Mobile App Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id assumenda totam minus recusandae accusantium ipsam aliquid sed esse. Minima ut nesciunt ab dolorem magni eius! Temporibus voluptas nostrum adipisci?",
      url: "https://example.com/2",
    },
    {
      id: 3,
      serviceImage:
        "https://www.stratospherenetworks.com/blog/wp-content/uploads/2019/06/cloud-computing-concept-with-folders.jpg",
      serviceName: "Cloud Solutions",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id assumenda totam minus recusandae accusantium ipsam aliquid sed esse. Minima ut nesciunt ab dolorem magni eius! Temporibus voluptas nostrum adipisci?",
      url: "https://example.com/3",
    },
    {
      id: 4,
      serviceImage:
        "https://www.mouser.co.uk/images/AI-and-Machine-Learning-infographic.jpg",
      serviceName: "AI & Machine Learning",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id assumenda totam minus recusandae accusantium ipsam aliquid sed esse. Minima ut nesciunt ab dolorem magni eius! Temporibus voluptas nostrum adipisci?",
      url: "https://example.com/4",
    },
    {
      id: 5,
      serviceImage:
        "https://th.bing.com/th/id/OIP.Ywd0YoHovYABnOWsmS6yygHaEc?rs=1&pid=ImgDetMain",
      serviceName: "Blockchain Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id assumenda totam minus recusandae accusantium ipsam aliquid sed esse. Minima ut nesciunt ab dolorem magni eius! Temporibus voluptas nostrum adipisci?",
      url: "https://example.com/5",
    },
    {
      id: 6,
      serviceImage:
        "https://www.cm-alliance.com/hubfs/60776739_l%20(1).jpg#keepProtocol",
      serviceName: "Cybersecurity Services",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id assumenda totam minus recusandae accusantium ipsam aliquid sed esse. Minima ut nesciunt ab dolorem magni eius! Temporibus voluptas nostrum adipisci?",
      url: "https://example.com/6",
    },
  ];

  return (
    <div className="py-16 px-6 bg-gray-50">
      {/* Title Section */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Our Services
      </h2>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => window.open(card.url, "_blank")}
            className="cursor-pointer rounded-xl overflow-hidden shadow-md bg-[#578EB6] border border-[#578EB6] transition-all hover:shadow-lg hover:scale-105"
          >
            {/* Icon Section */}
            <div className="flex items-center justify-center bg-blue-100 py-6">
              <img
                src={card.serviceImage}
                alt={card.serviceName}
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">
                {card.serviceName}
              </h3>
              <p className="text-sm font-thin text-[#dcf0ff]">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
