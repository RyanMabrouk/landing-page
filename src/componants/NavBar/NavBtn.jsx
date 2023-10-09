import React from "react";

export default function NavBtn(props) {
  return (
    <div className="navBtn">
      <a id={props.name} href={props.href}>{props.name}</a>
    </div>
  );
}