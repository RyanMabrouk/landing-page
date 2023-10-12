import React, { useState } from "react";
import MySwiper from "../MySwiper";
import Radio from "./Radio";

export default function BtnSwiper(props) {
  const [arrowClicked, setArrowClicked] = useState("");
  //update the checked element
  let [checked, setchecked] = useState("");
  function handleChange(event) {
    setchecked(event.target.id);
  }
  if (props.selected) {
    props.selected(checked);
  }
  console.log(checked);
  // update the slider
  const Btns_jsx = props.data
    .filter((e) => e.name === props.name)
    .map((e, i) => {
      let id = i + props.last_btn_index;
      return (
        <div key={e} className={"btn_slide radio" + String(id)}>
          <Radio
            checked={checked.includes(String(id)) ? true : false}
            text={e.text}
            id={"radio" + id}
            name={props.name}
            clicked={setArrowClicked}
          />
        </div>
      );
    });
  return (
    <div className={props.name}>
      <div className="sub_title">
        <p>{props.sub_title}</p>
        <del className="previous_price"> {props.previous_price} </del>
        <span className="price"> {props.price} </span>
      </div>
      <MySwiper
        onChange={handleChange}
        btn_data={Btns_jsx}
        numberOfSlides={5}
        navigation={arrowClicked}
        /*onSlideChange={(swiper) =>
          swiper.slides[swiper.activeIndex].className.includes(
            "swiper-slide-next"
          )
            ? setchecked(
                swiper.slides[swiper.activeIndex].className.substring(
                  swiper.slides[swiper.activeIndex].className.indexOf("radio"),
                  swiper.slides[swiper.activeIndex].className.indexOf("radio") +
                    6
                )
              )
            : null
        }*/
      />
    </div>
  );
}
