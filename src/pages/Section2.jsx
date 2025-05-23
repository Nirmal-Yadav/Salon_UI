import React from "react";
import Card from "../components/Card.jsx";
import "../css/Section2.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Section2() {
  const cards = [1, 2, 3, 4, 5, 6];
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
      {/* Mobile Carousel */}
      <div className="section2-carousel mobile-only">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
        >
          {cards.map((_, index) => (
            <SwiperSlide key={index}>
              <Card />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Section2;

// import React from "react";
// import Card from "../components/Card.jsx";
// import "../css/Section2.css";

// // Swiper modules
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// function Section2() {
//   const cards = [1, 2, 3, 4, 5, 6]; // simulate multiple cards

//   return (
//     <div className="section2-container">
//       <div className="section2-t1">Our Services</div>
//       <div className="section2-t2">
//         At HMX By Hairmechanixx our mission is to ensure that everyone who
//         visits us
//         <br />
//         {`\u00A0`.repeat(40)}walks away feeling and looking their best.
//       </div>

//       {/* Desktop Grid */}
//       <div className="section2-card-container desktop-only">
//         {cards.map((_, index) => (
//           <Card key={index} />
//         ))}
//       </div>

//     </div>
//   );
// }

// export default Section2;
