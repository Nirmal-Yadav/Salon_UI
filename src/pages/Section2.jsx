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
        At HMX By Brandsalon our mission is to ensure that everyone who visits
        us
        <br />
        {`\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0
          \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0`}
        walks away feeling and looking their best.
      </div>
      <div className="section2-t2-mv">
        At HMX By Brandsalon our mission is to ensure that everyone who visits
        us
        <br />
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
