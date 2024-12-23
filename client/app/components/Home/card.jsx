import React from 'react';
import Image from 'next/image';
import cartIcon from '../../assets/home/cartIcon.png';
import doctorImage from "../../assets/home/cardImg/doctor.png"

const Card = ({ card }) => {
  return (
    <div className="px-3 p-4 rounded-lg shadow-md text-black bg-[#f7f4f4] hover:shadow-lg transition duration-300 border-black border-[1px]">
      {/* Card Image */}
      <div className="relative mb-4 rounded-lg overflow-hidden">
        <Image
          src={doctorImage}
          alt={card.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex justify-between items-center ">
        <div className="text-left pl-2">
          <h3 className="font-semibold text-2xl text-[#161973]">{card.title}</h3>
          <p className="text-[#5d5baa] text-2xl font-bold">${card.price}</p>
          {/* Rating */}
          <div className="hidden md:block text-base">
            {'★'.repeat(card.rating)}
            {'☆'.repeat(5 - card.rating)}
          </div>
        </div>

        {/* Cart Icon */}
        <div className="relative w-12 h-12 md:w-10 md:h-10 rounded-full bg-teal-300 ">
          <Image
            src={cartIcon}
            alt="Cart Icon"
            layout="fill"
            className="object-contain p-[7px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
