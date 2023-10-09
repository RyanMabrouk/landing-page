import React from "react";
import BtnSwiper from "../Courses/BtnSwiper";
import data from "./bootcamps_data";
import btn_data from "../btn_data";

import backend from "../../assets/Bootcamps/developer.webp";
import frontend from "../../assets/Bootcamps/frontend.webp";
import fullstack from "../../assets/Bootcamps/backend.webp";

//import numbers from "../../assets/Bootcamps/numbers.svg";

export default function Bootcamps() {
  const [selected, setSelected] = React.useState("");
  console.log(selected + "was selected");
  let info_array = [];
  let img = null;
  if (selected) {
    info_array =
      selected === "radio5"
        ? data.fullstack
        : selected === "radio6"
        ? data.frontend
        : data.backend;
  } else {
    info_array = data.backend;
    console.log(info_array);
  }
  const Infos = info_array.map((e, i) => {
    return (
      <div className="info">
        <img src={e.img} alt="" />
        <div>
          <h2>{e.title}</h2>
          <p>{e.paragraph}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="bootcamps_container" id="bootcamps_container">
      <h1>Discover Our Bootcamps</h1>
      <BtnSwiper
        name="bootcamps"
        sub_title="Unbeatable prices, starting from"
        previous_price="3800"
        price="1699 DT"
        data={btn_data}
        last_btn_index={5}
        initialSlide={1}
        selected={setSelected}
      />
      <div className="main_content">
        <img
          src={
            selected === "radio5"
              ? fullstack
              : selected === "radio6"
              ? frontend
              : backend
          }
          alt=""
        />
        <div className="info_container">{Infos}</div>
      </div>
    </div>
  );
}
