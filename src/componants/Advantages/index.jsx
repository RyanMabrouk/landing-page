import React from "react";
import Adv from "./Adv";

import thumbs_down from "../../assets/Advantages/thumbs_up.svg";
import thumbs_up from "../../assets/Advantages/thumbs_down.svg";
import check from "../../assets/Advantages/check.svg";
import x_img from "../../assets/Advantages/x.svg";

export default function Advantages() {
  return (
    <div className="advantages_grid_container">
      <img className="thumbs_up" src={thumbs_up} alt="" />
      <div className="right_container">
        <h1>Softy Education</h1>
        <div>
          <Adv
            img={check}
            title="Experienced Trainer-Developers
"
            paragraph="Learn From Industry Professionals Actively Working As Developers, G
            aining Valuable Insights From Their Practical Experience."
          />
          <Adv
            img={check}
            title="Real World Projects
"
            paragraph="Gain Practical Skills Through R
            eal-World Projects Using Industry Tools And Technologies For Career Success.

"
          />
          <Adv
            img={check}
            title="Hands-On Assignments
"
            paragraph="Apply Learned Concepts Through Practical Assignments, Gaining Valuab
            le Practice And Boosting Your Confidence In Your Abilities."
          />
          <Adv
            img={check}
            title="24/7 Discord Support For Students"
            paragraph="
            Connect With Peers, Exchange Ideas, And Seek Guidance In Our Vibrant 
            Discord Community."
          />
        </div>
      </div>
      <hr />
      <div className="left_container">
        <h1>Others</h1>
        <div>
          <Adv
            img={x_img}
            title="Incompetent Trainers
"
            paragraph="Difficulty In Understanding The Practical 
            Application Of Concepts Learned In Theory."
          />
          <Adv
            img={x_img}
            title="Insufficient Practice
"
            paragraph="Limited Exposure To Real-World Project
             Scenarios And Challenges.

"
          />
          <Adv
            img={x_img}
            title="Outdated Courses"
            paragraph="Waste Your Time Learning Outdated Topics That Employers Don't
             Care About"
          />
          <Adv
            img={x_img}
            title="Difficulty In Getting Timely
           Assistance And Guidance From Trainers."
            paragraph="Feeling Isolated And Lacking A 
           Supportive Learning Community."
          />
        </div>
      </div>
      <img className="thumbs_down" src={thumbs_down} alt="" />
    </div>
  );
}
