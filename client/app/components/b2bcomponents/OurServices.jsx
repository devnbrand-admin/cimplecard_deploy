"use client";

const OurServices = () => {
  const cards = [
    {
      id: 1,
      serviceImage:
        "https://miro.medium.com/v2/resize:fit:875/0*M4bxiCIjcTK-2Xr6.jpeg",
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
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id assumenda totam minus recusandae accusantium ipsam aliquid sed esse. Minima ut nesciunt ab dolorem magni eius! Temporibus voluptas nostrum adipisci?",
      url: "https://example.com/3",
    },
    {
      id: 4,
      serviceImage:
        "https://media.licdn.com/dms/image/v2/D4D12AQEd4MuaQy52QQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1714152970752?e=2147483647&v=beta&t=oZ7VWkungS9GA_6d2T4XeatC9jjdsdgbE1642Bwz9rc",
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
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id assumenda totam minus recusandae accusantium ipsam aliquid sed esse. Minima ut nesciunt ab dolorem magni eius! Temporibus voluptas nostrum adipisci?",
      url: "https://example.com/6",
    },
  ];

  return (
    <div>
      {/* Title Section */}
      <div className="text-start px-6 xl:px-36 pt-10">
        <p className="font-Mons text-4xl font-semibold text-gray-900">
          Our Services
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto py-16 px-6">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => window.open(card.url, "_blank")}
            className="cursor-pointer rounded-xl overflow-hidden border-2 shadow-md bg-white border-[#578EB6] transition-all hover:shadow-lg hover:scale-105"
          >
            {/* Top Half: Image Section */}
            <div className="flex items-center justify-center py-8 bg-white relative">
              <div className="w-24 h-24 md:w-40 md:h-40 rounded-full bg-blue-100 flex items-center justify-center border-4 border-white p-2">
                <img
                  src={card.serviceImage}
                  alt={card.serviceName}
                  className="object-contain w-16 h-16 md:w-28 md:h-28"
                />
              </div>
            </div>

            {/* Bottom Half: Text Section */}
            <div className="p-6 text-center bg-[#578EB6]">
              <h3 className="text-lg font-semibold text-white mb-2">
                {card.serviceName}
              </h3>
              <p className="text-sm text-[#dcf0ff]">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
