import React from "react";

import logo from "../../assets/NavBar/logo.svg";
import flag from "../../assets/NavBar/flag.svg";
import vector from "../../assets/NavBar/Vector.svg";
import menu from "../../assets/NavBar/menu.svg";

import NavBtn from "./NavBtn";

export default function NavBar() {
  return (
    <div className="navBar">
      <img src={logo} alt="" />
      <div className="navMenu">
        <strong>
          <NavBtn name="Home" />
        </strong>
        <NavBtn name="Courses" />
        <NavBtn name="Bootcamps" />
        <NavBtn name="About" />
        <NavBtn name="Contact" />
      </div>
      <div className="navFlag">
        <img className="flag" src={flag} alt="" />
        <p>Eng</p>
        <img className="vector" src={vector} alt="" />
        <button className="container">Sign up</button>
      </div>
      <img className="menu" src={menu} alt="" />
    </div>
  );
}
