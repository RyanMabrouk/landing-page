import React, { useState } from "react";
import EventSwiper from "../Events/EventsSwiper";
import Radio from "./Radio";

export default function Courses() {
  let [checked, setchecked] = useState(null);
  function handleChange(event) {
    setchecked(event.target.id);
    console.log(event.target.id);
  }
  return (
    <EventSwiper
      name="Courses"
      extraHtml={
        <div className="courses">
          <div className="sub_title">
            Unbeatable prices, starting from
            <del className="previous_price"> 1299 DT </del>
            <span className="price"> 799 DT </span>
          </div>
          <div className="btn_container" onChange={handleChange}>
            <Radio
              checked={checked === "radio1" ? true : false}
              text="Ux Ui Design"
              id="radio1"
              name="Courses"
            />
            <Radio
              checked={checked === "radio2" ? true : false}
              text="Soft Skills"
              id="radio2"
              name="Courses"
            />
            <Radio
              checked={checked === "radio3" ? true : false}
              text="Back End"
              id="radio3"
              name="Courses"
            />
            <Radio
              checked={checked === "radio4" ? true : false}
              text="Languages"
              id="radio4"
              name="Courses"
            />
            <Radio
              checked={checked === "radio5" ? true : false}
              text="Front End"
              id="radio5"
              name="Courses"
            />
          </div>
        </div>
      }
    />
  );
}
