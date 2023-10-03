import React from "react";

export default function Radio(props) {
  return (
    <div>
      <label
        className={props.checked? "checked" : ""}
        htmlFor={props.id}
      >
        {props.text}
      </label>
      <input
        type="radio"
        name={props.name}
        id={props.id}
      />
    </div>
  );
}
