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
            <h2 id="head"> Fog Rate</h2>
            <p>Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quibusdam ea eius veritatis eaque. Necessitatibus unde maiores tenetur animi odio incidunt ipsum sapiente eligendi obcaecati, provident, cum assumenda accusantium nulla.</p>
          </div>
          <div className="column">
            <h2 id="head">Detail 2</h2>
            <p>Content for Detail 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fuga modi delectus ipsam culpa voluptatibus id possimus inventore quia. Illo animi, deserunt in veniam quam dignissimos adipisci aliquam quisquam alias?</p>
          </div>
          <div className="column">
            <h2 id="head"> Detail 3</h2>
            <p>Content for Detai Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia placeat iusto nesciunt nulla omnis accusantium quos unde suscipit culpa. Asperiores esse explicabo voluptatum voluptates error, provident suscipit officia quaerat maiores!
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

