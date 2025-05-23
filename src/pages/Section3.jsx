import React from "react";
import img from "../assets/hair-sec3-img.png";
import "../css/Section3.css";

function Section3() {
  return (
    <div className="section3-container">
      <div className="image-wrapper">
        <img src={img} className="section3-img1" />
      </div>
      <div className="section3-t1">
        There's things peope say in the barbershop they <br />
        won't even say in their own living room, because it's
        <br /> just one of those zones where nobody's going to
        <br /> judge you too much about your dumb opinion
      </div>
      <div className="section3-t1-mv">
        There's things peope say in the barbershop they won't even say in their
        own living room, because it's just one of those zones where nobody's
        going to judge you too much about your dumb opinion
      </div>
    </div>
  );
}

export default Section3;
