export const cardsData = [
    { id: 1, profession: 'Medical', title: 'Medical Card', price: 270, rating: 3, image: '../../assets/home/cardImg/doctor.png' },
    { id: 2, profession: 'Astrologer', title: 'Astrologer Card', price: 270, rating: 3, image: '../../assets/home/cardImg/astrologer.png' },
    { id: 3, profession: 'Lawyer', title: 'Lawyer Card', price: 270, rating: 3, image: '../../assets/home/cardImg/lawyer.png' },
    
]

import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Filter from './filter';
import CardList from './cardList';


const BrowseCard = () => {
  const [filters, setFilters] = useState([]);
  const [search, setSearch] = useState('');
  const [cards, setCards] = useState(cardsData);

  const handleFilterChange = (profession) => {
    setFilters((prev) =>
      prev.includes(profession) ? prev.filter((item) => item !== profession) : [...prev, profession]
    );
  };

  const handleSearch = (query) => {
    setSearch(query);
  };

  const filteredCards = cards.filter(
    (card) =>
      (filters.length === 0 || filters.includes(card.profession)) &&
      card.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-6xl font-bold mb-4 my-5 text-center text-[#161973]">Browse our <span className=" text-6xl text-[#161973]">CimpleCards</span></h1>
      <SearchBar onSearch={handleSearch} />
      <div className="flex">
        <div className="w-1/4">
          <Filter filters={filters} onFilterChange={handleFilterChange} />
        </div>
        <div className="w-3/4">
          <CardList cards={filteredCards} />
        </div>
      </div>
      <p className="text-center mt-4 text-gray-500">E N D &nbsp; O F &nbsp; C A R D S</p>
    </div>
  );
};

export default BrowseCard;


