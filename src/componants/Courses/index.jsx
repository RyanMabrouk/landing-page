import React from "react";
import CardsSwiper from "../Events/CardsSwiper";
import BtnSwiper from "./BtnSwiper";
import data from "../btn_data";

export default function Courses() {
  return (
    <CardsSwiper
      name="Courses"
      extraHtml={
        <BtnSwiper
          name="courses"
          previous_price="1299"
          price="799DT"
          sub_title="Unbeatable prices, starting from"
          data={data}
          last_btn_index={0}
          initialSlide={2}
        />
      }
    />
  );
}
