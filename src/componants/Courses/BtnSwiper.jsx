import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";

import Radio from "./Radio";
import Slider from "../CustomSwiper";

export default function BtnSwiper(props) {
  //update the checked element
  let [checked, setchecked] = useState("");
  function handleChange(event) {
    setchecked(event.target.id);
  }
  if (props.selected) {
    props.selected(checked);
  }
  console.log(checked);
  // update the slider
  const Btns_jsx = props.data
    .filter((e) => e.name === props.name)
    .map((e, i) => {
      let id = i + props.last_btn_index;
      return (
        <SwiperSlide key={e} virtualIndex={i} className={"radio" + id}>
          <Radio
            checked={checked.includes(String(id)) ? true : false}
            text={e.text}
            id={"radio" + id}
            name={props.name}
          />
        </SwiperSlide>
      );
    });
  return (
    <div className={props.name}>
      <div className="sub_title">
        <p>{props.sub_title}</p>
        <del className="previous_price"> {props.previous_price} </del>
        <span className="price"> {props.price} </span>
      </div>
      <Slider
        onChange={handleChange}
        slides={Btns_jsx}
        className="btn_container"
        navigation={{
          prevEl: ".btn_swiper_arrow_left",
          nextEl: ".btn_swiper_arrow_right",
        }}
        centeredSlides={true}
        loop={true}
        initialSlide={props.initialSlide}
        breakpoints={{
          0: {
            slidesPerView: "1",
            spaceBetween: 10,
            loop: true,
          },
          440: {
            slidesPerView: props.breakpoints_slidesPerView
              ? props.breakpoints_slidesPerView
              : 2,
            spaceBetween: 10,
            loop: true,
          },
          1900: {
            slidesPerView: "5",
            spaceBetween: 20,
            loop: false,
            allowTouchMove: false,
            onSlideChange: false,
          },
        }}
        onSlideChange={(swiper) =>
          swiper.slides[swiper.activeIndex].className.includes(
            "swiper-slide-next"
          )
            ? setchecked(
                swiper.slides[swiper.activeIndex].className.substring(
                  swiper.slides[swiper.activeIndex].className.indexOf("radio"),
                  swiper.slides[swiper.activeIndex].className.indexOf("radio") +
                    6
                )
              )
            : null
        }
      />
    </div>
  );
}
