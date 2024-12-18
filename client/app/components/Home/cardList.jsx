import React from 'react';
import Card from './Card';

const CardList = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-black">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  )
}

export default CardList;
