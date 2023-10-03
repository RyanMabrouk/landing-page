import React from "react";
import EventElement from "./EventElement";

import picture from "../../assets/_Events/picture.svg";
import arrow_right from "../../assets/_Events/arrow_right.svg";
import arrow_left from "../../assets/_Events/arrow_left.svg";
import point from "../../assets/_Events/point.svg";
import point_light from "../../assets/_Events/point_light.svg";


export default function Events(props) {
  return (
    <div className="events">
      <h1>{props.name}</h1>
      {props.extraHtml ? <div>{props.extraHtml}</div> : null}
      <div className="elements">
        <EventElement
          name="Front End Web Development course"
          bg={picture}
          content="previous knowledge of the Html , Laptop , good level in English"
        />
        <EventElement
          name="Front End Web Development course"
          bg={picture}
          content="previous knowledge of the Html , Laptop , good level in English"
        />
        <EventElement
          name="Front End Web Development course"
          bg={picture}
          content="previous knowledge of the Html , Laptop , good level in English"
        />
        <EventElement
          name="Front End Web Development course"
          bg={picture}
          content="previous knowledge of the Html , Laptop , good level in English"
        />
      </div>
      <div className="points_btn_container">
        <div className="points">
          <img src={point_light} alt="" />
          <img src={point} alt="" />
          <img src={point_light} alt="" />
          <img src={point_light} alt="" />
        </div>
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
