// import React from "react";
// import playStore from "../../../Images/playstore.png";
// import appStore from "../../../Images/Appstore.png";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer id="footer">
//       <div className="leftFooter">
//         <h4>DOWNLOAD OUR APP</h4>
//         <p>Download App for Android and IOS mobile phone</p>
//         <img src={playStore} alt="playstore" />
//         <img src={appStore} alt="Appstore" />
//       </div>

//       <div className="midFooter">
//         <h2>Green Global Aggrovation</h2>
//         <p>High Quality is our first priority</p>

//         <p>Copyrights 2021 &copy; Green Global Aggrovation</p>
//       </div>

//       <div className="rightFooter">
//         <h4>Follow Us</h4>
//         <a href="http://instagram.com/meabhisingh">Instagram</a>
//         <a href="http://youtube.com/6packprogramemr">Youtube</a>
//         <a href="http://instagram.com/meabhisingh">Facebook</a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import playStore from "../../../Images/playstore.png";
import appStore from "../../../Images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      {/* <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div> */}
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h2>Green Global Aggrovation</h2>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; Green Global Aggrovation</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/meabhisingh">Instagram</a>
        <a href="http://youtube.com/6packprogramemr">Youtube</a>
        <a href="http://instagram.com/meabhisingh">Facebook</a>
      </div>

      <div className="boiling-effect"></div>
    </footer>
  );
};

export default Footer;
