import React from 'react';
import search from "../../assets/home/search.png"
import Image from 'next/image';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="p-4 flex justify-center relative">
      <span className='absolute top-[30px] left-[330px] w-4 h-4'>
      <Image
            src={search} 
            alt="search"
            fill
            className="object-cover"
      />

      </span>
      <input
        type="text"
        placeholder="Search for a card"
        className=" p-2 pl-[30px] rounded-full w-1/2 border-[3px] border-[#2c3c9e] placeholder:text-[#b1a5c2] placeholder:text-base placeholder:font-medium" 
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
