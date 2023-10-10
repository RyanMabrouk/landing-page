import React from "react";
import { SwiperSlide } from "swiper/react";

import CustomSwiper from "../CustomSwiper";
import Card from "./Card";
import data from "../events_data";

import picture from "../../assets/_Events/picture.svg";
import arrow_right from "../../assets/_Events/arrow_right.svg";
import arrow_left from "../../assets/_Events/arrow_left.svg";
//import point from "../../assets/_Events/point.svg";
//import point_light from "../../assets/_Events/point_light.svg";

export default function Events(props) {
  let cards_data = props.data ? props.data : data;
  const Cards = cards_data.map((e) => (
    <SwiperSlide>
      <Card name={e.name} bg={picture} content={e.content} />
    </SwiperSlide>
  ));
  return (
    <div className="events" id={props.name}>
      <h1>{props.name}</h1>
      {/*.  option to add extra html */}
      {props.extraHtml ? <div>{props.extraHtml}</div> : null}
      {/* cards swiper */}
      <div>
        <CustomSwiper
          slides={[Cards]}
          className="cards_container"
          pagination={true}
          navigation={{
            prevEl: ".arrow_left",
            nextEl: ".arrow_right",
          }}
          breakpoints={{
            0:{
              slidesPerView: "1",
              spaceBetween: 350,
            },
            585: {
              slidesPerView: "auto",
              spaceBetween: 35,
            },
            1400: {
              slidesPerView: "3",
              spaceBetween: 35,
            },
            1915: {
              slidesPerView: "4",
              spaceBetween: 35,
            },
            2420: {
              slidesPerView: "5",
              spaceBetween: 35,
            },
          }}
        />
      </div>

      <button>Get In Touch</button>
      <div className="btn_arrows_container">
        <label htmlFor="arrow_left">
          <img src={arrow_left} alt="" />{" "}
          <input type="button" id="arrow_left" className="arrow_left" />
        </label>
        {/*----------------------------------- */}
        <label htmlFor="arrow_right">
          <img src={arrow_right} alt="" />
        </label>
        <input type="button" id="arrow_right" className="arrow_right" />
      </div>
    </div>
  );
}
