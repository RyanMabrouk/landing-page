import React from "react";

export default function Adv(props) {
  return (
    <div className="adv_container">
      <img src={props.img} alt="" />
      <div >
        <strong> {props.title} </strong>
        <p className="paragraph">{props.paragraph}</p>
      </div>
    </div>
  );
}
