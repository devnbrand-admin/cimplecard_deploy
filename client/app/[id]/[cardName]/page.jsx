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
  const cardName = params.cardName;
  const [card, setCard] = useState();
  const getCardDetails = async () => {
    try {
      const { data: { card } } = await axios.get(
        `https://cimple-card-1.onrender.com/api/card/getby`,
        {
          params: {
            name: cardName.replace(/%20/g, " "),
            publicId: id,
          },
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log("respos: ", card);
      return card;
      // Return user details
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch user details"
      );
    }
  };

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        const res = await getCardDetails();
        console.log(res);
        setCard(res);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchCardDetails();
  }, []);
  const TEMPLATE_MAP = {
    medical: AstrologerCard,
    lawyer: LawyerCard,
    astrologer: AstrologerCard,
    b2b: B2bCard,
  };

  return (
    <>
      {card ? (
        TEMPLATE_MAP[card.templateType.toLowerCase()] ? (
          React.createElement(
            TEMPLATE_MAP[card.templateType.toLowerCase()],
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
