import React, { useEffect, useState } from 'react';
import Card from '../../ui/card.js';
import './slideshow.css';
import photo1 from "../../Images/growth.png";
import photo2 from "../../Images/pet.avif";
import photo3 from "../../Images/autop.png";
import photo4 from "../../Images/fourth.png";
import photo5 from "../../Images/water2.jpg";
import photo6 from "../../Images/pesticide2.jpg";

const Carousel = () => {
  const data = [
    { id: 1, image: photo1, description: 'Cost Savings upto 50%' },
    { id: 5, image: photo2, description: 'Plant as a functional pet' },
    { id: 10, image: photo3, description: 'Fully Automated and Sustainable' },
    { id: 15, image: photo4, description: '100% Organic' },
    { id: 20, image: photo6, description: 'No Pesticides' },
    { id: 25, image: photo5, description: 'Uses only 5% water & 1/10th land' },
    // Add more card data here if needed
  ];

  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const scrollPosition = scrollTop + windowHeight;

      const updatedVisibleCards = data
        .filter((card) => {
          const element = document.getElementById(`card-${card.id}`);
          if (!element) return false;
          const rect = element.getBoundingClientRect();
          const cardTop = rect.top + scrollTop;
          const cardBottom = rect.bottom + scrollTop;
          return cardTop <= scrollPosition && cardBottom >= scrollTop;
        })
        .map((card) => card.id);

      setVisibleCards(updatedVisibleCards);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="carousel">
      <h2 className="carousel-heading">Features</h2>
      <div className="carousel-container">
        {data.map((card, index) => (
          <Card
            key={card.id}
            id={`card-${card.id}`}
            image={card.image}
            description={card.description}
            isVisible={visibleCards.includes(card.id)}
            delay={index * 200} // Adjust the delay timing as per your preference
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;







