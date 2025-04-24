import React from "react";
import "../css/Header.css";

function Main() {
  const text = "Let Your Hair Do The Talking";
  return (
    <div className="main-container-1">
      <div>
        The Barber Shop Come <br /> And Experience
      </div>
      <div className="header">
        {text.split("").map((char, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.3}s` }}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
      <button className="review-button">Our Review</button>
    </div>
  );
}

export default Main;
