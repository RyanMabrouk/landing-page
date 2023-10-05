import React from "react";
import { SwiperSlide } from "swiper/react";

import data from "./reviews_data.js";
import ReviewCard from "./ReviewCard.jsx";
import CustomSwiper from "../CustomSwiper";

export default function Reviews() {
  const Reviews = data.map((e,i) => {
    return (
      <SwiperSlide  key={e} virtualIndex={i}>
        <ReviewCard key={e.id} {...e} />
      </SwiperSlide>
    );
  });
  return (
    <div className="reviews">
      <h1>
        <span>People Who </span>Trusted Us
      </h1>
      <CustomSwiper
        slides={Reviews}
        className="reviews_container"
        pagination={true}
        centeredSlides={true}
        loop={true}
        initialSlide={2}
        breakpoints={{
          320: {
            slidesPerView: "auto",
            spaceBetween: 20,
          },
          1900: {
            slidesPerView: "3",
            spaceBetween: 20,
            loop: false,
          },
        }}
      />
    </div>
  );
}
