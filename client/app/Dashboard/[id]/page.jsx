"use client";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../components/dashboardComponents/Navbar";
import Card from "../../components/dashboardComponents/Card";
import axios from "axios";
import MobileComponent from "../../components/dashboardComponents/MobileComponent";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

const ModalForm = dynamic(() =>
  import("../../components/dashboardformComponents/ModalForm")
);
const ModalFormMobile = dynamic(() =>
  import("../../components/dashboardformComponents/ModalFormMobile")
);

const DashboardPage = () => {
  const params = useParams();
  const id = params.id;
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isMobileSize = useMediaQuery({ maxWidth: 768 });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

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



  // API call using fetch - will update it later using axios
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        // Login API call
        const loginResponse = await fetch(
          `https://cimple-card.onrender.com/api/user/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: "amanu0181@gmail.com",
              password: "12345",
            }),
          }
        );

        if (!loginResponse.ok) {
          throw new Error("Failed to login");
        }

        const loginData = await loginResponse.json();
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbWFudTAxODFAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJpYXQiOjE3MzM4MTA4MTEsImV4cCI6MTczMzgxNDQxMX0.feexQOatcFSdMlJgcRZt0HL7JIf9DwlNIko1DzZz9y8"; // Assuming the token is returned in the login response

        // User details API call with Bearer token
        const userDetailsResponse = await fetch(
          `https://cimple-card.onrender.com/api/user/getdetails`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
            credentials: "include",
          }
        );

        if (!userDetailsResponse.ok) {
          const errorData = await userDetailsResponse.json();
          throw new Error(errorData.message || "Failed to fetch user details");
        }

        const userData = await userDetailsResponse.json();
        console.log(userData);
        setUserDetails(userData);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchUserDetails();
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <MobileComponent />
      ) : (
        <div className="flex w-full" style={{ height: "100vh" }}>
          <div
            className="m-5 mb-0 rounded-3xl"
            style={{ width: "20%", backgroundColor: "#9D4AD1", height: "92vh" }}
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
                <span className="text-md">{userDetails?.username}</span>{" "}
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
              style={{
                backgroundColor: "#EADAF4",
                height: "80vh",
                overflowY: "scroll",
                overflowX: "hidden",
                scrollbarWidth: "none",
              }}
            >
              <h3 className="font-semibold mb-5" style={{ color: "#AB6BD4" }}>
                My Cards
              </h3>
              <div className="flex w-full flex-wrap gap-7">
                <div
                  onClick={handleOpenModal}
                  className=" group justify-items-center content-center w-80 flex-col relative m-3 rounded-xl bg-white"
                >
                  <img
                    src="/Assets/add a new project.png"
                    alt="Icon 3"
                    className="w-20 h-20 mb-3"
                  />
                  <h2 style={{ fontSize: 20, color: "#AB6BD4" }}>
                    Add New Card{" "}
                  </h2>
                  <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center rounded-xl justify-center text-xl opacity-0 group-hover:opacity-100 transition"></div>
                </div>
                {userDetails?.cards.map((card, index) => (
                  <Card key={index} card={card} />
                ))}
              </div>
            </div>
          </div>

          {/* Card Creation Modal */}
          {/* {isOpen && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg w-80">
                <h2 className="text-xl font-bold mb-4">Card Creation</h2>
                <div className="w-90 h-80"></div>
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-sm text-red-500"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )} */}
          {isModalOpen && (
            <Provider store={store}>
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded shadow-md" >
                  {isMobileSize ? <ModalFormMobile  /> : <ModalForm />}
                </div>
              </div>
            </Provider>
          )}
        </div>
      )}
    </>
  );
};

export default DashboardPage;
