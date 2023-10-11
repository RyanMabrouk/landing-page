import React, { useState } from "react";

import logo from "../../assets/NavBar/logo.svg";
import flag from "../../assets/NavBar/flag.svg";
import vector from "../../assets/NavBar/Vector.svg";
import menu from "../../assets/NavBar/menu.svg";

import NavBtn from "./NavBtn";
import MenuJSX from "../Menu";

export default function NavBar() {
  const [Menu, setMenu] = useState(false);
  function toggleMenu() {
    console.log("menu click");
    setMenu(!Menu);
    console.log(Menu);
  }
  return (
    <div className="navBar">
      <img src={logo} alt="" />
      <div className="navMenu">
        {/*}<strong>
          <NavBtn name="Home" />
  </strong>{*/}
        <NavBtn name="Courses" href="#Courses" />
        <NavBtn name="Bootcamps" href="#bootcamps_container" />
        <NavBtn name="About" href="#knowUs_grid_container" />
        <NavBtn name="Contact" href="#form_container" />
      </div>
      <div className="navFlag">
        <img className="flag" src={flag} alt="" />
        <p>Eng</p>
        <img className="vector" src={vector} alt="" />
        <button className="container nav_btn">Sign up</button>
      </div>
      <label htmlFor="menu" className="menu_img">
        <img src={menu} alt="" />
      </label>
      <input type="button" id="menu" onClick={toggleMenu} />
      <div className={Menu ? "menu menu_visible" : "menu"}>
        {Menu === true && <MenuJSX />}
      </div>
    </div>
  );
}
