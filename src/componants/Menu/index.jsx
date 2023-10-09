import React from "react";

import logo from "../../assets/NavBar/logo.svg";
import NavBtn from "../NavBar/NavBtn";
import flag from "../../assets/NavBar/flag.svg";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Menu() {
  return (
    <div className="menu_container">
      <div className="top_container">
        <img src={logo} alt="" />
        <label htmlFor="menu">
          <CloseIcon fontSize="large" />
        </label>
      </div>
      <div className="boottom_container">
        <div className="menu_items">
          <NavBtn name="Courses" href="#Courses" />
          <hr />
          <NavBtn name="Bootcamps" href="#bootcamps_container" />
          <hr />
          <NavBtn name="About" href="#knowUs_grid_container" />
          <hr />
          <NavBtn name="Contact" href="#form_container" />
          <hr />
        </div>
        <div className="menu_flag">
          <img className="flag" src={flag} alt="" />
          <p>Eng</p>
          <ExpandMoreIcon fontSize="large" />
        </div>
        <button className="container">Sign up</button>
      </div>
    </div>
  );
}
