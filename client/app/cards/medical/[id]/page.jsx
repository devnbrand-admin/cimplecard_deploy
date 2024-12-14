"use client";
import React, { useEffect, useState } from "react";
import Hero from "../../../components/medicalComponents/Hero";
import Services from "../../../components/medicalComponents/Services";
import Header from "../../../components/medicalComponents/Header";
import About from "../../../components/medicalComponents/About";
import Testimonal from "../../../components/medicalComponents/Testimonal";
import Contact from "../../../components/medicalComponents/Contact";
import Social from "../../../components/medicalComponents/Social";
import Footer from "../../../components/medicalComponents/Footer";
import Mobile from "../../../components/medicalComponents/Mobile"; // Import Mobile Component
import axios from "axios";
import { useParams } from "next/navigation";

const page = () => {
  const [card, setCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false); // State to track layout
  const params = useParams();
  const id = params.id;

  const getCardDetails = async (token) => {
    try {
      const response = await axios.get(
        `https://cimple-card.onrender.com/api/card/get/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch user details"
      );
    }
  };

  const loginUser = async (email, password) => {
    try {
      const response = await axios.post(
        `https://cimple-card.onrender.com/api/user/login`,
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data.user.token;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Login failed");
    }
  };

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        const token = await loginUser("amanu0181@gmail.com", "12345");
        const res = await getCardDetails(token);
        setCard(res);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchCardDetails();

    // Listener for window resize to detect mobile layout
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      {isMobile ? (
        card && <Mobile card={card.card} /> // Render mobile-specific component
      ) : card ? (
        <>
          <Header card={card.card} />
          <Hero card={card.card} />
          <Services card={card.card} />
          <About card={card.card} />
          <Testimonal card={card.card} />
          <Contact card={card.card} />
          <Social card={card.card} />
          <Footer card={card.card} />
        </>
      ) : (
        "LOADING"
      )}
    </div>
  );
};

export default page;
