import React from "react";
import watch from "../../assets/_Events/watch.svg";

export default function EventElement(props) {
  return (
    <div className="element">
      <img src={props.bg} alt="" />
      <div className="element_details">
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
