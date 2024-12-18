'use client'
import React from "react";
import AboutUs from "../../../components/b2bcomponents/AboutUs";
import ContactForm from "../../../components/b2bcomponents/Appointment";
import ContactInfo from "../../../components/b2bcomponents/ContactInfo";
import HeroSection from "../../../components/b2bcomponents/HeroSection";
import OurServices from "../../../components/b2bcomponents/OurServices";
import SocialMediaEmbeds from "../../../components/b2bcomponents/SocialMediaFeeds";
import TestimonialCarousel from "../../../components/b2bcomponents/Testimonials";
import AppointmentForm from "../../../components/b2bcomponents/AppointmentForm";
import WhatsappContact from "../../../components/b2bcomponents/WhatsappContact"
import ContactCardButton from "../../../components/b2bcomponents/ContactCardButton"
import Gallery from "../../../components/b2bcomponents/Gallery"
import "../../../style/b2btemplate.css";

const Page = () => {

  return (
    <>
      <HeroSection />
      <ContactInfo />
      <AboutUs />
      <OurServices />
      <TestimonialCarousel />
      <AppointmentForm />
      <SocialMediaEmbeds />
      <ContactForm />
      <WhatsappContact/>
      <ContactCardButton/>
      <Gallery/>
    </>
  );
};

export default Page;
