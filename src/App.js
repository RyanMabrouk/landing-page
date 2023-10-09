import React from "react";
import Main from "./componants/Main";
import NavBar from "./componants/NavBar";
import Events from "./componants/Events";
import KnowUsSection from "./componants/KnowUsSection";
import Courses from "./componants/Courses";
import Advantages from "./componants/Advantages";
import Bootcamps from "./componants/Bootcamps";
import FAQ from "./componants/FAQ";
import Reviews from "./componants/Reviews";
import Form from "./componants/Form";
import Map from "./componants/Map";
import Menu from "./componants/Menu";
export default function App() {
  return (
    <div>
      <div className="container">
        <NavBar />
        <Main />
        <Events />
        <KnowUsSection />
        <Courses />
        <Advantages />
        <Bootcamps />
        <Reviews />
        <FAQ />
      </div>
      <Form />
      <div className="container">
        <Map />
      </div>
    </div>
  );
}
