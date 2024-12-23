"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import MedicalCard from "../../cards/medical/[id]/page";
import LawyerCard from "../../cards/lawyer/[id]/page";
import AstrologerCard from "../../cards/astrologer/[id]/page";
import B2bCard from "../../cards/b2b/[id]/page";

import axios from "axios";
const Page = () => {
  const params = useParams();
  const id = params.id;
  const [card, setCard] = useState();
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
  const TEMPLATE_MAP = {
    lawyer: MedicalCard,
    modern: LawyerCard,
    astrologer: AstrologerCard,
    b2b: B2bCard,
  };

  return (
    <>
      {card ? (
        TEMPLATE_MAP[card?.card.templateType.toLowerCase()] ? (
          React.createElement(
            TEMPLATE_MAP[card?.card.templateType.toLowerCase()],
            { card, setCard }
          )
        ) : (
          <div>Card type not supported</div>
        )
      ) : (
        <div>Loading...</div>
      )} 
    </>
  );
};
export default Page;
