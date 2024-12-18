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
import axios from "axios";
import WhatsAppButton from "../../../components/astrocomponents/WhatsappContact";
import ContactCardButton from "../../../components/astrocomponents/ContactCardButton";
import { useParams } from "next/navigation";

const page = ({card,setCard}
) => {
  const [card, setCard] = useState(null);
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
      console.log("respos: ", response.data);
      return response.data;
      // Return user details
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
      return response.data.user.token; // Return token
    } catch (error) {
      throw new Error(error.response?.data?.message || "Login failed");
    }
  };
  // Usage in useEffect
  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        const token = await loginUser("amanu0181@gmail.com", "12345");
        const res = await getCardDetails(token);
        console.log(res);
        setCard(res);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchCardDetails();
  }, []);

  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      {card ? (
        <>
          <Header />
          <Hero card={card.card} />
          <Services card={card.card} />
          <About card={card.card} />
          <Testimonal card={card.card} />
          <Contact card={card.card} />

          <WhatsAppButton />
          <ContactCardButton />
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
