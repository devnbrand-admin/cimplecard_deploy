import React from 'react';
import Image from 'next/image';
import search from "../../assets/home/search.png"
import filter from "../../assets/home/howit/filterIcon.png"


const SearchBar = ({ onSearch }) => {
  return (
    <div className="p-4 flex justify-center relative">
      <span className='absolute  top-[30px] md:left-[330px] left-[30px] w-4 h-4'>
      <Image
            // src={`${"/assets/home/search.png"}`} 
            src={search}
            alt="search"
            fill
            className="object-cover"
      />

      </span>
      <span className='block md:hidden absolute  top-[30px]  right-[39px] w-5 h-5'>
      <Image
            // src={`${"/assets/home/search.png"}`} 
            src={filter}
            alt="search"
            fill
            className="object-cover"
      />

      </span>
      <input
        type="text"
        placeholder="Search for a card"
        className=" p-2 text-black pl-[30px] rounded-full w-full md:w-1/2 border-[3px] border-[#2c3c9e] placeholder:text-[#b1a5c2] placeholder:text-base placeholder:font-medium" 
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
