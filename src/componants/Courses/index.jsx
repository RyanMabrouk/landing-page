import React, { useState } from "react";
import CardsSwiper from "../Events/CardsSwiper";
import BtnSwiper from "./BtnSwiper";

import data from "../events_data";
import btn_data from "../btn_data";

export default function Courses() {
  const [selected, setSelected] = useState("");
  let filtered_data = [];
  switch (selected) {
    case "radio0":
      filtered_data = data.filter((e) => e.categorie === "ui");
      break;
    case "radio1":
      filtered_data = data.filter((e) => e.categorie === "softskills");
      break;
    case "radio2":
      filtered_data = data.filter((e) => e.categorie === "languages");
      break;
    case "radio3":
      filtered_data = data.filter((e) => e.categorie === "backend");
      break;
    case "radio4":
      filtered_data = data.filter((e) => e.categorie === "frontend");
      break;
    default:
      filtered_data = data;
      break;
  }
  return (
    <CardsSwiper
      name="Courses"
      data={filtered_data}
      extraHtml={
        <BtnSwiper
          name="courses"
          previous_price="1299"
          price="799DT"
          sub_title="Unbeatable prices, starting from"
          data={btn_data}
          last_btn_index={0}
          initialSlide={2}
          selected={setSelected}
        />
      }
    />
  );
}
