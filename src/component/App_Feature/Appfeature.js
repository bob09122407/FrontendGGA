import React, { useState, useEffect } from 'react';
import './appfeature.css';
import photo1 from "../../Images/Feature1.jpeg";
import photo2 from "../../Images/Feature2.jpeg";
import photo3 from "../../Images/Feature3.jpeg";
import photo4 from "../../Images/Feature4.jpeg";
import photo5 from "../../Images/Feature5.jpeg";
import photo6 from "../../Images/Feature6.jpeg";

const Appfeature = () => {
  const images = [photo1, photo2, photo3, photo4, photo5,photo6];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    
    <div className="appfeature-container">
     
      <div className="slideshow-container">
        <div className="slideshow">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="app-features">
        <h2>App Features</h2>
        
        <ul>
          <li>
            <span className="tick-mark">&#10003;</span> Control your pod like a pet with our mobile application
          </li>
          <li>
            <span className="tick-mark">&#10003;</span> You can control it manually or just click on a auto mode.
          </li>
          <li>
            <span className="tick-mark">&#10003;</span> Change the lights of a pod according to your choice.
          </li>
          <li>
            <span className="tick-mark">&#10003;</span> Get the daily updates about the condition of your pod
          </li>
          <li>
            <span className="tick-mark">&#10003;</span> You can control the fog cycles and rotations through our app
          </li>
          <li>
            <span className="tick-mark">&#10003;</span> Download from the link below
          </li>
          {/* <li>
            <span className="tick-mark">&#10003;</span> udiandae saepe eaque optio nulla iste sapiente quo cum recusandae
          </li> */}
          {/* Add more features here */}
        </ul>

        <button className="download-button">Download App Now</button>
      </div>
    </div>
  );
};

export default Appfeature;



