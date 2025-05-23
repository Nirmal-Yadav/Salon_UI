// import React from "react";
// import "../css/Header.css";
// import img from "../assets/salon-logo.jpg";

// function Header() {
//   return (
//     <div className="header-container">
//       <div className="header-content">
//         <div>
//           <img src={img} className="salon-logo" />
//         </div>
//         <div className="head-option-container">
//           <span>MENU</span>
//           <span>PRICING</span>
//           <span>MEMBERSHIP</span>
//           <span>ABOUT US</span>
//           <span>GALLERY</span>
//         </div>
//         <div>
//           <button className="appointment-button">APPOINTMENT</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;

import React, { useState } from "react";
import "../css/Header.css";
import img from "../assets/salon-logo.jpg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header-container">
      <div className="header-content">
        {/* Logo is always visible */}
        <div className="logo-container" onClick={toggleMenu}>
          <img src={img} className="salon-logo" />
        </div>

        {/* Navigation visible only on desktop */}
        <div className="head-option-container desktop-menu">
          <span>MENU</span>
          <span>PRICING</span>
          <span>MEMBERSHIP</span>
          <span>ABOUT US</span>
          <span>GALLERY</span>
        </div>

        <div className="appointment-button-container desktop-menu">
          <button className="appointment-button">APPOINTMENT</button>
        </div>
      </div>

      {/* Mobile panel */}
      {isOpen && (
        <div className="mobile-panel">
          <span onClick={toggleMenu}>MENU</span>
          <span onClick={toggleMenu}>PRICING</span>
          <span onClick={toggleMenu}>MEMBERSHIP</span>
          <span onClick={toggleMenu}>ABOUT US</span>
          <span onClick={toggleMenu}>GALLERY</span>
          <button className="review-button mobile-appoint-btn">
            APPOINTMENT
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
