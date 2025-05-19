import React from "react";
import "../css/Header.css";
import img from "../assets/salon-logo.jpg";

function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
        <div>
          <img src={img} className="salon-logo" />
        </div>
        <div className="head-option-container">
          <span>MENU</span>
          <span>PRICING</span>
          <span>MEMBERSHIP</span>
          <span>ABOUT US</span>
          <span>GALLERY</span>
        </div>
        <div>
          <button className="appointment-button">APPOINTMENT</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
