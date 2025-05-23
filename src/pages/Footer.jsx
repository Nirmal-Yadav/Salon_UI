import React from "react";
import img from "../assets/salon-logo.jpg";
import "../css/Footer.css";

function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-container">
        <div className="footer-logo-con">
          <img src={img} className="footer-logo1" />
        </div>
        <div className="footer-t1-con">
          <span className="footer-t1">Contact Us</span>
          <span className="add-t1">
            LG-05, Infiniti 2 Mall,
            <br /> New Link Rd, Mumbai,
            <br /> Maharashtra 400064
          </span>
          <span className="mail-t1">info@brandsalon.com</span>
          <span className="phone-t1">+91 7869516555</span>
        </div>
        <div className="footer-t1-con">
          <span className="footer-t1">Our Services</span>
          <span className="footer-t2-1">Hair Spa Rituals</span>
          <span className="footer-t2-1">Head Massage</span>
          <span className="footer-t2-1">Hair Cut Classic</span>
          <span className="footer-t2-1">Beard Rituals</span>
        </div>
        <div className="footer-t1-con">
          <span className="footer-t1">Quick Links</span>
          <span className="footer-t3-1">Locations</span>
          <span className="footer-t3-1">Privacy Policy</span>
          <span className="footer-t3-1">Terms & Condition</span>
          <span className="footer-t3-1">Refund and Returns Policy</span>
        </div>
      </div>
      <div className="footer-t5">
        Copyright © 2025 Brandsalon. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
