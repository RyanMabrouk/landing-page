import React from "react";

import img from "../../assets/_Reviews/profile_img.svg";
import stars from "../../assets/_Reviews/stars.svg";

export default function ReviewCard(props) {
  return (
    <div className="review_container">
      <div className="container_top">
        <img src={img} alt="" />
        <div>
          <p className="name">{props.name}</p>
          <p className="job paragraph">{props.job}</p>
        </div>
      </div>
      <div className="container_middle">
        <img src={stars} alt="" />
        <h3>{props.review}</h3>
      </div>
      <div className="container_bottom paragraph">
        {props.details}
      </div>
    </div>
  );
}
