import React from 'react';
import Image from 'next/image';
import cartIcon from '../../assets/home/cartIcon.png';

const Card = ({ card }) => {
  return (
    <div className=" p-4 rounded-lg shadow-md text-black bg-[#f7f4f4] hover:shadow-lg transition duration-300 border-black border-[1px]">
      {/* Card Image */}
      <div className="relative mb-4 rounded-lg overflow-hidden">
        <Image
          src={card.image.src}
          alt={card.title}
          className="w-full h-40 object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex justify-between items-center">
        <div className="text-left">
          <h3 className="font-semibold text-lg text-gray-900">{card.title}</h3>
          <p className="text-gray-700 text-xl font-bold">${card.price}</p>
          {/* Rating */}
          <div className=" text-base">
            {'★'.repeat(card.rating)}
            {'☆'.repeat(5 - card.rating)}
          </div>
        </div>

        {/* Cart Icon */}
        <div className="relative w-10 h-10 rounded-full  bg-teal-300 ">
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
