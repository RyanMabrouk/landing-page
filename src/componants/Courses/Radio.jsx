import React from "react";
import arrow_right from "../../assets/Swiper/arrow_right.svg";
import arrow_left from "../../assets/Swiper/arrow_left.svg";

export default function Radio(props) {
  return (
    <div className="radio_conatiner">
      <label className="btn_swiper_arrow_left" htmlFor={"arrow_left"}>
        <img src={arrow_left} alt="" />
      </label>
      <input
        id={"arrow_left"}
        type="button"
        onClick={() => {
          props.clicked("left");
        }}
      />
      {/*-------------------------------------------*/}
      <div className="radio">
        <label
          className={props.checked ? "checked" : props.id}
          htmlFor={props.id}
        >
          {props.text}
        </label>
        <input type="radio" name={props.name} id={props.id} />
      </div>

      {/*-------------------------------------------*/}
      <label className="btn_swiper_arrow_right" htmlFor={"arrow_right"}>
        <img src={arrow_right} alt="" />
      </label>
      <input
        id={"arrow_right"}
        type="button"
        onClick={() => {
          props.clicked("right");
        }}
      />
    </div>
  );
}
