import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";

import Radio from "./Radio";
import Slider from "../CustomSwiper";

export default function BtnSwiper(props) {
  let [checked, setchecked] = useState("");
  function handleChange(event) {
    setchecked(event.target.id);
    if (props.selected) {
      props.selected(event.target.id);
    }
    console.log(event.target.id);
  }
  const Btns_jsx = props.data
    .filter((e) => e.name === props.name)
    .map((e, i) => {
      let id = i + props.last_btn_index;
      return (
        <SwiperSlide key={e} virtualIndex={i}>
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
        {props.sub_title}
        <del className="previous_price"> {props.previous_price} </del>
        <span className="price"> {props.price} </span>
      </div>
      <Slider
        onChange={handleChange}
        slides={Btns_jsx}
        className="btn_container"
        navigation={true}
        centeredSlides={true}
        loop={true}
        initialSlide={props.initialSlide}
        breakpoints={{
          1900: {
            slidesPerView: "5",
            spaceBetween: 20,
            loop: false,
          },
        }}
      />
    </div>
  );
}
