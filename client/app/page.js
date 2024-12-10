"use client";
import React, { useState } from "react";
import btn_img from "./assets/auth/signin/login.png";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  const [loading, setLoading] = useState(false);
  return (
    <div
      className="bg-cover text-white h-screen flex items-center justify-center flex-col"
      style={{
        backgroundImage: `url('https://i.postimg.cc/d0cxkbjW/Desktop-61-1.png')`,
     
      }}
    >
      <Link href="/auth">
      <button
        disabled={loading}
        className={`relative w-[30rem] px-4 py-2  text-white rounded-xl ${
          loading ? "bg-gray-500 cursor-not-allowed" : "bg-[#5a6acf]"
        } hover:bg-[#212d7b]`}
      >
        <div className="absolute h-10 w-full top-0 -left-[1.5px] z-10">
          <Image
            src={btn_img}
            alt="Signin Background"
            fill
            className="object-cover"
          />
        </div>
        <span className="absolute z-20"></span>
        Sign In/Sign Up
      </button>
      </Link>
    </div>
  );
}
