import React, { useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";

const MobileComponent = () => {
  const [isOpen, setIsMobile] = useState(false);
  //Temporarily initialised 2 cards
  const [userDetails, setUserDetails] = useState({
    id: 1,
    email: "amanu0181@gmail.com",
    password: "$2b$10$FZNMx/I2K2x.ygZAY9XyvezRxmsU8ku0P49XyouICDnh49gGaZwIe",
    username: "new",
    resetToken: null,
    resetPasswordExpires: null,
    profilePictureUrl: null,
    createdAt: "2024-12-06T13:08:00.333Z",
    updatedAt: "2024-12-06T13:08:00.333Z",
    role: "User",
    cards: [
      {
        id: 1,
        title: "John Doe",
        bio: "A free, open content online encyclopedia created through the collaborative efforts",
        phoneNumbers: ["+1234567890", "+0987654321"],
        emails: ["john.doe@example.com", "contact@johndoe.dev"],
        addresses: [
          "123 Main Street, Springfield",
          "456 Elm Street, Shelbyville",
        ],
        jobTitle: "Senior Developer",
        companyName: "Tech Innovators Inc.",
        dateOfBirth: "1990-05-15T00:00:00.000Z",
        personalSocialMediaLinks: {
          create: [
            {
              url: "https://linkedin.com/in/johndoe",
              iconUrl: "https://example.com/icons/linkedin.png",
              platform: "LINKEDIN",
            },
            {
              url: "https://twitter.com/johndoe",
              iconUrl: "https://example.com/icons/twitter.png",
              platform: "TWITTER",
            },
          ],
        },
        companySocialMediaLink: "https://facebook.com/techinnovators",
        profileImageUrl: "https://example.com/images/johndoe.jpg",
        templateType: "professional",
        uniqueUrl: "https://www.wikipedia.org/",
        qrCodeUrl: "https://example.com/qrcodes/johndoe.png",
        aboutUs:
          "We deliver top-notch software solutions tailored to your needs.",
        instagramVideoLink: "https://instagram.com/reel/xyz123",
        youtubeVideoLink: "https://youtube.com/watch?v=abc123",
        createdAt: "2024-12-06T14:41:55.517Z",
        updatedAt: "2024-12-06T14:41:55.517Z",
        userId: 1,
      },
      {
        id: 2,
        title: "John Doe",
        bio: "Software Engineer with a passion for solving complex problems.",
        phoneNumbers: ["+1234567890", "+0987654321"],
        emails: ["john.doe@example.com", "contact@johndoe.dev"],
        addresses: [
          "123 Main Street, Springfield",
          "456 Elm Street, Shelbyville",
        ],
        jobTitle: "Senior Developer",
        companyName: "Tech Innovators Inc.",
        dateOfBirth: "1990-05-15T00:00:00.000Z",
        personalSocialMediaLinks: {
          create: [
            {
              url: "https://linkedin.com/in/johndoe",
              iconUrl: "https://example.com/icons/linkedin.png",
              platform: "LINKEDIN",
            },
            {
              url: "https://twitter.com/johndoe",
              iconUrl: "https://example.com/icons/twitter.png",
              platform: "TWITTER",
            },
          ],
        },
        companySocialMediaLink: "https://facebook.com/techinnovators",
        profileImageUrl: "https://example.com/images/johndoe.jpg",
        templateType: "professional",
        uniqueUrl: "https://munirsiddiqui.vercel.app/",
        qrCodeUrl: "https://example.com/qrcodes/johndoe.png",
        aboutUs:
          "We deliver top-notch software solutions tailored to your needs.",
        instagramVideoLink: "https://instagram.com/reel/xyz123",
        youtubeVideoLink: "https://youtube.com/watch?v=abc123",
        createdAt: "2024-12-06T15:41:18.950Z",
        updatedAt: "2024-12-06T15:41:18.950Z",
        userId: 1,
      },
    ],
  });
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
          <h2 className="text-white text-lg">
            Good Morning, {userDetails?.username}
          </h2>
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
      <div className="flex flex-col p-3" style={{ backgroundColor: "#EADAF4" }}>
        <h3 className="font-semibold text-lg m-5" style={{ color: "#AB6BD4" }}>
          My Cards
        </h3>
        {userDetails?.cards.map((card, index) => (
          <div className="my-5" key={index}>
            <Card card={card} />
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

export default MobileComponent;
