'use client'
import { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import axios from "axios";

export default function Socials() {
  const [personalLinks, setPersonalLinks] = useState([]);
  const [companyLinks, setCompanyLinks] = useState([]);

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const response = await axios.get(import.meta.env.SERVER_URL);
        const { personalSocialMediaLinks, companySocialMediaLink } = response.data.card;

        // Set personal and company social media links
        setPersonalLinks(personalSocialMediaLinks || []);
        setCompanyLinks([companySocialMediaLink]);
      } catch (error) {
        console.error("Error fetching social links:", error);
      }
    };

    fetchSocialLinks();
  }, []);

  return (
    <div className="w-screen">
      <div className="flex w-full justify-center">
        {/* Personal Social Links */}
        <div className="text-center px-[50px] my-[5vh]">
          <h1 className="text-[25px] mb-[1vh]">Connect with me</h1>
          <div className="flex justify-center">
            {personalLinks.map((link, index) => (
              <SocialIcon
                key={index}
                className="ml-[2vw] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                url={link}
              />
            ))}
          </div>
        </div>

        {/* Company Social Links */}
        <div className="text-center px-[50px] my-[5vh]">
          <h1 className="text-[25px] mb-[1vh]">Connect with the company</h1>
          <div className="flex justify-center">
            {companyLinks.map((link, index) => (
              <SocialIcon
                key={index}
                className="ml-[2vw] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                url={link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
