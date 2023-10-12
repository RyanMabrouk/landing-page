import React, { useEffect } from "react";
import img1 from "../assets/MySlider/img1.jpeg";
import img2 from "../assets/MySlider/img2.jpeg";
import img3 from "../assets/MySlider/img3.avif";

import card_img from "../assets/_Events/picture.svg";
import Card from "./Events/Card";
import data from "./events_data";

export default function MySwiper() {
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
      console.log(walk);
    });
  });
  //------------------------------------------------
  //test jsx
  const test_slides = (
    <>
      <img class="item" draggable="true" id="slide_1" src={img1} alt="" />
      <img class="item" draggable="true" id="slide_2" src={img2} alt="" />
      <img class="item" draggable="true" id="slide_3" src={img3} alt="" />
    </>
  );
  const test_bullets = (
    <>
      <a href="#slide_1" content=""></a>
      <a href="#slide_2" content=""></a>
      <a href="#slide_3" content=""></a>
    </>
  );
  //importing data
  const Slides = data.map((e, i) => (
    <div id={"slide_" + String(i)}>
      <Card name={e.name} bg={card_img} content={e.content} />
    </div>
  ));
  const Bullets = data.map((e, i) => (
    <a href={"#slide_" + String(i)} content=""></a>
  ));
  return (
    <section class="my_swiper_container">
      <div class="slider_wrapper">
        <div class="slider">
          {Slides}
        </div>
        <div class="slider_nav">{Bullets}</div>
      </div>
    </section>
  );
}
