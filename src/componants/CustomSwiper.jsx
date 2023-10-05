// import Swiper core and required modules
import React, { useState } from "react";
import { Pagination, Navigation, Virtual } from "swiper/modules";
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function CustomSwiper(props) {

  return (
    <div
      className={props.className}
      onChange={props.onChange ? props.onChange : null}
    >
      <Swiper
        // install Swiper modules
        modules={[Virtual, Pagination, Navigation]}
        spaceBetween={35}
        slidesPerView={1}
        centeredSlides={props.centeredSlides}
        initialSlide={props.initialSlide?props.initialSlide:0}        //virtual
        loop={props.loop}
        navigation={props.navigation}
        pagination={props.pagination ? { clickable: true } : false}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={props.breakpoints}
      >
        {props.slides}
      </Swiper>
    </div>
  );
}
