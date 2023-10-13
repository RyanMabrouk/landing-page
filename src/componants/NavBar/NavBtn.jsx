import React, { useState } from "react";

export default function NavBtn(props) {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className={clicked ? "navBtn navBtnClicked" : "navBtn"}
      onClick={() => {
        setClicked(true);
        props.setMenu(false)
      }}
    >
      <a id={props.name} href={props.href}>
        {props.name}
      </a>
    </div>
  );
}
