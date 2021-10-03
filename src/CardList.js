import React, { useState, useEffect } from 'react';
import axios from 'axios';


const CardList = () => {
    const [cards, setCards] = useState({});

    useEffect(() => {
        fetchCards();
    }, []);
    
    const fetchCards = async () => {
        console.log('Fetch Cards')
        const res = await axios.get('http://localhost:4000/cards');
        console.log(res);
        setCards(res.data);
    };

    const renderedCards = Object.values(cards).map(card => {
        return (
            <div
                className="card"
                style={{width: '30%', maginBottom: '20px'}}
                key={card.id}
            >
                <div className="card-body">
                    <h3>{card.title}</h3>
                </div>                
            </div>
        )
    })

    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            { renderedCards }
        </div>
    )
    
};

export default CardList;