import React from "react";
import Card from "../components/Card.jsx";
import "../css/Section2.css";

function Section2() {
  return (
    <div className="section2-container">
      <div className="section2-t1">Our Services</div>
      <div className="section2-t2">
        At HMX By Hairmechanixx our mission is to ensure that everyone who
        visits us
        <br />
        {`\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0
          \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0`}
        walks away feeling and looking their best.
      </div>
      <div className="section2-card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Section2;
