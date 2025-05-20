import React from "react";
import "../css/Header.css";
import img from "../assets/haircut2.png";

function Section1() {
  return (
    <div className="section1-container">
      <div className="section-content">
        <div>
          <img src={img} className="section1-img1" />
        </div>
        <div className="section1-main1">
          <div style={{ fontSize: "40px", fontWeight: "bold" }}>
            Things We Believe
          </div>
          <div>
            We believe that there’s no greater feeling than running your fingers
            across your hair after a good hair cut or running your hand over
            your face after having a hot towel clean shave. Or the smile you get
            when you know your barber or hair stylist has nailed your look.
          </div>
          <div>
            At HMX by Hairmechanixx, our mission is to ensure that everyone who
            visits us walks away feeling and looking their best.
          </div>
          <button className="section1-button">Our Pricing</button>
        </div>
      </div>
    </div>
  );
}

export default Section1;
