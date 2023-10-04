import React from "react";
import BtnHeader from "../Courses/BtnHeader";
import data from "./btn_data";

import developer from "../../assets/Bootcamps/developer.svg";
//import numbers from "../../assets/Bootcamps/numbers.svg";
import one from "../../assets/Bootcamps/one.svg";
import two from "../../assets/Bootcamps/two.svg";
import three from "../../assets/Bootcamps/three.svg";

export default function Bootcamps() {
  return (
    <div className="bootcamps_container">
      <h1>Discover Our Bootcamps</h1>
      <BtnHeader
        name="bootcamps"
        sub_title="Unbeatable prices, starting from"
        previous_price="3800"
        price="1699 DT"
        data={data}
        last_btn_index={5}
      />
      <div className="main_content">
        <img src={developer} alt="" />
        <div className="info_container">
          <div className="info">
            <img src={one} alt="" />
            <div>
              <h2>From Week 1 To Week 8</h2>
              <p>
                Master HTML/CSS For 7 Captivating Projects In Your Portfolio.
                Enhance Programming Skills With JavaScript, Algorithms, Data
                Structures For Dynamic Web Applications.
              </p>
            </div>
          </div>
          <div className="info">
            <img src={two} alt="" />
            <div>
              <h2>From Week 9 To Week 16</h2>
              <p>
                Learn React.Js And Sass To Build Modern Web Applications With
                Dynamic Functionality And Stylish Designs.
              </p>
            </div>
          </div>
          <div className="info">
            <img src={three} alt="" />
            <div>
              <h2>From Week 17 To Week 25</h2>
              <p>
                Here We Will Learn Backend Fundamentals, Node.Js Basics,
                Express.Js, RESTful API Design, MongoDB, TypeScript
                Introduction, SQL, OOP Concepts, Clean Architecture Principles,
                Nest.Js Framework.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
