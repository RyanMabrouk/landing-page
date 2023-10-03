import React from "react";

export default function NavBtn(props) {
  return (
    <div className="navBtn">
      <label htmlFor="btn">{props.name}</label>
      <input type="button" id="btn"/>
    </div>
  );
}