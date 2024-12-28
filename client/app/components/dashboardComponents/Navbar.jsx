import React from "react";
import Link from "next/link";

const Navbar = ({ userId }) => {
  return (
    <div
      className="rounded-3xl h-full mt-0 w-full"
      style={{
        background: "linear-gradient(179.17deg, #7987DF 0.72%, #004AAD 93.96%)",
      }}
    >
      <h2
        className="py-5 mb-4 text-center font-bold"
        style={{ color: "white" }}
      >
        LOGO
      </h2>
      <ul
        className="flex-col h-100 justify-around justify-items-center content-around"
        style={{ listStyleType: "none", padding: 0, color: "white" }}
      >
        <li className="flex items-center w-2/3 p-4">
          <Link href={`/dashboard/${userId}`} className="flex items-center">
            <img
              src="/Assets/Home.png"
              alt="Home Icon"
              className="w-5 h-5 mr-4"
            />
            <span className="font-medium text-lg">Home</span>
          </Link>
        </li>
        <li className="flex items-center w-2/3 p-4">
          <Link href="/about" className="flex items-center">
            <img
              src="/Assets/Group of Projects.png"
              alt="Projects Icon"
              className="w-5 h-5 mr-4"
            />
            <span className="font-medium text-lg">About Us</span>
          </Link>
        </li>
        <li className="flex items-center w-2/3 p-4">
          <Link href="/contact" className="flex items-center">
            <img
              src="/Assets/Innovation.png"
              alt="Inspiration Icon"
              className="w-5 h-5 mr-4"
            />
            <span className="font-medium text-lg">Contact Us</span>
          </Link>
        </li>
        <li className="flex items-center w-2/3 p-4">
          <Link href={`/profile/${userId}`} className="flex items-center">
            <img
              src="/Assets/account.png"
              alt="Reviews Icon"
              className="w-5 h-5 mr-4"
            />
            <span className="font-medium text-lg">Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
