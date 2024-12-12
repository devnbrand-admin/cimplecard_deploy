"use client";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  return (
    <div style={{ backgroundColor: "#B07ED1", height: "100vh" }}>
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
          <div className="flex items-center gap-4">
            <img
              src="/Assets/Profile Picture.jpg"
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h1 className="text-xl font-bold text-purple-700">
                Name Surname
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
        </div>

        {/* Bio Section */}
        <div
          className="bg-white rounded-xl p-6 mb-3 shadow-md"
          style={{
            boxShadow: "0px 10px 5px 0px #00000040",
          }}
        >
          <h2 className="text-xl font-bold text-purple-700">BIO</h2>
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Lorem
            ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Libero eveniet pariatur voluptates unde, ex
            praesentium commodi, quasi error quas vitae soluta cum reprehenderit
            doloribus odio, exercitationem quos iure autem quisquam.
          </p>
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
            backgroundColor: "#EADAF4",
          }}
        >
          <h2 className="text-xl font-bold text-purple-700">
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
                <p className="text-sm">Name Surname</p>
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
                <p className="text-sm">xyz@gmail.com</p>
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
                <p className="text-sm">729873498279</p>
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
            backgroundColor: "#EADAF4",
          }}
        >
          <div className="flex">
            <h2 className="text-2xl font-bold text-purple-700">Inbox</h2>
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
