"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../components/dashboardComponents/Navbar";
import Card from "../../components/dashboardComponents/Card";

const DashboardPage = () => {
  const params = useParams();
  const id = params.id;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const cardsData = [
    {
      image: "/Assets/image 9.png",
      description: "Small Description about the card",
      time: "1 hour ago",
    },
    {
      image: "/Assets/project1.png",
      description: "another Description xyz",
      time: "2 hours ago",
    },
    {
      image: "/Assets/image 9.png",
      description: "Small Description about the project",
      time: "7 hours ago",
    },
    {
      image: "/Assets/project1.png",
      description: "another second Description xyz",
      time: "12 hours ago",
    },
    {
      image: "/Assets/project1.png",
      description: "another Description xyz",
      time: "2 hours ago",
    },
    {
      image: "/Assets/image 9.png",
      description: "Small Description about the project",
      time: "7 hours ago",
    },
    {
      image: "/Assets/project1.png",
      description: "another second Description xyz",
      time: "12 hours ago",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const MobileComponent = () => {
    return (
      <div
        style={{ backgroundColor: "#EADAF4" }}
        className="flex flex-col m-0 relative"
      >
        <div className="bg-gradient-to-b from-purple-500 to-purple-300 p-2 pb-5 rounded-b-3xl h-60">
          <div className="flex items-center justify-between ">
            <button className="text-white" onClick={() => setIsOpen(true)}>
              <img src="/Assets/options.png" alt="Menu" className="w-6 h-6" />
            </button>
            <div className="w-10 h-10  border-2 rounded-lg">
              <img
                src="/Assets/Profile Picture.jpg" // Replace with the correct image path
                alt="Profile"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="my-6">
            <h1 className="text-white text-2xl font-bold">Welcome Back</h1>
            <h2 className="text-white text-lg">Good Morning, Emma</h2>
          </div>
          <div
            style={{ top: 10 }}
            className="absolute justify-items-center content-center w-80 flex-col relative m-auto border border-gray-300 h-56 rounded-xl bg-white"
          >
            <img
              src="/Assets/add a new project.png"
              alt="Icon 3"
              className="w-20 h-20 mb-3"
            />
            <h2 style={{ fontSize: 20, color: "#AB6BD4" }}>Add New Card </h2>
          </div>
        </div>

        <div className="h-40"></div>
        <div
          className="flex flex-col p-3"
          style={{ backgroundColor: "#EADAF4" }}
        >
          <h3
            className="font-semibold text-lg m-5"
            style={{ color: "#AB6BD4" }}
          >
            My Cards
          </h3>
          {cardsData.map((card, index) => (
            <div className="my-5" key={index}>
              <Card
                image={card.image}
                description={card.description}
                time={card.time}
              />
            </div>
          ))}
          <div className="h-40"></div>
        </div>

        {isOpen ? (
          <div
            className="fixed left-0 top-0 w-3/4"
            style={{ zIndex: 99, backgroundColor: "#9D4AD1" }}
          >
            <button
              className="fixed p-4 text-xl text-white"
              onClick={() => setIsOpen(false)}
            >
              x
            </button>
            <Navbar />
          </div>
        ) : (
          ""
        )}

        <div className="flex justify-between items-center p-4 bg-white rounded-t-lg shadow-md fixed bottom-0 left-0 w-full">
          <button className="flex flex-col items-center text-purple-500">
            <img
              style={{ color: "black" }}
              src="/Assets/Home-col.png" // Replace with your home icon path
              alt="Home"
              className="w-6 h-6"
            />
            <span className="text-sm">Home</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <img
              src="/Assets/Account-black.png" // Replace with your profile icon path
              alt="Profile"
              className="w-6 h-6"
            />
            <span className="text-sm">Profile</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <img
              src="/Assets/Notification-black.png" // Replace with your notification icon path
              alt="Notifications"
              className="w-6 h-6"
            />
            <span className="text-sm">Alerts</span>
          </button>
        </div>
      </div>
    );
  };
  return (
    <>
      {isMobile ? (
        <MobileComponent />
      ) : (
        <div className="flex w-full">
          <div
            className="m-5 rounded-3xl"
            style={{ width: "20%", backgroundColor: "#9D4AD1" }}
          >
            <Navbar />
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex flex-row w-full items-center justify-between my-2 p-5">
              <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                <img
                  src="/Assets/Profile Picture.jpg" // Replace with your profile pic path
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="flex flex-col ml-4">
                <span className="text-sm text-gray-500">Welcome,</span>{" "}
                <span className="text-md">Name Surname</span>{" "}
              </div>

              <div className="flex ml-auto">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-3 py-1 border border-gray-300 rounded-sm w-60 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <div className="ml-2 p-2 rounded-full border border-gray-300">
                  <img
                    src="/Assets/icon (1).png"
                    alt="Icon 3"
                    className="w-6 h-6"
                  />
                </div>
                <div className="ml-2 p-2 rounded-full border border-gray-300">
                  <img
                    src="/Assets/Notification.png"
                    alt="Icon 3"
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </div>
            <div
              className="w-full rounded-2xl p-4"
              style={{ backgroundColor: "#EADAF4" }}
            >
              <h3 className="font-semibold mb-5" style={{ color: "#AB6BD4" }}>
                My Cards
              </h3>
              <div className="flex w-full flex-wrap gap-7">
                <div className="justify-items-center content-center w-80 flex-col relative m-3 rounded-xl bg-white">
                  <img
                    src="/Assets/add a new project.png"
                    alt="Icon 3"
                    className="w-20 h-20 mb-3"
                  />
                  <h2 style={{ fontSize: 20, color: "#AB6BD4" }}>
                    Add New Card{" "}
                  </h2>
                </div>
                {cardsData.map((card, index) => (
                  <Card
                    key={index}
                    image={card.image}
                    description={card.description}
                    time={card.time}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardPage;
