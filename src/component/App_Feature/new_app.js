import React from 'react';
import './new_app.css'; // Import your CSS file for styling
import water from "./water.svg";
import plant from "./plant.svg";
import sun from "./sun.svg";
import mobile from "./mobile.svg";

const Newapp = () => {
  return (
    <div className="container2">
      <div className="left-side">
        <div className="top-images">
          {/* Three SVG images of circles */}
          <img src={sun} alt="Circle 1" />
          <img src={water} alt="Circle 2" id="space1"/>
          <img src={plant} alt="Circle 3"  id="space1"/>
        </div>
        <h2 id="head1">Integrated Features</h2>
        <div className="details">
        
          {/* Three columns for details */}
          <div className="column">
            <h2 id="head"> Fog Rate and Fan Control</h2>
            <p><b>Fog Rate Adjustment:</b> Users can regulate the fog rate to maintain optimal humidity and nutrient delivery based on climatic conditions.</p>
            <p><b>Fan Control:</b> Turn fans on or off to manage temperature and air circulation, ensuring ideal growing conditions.</p>
          </div>
          <div className="column">
            <h2 id="head">Light and Nutrients</h2>
            <p><b>Lighting Control:</b> Change light colors and effects to enhance plant growth and mimic natural sunlight.</p>
            <p><b>Nutrient System Control:</b> Monitor and adjust nutrient delivery to meet the plants' needs at different growth stages.</p>
          </div>
          <div className="column">
            <h2 id="head">Extensive Plant Database </h2>
            <p>Access a diverse collection of plant species and varieties, ranging from common houseplants to exotic botanical wonders.
            </p>
          </div>
        </div>
      </div>
      <div className="right-side">
        {/* SVG image on the right */}
        <img src={mobile} alt="Right Image" />
      </div>
    </div>
  );
};

export default Newapp;

