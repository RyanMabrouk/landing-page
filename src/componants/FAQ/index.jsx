import React from "react";
import Faq from "react-faq-component";

import data from "./faq_data";
import arrow from "../../assets/FAQ/arrow.svg";

const styles = {};
let icon = <img className="arrow" src={arrow} alt="" />;
const config = {
  animate: true,
  tabFocus: true,
  openOnload: 0,
  arrowIcon: icon,
};

export default function FAQ() {
  return (
    <div className="faq_container">
      <h2>Frequently Asked Questions</h2>
      <div>
        <Faq
          data={data}
          styles={styles}
          config={config}
        />
      </div>
    </div>
  );
}
