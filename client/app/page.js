"use client";

import React from "react";
import HomeComponent from "./components/Home/homeComponent";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <div className="bg-center text-white h-auto flex flex-col overflow-hidden">
      {/* Navbar */}
      <div className="flex-shrink-0">
        <Navbar />
      </div>

      {/* HomeComponent */}
      <div className="flex-grow">
        <HomeComponent />
      </div>
    </div>
  );
}
