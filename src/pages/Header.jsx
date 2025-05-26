import React, { useState } from "react";
import "../css/Header.css";
import img from "../assets/salon-logo.jpg";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/">
            <img src={img} className="salon-logo" />{" "}
          </NavLink>
        </div>

        {/* Navigation visible only on desktop */}
        <div className="head-option-container desktop-menu">
          <NavLink className="nav-link" to="/menu">
            MENU
          </NavLink>
          <NavLink className="nav-link" to="/services">
            Services
          </NavLink>
          <NavLink className="nav-link" to="/membership">
            MEMBERSHIP
          </NavLink>
          <NavLink className="nav-link" to="/about">
            ABOUT US
          </NavLink>
          <NavLink className="nav-link" to="/gallery">
            GALLERY
          </NavLink>
        </div>
        <NavLink className="nav-link" to="/appointment">
          <div className="appointment-button-container desktop-menu">
            <button className="appointment-button">APPOINTMENT</button>
          </div>
        </NavLink>
      </div>

      {/* Mobile panel */}
      {isOpen && (
        <div className="mobile-panel">
          <NavLink to="/menu" className="nav-link" onClick={toggleMenu}>
            MENU
          </NavLink>
          <NavLink to="/services" onClick={toggleMenu} className="nav-link">
            Services
          </NavLink>
          <NavLink to="/membership" onClick={toggleMenu} className="nav-link">
            MEMBERSHIP
          </NavLink>
          <NavLink to="/about" onClick={toggleMenu} className="nav-link">
            ABOUT US
          </NavLink>
          <NavLink to="/gallery" onClick={toggleMenu} className="nav-link">
            GALLERY
          </NavLink>
          <NavLink to="/appointment" onClick={toggleMenu} className="nav-link">
            <button className="review-button mobile-appoint-btn">
              Appointment
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Header;
