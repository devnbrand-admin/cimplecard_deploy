"use client";
import React, { useState, useEffect, use } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../components/dashboardComponents/Navbar";
import Card from "../../components/dashboardComponents/Card";
import axios from "axios";
import MobileComponent from "../../components/dashboardComponents/MobileComponent";

const DashboardPage = () => {
  const params = useParams();
  const id = params.id;
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
      throw new Error(
        error.response?.data?.message || "Failed to fetch user details"
      );
    }
  };

  // Usage in useEffect
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userDetails = await getUserDetails(
          sessionStorage.getItem("authToken")
        );
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

  return (
    <>
      {isMobile ? (
        userDetails && <MobileComponent userDetails={userDetails} />
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
                  onClick={() => setIsOpen(true)}
                  className="relative group justify-items-center content-center w-80 flex-col relative m-3 rounded-xl bg-white"
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
          {isOpen && (
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
          )}
        </div>
      )}
    </>
  );
};

export default DashboardPage;
