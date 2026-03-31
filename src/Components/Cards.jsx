import React, { useEffect, useState } from 'react';
import MainCard from './MainCard';

const Cards = ({ dataPromise }) => {

    const [cards, setCards] = useState([]);


    useEffect(() => {
        dataPromise.then(data => setCards(data));
    }, [dataPromise]);


    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-10 py-10 bg-gray-50">
            {cards.map((card) => (
                <MainCard key={card.id} card={card} />

            ))}
        </div>
    );
};

export default Cards;