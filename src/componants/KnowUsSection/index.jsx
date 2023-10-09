import React from "react";
import YouTube from "react-youtube";

import video_frame from "../../assets/KnowUsSection/vid.svg";

export default function KnowUsSection() {
  const onPlayerReady = (event) => {
    event.target.pauseVideo();
  };
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className="knowUs_grid_container" id="knowUs_grid_container">
      <div className="left_container">
        <div className="yt">
          <YouTube
            className="videoYoutube"
            videoId="oG34F5gxcf8"
            opts={opts}
            onReady={onPlayerReady}
          />
        </div>
        <img src={video_frame} alt="" />
      </div>
      <div className="right_container">
        <h2>Get To Know Us</h2>
        <h1>Softy Education</h1>
        <p className="paragrapgh">
          Unlock your potential and elevate your skills with us.
          <br></br>
          Discover who we are and the transformative learning experiences we
          offer in our captivating video.
        </p>
      </div>
    </div>
  );
}
