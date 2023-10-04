import React from "react";
import watch from "../../assets/_Events/watch.svg";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.bg} alt="" />
      <div className="card_details">
        <h3>{props.name}</h3>
        <img src={watch} alt="" />
        <div>
          <strong>Prerequisites : </strong>
          {props.content}
        </div>
      </div>
    </div>
  );
}
