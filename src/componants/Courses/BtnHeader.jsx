import React, { useState } from "react";
import Radio from "./Radio";
import data from "../Bootcamps/btn_data";

export default function BtnHeader(props) {
  let [checked, setchecked] = useState("");
  function handleChange(event) {
    setchecked(event.target.id);
    console.log(event.target.id);
  }
  const Btns_jsx = props.data
    .filter((e) => e.name === props.name)
    .map((e, i, arr) => {
      let id = i + props.last_btn_index;
      return (
        <Radio
          checked={checked.includes(String(id)) ? true : false}
          text={e.text}
          id={"radio" + id}
          name={props.name}
        />
      );
    });

  return (
    <div className={props.name}>
      <div className="sub_title">
        {props.sub_title}
        <del className="previous_price"> {props.previous_price} </del>
        <span className="price"> {props.price} </span>
      </div>
      <div className="btn_container" onChange={handleChange}>
        {Btns_jsx}
      </div>
    </div>
  );
}
