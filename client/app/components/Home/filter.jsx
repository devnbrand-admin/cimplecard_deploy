import React from 'react';

const Filter = ({ filters, onFilterChange }) => {
  const professions = ['Medical', 'Lawyer', 'Astrologer', 'Teacher', 'Web Developer', 'Software Engineer'];

  return (
    <div className="p-4 ">
      <h2 className="text-2xl font-bold text-[#161973]">Filter</h2>
      <h2 className="text-lg font-medium mt-3 text-[#161973]">Profession</h2>

      {professions.map((profession) => (
        <div key={profession}>
          <label className='text-black '>
            <input
              type="checkbox"
              
              value={profession}
              checked={filters.includes(profession)}
              onChange={() => onFilterChange(profession)}
            />
           <span className='pl-2'>{profession}</span> 
          </label>
        </div>
      ))}
    </div>
  );
};

export default Filter;
