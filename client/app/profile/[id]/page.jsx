"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
const page = () => {
  const router = useRouter();

  const [userDetails, setUserDetails] = useState(null);
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

  return (
    <div style={{ backgroundColor: "#5A6ACF", height: "100vh" }}>
      <div className="flex p-3">
        <img
          src="/Assets/back.png"
          alt="Card Image"
          className="w-8 h-8 rounded-xl"
          onClick={() => router.back()}
        />
        <h2 className="font-semibold text-white text-xl ms-4">My Profile</h2>
      </div>
      <div
        className="mx-5 mb-5 grid grid-cols-[1fr,2fr] gap-4"
        style={{ height: "23vh" }}
      >
        <div
          className="bg-white rounded-xl p-4 shadow-md mb-3"
          style={{
            boxShadow: "0px 10px 5px 0px #00000040",
          }}
        >
          {userDetails ? (
            <>
              <div className="flex items-center gap-4">
                <img
                  src={userDetails?.profilePictureUrl}
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h1
                    className="text-xl font-bold"
                    style={{ color: "#5A6ACF" }}
                  >
                    {userDetails.username}
                  </h1>
                  <p className="text-gray-500">Designation</p>
                </div>

                <img
                  src="/Assets/more.png"
                  alt="Profile"
                  className="w-4 h-4 ml-auto"
                />
              </div>
              <div className="mt-4 flex gap-3">
                <button className="border border-gray-500 rounded-full">
                  <img
                    src="/Assets/Letter.png"
                    alt="Profile"
                    className="w-4 h-4 m-2"
                  />
                </button>
                <button className="border border-gray-500 rounded-full">
                  <img
                    src="/Assets/Ringer volume.png"
                    alt="Profile"
                    className="w-4 h-4 m-2"
                  />
                </button>
                <button className="border border-gray-500 rounded-full">
                  <img
                    src="/Assets/whatsApp.png"
                    alt="Profile"
                    className="w-4 h-4 m-2"
                  />
                </button>
                <button className="border border-gray-500 rounded-full">
                  <img
                    src="/Assets/Google Meet.png"
                    alt="Profile"
                    className="w-4 h-4 m-2"
                  />
                </button>
              </div>
            </>
          ) : (
            "LOADING..."
          )}
        </div>

        {/* Bio Section */}
        <div
          className="bg-white rounded-xl p-6 mb-3 shadow-md"
          style={{
            boxShadow: "0px 10px 5px 0px #00000040",
          }}
        >
          <h2 className="text-xl font-bold" style={{ color: "#5A6ACF" }}>
            BIO
          </h2>
          {userDetails ? (
            <p className="text-gray-500 text-sm mt-2">
              {userDetails.bio || "Bio Not Added"}
            </p>
          ) : (
            "Loading..."
          )}
        </div>
      </div>

      <div className="grid grid-cols-[1fr,2fr] gap-4 m-5">
        {/* Detailed Information */}
        <div
          className="rounded-xl p-4 shadow-md"
          style={{
            height: "62vh",
            overflowY: "scroll",
            scrollbarWidth: "none",

            boxShadow: "0px 10px 5px 0px #00000040",
            backgroundColor: "#D3EFFF",
          }}
        >
          <h2 className="text-xl font-bold" style={{ color: "#5A6ACF" }}>
            Detailed Information
          </h2>
          <div className="mt-2 space-y-3">
            <div className="rounded-xl p-2 border border-gray-400 flex items-center justify-start">
              <img
                src="/Assets/Ellipse 101.png"
                alt="Profile"
                className="p-2 border border-gray-800 rounded-full"
              />
              <div className="flex-col ms-3">
                <p className="text-md">Full Name</p>
                <p className="text-sm">{userDetails?.username}</p>
              </div>
              <p className="text-green-500 ml-auto">Online</p>
            </div>
            <div className="rounded-xl p-2 border border-gray-400 flex items-center justify-start">
              <img
                src="/Assets/Ellipse 101.png"
                alt="Profile"
                className="p-2 border border-gray-800 rounded-full"
              />
              <div className="flex-col ms-3">
                <p className="text-md">Email</p>
                <p className="text-sm">{userDetails?.email}</p>
              </div>
              <button className="border border-gray-500 rounded-full ml-auto">
                <img
                  src="/Assets/Letter.png"
                  alt="Profile"
                  className="w-4 h-4 m-2"
                />
              </button>
            </div>
            <div className="rounded-xl p-2 border border-gray-400 flex items-center justify-start">
              <img
                src="/Assets/Ellipse 101.png"
                alt="Profile"
                className="p-2 border border-gray-800 rounded-full"
              />
              <div className="flex-col ms-3">
                <p className="text-md">Contact Number</p>
                <p className="text-sm">
                  {userDetails?.contactNumber || "not added"}
                </p>
              </div>
              <button className="border border-gray-500 rounded-full ml-auto">
                <img
                  src="/Assets/Ringer volume.png"
                  alt="Profile"
                  className="w-4 h-4 m-2"
                />
              </button>
            </div>
            <div className="rounded-xl p-2 border border-gray-400 flex items-center justify-start">
              <img
                src="/Assets/Ellipse 101.png"
                alt="Profile"
                className="p-2 border border-gray-800 rounded-full"
              />
              <div className="flex-col ms-3">
                <p className="text-md">Password</p>
                <p className="text-sm">*******</p>
              </div>
              <button className="border border-gray-500 rounded-full ml-auto">
                <img
                  src="/Assets/password.png"
                  alt="Profile"
                  className="w-4 h-4 m-2"
                />
              </button>
            </div>
            <div className="rounded-xl p-2 border border-gray-400 flex items-center justify-start">
              <img
                src="/Assets/Ellipse 101.png"
                alt="Profile"
                className="p-2 border border-gray-800 rounded-full"
              />
              <div className="flex-col ms-3">
                <p className="text-md">Availablity</p>
                <p className="text-sm">Schedule the time slot</p>
              </div>
              <button className="border border-gray-500 rounded-full ml-auto">
                <img
                  src="/Assets/event accepted.png"
                  alt="Profile"
                  className="w-4 h-4 m-2"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Inbox Section */}
        <div
          className="bg-white rounded-xl p-6 shadow-md"
          style={{
            height: "62vh",
            overflowY: "scroll",
            scrollbarWidth: "none",
            boxShadow: "0px 10px 5px 0px #00000040",
            backgroundColor: "#D3EFFF",
          }}
        >
          <div className="flex">
            <h2 className="text-2xl font-bold" style={{ color: "#5A6ACF" }}>
              Inbox
            </h2>
            <div className="border mx-3 border-gray-500 rounded-full">
              <img
                src="/Assets/Chat Bubble.png"
                alt="Profile"
                className="w-4 h-4 m-2"
              />
            </div>
          </div>
          <div className="mt-4 space-y-4">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 border rounded-lg"
              >
                <img
                  src="/Assets/Profile Picture.jpg"
                  alt="Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-bold">Name</p>
                  <p className="text-gray-500">XYz@gmail.com </p>
                </div>

                <p className="w-80 ml-auto">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sequi fugiat aliquid perspiciatis.
                </p>
                <button className="border border-gray-500 rounded-full ml-auto">
                  <img
                    src="/Assets/pin.png"
                    alt="Profile"
                    className="w-4 h-4 m-2"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
