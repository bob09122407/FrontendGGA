import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import video from "../../Images/Main.mp4";
import './video.css';

const Video = () => {
  const [showWelcomeText, setShowWelcomeText] = useState(true);

  // const handleShopNowClick = () => {
  //   // Perform any actions when the "Shop Now" button is clicked
    
  // };

  const handleVideoEnded = () => {
    // Hide the welcome text when the video ends
    setShowWelcomeText(false);
  };

  return (
    <div className="home-page">
      <video className="video-bg" autoPlay muted loop onEnded={handleVideoEnded}>
        <source src={video} type="video/mp4" />
      </video>
      {showWelcomeText && (
        <div className="welcome-text">
          <h1 className='Welcome'>Welcome to GGA: Grow Smarter!</h1>
          <p>Discover the future of agriculture with Green Global Aggrovation
</p>
        </div>
      )}
      <Link className={`shop-now-button ${showWelcomeText ? 'animated' : ''}`} to="/products">
        Shop Now
      </Link>
    </div>
  );
};

export default Video;

