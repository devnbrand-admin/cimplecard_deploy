'use client'
import React, { useState } from "react";
import HomeComponent from "./components/Home/homeComponent"
import Navbar from "./components/navbar/Navbar"

export default function Home() {

  return (
    <div className="bg-center text-white min-h-screen">
      <Navbar/>
      <HomeComponent/>
    </div>
  );
}