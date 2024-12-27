"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../components/dashboardComponents/Navbar";
import Card from "../../components/dashboardComponents/Card";
import axios from "axios";
import profileIcon from "../../assets/profile_icon.png";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

const ModalForm = dynamic(() => import("../../components/dashboardformComponents/ModalForm"));
const ResponsiveModalForm = dynamic(() => import("../../components/dashboardformComponents/Modal"));
const ModalFormMobile = dynamic(() => import("../../components/dashboardformComponents/ModalFormMobile", { ssr: false }));

const DashboardPage = () => {
  const params = useParams();
  const id = params.id;

  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      return response.data.user; // Return user details
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to fetch user details");
    }
  };

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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Provider store={store}>
      <div className="w-full">
        {/* Mobile View */}
        <div className="block lg:hidden bg-[#EADAF4] h-screen">
          {/* Mobile Header */}
          <div className="bg-[#5A6ACF] rounded-b-3xl min-h-[250px] relative">

            <div className="p-4 flex items-center justify-between">
              <button onClick={() => setIsModalOpen(true)}>
                <img src="/Assets/options.png" alt="Menu" className="w-6 h-6" />
              </button>
              <div className="w-10 h-10 border-2 rounded-lg">
                <img
                  src="/Assets/Profile Picture.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="p-4 text-white">
              <h1 className="text-2xl font-bold">Welcome Back</h1>
              <h2 className="text-lg">Good Morning, {userDetails?.username}</h2>
            </div>
            <div
              className="m-auto left-0 top-1/1 shadow-lg right-0 mx-auto flex justify-center items-center flex-col gap-2 absolute my-4 w-72 h-56 border border-gray-300 rounded-xl bg-white  cursor-pointer"
              onClick={handleOpenModal}
            >
              <img
                src="/Assets/add a new project.png"
                alt="Add New Card"
                className="w-20 h-20 mb-3"
              />
              <h2 className="text-xl text-blue-600">Add New Card</h2>
            </div>
          </div>
          {/* Cards */}
          <div className="p-4 bg-[#EADAF4] flex-1 mt-[150px]">
            <h3 className="text-lg font-semibold text-[#5A6ACF] mb-4">My Cards</h3>
            {userDetails
              ? userDetails.cards.map((card, index) => (
                <div key={index} className="my-4">
                  <Card card={card} />
                </div>
              ))
              : "No cards available"}
          </div>


        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex">
          <div className="m-5 mb-0 rounded-3xl" style={{ width: "20%", height: "92vh" }}>
            <Navbar />
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
                <span className="text-sm text-gray-500">Welcome,</span>
                <span className="text-md">{userDetails?.username}</span>
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
                    alt="Icon"
                    className="w-6 h-6"
                  />
                </div>
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
                  className="group justify-items-center h-80 content-center w-80 flex-col relative m-3 rounded-xl bg-white"
                >
                  <img
                    src="/Assets/add a new project.png"
                    alt="Add New Card"
                    className="w-20 h-20 mb-3"
                  />
                  <h2 style={{ fontSize: 20, color: "#5A6ACF" }}>Add New Card</h2>
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
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={handleCloseModal}
          >
            <div className="bg-white p-6 rounded shadow-md" onClick={(e) => e.stopPropagation()}>
              <ResponsiveModalForm setIsModalOpen={setIsModalOpen} />
            </div>
          </div>
        )}
      </div>
    </Provider>
  );
};

export default DashboardPage;
