import Header from "../../../components/MedicalCardComponents/Header/Header";
import Socials from "../../../components/MedicalCardComponents/Socials/Socials";
import Contact from "../../../components/MedicalCardComponents/Contact/Contact";
import About from "../../../components/MedicalCardComponents/About/About";
import Services from "../../../components/MedicalCardComponents/Services/Services";
import Testimonial from "../../../components/MedicalCardComponents/Testimonial/Testimonial";
import Youtube from "../../../components/MedicalCardComponents/Youtube/Youtube";
import Instagram from "../../../components/MedicalCardComponents/Instagram/Instgram";

import "../../../style/MedicalCard.css";
import { useState } from "react";

export default function MedicalCard() {
  const [user,setUser]=useState({
    title: "John Doe",
    bio: "A passionate software developer with expertise in web and mobile applications.",
    phoneNumbers: ["+1234567890", "+0987654321"],
    emails: ["john.doe@example.com", "contact@johndoe.dev"],
    addresses: [
      "123 Main Street, Springfield, IL, USA",
      "456 Elm Street, Metropolis, NY, USA"
    ],
    jobTitle: "Senior Software Engineer",
    companyName: "Tech Innovators Inc.",
    dateOfBirth: "1990-01-01",
    personalSocialMediaLinks: [
      "https://www.linkedin.com/in/johndoe",
      "https://twitter.com/johndoe"
    ],
    companySocialMediaLink: "https://www.linkedin.com/company/tech-innovators",
    profileImageUrl: "https://example.com/images/john_doe_profile.jpg",
    templateType: "Professional",
    uniqueUrl: "https://businesscards.example.com/johndoe",
    qrCodeUrl: "https://example.com/qrcodes/johndoe.png",
    aboutUs:
      "Tech Innovators Inc. is a leading company in software solutions, providing cutting-edge technology to businesses worldwide.",
    instagramVideoLink: "https://www.instagram.com/reel/123456789",
    youtubeVideoLink: "https://www.youtube.com/watch?v=abcdefghijk",
    services: [
      {
        name: "Web Development",
        description: "Building modern, responsive, and scalable web applications."
      },
      {
        name: "Mobile App Development",
        description: "Creating intuitive and feature-rich mobile apps."
      }
    ],
    testimonials: [
      {
        name: "Jane Smith",
        feedback: "John's team built an amazing app for our business. Highly recommend!"
      },
      {
        name: "Michael Brown",
        feedback: "Exceptional service and expertise in software development."
      }
    ],
    SocialMediaLink: {
      facebook: "https://www.facebook.com/johndoe",
      instagram: "https://www.instagram.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://www.linkedin.com/in/johndoe"
    }
  })
  return (
    <>
      <Header></Header>
      <Socials></Socials>
      <Contact></Contact>
      <About></About>
      <Services></Services>
      <Testimonial></Testimonial>
      <Youtube></Youtube>
      <Instagram></Instagram>
    </>
  );
}
