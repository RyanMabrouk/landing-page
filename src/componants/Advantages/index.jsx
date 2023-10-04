import React from "react";
import Adv from "./Adv";
import data from "./advantages_data";

import thumbs_down from "../../assets/Advantages/thumbs_up.svg";
import thumbs_up from "../../assets/Advantages/thumbs_down.svg";
import check from "../../assets/Advantages/check.svg";
import x_img from "../../assets/Advantages/x.svg";

export default function Advantages() {
  const advantages = data.advantages.map((e) => (
    <Adv title={e.title} paragraph={e.paragraph} img={check} />
  ));
  const others = data.others.map((e) => (
    <Adv title={e.title} paragraph={e.paragraph} img={x_img} />
  ));
  return (
    <div className="advantages_grid_container">
      <img className="thumbs_up" src={thumbs_up} alt="" />
      <div className="right_container">
        <h1>Softy Education</h1>
        <div>{advantages}</div>
      </div>
      <hr />
      <div className="left_container">
        <h1>Others</h1>
        <div>{others}</div>
      </div>
      <img className="thumbs_down" src={thumbs_down} alt="" />
    </div>
  );
}
