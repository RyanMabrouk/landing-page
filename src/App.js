import React from "react";
import Main from "./componants/Main";
import NavBar from "./componants/NavBar";
import Events from "./componants/Events";
import KnowUsSection from "./componants/KnowUsSection"
import Courses from "./componants/Courses"
import Advantages from "./componants/Advantages"

export default function App() {
  return (
    <div className="container">
      <NavBar />
      <Main />
      <Events/>
      <KnowUsSection />
      <Courses />
      <Advantages />

    </div>
  );
}
