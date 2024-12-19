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
import WhatsAppButton from "../../../components/astrocomponents/WhatsappContact";
import ContactCardButton from "../../../components/astrocomponents/ContactCardButton";
import { useParams } from "next/navigation";

const page = ({ card, setCard }) => {
  // const [cardi, setCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false); // State to track layout
  const params = useParams();
  const id = params.id;

  useEffect(() => {
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
