"use client";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../components/dashboardComponents/Navbar";
import Card from "../../components/dashboardComponents/Card";
import axios from "axios";
import MobileComponent from "../../components/dashboardComponents/MobileComponent";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import profileIcon from "../../assets/profile_icon.png";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

const ModalForm = dynamic(() =>
  import("../../components/dashboardformComponents/ModalForm")
);
const ModalFormMobile = dynamic(() =>
  import("../../components/dashboardformComponents/ModalFormMobile", {
    ssr: false,
  })
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

  // API call using fetch - will update it later using axios
  const [userDetails, setUserDetails] = useState();

  const BASE_URL = "https://cimple-card.onrender.com/api/user";

  const getUserDetails = async (token) => {
    try {
      const response = await axios.get(`${BASE_URL}/getdetails`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        withCredentials: true,
      });
      console.log(response.data.user);
      return response.data.user; // Return user details
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch user details"
      );
    }
  };

  // Usage in useEffect
  useEffect(() => {
    const tokenString = sessionStorage.getItem("userToken");
    const tokenObject = JSON.parse(tokenString);
    const jwtToken = tokenObject?.value;
    const fetchUserDetails = async () => {
      try {
        const userDetails = await getUserDetails(jwtToken);
        setUserDetails(userDetails);
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

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isMobile ? (
        <MobileComponent userDetails={userDetails} />
      ) : (
        <div className="flex w-full" style={{ height: "100vh" }}>
          <div
            className="m-5 mb-0 rounded-3xl"
            style={{ width: "20%", height: "92vh" }}
          >
            <Navbar userId={id} />
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex flex-row w-full items-center justify-between my-2 p-5">
              <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                <img
                  alt="Profile"
                  src={userDetails?.profilePictureUrl || profileIcon.src}
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
                {/* <div className="ml-2 p-2 rounded-full border border-gray-300">
                  <img
                    src="/Assets/Notification.png"
                    alt="Icon 3"
                    className="w-6 h-6"
                  />
                </div> */}
              </div>
            </div>
            <div
              className="w-full rounded-2xl p-4"
              style={{
                background: "#A4CEFF30",
                height: "80vh",
                overflowY: "scroll",
                overflowX: "hidden",
                scrollbarWidth: "none",
              }}
            >
              <h3 className="font-semibold mb-5" style={{ color: "#5A6ACF" }}>
                My Cards
              </h3>
              <div className="flex w-full flex-wrap gap-7">
                <div
                  onClick={handleOpenModal}
                  className=" group justify-items-center h-80 content-center w-80 flex-col relative m-3 rounded-xl bg-white"
                >
                  <img
                    src="/Assets/add a new project.png"
                    alt="Icon 3"
                    className="w-20 h-20 mb-3"
                  />
                  <h2 style={{ fontSize: 20, color: "#5A6ACF" }}>
                    Add New Card{" "}
                  </h2>
                  <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center rounded-xl justify-center text-xl opacity-0 group-hover:opacity-100 transition"></div>
                </div>
                {userDetails
                  ? userDetails.cards.map((card, index) => (
                      <Card key={index} card={card} />
                    ))
                  : ""}
              </div>
            </div>
          </div>
          {isModalOpen && (
            <Provider store={store}>
              <div
                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"

                // onClick={() => setIsModalOpen(false)} // Close modal on backdrop click
              >
                <div
                  className="bg-white p-6 rounded shadow-md"
                  // Prevent backdrop click from closing the modal
                >
                  {isMobileSize ? (
                    <ModalFormMobile />
                  ) : (
                    <ModalForm setIsModalOpen={setIsModalOpen} />
                  )}
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
