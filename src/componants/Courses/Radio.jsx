import React from "react";

import arrow_right from "../../assets/Swiper/arrow_right.svg";
import arrow_left from "../../assets/Swiper/arrow_left.svg";

export default function Radio(props) {
  return (
    <div>
      <img className="btn_swiper_arrow_left" src={arrow_left} alt="" />
      <label className={props.checked ? props.id+" checked" : props.id} htmlFor={props.id}>
        {props.text}
      </label>
      <input type="radio" name={props.name} id={props.id} />
      <img className="btn_swiper_arrow_right" src={arrow_right} alt="" />
    </div>
  );
}
