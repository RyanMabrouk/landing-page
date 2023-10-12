import React, { useEffect, useState } from "react";

import card_img from "../assets/_Events/picture.svg";
import Card from "./Events/Card";

export default function MySwiper(props) {
  //Main logic----------------------------
  useEffect(() => {
    const slider = document.querySelector(".slider");
    let isDown = false;
    let startX;
    let scrollLeft;
    //grabbing
    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    //no longer grabbing
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    //scroll
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
    slider.scrollLeft = props.navigation
      ? props.navigation === "right"
        ? scrollLeft + 400
        : "left"
        ? scrollLeft - 400
        : 0
      : 0;
  },[]);
  //------------------------------------------------
  //pagination
  const [slideWidth] = useState(
    props.numberOfSlides !== "auto" ? 100 / props.numberOfSlides : 20
  );
  const data = props.data;
  //Cards/Btns
  let counter = props.numberOfSlides;
  let id = 0;
  const Slides =
    props.type === "card"
      ? data.map((e) => {
          const jsx = (
            <div
              className="slide"
              style={{ "flex-basis": slideWidth + "%" }}
              id={
                counter === props.numberOfSlides
                  ? "slide_" + props.name + String(id)
                  : null
              }
            >
              <Card name={e.name} bg={card_img} content={e.content} />
            </div>
          );
          if (counter === props.numberOfSlides) {
            counter = 1;
            id++;
          } else {
            counter++;
          }
          return jsx;
        })
      : props.btn_data;
  const Bullets =
    props.type === "card"
      ? Slides.filter((e) => e.props.id !== null).map((e, i) => {
          return (
            <a
              href={"#slide_" + props.name + String(i)}
              content=""
              style={{ "flex-basis": slideWidth + "%" }}
            ></a>
          );
        })
      : null;
  //------------------------------------------
  console.log(props.navigation);
  return (
    <section
      class={
        props.type === "card"
          ? "my_swiper_container"
          : "my_swiper_container btn_container"
      }
    >
      <div class="slider_wrapper">
        <div
          scrollLeft
          class="slider"
          onChange={props.onChange ? props.onChange : null}
        >
          {Slides}
        </div>
        <div class="slider_nav">{Bullets?.length > 1 ? Bullets : null}</div>
      </div>
    </section>
  );
}
