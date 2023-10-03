import React from "react";
import devs from "../../assets/Main/devs.svg";

export default function Main() {
  return (
    <main className="main">
      <div className="leftDiv">
        <div>
          <p className="blue">Where</p>
          <p className="yellow">Programing</p>
          <p className="blue">Dreams Come True</p>
        </div>
        <p className="paragrapgh">
          Discover an interactive educational experience that equips<br></br>
          you for the future job landscape.
        </p>
        <button>Discover Courses</button>
      </div>
      <div className="rightDiv">
      </div>
      <img src={devs} alt="" />
    </main>
  );
}
