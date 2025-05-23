import React from "react";
import img1 from "../assets/hair-sec4-img1.jpg";
import img2 from "../assets/hair-sec4-img2.jpg";
import img3 from "../assets/hair-sec4-img3.jpg";
import img4 from "../assets/hair-sec4-img4.jpg";
import img5 from "../assets/hair-sec4-img5.jpg";
import "../css/Section4.css";

function Section4() {
  return (
    <div className="sec4-container">
      <div className="sec4-t1">Our Works</div>
      <div className="sec4-t2">Barbers are Magicians without a Wand...</div>
      <div className="sec4-img-container">
        <div className="sec4-img-con">
          <img src={img1} className="sec4-img1" />
          <div className="sec4-t-con">
            <div className="sec4-img-t1"> Haircut, Hairstyle</div>
            <div className="sec4-img-t2">Haircut & Blowdry</div>
          </div>
        </div>

        <div className="sec4-img-con">
          <img src={img2} className="sec4-img2" />
          <div className="sec4-t-con">
            <div className="sec4-img-t1"> Haircut, Hairstyle</div>
            <div className="sec4-img-t2">Haircut & Blowdry</div>
          </div>
        </div>

        <div className="sec4-img-con">
          <img src={img3} className="sec4-img3" />
          <div className="sec4-t-con">
            <div className="sec4-img-t1"> Haircut, Hairstyle</div>
            <div className="sec4-img-t2">Haircut & Blowdry</div>
          </div>
        </div>

        <div className="sec4-img-con">
          <img src={img4} className="sec4-img4" />
          <div className="sec4-t-con">
            <div className="sec4-img-t1"> Haircut, Hairstyle</div>
            <div className="sec4-img-t2">Haircut & Blowdry</div>
          </div>
        </div>

        <div className="sec4-img-con">
          <img src={img5} className="sec4-img5" />
          <div className="sec4-t-con">
            <div className="sec4-img-t1"> Haircut, Hairstyle</div>
            <div className="sec4-img-t2">Haircut & Blowdry</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
