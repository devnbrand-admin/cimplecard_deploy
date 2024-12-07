import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "#9D4AD1",
        padding: "auto",
        width: "max-content",
        height: "100vh",
      }}
    >
      <h2
        className="py-5 my-4 text-center font-bold"
        style={{ color: "white" }}
      >
        LOGO
      </h2>
      <ul
        className="flex-col h-100 justify-around justify-items-center content-around"
        style={{ listStyleType: "none", padding: 0, color: "white" }}
      >
        <li className="flex items-center w-2/3 p-4">
          <Link href="/home" className="flex items-center">
            <img
              src="/Assets/Home.png"
              alt="Home Icon"
              className="w-5 h-5 mr-4"
            />
            <span className="font-medium text-lg">Home</span>
          </Link>
        </li>
        <li className="flex items-center w-2/3 p-4">
          <Link href="/projects" className="flex items-center">
            <img
              src="/Assets/Group of Projects.png"
              alt="Projects Icon"
              className="w-5 h-5 mr-4"
            />
            <span className="font-medium text-lg">Projects</span>
          </Link>
        </li>
        <li className="flex items-center w-2/3 p-4">
          <Link href="/inspiration" className="flex items-center">
            <img
              src="/Assets/Innovation.png"
              alt="Inspiration Icon"
              className="w-5 h-5 mr-4"
            />
            <span className="font-medium text-lg">Inspiration</span>
          </Link>
        </li>
        <li className="flex items-center w-2/3 p-4">
          <Link href="/reviews" className="flex items-center">
            <img
              src="/Assets/Ratings.png"
              alt="Reviews Icon"
              className="w-5 h-5 mr-4"
            />
            <span className="font-medium text-lg">Reviews</span>
          </Link>
        </li>
        <li className="flex items-center w-2/3 p-4">
          <Link href="/settings" className="flex items-center">
            <img
              src="/Assets/Settings.png"
              alt="Settings Icon"
              className="w-5 h-5 mr-4"
            />
            <span className="font-medium text-lg">Settings</span>
          </Link>
        </li>
        <li className="flex items-center w-2/3 p-4">
          <Link href="/account" className="flex items-center">
            <img
              src="/Assets/Account.png"
              alt="Account Icon"
              className="w-5 h-5 mr-4"
            />
            <span className="font-medium text-lg">Account</span>
          </Link>
        </li>
        <li className="flex items-center w-2/3 p-4">
          <Link href="/payments" className="flex items-center">
            <img
              src="/Assets/Wallet.png"
              alt="Payments Icon"
              className="w-5 h-5 mr-4"
            />
            <span className="font-medium text-lg">Payments</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
