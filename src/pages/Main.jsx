import React from "react";
import "../css/Main.css";

function Main() {
  const text = "Let Your Hair Do The Talking";
  return (
    <>
      <div className="main-container-1">
        <div className="header">
          <div className="t1">
            THE BARBER SHOP <br />
            Do Come And Experience
          </div>
          {text.split(" ").map((word, wordIndex) => (
            <React.Fragment key={wordIndex}>
              {word === "Talking" && <br />}
              {word.split("").map((char, i) => (
                <span
                  key={`${wordIndex}-${i}`}
                  className="t2"
                  style={{ animationDelay: `${(wordIndex * 6 + i) * 0.1}s` }}
                >
                  {char}
                </span>
              ))}
              <span
                className="t2"
                style={{ animationDelay: `${(wordIndex + 1) * 0.6}s` }}
              >
                {"\u00A0"}
              </span>
            </React.Fragment>
          ))}
        </div>
        <button className="review-button">Our Review</button>
      </div>
    </>
  );
}

export default Main;
