import React from "react";

import paper_plane from "../../assets/Map/paper_plane.svg";
import media from "../../assets/Map/social_media.svg";
import pin from "../../assets/Map/pin.png";
import phone from "../../assets/Map/Phone.png";
import message from "../../assets/Map/Message.png";

export default function Map() {
  return (
    <div className="map_container">
      <div className="left_container">
        <iframe
          width="425"
          height="350"
          src="https://www.openstreetmap.org/export/embed.html?bbox=10.604558587074282%2C35.83264496457421%2C10.611446499824526%2C35.83625463278986&amp;layer=mapnik&amp;marker=35.83444981920979%2C10.608002543449402"
        ></iframe>
      </div>
      <div className="right_container">
        <div className="main_info">
          <div>
            <h1>we’d love to hear from you !</h1>
          </div>
          <div className="main_info_bottom">
            <div>
              <img src={phone} alt="" />
              <p className="paragraph">(+216) 29 076 351 &#160; (+216) 29 076 354</p>
            </div>
            <div>
              <img src={message} alt="" />
              <p className="paragraph">contact@softyeducation.com</p>
            </div>
            <div>
              <img src={pin} alt="" />
              <p className="paragraph">Softy Education Location</p>
            </div>
            <img src={media} alt="" />
          </div>
        </div>
        <div>
          <img className="paper_plane" src={paper_plane} alt="" />
        </div>
      </div>
    </div>
  );
}
