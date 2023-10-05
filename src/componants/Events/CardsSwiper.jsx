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
  const Cards = data.map((e) => (
    <SwiperSlide>
      <Card name={e.name} bg={picture} content={e.content} />
    </SwiperSlide>
  ));
  return (
    <div className="events">
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
            prevEl: ".prev",
            nextEl: ".next",
          }}
          breakpoints={{
            320: {
              slidesPerView: 'auto',
              spaceBetween: 35,
            },
            1850: {
              slidesPerView: '4',
              spaceBetween: 35,
            },
            2200: {
              slidesPerView: '5',
              spaceBetween: 35,
            }
          }}
        />
      </div>

      <div className="points_btn_container">
        {/*       <div className="points">
          <img src={point_light} alt="" />
          <img src={point} alt="" />
          <img src={point_light} alt="" />
          <img src={point_light} alt="" />
  </div>*/}
        <button>Get In Touch</button>
      </div>
      <div className="btn_arrows_container">
        <label htmlFor="arrow_left">
          <img src={arrow_left} alt="" />
        </label>
        <input type="button" id="arrow_left" />
        <label htmlFor="arrow_right">
          <img src={arrow_right} alt="" />
        </label>
        <input type="button" id="arrow_right" />
      </div>
    </div>
  );
}
