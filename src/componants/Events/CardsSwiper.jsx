import React from "react";

import MySwiper from "../MySwiper";
import data from "../events_data";

import arrow_right from "../../assets/_Events/arrow_right.svg";
import arrow_left from "../../assets/_Events/arrow_left.svg";

export default function Events(props) {
  const cards_data = props.data ? props.data : data;
  return (
    <div className="events" id={props.name}>
      <h1>{props.name}</h1>
      {/*.  option to add extra html */}
      {props.extraHtml ? <div>{props.extraHtml}</div> : null}
      {/* cards swiper */}
      <>
        <MySwiper numberOfSlides={4} type="card" data={cards_data} name={props.name} />
      </>

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
