import React from "react";

const page = () => {
  return (
    <div className="p-5" style={{ backgroundColor: "#B07ED1" }}>
      <div className="flex p-5">
        <img
          src="/Assets/back.png"
          alt="Card Image"
          className="w-8 h-8 rounded-xl"
        />
        <h2 className="font-semibold text-white text-xl ms-4">My Profile</h2>
      </div>
      <div className="mx-5 mb-5 grid grid-cols-[1fr,2fr] gap-4">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-4">
            <img
              src="/Assets/Profile Picture.jpg"
              alt="Profile"
              className="w-20 h-20 rounded-full"
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
        <div className="bg-white rounded-xl p-6 shadow-md">
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
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-bold text-purple-700">
            Detailed Information
          </h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl p-3 border border-gray-400 flex items-center justify-start">
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
            <div className="rounded-xl p-3 border border-gray-400 flex items-center justify-start">
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
            <div className="rounded-xl p-3 border border-gray-400 flex items-center justify-start">
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
            <div className="rounded-xl p-3 border border-gray-400 flex items-center justify-start">
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
            <div className="rounded-xl p-3 border border-gray-400 flex items-center justify-start">
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
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-bold text-purple-700">Inbox</h2>
          <div className="mt-4 space-y-4">
            {[1, 2, 3].map((item, index) => (
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
