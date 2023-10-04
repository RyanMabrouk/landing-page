// import Swiper core and required modules
import React from "react";
import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function CustomSwiper(props) {
  return (
    <div className="cards_container">
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={35}
        slidesPerView={'auto'}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {props.slides}
        {props.slides}
        {props.slides}
      </Swiper>
    </div>
  );
}
