import React from "react";
import img1 from "../assets/hair-sec4-img1.jpg";
import img2 from "../assets/hair-sec4-img2.jpg";
import img3 from "../assets/hair-sec4-img3.jpg";
import img4 from "../assets/hair-sec4-img4.jpg";
import img5 from "../assets/hair-sec4-img5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../css/Section4.css";

function Section4() {
  const images = [img1, img2, img3, img4, img5];

  const captions = {
    title: "Haircut, Hairstyle",
    subtitle: "Haircut & Blowdry",
  };

  const renderImage = (src, index) => (
    <div className="sec4-img-con" key={index}>
      <img src={src} className={`sec4-img${index + 1}`} />
      <div className="sec4-t-con">
        <div className="sec4-img-t1">{captions.title}</div>
        <div className="sec4-img-t2">{captions.subtitle}</div>
      </div>
    </div>
  );

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
      <div className="sec4-carousel show-on-mobile">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>{renderImage(src, index)}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Section4;

// import React from "react";
// import img1 from "../assets/hair-sec4-img1.jpg";
// import img2 from "../assets/hair-sec4-img2.jpg";
// import img3 from "../assets/hair-sec4-img3.jpg";
// import img4 from "../assets/hair-sec4-img4.jpg";
// import img5 from "../assets/hair-sec4-img5.jpg";
// import "../css/Section4.css";

// // Swiper imports

// function Section4() {
//

//   return (
//     <div className="sec4-container">
//       <div className="sec4-t1">Our Works</div>
//       <div className="sec4-t2">Barbers are Magicians without a Wand...</div>

//       {/* Desktop and Tablet View */}
//       <div className="sec4-img-container show-on-desktop">
//         {images.map((src, index) => renderImage(src, index))}
//       </div>

//       {/* Mobile View: Carousel */}

//     </div>
//   );
// }

// export default Section4;
